import {fetchUtils , Admin, Resource } from 'react-admin';
import jsonServerProvider  from 'ra-data-simple-rest';
import { useEffect, useState } from 'react';
import axios from 'axios'; // Import Axios or any other HTTP library you prefer

import { editCourse, createCourse, listCourse } from './Products';
import AdminPanel from './AdminPanel';
import { listUsers, editUser, createUser } from './Users';

function AdminController() {
  const [jwtToken, setJwtToken] = useState('');


  useEffect(() => {
    // Retrieve the JWT token from the desired source (e.g., localStorage)
    const token = localStorage.getItem('jwtToken');
    console.log(token)
    setJwtToken(token);
  }, []);

  const httpClient = (url, options = {}) => {
    options.headers = {
      Authorization: `Bearer ${jwtToken}`,
      
      ...options.headers,
    };
    options.headers['Access-Control-Expose-Headers'] = 'Content-Range';
    return axios(url, options);
  };

const fetchJson = (url, options = {}) => {
    options.user = {
        authenticated: true,
        // use the token from local storage
        token: `Bearer ${localStorage.getItem('jwtToken')}`
    };
    options.headers.delete('Range');
    return fetchUtils.fetchJson(url, options).then(response => {
      // Remove the Content-Range header from the response headers
      delete response.headers['Content-Range'];
      return response;
    });;
};


    

  const dataProvider = jsonServerProvider ('http://localhost:8080/api', fetchJson);

  const transformData = (data) => {
    return data.map(item => {
      return { ...item, id: item.courseID };
    });
  };

  const dataProviderWithTransform = {
    ...dataProvider,
    getList: (resource, params) =>
      dataProvider.getList(resource, params).then(response => {
        return {
          ...response,
          data: transformData(response.data)
        };
      })
  };

  console.log(dataProvider)
  return (
    <div>
      <Admin  dashboard={AdminPanel} dataProvider={dataProviderWithTransform}>
        <Resource name="course" options={{ label: 'Courses' }} list={listCourse} edit={editCourse} create={createCourse} />
        <Resource name="blog" options={{ label: 'blog' }} list={listCourse} edit={editCourse} create={createCourse} />
        {/* Add other resources */}
      </Admin>
    </div>
  );
}

export default AdminController;
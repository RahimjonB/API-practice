const apiUrl = 'https://6264fc9e94374a2c506bde51.mockapi.io/tasks';

axios.get(apiUrl)
  .then(response => {
    const data = response.data;
    console.log('GET response:', data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

const newTask = {
  name: 'New Task',
  points: 100
};

axios.post(apiUrl, newTask)
  .then(response => {
    const createdTask = response.data;
    console.log('POST response:', createdTask);
  })
  .catch(error => {
    console.error('Error creating task:', error);
  });


const taskIdToUpdate = 1; 
const updatedTask = {
  name: 'Updated Task',
  points: 200
};

axios.put(`${apiUrl}/${taskIdToUpdate}`, updatedTask)
  .then(response => {
    const updatedTaskData = response.data;
    console.log('PUT response:', updatedTaskData);
  })
  .catch(error => {
    console.error('Error updating task:', error);
  });

const taskIdToDelete = 1;

axios.delete(`${apiUrl}/${taskIdToDelete}`)
  .then(response => {
    console.log('DELETE response:', response.data);
  })
  .catch(error => {
    console.error('Error deleting task:', error);
  });

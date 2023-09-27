<template>
    <div>
      <h1>Members Coming to Party</h1><hr><br>
  
      <!-- Button to open form to add member -->
      <button @click="showForm">Add New Member</button><br><br>
  
      <!-- Popup form -->
      <div class="popup" v-show="isFormVisible">
        <form @submit.prevent="addMember">
  
          <label for="memberName">Member Name:</label>
          <input v-model="memberName" type="text" id="memberName" required /> <br /><br />
         
          <label for="noOfMembers">Number of Members:</label>
  
          <input
            v-model.number="noOfMembers"
            type="number"
            id="noOfMembers"
            required
          /><br /><br />
  
          <button type="submit">Add Member</button>
          <button @click="hideForm">Close</button>
        </form>
      </div>
  
      <!-- show data in table -->
      <table>
        <thead>
          <tr>
            <th>Member Name</th>
            <th>Number of Members</th>
          </tr>
        </thead>
  
        <!-- used for loop to show all objects data in array -->
        <tbody>
          <tr v-for="(member, index) in membersArray" :key="index">
            <td>{{ member.memberName }}</td>
            <td>{{ member.noOfMembers }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
    
    <script setup lang="ts">
  import { ref } from "vue";
  
  // Vars to fetch input data
  const memberName = ref<string>("");
  const noOfMembers = ref<number>(0);
  // Array to store all info of users object
  const membersArray = ref<{ memberName: string; noOfMembers: number }[]>([]);
  // Var for show hide form
  const isFormVisible = ref<boolean>(false);
  
  // function to submit input values of form in object
  const addMember = () => {
      // create object of data submitted
      const formData = {
        memberName: memberName.value,
        noOfMembers: noOfMembers.value,
      };
      // push object to array
      membersArray.value.push(formData);
      // on submit clear written value in input box
      memberName.value = "";
      noOfMembers.value = 0;
      // close form on submit
      hideForm();
  };
  
  // open form on click button
  const showForm = () => {
    isFormVisible.value = true;
  };

//   close form
  const hideForm = () => {
    isFormVisible.value = false;
  };
  </script>
    














































    <style scoped>
    button{
      margin: 10px;
    }
  table {
    border-collapse: collapse;
    width: 30%;
  }
  
  td {
    border: 1px solid #000;
    padding: 8px;
    text-align: center;
  }
  .popup {
    position: fixed; /* Use 'fixed' to keep the popup centered even when scrolling */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 20px;
    border: 1px solid #ccc;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
  
  .popup.show {
    display: block;
  }
  </style>
    

<template>
  <hr />
  <div>
    <!-- Show form on click -->
    <!-- <button @click="showForm">Add a new member</button> -->
    <h4>Form from child</h4>
    <h4>data{{ varOurBox }}</h4>
    <!-- Form  -->
    <div v-if="varOurBox">
      <h2>Submit Form</h2>
      
      <form>
        <div>
          <label for="memberName">Member Name:</label>
          <input type="text" id="memberName" v-model="memberName" />
        </div>
        <div>
          <label for="noOfMembers">No. Of Members:</label>
          <input type="email" id="noOfMembers" v-model="noOfMembers" />
        </div>
        <button @click="submitForm" type="submit">Submit</button>
      </form>
    </div>

    <!-- Show data in form -->
    <h2>Submitted Data</h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>No. of members</th>
        </tr>
      </thead>
      <tbody>
        <!-- For loop to show all members in array -->
        <tr v-for="(person, index) in membersArray" :key="index">
          <td>{{ person.memberName }}</td>
          <td>{{ person.noOfMembers }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script setup lang="ts">
import { ref, inject } from "vue";

// write props to get box data


// input data store variable
const memberName = ref("");
const noOfMembers = ref("");
// variable to show/hide form
const showFormVariable = ref(false);
// array to store all objects of form submitted data
const membersArray = ref([]);

// function when click on form submit button
const submitForm = () => {
  // create object of filled data
  const formData = {
    memberName: memberName.value,
    noOfMembers: noOfMembers.value,
  };
  // push object to array
  membersArray.value.push(formData);

  // Clear the input fields after submission
  memberName.value = "";
  noOfMembers.value = "";

  // hide form
  showFormVariable.value = false;
};

// function for show form
const showForm = () => {
  showFormVariable.value = true;
};

const varOurBox = inject('sendVarBoxName')
</script> 


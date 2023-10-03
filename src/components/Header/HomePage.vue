<template>
  <div class="container">
    <h1 class="title">Welcome to Home Page</h1>
    <hr />

    <!-- Link to Vue.js notes -->
    <div class="link-container">
      <a
        href="https://docs.google.com/document/u/2/d/1iZ0ZIjrOE-RoKw4-x8WWCT02pphRY1C_XAQR-r1X93A/edit"
        class="external-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Click here to open Vue.js notes
      </a>
    </div>

    <!-- Link to Git notes -->
    <div class="link-container">
      <a
        href="https://docs.google.com/document/u/2/d/15G-b7gFFqE5wN_uSueRT1MRUGtxntmOrWwv71WUxkiU/edit"
        class="external-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Click here to open Git notes
      </a>
    </div>

    <hr />

    <!-- Buttons for assignments with router links -->
    <div class="button-container">
      <router-link to="/calc" class="router-link">
        Assignment 1: Calculator
      </router-link>
    </div>
    <div class="button-container">
      <router-link to="/form-table" class="router-link">
        Assignment 2: Save Form Data in Table
      </router-link>
    </div>
    <div class="button-container">
      <router-link to="/props" class="router-link">
        Props : Parent to Child send data
      </router-link>
    </div>
    <div class="button-container">
      <router-link to="/emits" class="router-link">
        Emits : Child to Parent send data
      </router-link>
    </div>
    <div class="button-container">
      <router-link to="/proinject" class="router-link">
        Provide & Inject : Sibling components send data
      </router-link>
    </div>
    <div class="button-container">
    <router-link to="/slots" class="router-link"> Slots </router-link>
  </div>
  </div>
 
</template>
/props'
<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
}

.link-container {
  margin: 10px 0;
}

.external-link {
  text-decoration: none;
  color: #0078d4;
  font-weight: bold;
}

.external-link:hover {
  text-decoration: underline;
}

.button-container {
  margin: 20px 0;
}

.router-link {
  display: inline-block;
  padding: 10px 20px;
  background-color: #0078d4;
  color: #fff;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.router-link:hover {
  background-color: #005a9e;
}
</style>

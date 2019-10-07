import Vue from 'vue';
  // console.log(Vue)

document.addEventListener('DOMContentLoaded', () => {
  new Vue ({
    el: "#app", //el: is the element that vue is gonna handle
    data: {
      todos: [
        {name: "Buy groceries", priority: 2},
        {name: "Clean bedroom", priority: 2},
        {name: "Update passport", priority: 1},
        {name: "Reply emails", priority: 2},
        {name: "Make a dentist appointment", priority: 1}
      ],
      priority: '',
      todoDescription: ''
    },//Default status(priority/todoDescription) + preexisting data -estatus inicial de la app - contiene data preexistente
    methods:{
      saveTodo: function (){
        this.todos.push({
          name: this.todoDescription,
          priority: this.priority
        });
        this.todoDescription = "";// To clean inputs after saving
      }
    }
  });
})

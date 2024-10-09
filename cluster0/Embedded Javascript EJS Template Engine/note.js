// EJS (EJS full form :- Embedded Javascript) is a simple templating language that lets you generate HTML markup with plain javascript 

// 1. Fast Compilation and Rendering
// 2. Simple template tags : <% %>
// 3. Custom delimiters (use[? ?]instead of <% %>)
// 4. Sub-template includes
// 5. Ships with CLI
// 6. Both server JS and browser support
// 7. Static caching of intermediate Javascript
// 8. Static caching of templates
// 9. Compiles with the Express view system

// Include Template
// jodi chai same jinish barbar code na kore ekta separate jaygay rekhe barbar oita re call kore output ante , kichu ta react reuseable component er moto tahole include template technique use korte hobe 
// kivabe use korbo ?
// views folder er moddhe include nam e folder khulbo (folder nam jekono ekta dileii hobe)
// tarpor oikhane ekta ejs file khule sekhane html code or jei kono korte hobe
// then jei ejs file er jekhane use korte chai sekhane <%- include(path) %> evabe dile oi nirdishto jaygay aisha porbo react component er motoii concept ta . just syntax alada...


// Displaying Data - You may display data that is paassed to your views by wrapping the variable in <%= %>
// Example : <%= firstName %>

// Comment - EJS also allows you to define comments in your views. However, unline HTML comments, EJS comments are not included in the HTML returned by your application.
// Example : <%# This Comment will  not be present in the rendered HTML %>



// <!-- Displaying Variable Data -->
//     <%= name %>

// <!-- Creating Variable -->
//     <% var i = 10; %>
//     <!-- Display i -->
//     <%= i %>

// <!-- Comment -->
//     <%# Comment will not be present in the rendered HTML or DOM . tar mane dom er moddheo comment create hoy na %>


// if
// If evaluates a variable, and if that variable is "true"

// <!-- if -->
//     <% if(name==='Sadia') { %>

//       Hello <%=name %>

//     <% } %>

// <!-- else if -->
//     <% if(name==='Tanvir'){ %>
//       Husband
//     <% } else if(name==='Sadia'){ %>
//       Wife
//     <% } else {%>
//       Unknown Name , and this is <%= name %>
//     <% } %>


// <!-- for loop -->
//     <% for(let i = 0; i<5; i++){ %>
//       Hello <%= i %>
//     <% } %>

// <!-- Function Call -->
//     <% var current = new Date(); %>
//     <%= current %>




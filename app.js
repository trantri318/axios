const courseApi = "http://localhost:3000/courses"
const start = () =>{
    getCourses(renderCourses);
}
start();
function getCourses(callback){
    axios.get(courseApi)
        .then(callback)
}
function renderCourses(courses){
    var blockListUser = document.querySelector('#courses-list');
    var html = courses.data.map(course =>
         `
            <li>
                <h4>Name: ${course.name}</h4>
                <p>Description: ${course.description}</p>
            </li>
        `
    )
    blockListUser.innerHTML = html.join('');
}

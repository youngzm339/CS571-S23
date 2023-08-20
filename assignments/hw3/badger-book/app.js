/**
 * TODO Your code goes below here!
 * You may find the helper functions helpful.
 */


/**
 * Given an array of students, generates HTML for all students
 * using {@link buildStudentHtml}.
 * 
 * @param {*} studs array of students
 * @returns html containing all students
 */
function buildStudentsHtml(studs) {
	let original_html = studs.map(stud =>
		buildStudentHtml(stud)).join("\n");
	return `<div class="container"><div class="row">` + original_html + `</div></div>`;
}

/**
 * Given a student object, generates HTML. Use innerHtml to insert this
 * into the DOM, we will talk about security considerations soon!
 * 
 * @param {*} stud 
 * @returns 
 */
function buildStudentHtml(stud) {
	let html = `<div class="col-sm">`;
	html += `<h2>${stud.name.first} ${stud.name.last}</h2>`;
	html += `</div>`
	return html;
}

function fetch_stu_data() {
	return fetch('https://cs571.org/s23/hw3/api/students', {
		headers: {
			"X-CS571-ID": "bid_2b48c7a36a98db55355d"
		}
	})
		.then(response => {
			return response.json();
		})
		.then(data => {
			return data;
		})
		.catch(error => {
			console.error(error);
		});
}

// Target 1
fetch_stu_data().then(data => {
	console.log(data);
})

// Target 2 3

fetch_stu_data().then(data => {
	const parentDiv = document.getElementById('students');
	parentDiv.innerHTML = buildStudentsHtml(data);
})

// Tagget 4 
function buildStudentsDetailHtml(studs) {
	return studs.map(stud => {
		let html = `<div class="col-sm">`;
		html += `<h2>${stud.name.first} ${stud.name.last}</h2>`;
		html += `<h3>${stud.major}</h3>`;
		html += `<p>${stud.name.first} is taking ${stud.numCredits} and ${stud.fromWisconsin ? 'is' : 'is not'} from Wisconsin</p>`;
		html += `<p>They have ${stud.interests.length} interests.</p>`;
		html += `<p>including....</p>`;

		html += `<ul>`;
		stud.interests.map(interest => {
			html += `<li><b>${interest}</b></li>`;
		});
		html += `</ul>`;

		html += `</div>`;
		return html;
	}).join('\n');
}

fetch_stu_data().then(data => {
	const currentDiv = document.getElementById('students');
	const parentDiv = currentDiv.parentNode;
	const newDiv = document.createElement('div');
	newDiv.id = "students_details";
	parentDiv.appendChild(newDiv);
	newDiv.innerHTML = buildStudentsDetailHtml(data);
});
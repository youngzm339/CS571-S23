import { Card, Row } from "react-bootstrap";
const Student = (props) => {
  return props.students.map((student) => (
    <Card key={student.id}>
      <Card.Body>
        <Card.Title>
          Name: {student.name.first + " " + student.name.last}
        </Card.Title>
        <Card.Body>
          <ul>
            <li>Major: {student.major}</li>
            <li>Credits: {student.numCredits}</li>
            <li>
              Interests:
              <ul>
                {student.interests.map((interest) => (
                  <li>{interest}</li>
                ))}
              </ul>
            </li>
            <li>
              Who {student.fromWisconsin ? "is" : "is not"} from Wisconsin
            </li>
          </ul>
        </Card.Body>
      </Card.Body>
    </Card>
  ));
};

export default Student;

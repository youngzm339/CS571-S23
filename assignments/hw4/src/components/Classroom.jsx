import React, { useEffect, useRef, useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import Student from "./Student";

const Classroom = () => {
  const [students, setStudents] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const newStudentNameRef = useRef();
  const newStudentMajorRef = useRef();
  const newStudentInterestRef = useRef();
  const newStudentNumCreditsRef = useRef();
  const newStudentFromWisconsinRef = useRef();

  useEffect(() => {
    fetch("https://cs571.org/s23/hw4/api/students", {
      headers: {
        "X-CS571-ID": "bid_2b48c7a36a98db55355d",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
        setSearchResults(data);
      });
  }, []);

  const handleAddStudent = () => {
    const newName = newStudentNameRef.current.value;
    const newMajor = newStudentMajorRef.current.value;
    const newInterest = newStudentInterestRef.current.value;
    const newNumCredits = newStudentNumCreditsRef.current.value;
    const newFromWisconsin = newStudentFromWisconsinRef.current.checked;
    const [firstName, lastName] = newName.split(" ");

    const newStudent = {
      id: Date.now(),
      name: {
        first: firstName,
        last: lastName,
      },
      major: newMajor,
      interest: newInterest.split(" "),
      numCredits: newNumCredits,
      fromWisconsin: newFromWisconsin,
    };
    setStudents([...students, newStudent]);

    newStudentNameRef.current.value = "";
    newStudentMajorRef.current.value = "";
    newStudentInterestRef.current.value = "";
    newStudentNumCreditsRef.current.value = "";
    newStudentFromWisconsinRef.current.checked = false;
  };

  const handleSearch = () => {
    const searchName = document.getElementById("searchName").value;
    const searchMajor = document.getElementById("searchMajor").value;
    const searchInterest = document.getElementById("searchInterest").value;

    const filteredStudents = students.filter((student) => {
      let isMatched = true;

      if (
        searchName &&
        !student.name.first.includes(searchName) &&
        !student.name.last.includes(searchName)
      ) {
        isMatched = false;
      }

      if (searchMajor && !student.major.includes(searchMajor)) {
        isMatched = false;
      }

      if (searchInterest && !student.interest.includes(searchInterest)) {
        isMatched = false;
      }

      return isMatched;
    });

    setSearchResults(filteredStudents);
  };

  const handleResetSearch = () => {
    document.getElementById("searchName").value = "";
    document.getElementById("searchMajor").value = "";
    document.getElementById("searchInterest").value = "";
    setSearchResults([]);
  };

  return (
    <div>
      <Form>
        <Form.Label htmlFor="searchName">Name</Form.Label>
        <Form.Control id="searchName" />
        <Form.Label htmlFor="searchMajor">Major</Form.Label>
        <Form.Control id="searchMajor" />
        <Form.Label htmlFor="searchInterest">Interest</Form.Label>
        <Form.Control id="searchInterest" />
        <br />
        <Button variant="neutral" onClick={handleSearch}>
          Search
        </Button>
        <Button variant="neutral" onClick={handleResetSearch}>
          Reset Search
        </Button>
      </Form>
      <Container fluid>
        <Row>
          <Student
            students={searchResults.length > 0 ? searchResults : students}
          />
        </Row>
      </Container>
      <Form>
        <Form.Label htmlFor="addName">Name</Form.Label>
        <Form.Control id="addName" ref={newStudentNameRef} />
        <Form.Label htmlFor="addMajor">Major</Form.Label>
        <Form.Control id="addMajor" ref={newStudentMajorRef} />
        <Form.Label htmlFor="addInterest">Interest</Form.Label>
        <Form.Control id="addInterest" ref={newStudentInterestRef} />
        <Form.Label htmlFor="addNumCredits">Num Credits</Form.Label>
        <Form.Control id="addNumCredits" ref={newStudentNumCreditsRef} />
        <Form.Label htmlFor="addFromWisconsin">From Wisconsin</Form.Label>
        <Form.Check
          id="addFromWisconsin"
          ref={newStudentFromWisconsinRef}
          type="checkbox"
        />
        <br />
        <Button variant="neutral" onClick={handleAddStudent}>
          Add Student
        </Button>
      </Form>
    </div>
  );
};

export default Classroom;

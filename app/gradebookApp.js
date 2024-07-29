'use client'

import React, { useState } from "react";
import styles from "./page.module.css";

function GradebookApp() {
    const [totalScores, setTotalScores] = useState([]);
    const [studentScore, setStudentScore] = useState(0);
    const [resultMessage, setResultMessage] = useState("");

    const getAverage = (scores) => {
        let sum = 0;

        for (const score of scores) {
            sum += score;
        }
        const average = sum / scores.length;
        return average.toFixed(2);
    }

    const getGrade = (score) => {
        if (score === 100) {
            return "A++";
        } else if (score >= 90) {
            return "A";
        } else if (score >= 80) {
            return "B";
        } else if (score >= 70) {
            return "C";
        } else if (score >= 60) {
            return "D";
        } else {
            return "F";
        }
    }

    const hasPassingGrade = (score) => {
        return getGrade(score) !== "F";
    }

    const studentMsg = (totalScores, studentScore) => {
        if (hasPassingGrade(studentScore)) {
            return "Class average: " + getAverage(totalScores) + ". Your grade: " + getGrade(studentScore) + ". You passed the course."
        } else {
            return "Class average: " + getAverage(totalScores) + ". Your grade: " + getGrade(studentScore) + ". You failed the course."
        }
    }

    const handleTotalScoresChange = (e) => {
        const scores = e.target.value.split(',').map(score => parseFloat(score));
        setTotalScores(scores);
    }

    const handleStudentScoreChange = (e) => {
        setStudentScore(parseFloat(e.target.value));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setResultMessage(studentMsg(totalScores, studentScore));
    }

    return (
        <form className={styles.card} onSubmit={handleSubmit}>
            <label className={styles.description}>Class Scores</label>
            <input type="text" onChange={handleTotalScoresChange} placeholder="23, 45, 67... (comma separated)" />
            <label className={styles.description}>Student Score</label>
            <input type="number" onChange={handleStudentScoreChange} />
            <br />
            <button type="submit">Get Results</button>
            <br />
            {resultMessage && <p className={styles.description}>{resultMessage}</p>}
        </form>
    )
}

export default GradebookApp;


import { Body, Controller, Get, Path, Post, Query, Response, Route, Tags } from "tsoa";
import { InvalidParametersError } from "./server";
import * as db from "./transcriptManager";

@Route('transcripts')
@Tags('transcripts')
export class TranscriptsController extends Controller {

    @Get()
    public getAll() {
        return db.getAll();
    }

    /**
     * Retrieves the transcript for a given Student ID
     * @param studentID 
     * @throws InvalidParametersError if the student ID does not correspond to any known transcript 
     */
    @Get('{studentID}')
    @Response<InvalidParametersError>(400, 'Invalid values specified')
    public getTranscript(
        @Path()
        studentID: db.StudentID) {
        const ret = db.getTranscript(studentID);
        if (ret) {
            return ret;
        }
        else {
            throw new InvalidParametersError(`No such student ID`);
        }
    }

    /**
     * Create a new student, optionally initializing their transcript
     * @param requestBody 
     * @returns the ID of the newly created student
     */
    @Post()
    public addStudent(@Body() requestBody: {
        studentName: string,
        grades?: db.CourseGrade[]
    }) {
        return db.addStudent(requestBody.studentName, requestBody.grades);
    }
    /**
     * Deletes a student's transcript 
     * @param studentID The ID of the student to delete
     * 
     */
    @Response<InvalidParametersError>(400, 'No such student ID')
    public deleteStudent(@Path() studentID: db.StudentID) {
        try {
            db.deleteStudent(studentID);
        } catch (err) {
            throw new InvalidParametersError('No such student ID');
        }
    }

    /**
     * Adds a grade to a student's transcript
     * @param studentID 
     * @param courseNumber 
     * @param courseGrade 
     */
    @Post('{studentID}/{courseNumber}')
    @Response<InvalidParametersError>(400, 'No such student ID or student already has a grade for this course')
    public addGrade(studentID: db.StudentID,
        courseNumber: db.Course,
        @Body() courseGrade: number): void {
        db.addGrade(studentID, courseNumber, courseGrade)
    }

    /**
     * Retrieve a student's grade in a course
     * @param studentID 
     * @param courseNumber 
     * @returns the course grade
     */
    @Get('{studentID}/{courseNumber}')
    @Response<InvalidParametersError>(400, 'No such student ID or student does not have a grade for this course')
    public getGrade(
        studentID: db.StudentID,
        courseNumber: db.Course
    ) {
        return db.getGrade(studentID, courseNumber);
    }
}
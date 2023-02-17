var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Body, Controller, Get, Path, Post, Response, Route, Tags } from "tsoa";
import { InvalidParametersError } from "./server";
import * as db from "./transcriptManager";
let TranscriptsController = class TranscriptsController extends Controller {
    getAll() {
        return db.getAll();
    }
    getTranscript(studentID) {
        const ret = db.getTranscript(studentID);
        if (ret) {
            return ret;
        }
        else {
            throw new InvalidParametersError(`No such student ID`);
        }
    }
    addStudent(requestBody) {
        return db.addStudent(requestBody.studentName, requestBody.grades);
    }
    deleteStudent(studentID) {
        try {
            db.deleteStudent(studentID);
        }
        catch (err) {
            throw new InvalidParametersError('No such student ID');
        }
    }
    addGrade(studentID, courseNumber, courseGrade) {
        db.addGrade(studentID, courseNumber, courseGrade);
    }
    getGrade(studentID, courseNumber) {
        return db.getGrade(studentID, courseNumber);
    }
};
__decorate([
    Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TranscriptsController.prototype, "getAll", null);
__decorate([
    Get('{studentID}'),
    Response(400, 'Invalid values specified'),
    __param(0, Path()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TranscriptsController.prototype, "getTranscript", null);
__decorate([
    Post(),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TranscriptsController.prototype, "addStudent", null);
__decorate([
    Response(400, 'No such student ID'),
    __param(0, Path()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TranscriptsController.prototype, "deleteStudent", null);
__decorate([
    Post('{studentID}/{courseNumber}'),
    Response(400, 'No such student ID or student already has a grade for this course'),
    __param(2, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, Number]),
    __metadata("design:returntype", void 0)
], TranscriptsController.prototype, "addGrade", null);
__decorate([
    Get('{studentID}/{courseNumber}'),
    Response(400, 'No such student ID or student does not have a grade for this course'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], TranscriptsController.prototype, "getGrade", null);
TranscriptsController = __decorate([
    Route('transcripts'),
    Tags('transcripts')
], TranscriptsController);
export { TranscriptsController };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNjcmlwdHNDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3RyYW5zY3JpcHRzQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBUyxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDbEQsT0FBTyxLQUFLLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUluQyxJQUFNLHFCQUFxQixHQUEzQixNQUFNLHFCQUFzQixTQUFRLFVBQVU7SUFHMUMsTUFBTTtRQUNULE9BQU8sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFTTSxhQUFhLENBRWhCLFNBQXVCO1FBQ3ZCLE1BQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDeEMsSUFBSSxHQUFHLEVBQUU7WUFDTCxPQUFPLEdBQUcsQ0FBQztTQUNkO2FBQ0k7WUFDRCxNQUFNLElBQUksc0JBQXNCLENBQUMsb0JBQW9CLENBQUMsQ0FBQztTQUMxRDtJQUNMLENBQUM7SUFRTSxVQUFVLENBQVMsV0FHekI7UUFDRyxPQUFPLEVBQUUsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQU9NLGFBQWEsQ0FBUyxTQUF1QjtRQUNoRCxJQUFJO1lBQ0EsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMvQjtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1YsTUFBTSxJQUFJLHNCQUFzQixDQUFDLG9CQUFvQixDQUFDLENBQUM7U0FDMUQ7SUFDTCxDQUFDO0lBVU0sUUFBUSxDQUFDLFNBQXVCLEVBQ25DLFlBQXVCLEVBQ2YsV0FBbUI7UUFDM0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLFdBQVcsQ0FBQyxDQUFBO0lBQ3JELENBQUM7SUFVTSxRQUFRLENBQ1gsU0FBdUIsRUFDdkIsWUFBdUI7UUFFdkIsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUNoRCxDQUFDO0NBQ0osQ0FBQTtBQTlFRztJQUFDLEdBQUcsRUFBRTs7OzttREFHTDtBQU9EO0lBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQztJQUNsQixRQUFRLENBQXlCLEdBQUcsRUFBRSwwQkFBMEIsQ0FBQztJQUU3RCxXQUFBLElBQUksRUFBRSxDQUFBOzs7OzBEQVNWO0FBT0Q7SUFBQyxJQUFJLEVBQUU7SUFDWSxXQUFBLElBQUksRUFBRSxDQUFBOzs7O3VEQUt4QjtBQU1EO0lBQUMsUUFBUSxDQUF5QixHQUFHLEVBQUUsb0JBQW9CLENBQUM7SUFDdEMsV0FBQSxJQUFJLEVBQUUsQ0FBQTs7OzswREFNM0I7QUFRRDtJQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQztJQUNsQyxRQUFRLENBQXlCLEdBQUcsRUFBRSxtRUFBbUUsQ0FBQztJQUd0RyxXQUFBLElBQUksRUFBRSxDQUFBOzs7O3FEQUVWO0FBUUQ7SUFBQyxHQUFHLENBQUMsNEJBQTRCLENBQUM7SUFDakMsUUFBUSxDQUF5QixHQUFHLEVBQUUscUVBQXFFLENBQUM7Ozs7cURBTTVHO0FBL0VRLHFCQUFxQjtJQUZqQyxLQUFLLENBQUMsYUFBYSxDQUFDO0lBQ3BCLElBQUksQ0FBQyxhQUFhLENBQUM7R0FDUCxxQkFBcUIsQ0FnRmpDO1NBaEZZLHFCQUFxQiJ9
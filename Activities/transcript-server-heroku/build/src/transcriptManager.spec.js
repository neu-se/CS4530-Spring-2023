import * as client from './client';
import Express from 'express';
import * as http from "http";
import transcriptServer from "./transcriptServer";
import { setBaseURL } from './remoteService';
import * as db from "./transcriptManager";
describe('TranscriptManager', () => {
    let server;
    beforeAll(async () => {
        const app = Express();
        server = http.createServer(app);
        transcriptServer(app);
        db.initialize();
        await server.listen();
        const address = server.address();
        setBaseURL(`http://127.0.0.1:${address.port}`);
    });
    afterAll(async () => {
        await server.close();
    });
    beforeEach(() => {
        db.initialize();
    });
    describe('Create student', () => {
        it('should return an ID', async () => {
            const createdStudent = await client.addStudent('Avery');
            expect(createdStudent.studentID).toBeGreaterThan(4);
        });
    });
    describe('Posting grades', () => {
        it('should not accept grades for invalid student IDs', async () => {
        });
        it('should accept grades for students ', async () => {
        });
    });
    describe('Full-system tests', () => {
        it('should allow multiple students to have the same name, giving them different IDs', async () => {
            const [createdAvery1, createdAvery2] = await Promise.all([
                client.addStudent('Avery'),
                client.addStudent('Avery')
            ]);
            expect(createdAvery2.studentID).not.toBe(createdAvery1.studentID);
            const ids = await client.getStudentIDs('Avery');
            expect(ids).toContain(createdAvery1.studentID);
            expect(ids).toContain(createdAvery2.studentID);
        });
        it('should remove a deleted student from the list of students', async () => {
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNjcmlwdE1hbmFnZXIuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2NyaXB0TWFuYWdlci5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxNQUFNLE1BQU0sVUFBVSxDQUFDO0FBQ25DLE9BQU8sT0FBTyxNQUFNLFNBQVMsQ0FBQztBQUM5QixPQUFPLEtBQUssSUFBSSxNQUFNLE1BQU0sQ0FBQztBQUM3QixPQUFPLGdCQUFnQixNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQTtBQUMxQyxPQUFPLEtBQUssRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBTTFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLEVBQUU7SUFDakMsSUFBSSxNQUFtQixDQUFDO0lBRXhCLFNBQVMsQ0FBQyxLQUFLLElBQUksRUFBRTtRQUVuQixNQUFNLEdBQUcsR0FBRyxPQUFPLEVBQUUsQ0FBQztRQUN0QixNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVoQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV0QixFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7UUFHaEIsTUFBTSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDdEIsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sRUFBaUIsQ0FBQztRQUNoRCxVQUFVLENBQUMsb0JBQW9CLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELENBQUMsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLEtBQUssSUFBSSxFQUFFO1FBRWxCLE1BQU0sTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3ZCLENBQUMsQ0FBQyxDQUFBO0lBRUYsVUFBVSxDQUFDLEdBQUcsRUFBRTtRQUVkLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNsQixDQUFDLENBQUMsQ0FBQTtJQUVGLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLEVBQUU7UUFDOUIsRUFBRSxDQUFDLHFCQUFxQixFQUFFLEtBQUssSUFBSSxFQUFFO1lBQ25DLE1BQU0sY0FBYyxHQUFHLE1BQU0sTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN4RCxNQUFNLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFBO0lBRUYsUUFBUSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsRUFBRTtRQUM5QixFQUFFLENBQUMsa0RBQWtELEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFFbEUsQ0FBQyxDQUFDLENBQUM7UUFDSCxFQUFFLENBQUMsb0NBQW9DLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFFcEQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQTtJQUVGLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLEVBQUU7UUFDL0IsRUFBRSxDQUFDLGlGQUFpRixFQUFFLEtBQUssSUFBSSxFQUFFO1lBRS9GLE1BQU0sQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDLEdBQUcsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDO2dCQUN2RCxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztnQkFDMUIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7YUFDM0IsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUVsRSxNQUFNLEdBQUcsR0FBRyxNQUFNLE1BQU0sQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFaEQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDL0MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUM7UUFDSCxFQUFFLENBQUMsMkRBQTJELEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFFM0UsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQ0YsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDIn0=
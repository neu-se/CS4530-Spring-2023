import { ValidationService, ValidateError, fetchMiddlewares } from '@tsoa/runtime';
import { TranscriptsController } from './../src/transcriptsController';
const models = {
    "Student": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "studentName": { "dataType": "string", "required": true }, "studentID": { "dataType": "double", "required": true } }, "validators": {} },
    },
    "Course": {
        "dataType": "refAlias",
        "type": { "dataType": "string", "validators": {} },
    },
    "CourseGrade": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "grade": { "dataType": "double", "required": true }, "course": { "ref": "Course", "required": true } }, "validators": {} },
    },
    "Transcript": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "grades": { "dataType": "array", "array": { "dataType": "refAlias", "ref": "CourseGrade" }, "required": true }, "student": { "ref": "Student", "required": true } }, "validators": {} },
    },
    "InvalidParametersError": {
        "dataType": "refObject",
        "properties": {
            "name": { "dataType": "string", "required": true },
            "message": { "dataType": "string", "required": true },
            "stack": { "dataType": "string" },
        },
        "additionalProperties": false,
    },
    "db.StudentID": {
        "dataType": "refAlias",
        "type": { "dataType": "double", "validators": {} },
    },
    "db.CourseGrade": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "grade": { "dataType": "double", "required": true }, "course": { "ref": "Course", "required": true } }, "validators": {} },
    },
    "db.Course": {
        "dataType": "refAlias",
        "type": { "dataType": "string", "validators": {} },
    },
};
const validationService = new ValidationService(models);
export function RegisterRoutes(app) {
    app.get('/transcripts', ...(fetchMiddlewares(TranscriptsController)), ...(fetchMiddlewares(TranscriptsController.prototype.getAll)), function TranscriptsController_getAll(request, response, next) {
        const args = {};
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new TranscriptsController();
            const promise = controller.getAll.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    app.get('/transcripts/:studentID', ...(fetchMiddlewares(TranscriptsController)), ...(fetchMiddlewares(TranscriptsController.prototype.getTranscript)), function TranscriptsController_getTranscript(request, response, next) {
        const args = {
            studentID: { "in": "path", "name": "studentID", "required": true, "ref": "db.StudentID" },
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new TranscriptsController();
            const promise = controller.getTranscript.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    app.post('/transcripts', ...(fetchMiddlewares(TranscriptsController)), ...(fetchMiddlewares(TranscriptsController.prototype.addStudent)), function TranscriptsController_addStudent(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "grades": { "dataType": "array", "array": { "dataType": "refAlias", "ref": "db.CourseGrade" } }, "studentName": { "dataType": "string", "required": true } } },
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new TranscriptsController();
            const promise = controller.addStudent.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    app.post('/transcripts/:studentID/:courseNumber', ...(fetchMiddlewares(TranscriptsController)), ...(fetchMiddlewares(TranscriptsController.prototype.addGrade)), function TranscriptsController_addGrade(request, response, next) {
        const args = {
            studentID: { "in": "path", "name": "studentID", "required": true, "ref": "db.StudentID" },
            courseNumber: { "in": "path", "name": "courseNumber", "required": true, "ref": "db.Course" },
            courseGrade: { "in": "body", "name": "courseGrade", "required": true, "dataType": "double" },
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new TranscriptsController();
            const promise = controller.addGrade.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    app.get('/transcripts/:studentID/:courseNumber', ...(fetchMiddlewares(TranscriptsController)), ...(fetchMiddlewares(TranscriptsController.prototype.getGrade)), function TranscriptsController_getGrade(request, response, next) {
        const args = {
            studentID: { "in": "path", "name": "studentID", "required": true, "ref": "db.StudentID" },
            courseNumber: { "in": "path", "name": "courseNumber", "required": true, "ref": "db.Course" },
        };
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new TranscriptsController();
            const promise = controller.getGrade.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    function isController(object) {
        return 'getHeaders' in object && 'getStatus' in object && 'setStatus' in object;
    }
    function promiseHandler(controllerObj, promise, response, successStatus, next) {
        return Promise.resolve(promise)
            .then((data) => {
            let statusCode = successStatus;
            let headers;
            if (isController(controllerObj)) {
                headers = controllerObj.getHeaders();
                statusCode = controllerObj.getStatus() || statusCode;
            }
            returnHandler(response, statusCode, data, headers);
        })
            .catch((error) => next(error));
    }
    function returnHandler(response, statusCode, data, headers = {}) {
        if (response.headersSent) {
            return;
        }
        Object.keys(headers).forEach((name) => {
            response.set(name, headers[name]);
        });
        if (data && typeof data.pipe === 'function' && data.readable && typeof data._read === 'function') {
            data.pipe(response);
        }
        else if (data !== null && data !== undefined) {
            response.status(statusCode || 200).json(data);
        }
        else {
            response.status(statusCode || 204).end();
        }
    }
    function responder(response) {
        return function (status, data, headers) {
            returnHandler(response, status, data, headers);
        };
    }
    ;
    function getValidatedArgs(args, request, response) {
        const fieldErrors = {};
        const values = Object.keys(args).map((key) => {
            const name = args[key].name;
            switch (args[key].in) {
                case 'request':
                    return request;
                case 'query':
                    return validationService.ValidateParam(args[key], request.query[name], name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'path':
                    return validationService.ValidateParam(args[key], request.params[name], name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'header':
                    return validationService.ValidateParam(args[key], request.header(name), name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'body':
                    return validationService.ValidateParam(args[key], request.body, name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'body-prop':
                    return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, 'body.', { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'formData':
                    if (args[key].dataType === 'file') {
                        return validationService.ValidateParam(args[key], request.file, name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                    }
                    else if (args[key].dataType === 'array' && args[key].array.dataType === 'file') {
                        return validationService.ValidateParam(args[key], request.files, name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                    }
                    else {
                        return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                    }
                case 'res':
                    return responder(response);
            }
        });
        if (Object.keys(fieldErrors).length > 0) {
            throw new ValidateError(fieldErrors, '');
        }
        return values;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vZ2VuZXJhdGVkL3JvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxPQUFPLEVBQWMsaUJBQWlCLEVBQWUsYUFBYSxFQUFrRCxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU1SixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQU12RSxNQUFNLE1BQU0sR0FBcUI7SUFDN0IsU0FBUyxFQUFFO1FBQ1AsVUFBVSxFQUFFLFVBQVU7UUFDdEIsTUFBTSxFQUFFLEVBQUMsVUFBVSxFQUFDLHFCQUFxQixFQUFDLGtCQUFrQixFQUFDLEVBQUMsYUFBYSxFQUFDLEVBQUMsVUFBVSxFQUFDLFFBQVEsRUFBQyxVQUFVLEVBQUMsSUFBSSxFQUFDLEVBQUMsV0FBVyxFQUFDLEVBQUMsVUFBVSxFQUFDLFFBQVEsRUFBQyxVQUFVLEVBQUMsSUFBSSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsRUFBRSxFQUFDO0tBQ3hMO0lBRUQsUUFBUSxFQUFFO1FBQ04sVUFBVSxFQUFFLFVBQVU7UUFDdEIsTUFBTSxFQUFFLEVBQUMsVUFBVSxFQUFDLFFBQVEsRUFBQyxZQUFZLEVBQUMsRUFBRSxFQUFDO0tBQ2hEO0lBRUQsYUFBYSxFQUFFO1FBQ1gsVUFBVSxFQUFFLFVBQVU7UUFDdEIsTUFBTSxFQUFFLEVBQUMsVUFBVSxFQUFDLHFCQUFxQixFQUFDLGtCQUFrQixFQUFDLEVBQUMsT0FBTyxFQUFDLEVBQUMsVUFBVSxFQUFDLFFBQVEsRUFBQyxVQUFVLEVBQUMsSUFBSSxFQUFDLEVBQUMsUUFBUSxFQUFDLEVBQUMsS0FBSyxFQUFDLFFBQVEsRUFBQyxVQUFVLEVBQUMsSUFBSSxFQUFDLEVBQUMsRUFBQyxZQUFZLEVBQUMsRUFBRSxFQUFDO0tBQzFLO0lBRUQsWUFBWSxFQUFFO1FBQ1YsVUFBVSxFQUFFLFVBQVU7UUFDdEIsTUFBTSxFQUFFLEVBQUMsVUFBVSxF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
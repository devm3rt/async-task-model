AsyncTaskModel TypeScript Module

A TypeScript module providing the AsyncTaskModel type for representing asynchronous task states.

Installation
You can install the asynctask-model package via npm or yarn:

bash
Copy code
npm install asynctask-model

# or

yarn add asynctask-model
Usage
typescript
Copy code
import { AsyncTaskModel } from 'asynctask-model';

// Define an asynchronous task
const task: AsyncTaskModel<number, string> = {
isInit: true,
isLoading: false,
result: 42,
error: undefined,
lastRequestDate: new Date(),
lastResponseDate: new Date(),
};
API
AsyncTaskModel<R = any, E = any>
Represents the state of an asynchronous task.

Properties:
isInit?: boolean: Indicates whether the task is initialized. Default: undefined.
isLoading?: boolean: Indicates whether the task is currently loading. Default: undefined.
result?: R: Holds the result of the asynchronous task. Default: undefined.
error?: E: Holds any error encountered during the task. Default: undefined.
lastRequestDate?: Date: Timestamp for the last request date. Default: undefined.
lastResponseDate?: Date: Timestamp for the last response date. Default: undefined.

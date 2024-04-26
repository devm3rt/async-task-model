# AsyncTaskModel TypeScript Module

<!-- ![npm](https://img.shields.io/npm/v/asynctask-model)
![npm bundle size](https://img.shields.io/bundlephobia/min/asynctask-model)
![GitHub](https://img.shields.io/github/license/yourusername/asynctask-model) -->

This TypeScript module provides the `AsyncTaskModel` type for representing asynchronous task states.

## Installation

Install the package using npm:

```bash
npm install asynctask-model
```

Or using yarn:

```bash
yarn add asynctask-model
```

## Usage

```typescript
import { AsyncTaskModel } from 'asynctask-model';

// Define an asynchronous task
const task: AsyncTaskModel<number, string> = {
  isInit: true,
  isLoading: false,
  result: { data: [1, 2, 3] },
  error: undefined,
  lastRequestDate: new Date(),
  // lastResponseDate: 'define when you get response',
};
```

## API

### `AsyncTaskModel<R = any, E = any>`

Represents the state of an asynchronous task.

#### Properties:

- `isInit?: boolean`: Indicates whether the task is initialized. Default: `undefined`.
- `isLoading?: boolean`: Indicates whether the task is currently loading. Default: `undefined`.
- `result?: R`: Holds the result of the asynchronous task. Default: `undefined`.
- `error?: E`: Holds any error encountered during the task. Default: `undefined`.
- `lastRequestDate?: Date`: Timestamp for the last request date. Default: `undefined`.
- `lastResponseDate?: Date`: Timestamp for the last response date. Default: `undefined`.

<!-- ## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. -->

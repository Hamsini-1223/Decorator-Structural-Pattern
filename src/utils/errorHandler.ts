export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

export class ProcessingError extends Error {
  constructor(message: string, cause?: Error) {
    super(message);
    this.name = "ProcessingError";
    if (cause) {
      this.stack += `\nCaused by: ${cause.stack}`;
    }
  }
}

export function handleError(error: unknown, context: string): void {
  if (error instanceof ValidationError) {
    console.error(`Validation Error in ${context}: ${error.message}`);
  } else if (error instanceof ProcessingError) {
    console.error(`Processing Error in ${context}: ${error.message}`);
  } else if (error instanceof Error) {
    console.error(`Unexpected Error in ${context}: ${error.message}`);
  } else {
    console.error(`Unknown Error in ${context}: ${String(error)}`);
  }
}

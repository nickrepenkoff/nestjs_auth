import {HttpException, HttpStatus} from "@nestjs/common";

export default class ValidationException extends HttpException {
  messages;

  constructor(response) {
    super(response, HttpStatus.BAD_REQUEST);
    this.messages = response
  }
}
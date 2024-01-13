import {jest} from "@jest/globals"
import {ConductorLogger} from "../../common/ConductorLogger"

export const mockLogger: ConductorLogger = {
  debug: jest.fn(),
  error: jest.fn(),
  info: jest.fn()
}


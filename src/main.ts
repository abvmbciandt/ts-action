import * as core from '@actions/core'
import { wait } from './wait'
import { tst } from './tst'
import { PathLike } from 'fs'

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    const ms: string = core.getInput('milliseconds')
    const path: PathLike = core.getInput('filepath')
    var message: string = ''
    // Debug logs are only output if the `ACTIONS_STEP_DEBUG` secret is true
    if (tst(`${path}`)) {
      core.debug(`Waiting ${ms} milliseconds ... OK`)
      message = 'OK'
    } else {
      core.debug(`Waiting ${ms} milliseconds ... NOK`)
      message = 'NOK'
    }

    // Log the current timestamp, wait, then log the new timestamp
    core.debug(new Date().toTimeString())
    await wait(parseInt(ms, 10))
    core.debug(new Date().toTimeString())
    console.log('test')
    // Set outputs for other workflow steps to use
    core.setOutput('result', message)
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}

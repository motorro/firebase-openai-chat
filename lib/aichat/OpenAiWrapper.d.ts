import { AiWrapper, Messages } from "./AiWrapper";
import { ToolsDispatcher } from "./ToolsDispatcher";
import OpenAI from "openai";
import { ChatData } from "./data/ChatState";
/**
 * Wraps Open AI assistant use
 */
export declare class OpenAiWrapper implements AiWrapper {
    private readonly openAi;
    constructor(openAi: OpenAI);
    createThread(meta: Readonly<Record<string, string>>): Promise<string>;
    postMessage(threadId: string, message: string): Promise<string>;
    run<DATA extends ChatData>(threadId: string, assistantId: string, dataSoFar: DATA, dispatcher: ToolsDispatcher<DATA>): Promise<DATA>;
    private static getDispatchError;
    getMessages(threadId: string, from: string | undefined): Promise<Messages>;
    deleteThread(threadId: string): Promise<void>;
    /**
     * Runs AI
     * @param block Function to run
     * @private
     */
    private runAi;
}

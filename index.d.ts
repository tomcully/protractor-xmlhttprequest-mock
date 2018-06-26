import {ProtractorBrowser} from 'protractor';

export declare interface MockConfig {
    path: string | RegExp,
    response: Response
}

export declare interface MultipleMockResponseConfig {
    path: string | RegExp,
    response: Response[]
}

export declare interface Response {
    status: number,
    data: string
}

export declare class MockService {
    static reset();
    static setup(browser: ProtractorBrowser);
    static addMock(name: string, config: MockConfig);
    static addMocks(name: string, config: MultipleMockResponseConfig);
}

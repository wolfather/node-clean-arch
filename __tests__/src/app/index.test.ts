import { expect, test } from "vitest";
import { ServerApp } from "../../../src/app";

test('ServerApp', async() => {
    const serverApp = new ServerApp();

    expect(serverApp).toBeInstanceOf(ServerApp);
})

test('ServerApp router', async() => {
    const serverApp = new ServerApp().server.inje;

})
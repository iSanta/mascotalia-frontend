import webSocketSelector from '@/Infrastructure/web-sockets/webSocketSelector'

const useWebSockets = (socketHost: string, eventsToListen: string[] = []) => {
    const { sendMessage: send, socketMessage } = webSocketSelector()({
        socketHost,
        eventsToListen
    });

    const sendMessage = (event: string, eventIdentifier: string, message?: string) => {
        send(event, eventIdentifier, message);
    }

    const message = () => {
        return socketMessage;
    }

    return { sendMessage, message }
}

export default useWebSockets

import { SocketDriver } from '@/Domain/web-sockets/SocketDriver'
import useSignalR from './signalR/useSignalR';

const webSocketSelector = (key: SocketDriver = 'signalR') => {
    switch (key) {
        case 'signalR':
            return useSignalR

        default:
            useSignalR
            break;
    }
}


export default webSocketSelector
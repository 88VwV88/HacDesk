import { api_key, token } from './token';
import StreamChat from 'stream-chat';


const client = new StreamClient(api_key);
const johnToken = token('john');
const daveToken = token('dave');

client.connectUser(
    {
        id: 'john',
        name: 'john'
    },
    johnToken
);
client.connectUser(
    {
        id: 'dave',
        name: 'dave'
    },
    daveToken
);

const channel = client.channel('messaging', {
    image: 'favicon.ico',
    name: 'Create a Messaging Channel',
    members: ['john', 'dave']
});

const App = () => (
    <Chat client={client}>
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
);

module.exports = App;
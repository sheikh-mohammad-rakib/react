const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function MyApp() {
  return (
    <div>
      <h1>{user.name}</h1>
      <img 
        src={user.imageUrl} 
        alt={'Photo of '+user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }} 
      />
    </div>
  );
}
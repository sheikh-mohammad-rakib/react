export default function Profile() {
  const user = {
    name: 'Alan L. Hart',
    imageUrl: 'https://i.imgur.com/QIrZWGIs.jpg',
    imageSize: 150,
    description: 'Pioneering physician, radiologist, and writer',
  };

  return (
    <div className="profile-container">
      <img
        className="profile-image"
        src={user.imageUrl}
        alt={user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
      <div className="profile-info">
        <h3>{user.name}</h3>
        <p>{user.description}</p>
      </div>
    </div>
  );
}

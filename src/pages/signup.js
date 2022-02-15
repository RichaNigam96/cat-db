import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import cutephoto from './randomphoto.jpg'

const SignUp = () => {
return (
	<div class="main-body"
	style={{
    margin: '10px'
	}}
	>
	<h2 class="heading-center">Awesomeness Awaits</h2>
    <Authenticator className="SignIn">
       {({ signOut, user }) => (
       <div className="App">
          <h3 className="heading-center">
             Hey {user.username}, welcome to my channel, with auth! <br/>
             <img className="nav-logo" src={cutephoto} alt="cutephoto" height="100%;" />
          </h3>
          <button onClick={signOut}>Sign out</button>
       </div>
       )}
    </Authenticator>
	</div>

);
};

export default SignUp;


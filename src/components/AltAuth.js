import { Link } from 'react-router-dom';

import {
  AltAuthContainer,
  AltAuthAction,
  AltAuthText,
} from '../styles/altAuth';

function AltAuth({ authText, authLink }) {
  return (
    <AltAuthContainer>
      <AltAuthText>
        Alternatively, Prefer
        <AltAuthAction>
          {' '}
          <Link to={authLink}>{authText}</Link>{' '}
        </AltAuthAction>
      </AltAuthText>
    </AltAuthContainer>
  );
}

export default AltAuth;

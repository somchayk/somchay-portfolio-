import React from 'react';
import { Link } from 'react-router-dom';
const NoMatch = () => (
  <>
    <h1>404! Nothing to be found</h1>
    <Link to='/'>
      Go Home
    </Link>
  </>
)
export default NoMatch;
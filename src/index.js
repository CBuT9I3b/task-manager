import React from 'react'
import { render } from 'react-dom'

import M from 'materialize-css/dist/js/materialize.js'
import 'materialize-css/dist/css/materialize.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import { Root } from './containers'

render(<Root />, document.getElementById('root'));

M.AutoInit();

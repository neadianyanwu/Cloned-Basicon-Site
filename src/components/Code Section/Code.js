import "./Code.css";
import React,{useState, Fragment} from 'react';


const HtmlCodeSnippet = () => {
    return (
      <Fragment>
        <div className="script">
          <h5 className="script-title">Add script to "head"</h5>
          <div className="script-code">
            <p style={{width: '100px'}}>{`<script async src="https://basicons.xyz/embed.js"></script>`}</p>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="9" y="9" width="13" height="13" rx="2" stroke="black" stroke-width="2" stroke-linecap="round" 
             stroke-linejoin="round"/>
            <path d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5" 
             stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        <div className="font">
          <h5 className="script-title">Font</h5>
          <div className="script-code">
            <p>{`<i class="bsc-icon-name"></i>`}</p>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="9" y="9" width="13" height="13" rx="2" stroke="black" stroke-width="2" stroke-linecap="round" 
             stroke-linejoin="round"/>
            <path d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5" 
             stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </Fragment>
    )
  }
  
  const ReactCodeSnippet = () => {
    return (
      <Fragment>
        <div className="import">
          <h5 className="script-title">Import</h5>
          <div className="script-code">
            <p>{`import {IconName} from 'basicons'`}</p>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="9" y="9" width="13" height="13" rx="2" stroke="black" stroke-width="2" stroke-linecap="round" 
             stroke-linejoin="round"/>
            <path d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5" 
             stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        <div className="font">
          <h5 className="script-title">Render</h5>
          <div className="script-code">
            <p>{`<IconName />`}</p>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="9" y="9" width="13" height="13" rx="2" stroke="black" stroke-width="2" stroke-linecap="round" 
             stroke-linejoin="round"/>
            <path d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5" 
             stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </Fragment>
    )
  }

const Code = () => {

    const [codeSnippet, setCodeSnippet] = useState('html')

  return (
    <div className="code-container">
        <span className="code-title"><h4>Code</h4></span>
        <div className="code-content">
        <ul className="label">
            <li className={codeSnippet === "html" && 'active'} onClick={() => setCodeSnippet("html")}>
              <a href="#">HTML</a>
            </li>
            <li className={codeSnippet === "react" && 'active'} onClick={() => setCodeSnippet("react")}>
              <a href="#">React</a>
            </li>
            <li className={codeSnippet === "documentation" && 'active'} onClick={() => setCodeSnippet("openDocumentation")}>
              <a href="https://github.com/solomon-fibonacci/react-basicons#react-basicons" target="_blank">Documentation 
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.63605 18.364L18.364 5.63603M18.364 5.63603L8.46446 5.63604M18.364 5.63603V15.5355" 
                 stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </li>
            </ul>
        </div>
        <div className="scriptContainer">
          {/* {codeSnippet === "html" ? <HtmlCodeSnippet/> : <ReactCodeSnippet/>} */}
          {codeSnippet === "html" ? <HtmlCodeSnippet/> : <ReactCodeSnippet/>}
        </div>
    </div>

  )
}

export default Code;
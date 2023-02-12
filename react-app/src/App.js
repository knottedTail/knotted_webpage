import logo from './logo.svg';
import './App.css';
// import { useState } from 'react';

// function Header(props) {
//   return <header> 
//   <h1> <a href="/" onClick={(event)=>{
//     event.preventDefault();
//     props.onChangeMode();
//   }}> {props.title}! </a></h1>
// </header>
// }

// function Article(props) {
//   return <article> <h2> {props.title} </h2> {props.body} </article>
// }

// function Navigation(props) {
//   const lis = []

//   for (let i=0; i<props.topics.length; i++) {
//     let t = props.topics[i];
//     lis.push(<li key={t.id}><a id={t.id} href={"/read/"+t.id} onClick={event=>{
//       event.preventDefault();
//       props.onChangeMode(Number(event.target.id));
//     }}> {t.title} </a> </li>);
//   }
//   // for (item of props.topics) {
//   //   lis.push(<li>item.title</li>);
//   // }

//   return <nav>
//     <ol>
//       {lis}
//     </ol>

//   </nav>
// }

// function Update(props) {
//   // const [topic, setTopic] = useState(props.topics[id]);
//   const [title, setTitle] = useState(props.topics[id].title);
//   const [body, setBody] = usetState(props.topics[id].body);

//   return <article>
//     <h2> UPDATE FORM! </h2> 
//     <form onSubmit={event=>{
//       event.preventDefault();
//       const title = event.target.title.value;
//       const body = event.target.body.value;
//       props.onUpdate(title, body);
//     }}>
//       <p><input type="text" name="title" value={title} onChange={event=>{
//         setTitle(event.target.value);
//       }}></input></p>
//       <p><textarea name="body" value={body} onChange={event=>{
//         setBody(event.target.value);
//       }}></textarea></p>
//       <p><input type="submit" value="Create"></input></p>
//     </form>
//   </article>
// }

// function Create(props) {
//   // return "?";
//   return <article>
//     <h2> CREATE FORM! </h2> 
//     <form onSubmit={event=>{
//       event.preventDefault();
//       const title = event.target.title.value;
//       const body = event.target.body.value;
//       props.onCreate(title, body);
//     }}>
//       <p><input type="text" name="title" placeholder="title?"></input></p>
//       <p><textarea name="body" placeholder="body?"></textarea></p>
//       <p><input type="submit" value="Create"></input></p>
//     </form>
//   </article>
// }

// function App() {
//   const [mode, setMode] = useState('WELCOME');
//   const [id, setId] = useState(null);
//   const [topics, setTopics] = useState([
//     {id:1, title:'html', body:'html is ...'},
//     {id:2, title:'css', body:'css is ...'},
//     {id:3, title:'js', body:'js is ...'},
//   ]);
//   const [nextId, setNextId] = useState(topics.length);

//   let content = null;
//   let contextControl = null;

//   if(mode === 'WELCOME'){
//     content = <Article title="Welcome to Home Sweet Home!" 
//     body="LOremLOremLOremLOremLOremLOremLOremLOremLOrem"></Article>;
//     // contextControl = null;

//   } else if (mode === 'READ'){
//     // content = <Article title="READ your self" body="xxxxxxxxxxxx"></Article>
//     let title, body = null;
//     for (let i=0; i<topics.length; i++){
//       if (topics[i].id === id) {
//         title = topics[i].title;
//         body = topics[i].body;
//         content = <Article title={title} body={body}></Article>;
//         contextControl = <li>
//         <a href={"/update/"+id} onClick={event=>{
//           event.preventDefault();
//           setMode('UPDATE');
//         }}>Update</a>
//       </li>;
//       }
//     }
//   } else if (mode === 'CREATE'){
//     content = <Create onCreate={(_title, _body)=>{
//       const newTopic = {id:Number(topics.length+1), title:_title, body:_body};
//       const newTopics = [...topics];
//       newTopics.push(newTopic);
//       setTopics(newTopics);
//       setMode('READ');
//       setId(newTopics[newTopics.length-1].id);
//     }}></Create>;
//   } else if (mode === 'UPDATE'){
//     content = <Update topic={topics[id-1]} onUpdate={(_title, _body)=>{
//       const newTopic = {id:Number(topics.length+1), title:_title, body:_body};
//       const newTopics = [...topics];
//       newTopics[id-1] = newTopic;
//       setTopics(newTopics);
//       setMode('READ');
//     }}></Update>
//   }

//   return (
//     <div className="App">
//       <Header title='Accio' onChangeMode={()=>{
//         alert('AVADACCIO!');
//         setMode('WELCOME');
//       }}></Header>

//       <Navigation topics={topics} onChangeMode={(_id)=>{
//         setMode('READ');
//         // alert(_id);
//         setId(_id);
//       }}></Navigation>
      
//       {/* <nav>
//         <ol>
//           <li><a href="/read/1"> html </a></li>
//           <li><a href="/read/2"> css </a></li>
//           <li><a href="/read/3"> js</a></li>
//         </ol>
//       </nav> */}
//       {content}
//       <ul>
//         <li>
//           <a href="/create" onClick={event=>{
//             event.preventDefault();
//             setMode('CREATE');
//           }}>Create</a>
//         </li>
//         {contextControl}
//       </ul>
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//     </div>
//   );
// }

export default App;

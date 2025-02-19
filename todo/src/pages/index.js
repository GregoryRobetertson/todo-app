

export default function Home() {
  return (
   <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
    <h1>Todo List</h1>
    <div>
      <input
      type="text"
      style={{padding: '8px', width: '80%', border: 'solid black'}}
      />
      <button style={{padding:'4px', backgroundColor:'yellow',}}>Add</button>
    </div>
   </div>
            
  );
}

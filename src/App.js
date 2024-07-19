import React from 'react';
import LinuxCommandsTable from './components/LinuxCommandsTable';

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Comandos Linux</h1>
      <LinuxCommandsTable />
    </div>
  );
}

export default App;

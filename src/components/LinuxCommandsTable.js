import React, { useState } from 'react';


const linuxCommands = [
  { command: 'ls', description: 'Lista el contenido de un directorio', example: 'ls -l /home/usuario' },
  { command: 'cd', description: 'Cambia el directorio actual', example: 'cd /var/log' },
  { command: 'pwd', description: 'Muestra la ruta del directorio actual', example: 'pwd' },
  { command: 'mkdir', description: 'Crea un nuevo directorio', example: 'mkdir nuevo_directorio' },
  { command: 'rm', description: 'Elimina archivos o directorios', example: 'rm archivo.txt' },
  { command: 'cp', description: 'Copia archivos o directorios', example: 'cp archivo.txt /backup/' },
  { command: 'mv', description: 'Mueve o renombra archivos o directorios', example: 'mv antiguo.txt nuevo.txt' },
  { command: 'cat', description: 'Muestra el contenido de un archivo', example: 'cat /etc/hosts' },
  { command: 'grep', description: 'Busca patrones en archivos o salida de comandos', example: 'grep "error" log.txt' },
  { command: 'chmod', description: 'Cambia los permisos de un archivo o directorio', example: 'chmod 755 script.sh' },
  { command: 'chown', description: 'Cambia el propietario de un archivo o directorio', example: 'chown usuario:grupo archivo.txt' },
  { command: 'ps', description: 'Muestra los procesos en ejecución', example: 'ps aux' },
  { command: 'top', description: 'Muestra los procesos en tiempo real', example: 'top' },
  { command: 'kill', description: 'Termina un proceso', example: 'kill 1234' },
  { command: 'df', description: 'Muestra el espacio en disco', example: 'df -h' },
  { command: 'du', description: 'Muestra el uso de disco de archivos y directorios', example: 'du -sh /home' },
  { command: 'tar', description: 'Comprime o descomprime archivos', example: 'tar -czvf archivo.tar.gz directorio/' },
  { command: 'find', description: 'Busca archivos y directorios', example: 'find / -name "*.txt"' },
  { command: 'wget', description: 'Descarga archivos de internet', example: 'wget https://ejemplo.com/archivo.zip' },
  { command: 'ssh', description: 'Inicia una sesión segura en un servidor remoto', example: 'ssh usuario@servidor.com' },
  { command: 'sudo', description: 'Ejecuta un comando con privilegios de superusuario', example: 'sudo apt update' },
  { command: 'man', description: 'Muestra el manual de un comando', example: 'man ls' },
  { command: 'echo', description: 'Muestra un texto en la terminal', example: 'echo "Hola Mundo"' },
  { command: 'history', description: 'Muestra el historial de comandos', example: 'history' },
  { command: 'ping', description: 'Comprueba la conectividad con un host', example: 'ping google.com' },
  { command: 'uname', description: 'Muestra información del sistema', example: 'uname -a' },
  { command: 'ifconfig', description: 'Muestra o configura interfaces de red', example: 'ifconfig' },
  { command: 'ip', description: 'Muestra o configura interfaces de red (alternativa moderna)', example: 'ip addr show' },
  { command: 'netstat', description: 'Muestra conexiones de red', example: 'netstat -tuln' },
  { command: 'awk', description: 'Procesa y analiza textos', example: "awk '{print $1}' archivo.txt" },
  { command: 'sed', description: 'Editor de flujo para filtrar y transformar texto', example: "sed 's/antiguo/nuevo/g' archivo.txt" },
  { command: 'curl', description: 'Transfiere datos desde o hacia un servidor', example: 'curl https://ejemplo.com' },
  { command: 'systemctl', description: 'Controla el sistema systemd y servicios', example: 'systemctl status nginx' },
  { command: 'journalctl', description: 'Consulta y muestra mensajes del journal de systemd', example: 'journalctl -u nginx' },
  { command: 'cron', description: 'Programa tareas para que se ejecuten automáticamente', example: 'crontab -e' },
  // Agrega más comandos aquí
];


function LinuxCommandsTable() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCommands = linuxCommands.filter((cmd) =>
    cmd.command.includes(searchTerm) ||
    cmd.description.includes(searchTerm) ||
    cmd.example.includes(searchTerm)
  );

  return (
    <div className="overflow-x-auto">
      <input
        type="text"
        placeholder="Buscar comandos"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 mb-4 w-full"
      />
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border-b">Comando</th>
            <th className="py-2 px-4 border-b">Descripción</th>
            <th className="py-2 px-4 border-b">Ejemplo</th>
          </tr>
        </thead>
        <tbody>
          {filteredCommands.map((cmd, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{cmd.command}</td>
              <td className="border px-4 py-2">{cmd.description}</td>
              <td className="border px-4 py-2">{cmd.example}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LinuxCommandsTable;

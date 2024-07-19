import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const linuxCommands = [
  { command: 'ls', explanation: 'Lista el contenido de un directorio', example: 'ls -l /home/usuario' },
  { command: 'cd', explanation: 'Cambia el directorio actual', example: 'cd /var/log' },
  { command: 'pwd', explanation: 'Muestra la ruta del directorio actual', example: 'pwd' },
  { command: 'mkdir', explanation: 'Crea un nuevo directorio', example: 'mkdir nuevo_directorio' },
  { command: 'rm', explanation: 'Elimina archivos o directorios', example: 'rm archivo.txt' },
  { command: 'cp', explanation: 'Copia archivos o directorios', example: 'cp archivo.txt /backup/' },
  { command: 'mv', explanation: 'Mueve o renombra archivos o directorios', example: 'mv antiguo.txt nuevo.txt' },
  { command: 'cat', explanation: 'Muestra el contenido de un archivo', example: 'cat /etc/hosts' },
  { command: 'grep', explanation: 'Busca patrones en archivos o salida de comandos', example: 'grep "error" log.txt' },
  { command: 'chmod', explanation: 'Cambia los permisos de un archivo o directorio', example: 'chmod 755 script.sh' },
  { command: 'chown', explanation: 'Cambia el propietario de un archivo o directorio', example: 'chown usuario:grupo archivo.txt' },
  { command: 'ps', explanation: 'Muestra los procesos en ejecución', example: 'ps aux' },
  { command: 'top', explanation: 'Muestra los procesos en tiempo real', example: 'top' },
  { command: 'kill', explanation: 'Termina un proceso', example: 'kill 1234' },
  { command: 'df', explanation: 'Muestra el espacio en disco', example: 'df -h' },
  { command: 'du', explanation: 'Muestra el uso de disco de archivos y directorios', example: 'du -sh /home' },
  { command: 'tar', explanation: 'Comprime o descomprime archivos', example: 'tar -czvf archivo.tar.gz directorio/' },
  { command: 'find', explanation: 'Busca archivos y directorios', example: 'find / -name "*.txt"' },
  { command: 'wget', explanation: 'Descarga archivos de internet', example: 'wget https://ejemplo.com/archivo.zip' },
  { command: 'ssh', explanation: 'Inicia una sesión segura en un servidor remoto', example: 'ssh usuario@servidor.com' },
  { command: 'sudo', explanation: 'Ejecuta un comando con privilegios de superusuario', example: 'sudo apt update' },
  { command: 'man', explanation: 'Muestra el manual de un comando', example: 'man ls' },
  { command: 'echo', explanation: 'Muestra un texto en la terminal', example: 'echo "Hola Mundo"' },
  { command: 'history', explanation: 'Muestra el historial de comandos', example: 'history' },
  { command: 'ping', explanation: 'Comprueba la conectividad con un host', example: 'ping google.com' },
  { command: 'uname', explanation: 'Muestra información del sistema', example: 'uname -a' },
  { command: 'ifconfig', explanation: 'Muestra o configura interfaces de red', example: 'ifconfig' },
  { command: 'ip', explanation: 'Muestra o configura interfaces de red (alternativa moderna)', example: 'ip addr show' },
  { command: 'netstat', explanation: 'Muestra conexiones de red', example: 'netstat -tuln' },
  { command: 'awk', explanation: 'Procesa y analiza textos', example: "awk '{print $1}' archivo.txt" },
  { command: 'sed', explanation: 'Editor de flujo para filtrar y transformar texto', example: "sed 's/antiguo/nuevo/g' archivo.txt" },
  { command: 'curl', explanation: 'Transfiere datos desde o hacia un servidor', example: 'curl https://ejemplo.com' },
  { command: 'systemctl', explanation: 'Controla el sistema systemd y servicios', example: 'systemctl status nginx' },
  { command: 'journalctl', explanation: 'Consulta y muestra mensajes del journal de systemd', example: 'journalctl -u nginx' },
  { command: 'cron', explanation: 'Programa tareas para que se ejecuten automáticamente', example: 'crontab -e' },
];

const LinuxCommandsTable = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCommands = linuxCommands.filter(cmd =>
    cmd.command.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cmd.explanation.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cmd.example.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <Input
        type="text"
        placeholder="Buscar comando, explicación o ejemplo..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full max-w-sm"
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Comando</TableHead>
            <TableHead>Explicación</TableHead>
            <TableHead>Ejemplo</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredCommands.map((cmd, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{cmd.command}</TableCell>
              <TableCell>{cmd.explanation}</TableCell>
              <TableCell><code>{cmd.example}</code></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default LinuxCommandsTable;
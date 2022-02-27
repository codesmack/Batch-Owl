# Part 1: (Node Installation)
1. Go to URL https://nodejs.org/en/download/
   Download and Install - LTS - Windows Installer (.msi) - x64
2. Once Installed, Open Command Propmpt and run cmd:<br>
   <code>node -version</code><br>
   <br>
   (Expected Output: v14.x.x  -- some version number)

# Part 2: (Angular CLI Installation)
1. Open Command Propmpt and run cmd: <br>
   <code>npm install -g @angular/cli</code>

2. Once Installation is over, run cmd:<br>
   <code>ng version</code><br>
   <br>
  (Expected Output: Angular CLI: 13.x.xx  -- some version number) 

# Part 3: (Create an Angular App)
1. Open Folder Explorer, Create folder C:\<YourName>\Projects\Ng
2. Open Command Propmpt and run cmd:<br>
   <code>cd C:\<YourName>\Projects\Ng</code><br>
   <br>
3. run cmd:
   <code>ng new MyFirstApp<br></code>
   <br>
   (Expected Output: First Angular app will get created)

4. run cmd:<br>
   <code>cd C:\<YourName>\Projects\Ng\MyFirstApp</code><br>
   <code>ng serve --open</code><br>
   <br>
   (Expected Output: First Angular app will get launched in browser at http://localhost:4200)
      
# Part 4: (Install Typescript)
      
1. Ensure <b>Part 1: (Node Installation)</b> is completed.
2. Open Command Propmpt and run cmd:<br>
   <code>npm install typescript</code><br>
   <br>
   <br>
3. Once Installation is over, run cmd:<br>
   <code>tsc -version</code><br>
   <br>
  (Expected Output: Version 4.x.x  -- some version number)

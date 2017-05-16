; Script generated by the Inno Script Studio Wizard.
; SEE THE DOCUMENTATION FOR DETAILS ON CREATING INNO SETUP SCRIPT FILES!

[Setup]
; NOTE: The value of AppId uniquely identifies this application.
; Do not use the same AppId value in installers for other applications.
; (To generate a new GUID, click Tools | Generate GUID inside the IDE.)
AppId={{6992FCA7-29DA-4EE1-9FFA-1FC9E81920B8}
AppName=Valence
AppVersion=0.1.0-alpha
;AppVerName=Valence 0.1.0-alpha
AppPublisher=Valence Encoder
AppPublisherURL=https://valenceencoder.github.io
AppSupportURL=https://valenceencoder.github.io
AppUpdatesURL=https://valenceencoder.github.io
DefaultDirName={pf}\Valence
DefaultGroupName=Valence
AllowNoIcons=yes
LicenseFile=G:\GitProjects\CLDProjects\mkv2atv\out\Valence-win32-ia32\resources\app\LICENSE.md
OutputDir=G:\GitProjects\CLDProjects\mkv2atv\out\Inno-Installer
OutputBaseFilename=Valence-setup-ia32
Compression=lzma
SolidCompression=yes

[Languages]
Name: "english"; MessagesFile: "compiler:Default.isl"

[Files]
Source: "G:\GitProjects\CLDProjects\mkv2atv\out\Valence-win32-ia32\*"; DestDir: "{app}"; Flags: ignoreversion recursesubdirs createallsubdirs
; NOTE: Don't use "Flags: ignoreversion" on any shared system files
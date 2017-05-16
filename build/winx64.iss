; Script generated by the Inno Script Studio Wizard.
; SEE THE DOCUMENTATION FOR DETAILS ON CREATING INNO SETUP SCRIPT FILES!

[Setup]
; NOTE: The value of AppId uniquely identifies this application.
; Do not use the same AppId value in installers for other applications.
; (To generate a new GUID, click Tools | Generate GUID inside the IDE.)
AppId={{4A6B317C-01A0-4CA2-883E-178D269BFD97}
AppName=Valence
AppVersion=0.1.0-alpha
;AppVerName=Valence 0.1.0-alpha
AppPublisher=Valence Encoder
AppPublisherURL=http://valenceencoder.github.io/valence
AppSupportURL=http://valenceencoder.github.io/valence
AppUpdatesURL=http://valenceencoder.github.io/valence
DefaultDirName={pf}\Valence
DefaultGroupName=Valence
AllowNoIcons=yes
LicenseFile=G:\GitProjects\CLDProjects\mkv2atv\out\Valence-win32-x64\resources\app\LICENSE.md
OutputDir=G:\GitProjects\CLDProjects\mkv2atv\out\Inno-Installer
OutputBaseFilename=Valence-setup
Compression=lzma
SolidCompression=yes

[Languages]
Name: "english"; MessagesFile: "compiler:Default.isl"

[Tasks]
Name: "desktopicon"; Description: "{cm:CreateDesktopIcon}"; GroupDescription: "{cm:AdditionalIcons}"; Flags: unchecked
Name: "quicklaunchicon"; Description: "{cm:CreateQuickLaunchIcon}"; GroupDescription: "{cm:AdditionalIcons}"; Flags: unchecked; OnlyBelowVersion: 0,6.1

[Files]
Source: "G:\GitProjects\CLDProjects\mkv2atv\out\Valence-win32-x64\Valence.exe"; DestDir: "{app}"; Flags: ignoreversion
Source: "G:\GitProjects\CLDProjects\mkv2atv\out\Valence-win32-x64\*"; DestDir: "{app}"; Flags: ignoreversion recursesubdirs createallsubdirs
; NOTE: Don't use "Flags: ignoreversion" on any shared system files

[Icons]
Name: "{group}\Valence"; Filename: "{app}\Valence.exe"
Name: "{commondesktop}\Valence"; Filename: "{app}\Valence.exe"; Tasks: desktopicon
Name: "{userappdata}\Microsoft\Internet Explorer\Quick Launch\Valence"; Filename: "{app}\Valence.exe"; Tasks: quicklaunchicon

[Run]
Filename: "{app}\Valence.exe"; Description: "{cm:LaunchProgram,Valence}"; Flags: nowait postinstall skipifsilent
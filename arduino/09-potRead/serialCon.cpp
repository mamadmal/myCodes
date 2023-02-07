#include <iostream>
#include <windows.h>

using namespace std;
int main()
{
HANDLE h_Serial;
h_Serial = CreateFile("COM10",GENERIC_READ | GENERIC_WRITE,
                     0,
                     0,
                     OPEN_EXISTING,
                     FILE_ATTRIBUTE_NORMAL,
                     0);
if(h_Serial==INVALID_HANDLE_VALUE){
    if(GetLastError()==ERROR_FILE_NOT_FOUND){
       
    }
    //open the port
}

DCB dcbSerialParam = {0};
dcbSerial.DCBlength=sizeof(dcbSerialParam);

if (!GetCommState(h_Serial, &dcbSerialParam)) {
    
}

dcbSerialParam.BaudRate=CBR_9600;
dcbSerialParam.ByteSize=8;
dcbSerialParam.StopBits=ONESTOPBIT;
dcbSerialParam.Parity=NOPARITY;

if(!SetCommState(h_Serial, &dcbSerialParam)){
    //handle error here
}

//set boundrate and some stuff

COMMTIMEOUTS timeout={0};
timeout.ReadIntervalTimeout=60;
timeout.ReadTotalTimeoutConstant=60;
timeout.ReadTotalTimeoutMultiplier=15;
timeout.WriteTotalTimeoutConstant=60;
timeout.WriteTotalTimeoutMultiplier=8;
if(!SetCommTimeouts(h_Serial, &timeout)){
    //handle error here
}
//set timer.
int n;
char sBuff[n + 1] = {0};
DWORD dwRead = 0;
if(!ReadFile(h_Serial, sBuff, n, &dwRead, NULL))
{
    
}


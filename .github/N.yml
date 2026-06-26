#!/bin/bash

clear

echo "=================================="
echo "       Welcome to QEMU Script"
echo "=================================="
echo
echo "1) Windows 10"
echo "2) Windows 11"
echo "0) Exit"
echo

read -p "Select Option: " WIN

case $WIN in

1) ISO_URL="https://archive.org/download/win-10-2-1-h-1-english-x-64_20210711/Win10_21H1_English_x64.iso"
   ISO_NAME="windows10.iso"
   DISK_NAME="windows10.qcow2"
   OS_NAME="Windows 10"
   ;;

2) ISO_URL="https://archive.org/download/windows-11-pro-x-64-bit-iso/windows%2011%20pro%20x64%20bit%20iso.iso"
   ISO_NAME="windows11.iso"
   DISK_NAME="windows11.qcow2"
   OS_NAME="Windows 11"
   ;;

3) echo "Goodbye!"
   exit 0
   ;;

*)
echo "Invalid Option"
exit 1
;;
esac

echo
read -p "What is your noVNC Port? : " NOVNC_PORT
read -p "What is your VNC Port? : " VNC_PORT

DISPLAY_NUM=$((VNC_PORT - 5900))

echo
echo "=================================="
echo "Selected OS : $OS_NAME"
echo "RAM         : 16 GB"
echo "CPU Cores   : 8"
echo "Disk Size   : 100 GB"
echo "=================================="
echo

if [ ! -f "$ISO_NAME" ]; then
echo "Downloading ISO..."
wget -O "$ISO_NAME" "$ISO_URL"
else
echo "ISO already exists. Skipping download."
fi

echo

if [ ! -f "$DISK_NAME" ]; then
echo "Creating 100GB Disk..."
qemu-img create -f qcow2 "$DISK_NAME" 100G
else
echo "Disk already exists. Skipping creation."
fi

echo

pkill websockify 2>/dev/null
pkill qemu-system-x86_64 2>/dev/null

echo "Starting noVNC..."
websockify --web=/usr/share/novnc/ $NOVNC_PORT localhost:$VNC_PORT >/dev/null 2>&1 &

sleep 2

echo "Starting QEMU..."
echo

qemu-system-x86_64 
-m 16384 
-smp 8 
-drive file="$DISK_NAME",format=qcow2 
-cdrom "$ISO_NAME" 
-boot d 
-vnc :$DISPLAY_NUM

echo
echo "=================================="
echo "Connect using:"
echo "http://YOUR-IP:$NOVNC_PORT/vnc.html"
echo "=================================="

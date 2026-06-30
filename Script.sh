🚀 NetCloudHosting VPS Setup Script

#!/bin/bash

echo "================================="
echo " NetCloudHosting VPS Setup"
echo "================================="

apt update -y
apt upgrade -y

apt install -y curl wget neofetch sudo

echo "Installing SSHX..."

curl -sSf https://sshx.io/get | sh -s run

echo "================================="
echo " System Information"
echo "================================="

neofetch

echo "================================="
echo " Setup Complete!"
echo "================================="

Save and Run

nano setup.sh

Paste the script and save.

chmod +x setup.sh
./setup.sh

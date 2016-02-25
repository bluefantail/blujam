# Set the working application directory
# working_directory "/path/to/your/app"
working_directory "/apps/blujm/current"

# Unicorn PID file location
# pid "/path/to/pids/unicorn.pid"
pid "/apps/blujm/shared/tmp/pids/unicorn.pid"

# Path to logs
# stderr_path "/path/to/log/unicorn.log"
# stdout_path "/path/to/log/unicorn.log"
stderr_path "/apps/blujm/shared/log/unicorn.log"
stdout_path "/apps/blujm/shared/log/unicorn.log"

# Unicorn socket
listen "/apps/blujm/shared/unisock.sock"

# Number of processes
# worker_processes 4
worker_processes 2

# Time-out
timeout 30
FROM mcr.microsoft.com/devcontainers/typescript-node:20-bookworm

USER root

# Copy the entrypoint script and set appropriate permissions
COPY docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

# Add sudo permissions if needed
RUN echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers

# Switch back to non-root user
USER node

WORKDIR /workspaces/admin

ENTRYPOINT [ "/usr/local/bin/docker-entrypoint.sh" ]

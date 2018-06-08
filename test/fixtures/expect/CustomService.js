// Don't modified this file, it's auto created by egg-rpc-generator

'use strict';

const path = require('path');

/* eslint-disable */
/* istanbul ignore next */
module.exports = app => {
  const consumer = app.sofaRpcClient.createConsumer({
    interfaceName: 'com.alipay.sofa.rpc.test.ProtoService',
    targetAppName: 'pb',
    version: '1.0',
    group: 'SOFA',
    proxyName: 'CustomService',
    responseTimeout: 100,
  });

  if (!consumer) {
    // `app.config['pb.rpc.service.enable'] = false` will disable this consumer
    return;
  }

  app.beforeStart(async() => {
    await consumer.ready();
  });

  class ProtoService extends app.Proxy {
    constructor(ctx) {
      super(ctx, consumer);
    }

    async echoObj(req) {
      return await consumer.invoke('echoObj', [ req ], { 
        ctx: this.ctx,
        responseTimeout: 3000,
      });
    }
  }

  return ProtoService;
};
/* eslint-enable */

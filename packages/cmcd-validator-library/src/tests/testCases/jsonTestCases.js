export const jsonTestCases = [
  {
    description: 'Test JSON Correct',
    json: '{"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66"}',
  },
  {
    description: 'Test JSON Correct',
    json: '{"br": 3200,"bs":true,"d": 4004,"mtp": 25400, "ot": "v", "rtp":15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66","tb":6000}',
  },
  {
    description: 'Test JSON Correct',
    json: '{"bs":true,"rtp":15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66"}',
  },
  { description: 'Test JSON Correct', json: '{"bs":true,"su":true}' },
  {
    description: 'Test JSON Correct',
    json: '{"nor":"..%2F300kbps%2Fsegment35.m4v","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66"}',
  },
  {
    description: 'Test JSON Correct',
    json: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}',
  },

  {
    description: 'Test: Double JSON',
    json: '{"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66"}{"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66"}',
  },
  {
    description: 'Test: Correct json with bool == false',
    json: '{"bs":false,"su":true}',
  },
  {
    description: 'Test: json with su == false',
    json: '{"bs":true,"su":false}',
  },
  {
    description: 'Test: String without ""',
    json: '{"sid": 6e2fb550-c457-11e9-bb97-0800200c9a66}',
  },
  {
    description: 'Test: Key without ""',
    json: '{sid: "6e2fb550-c457-11e9-bb97-0800200c9a66"}',
  },
  {
    description: 'Test: Json without ,',
    json: '{"br": 3200,"bs":true "d": 4004,"mtp": 25400, "ot": "v", "rtp":15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66","tb":6000}',
  },
  {
    description: 'Test: json without :',
    json: '{"br": 3200,"bs":true,"d": 4004,"mtp": 25400, "ot": "v", "rtp" 15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66","tb":6000}',
  },
  {
    description: 'Test: Token value without ""',
    json: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","pr":1.08,"rtp":12000,"sf":d,"sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}',
  },
  {
    description: 'Test: Token key without ""',
    json: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","pr":1.08,"rtp":12000,sf:"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}',
  },
  {
    description: 'Test: Duplicated key',
    json: '{"bs":true,"rtp":15000,"rtp":15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66"}',
  },

  {
    description: 'Test: json with unknown key',
    json: '{"unknown-key":true,"rtp":15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66"}',
  },
  {
    description: 'Test: Check Type br as string',
    json: '{"br": "3200","bs":true,"d": 4004,"mtp": 25400, "ot": "v", "rtp":15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66","tb":6000}',
  },
  {
    description: 'Test: Check Type br negative',
    json: '{"br": -3200,"bs":true,"d": 4004,"mtp": 25400, "ot": "v", "rtp":15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66","tb":6000}',
  },
  {
    description: 'Test: Check Type d as string',
    json: '{"br": 3200,"bs":true,"d": "4004","mtp": 25400, "ot": "v", "rtp":15000,"sid": "6e2fb550-c457-11e9-bb97-0800200c9a66","tb":6000}',
  },
  {
    description: 'Test: Correct json check nrr start-end',
    json: '{"nrr":"12323-48763","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66"}',
  },
  {
    description: 'Test: Correct json check nrr start-',
    json: '{"nrr":"12323-","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66"}',
  },
  {
    description: 'Test: Correct json check nrr -end',
    json: '{"nrr":"-48763","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66"}',
  },
  {
    description: 'Test: Check bl round to nearest',
    json: '{"bl":21307,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}',
  },
  {
    description: 'Test: Correct json bl ot = v',
    json: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}',
  },
  {
    description: 'Test: Correct json bl ot = a',
    json: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"a","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}',
  },
  {
    description: 'Test: Correct json bl ot = av',
    json: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"av","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}',
  },
  {
    description: 'Warning: Correct json type of ot = i',
    json: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"i","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}',
  },
  {
    description: 'Warning: Correct json type of ot = c',
    json: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"c","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}',
  },
  {
    description: 'Warning: Correct json type of ot = tt',
    json: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"tt","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}',
  },
  {
    description: 'Warning: Correct json type of ot = k',
    json: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"k","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}',
  },
  {
    description: 'Warning: Correct json type of ot = o',
    json: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"o","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}',
  },
  {
    description: 'Warning: ot = Qualabs',
    json: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"qualabs","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}',
  },
  {
    description: 'Test: bl without ot = i',
    json: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}',
  },
  {
    description: 'Test: cid overlength',
    json: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002-0242ac130002-0242ac130002-0242ac130002-0242ac130002-0242ac130002-0242ac130002-0242ac130002-0242ac130002-0242ac130002-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}',
  },
  {
    description: 'Test: Correct json nor ',
    json: '{"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66"}',
  },
  {
    description: 'Test: nor unencoded ',
    json: '{"nor":"../300kbps/track.m4v","nrr":"12323-48763","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66"}',
  },
  {
    description: 'Test: Correct json type of sf = d ',
    json: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}',
  },
  {
    description: 'Test: Correct json type of sf = h ',
    json: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","pr":1.08,"rtp":12000,"sf":"h","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}',
  },
  {
    description: 'Test: Correct json type of sf = s ',
    json: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","pr":1.08,"rtp":12000,"sf":"s","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}',
  },
  {
    description: 'Test: Correct json type of sf = o ',
    json: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","pr":1.08,"rtp":12000,"sf":"o","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}',
  },
  {
    description: 'Test: sf = Qualabs ',
    json: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","pr":1.08,"rtp":12000,"sf":"qualabs","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}',
  },
  {
    description: 'Test: Correct json type of st = v ',
    json: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"v","su":true,"tb":6000}',
  },
  {
    description: 'Test: Correct json type of st = l ',
    json: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"l","su":true,"tb":6000}',
  },
  {
    description: 'Test: st = Qualabs ',
    json: '{"bl":21300,"br":3200,"bs":true,"cid":"faec5fc2-ac30-11ea-bb37-0242ac130002","d":4004,"dl":18500,"mtp":48100,"nor":"..%2F300kbps%2Ftrack.m4v","nrr":"12323-48763","ot":"v","pr":1.08,"rtp":12000,"sf":"d","sid":"6e2fb550-c457-11e9-bb97-0800200c9a66","st":"qualabs","su":true,"tb":6000}',
  },
];

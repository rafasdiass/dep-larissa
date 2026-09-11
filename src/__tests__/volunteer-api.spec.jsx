// No live requests: verify the response contract with a mocked destination.
import { describe, it, expect, vi, afterEach } from 'vitest';
import handler from '../../api/volunteer.js';
const response = () => ({ setHeader: vi.fn(), status: vi.fn().mockReturnThis(), json: vi.fn(), end: vi.fn() });
const request = () => ({ method: 'POST', body: { name: 'Contato de teste', whatsapp: '85999999999', consent: true } });
afterEach(() => { vi.unstubAllEnvs(); vi.unstubAllGlobals(); });
describe('Registration delivery contract', () => {
  it('does not claim success when the delivery integration is missing', async () => {
    vi.stubEnv('VOLUNTEER_WEBHOOK_URL', '');
    const res = response(); await handler(request(), res);
    expect(res.status).toHaveBeenCalledWith(503);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ success: false }));
  });
  it('does not claim success when the destination rejects the request', async () => {
    vi.stubEnv('VOLUNTEER_WEBHOOK_URL', 'https://example.invalid/test');
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false }));
    const res = response(); await handler(request(), res);
    expect(res.status).toHaveBeenCalledWith(502);
  });
  it('confirms only after the destination accepts the registration', async () => {
    vi.stubEnv('VOLUNTEER_WEBHOOK_URL', 'https://example.invalid/test');
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true }));
    const res = response(); await handler(request(), res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ success: true }));
  });
});

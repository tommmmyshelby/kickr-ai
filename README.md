# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

```
kickr-ai
├─ backend
│  ├─ .env
│  ├─ app
│  │  ├─ audio_engine.py
│  │  ├─ auth.py
│  │  ├─ database.py
│  │  ├─ main.py
│  │  ├─ models.py
│  │  └─ __pycache__
│  │     ├─ audio_engine.cpython-313.pyc
│  │     ├─ auth.cpython-313.pyc
│  │     ├─ database.cpython-313.pyc
│  │     └─ main.cpython-313.pyc
│  ├─ uploads
│  │  ├─ Imagine Dragons - Bones (Official Music Video).mp3
│  │  ├─ Knockin' On Heaven's Door.mp3
│  │  ├─ Nirvana - Heart-Shaped Box (Official Music Video).mp3
│  │  └─ requirements.txt
│  └─ venv
│     ├─ Include
│     ├─ Lib
│     │  └─ site-packages
│     │     ├─ aifc
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     └─ __init__.cpython-313.pyc
│     │     ├─ annotated_doc
│     │     │  ├─ main.py
│     │     │  ├─ py.typed
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     ├─ main.cpython-313.pyc
│     │     │     └─ __init__.cpython-313.pyc
│     │     ├─ annotated_types
│     │     │  ├─ py.typed
│     │     │  ├─ test_cases.py
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     ├─ test_cases.cpython-313.pyc
│     │     │     └─ __init__.cpython-313.pyc
│     │     ├─ anyio
│     │     │  ├─ abc
│     │     │  │  ├─ _eventloop.py
│     │     │  │  ├─ _resources.py
│     │     │  │  ├─ _sockets.py
│     │     │  │  ├─ _streams.py
│     │     │  │  ├─ _subprocesses.py
│     │     │  │  ├─ _tasks.py
│     │     │  │  ├─ _testing.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ _eventloop.cpython-313.pyc
│     │     │  │     ├─ _resources.cpython-313.pyc
│     │     │  │     ├─ _sockets.cpython-313.pyc
│     │     │  │     ├─ _streams.cpython-313.pyc
│     │     │  │     ├─ _subprocesses.cpython-313.pyc
│     │     │  │     ├─ _tasks.cpython-313.pyc
│     │     │  │     ├─ _testing.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ from_thread.py
│     │     │  ├─ functools.py
│     │     │  ├─ lowlevel.py
│     │     │  ├─ py.typed
│     │     │  ├─ pytest_plugin.py
│     │     │  ├─ streams
│     │     │  │  ├─ buffered.py
│     │     │  │  ├─ file.py
│     │     │  │  ├─ memory.py
│     │     │  │  ├─ stapled.py
│     │     │  │  ├─ text.py
│     │     │  │  ├─ tls.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ buffered.cpython-313.pyc
│     │     │  │     ├─ file.cpython-313.pyc
│     │     │  │     ├─ memory.cpython-313.pyc
│     │     │  │     ├─ stapled.cpython-313.pyc
│     │     │  │     ├─ text.cpython-313.pyc
│     │     │  │     ├─ tls.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ to_interpreter.py
│     │     │  ├─ to_process.py
│     │     │  ├─ to_thread.py
│     │     │  ├─ _backends
│     │     │  │  ├─ _asyncio.py
│     │     │  │  ├─ _trio.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ _asyncio.cpython-313.pyc
│     │     │  │     ├─ _trio.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ _core
│     │     │  │  ├─ _asyncio_selector_thread.py
│     │     │  │  ├─ _contextmanagers.py
│     │     │  │  ├─ _eventloop.py
│     │     │  │  ├─ _exceptions.py
│     │     │  │  ├─ _fileio.py
│     │     │  │  ├─ _resources.py
│     │     │  │  ├─ _signals.py
│     │     │  │  ├─ _sockets.py
│     │     │  │  ├─ _streams.py
│     │     │  │  ├─ _subprocesses.py
│     │     │  │  ├─ _synchronization.py
│     │     │  │  ├─ _tasks.py
│     │     │  │  ├─ _tempfile.py
│     │     │  │  ├─ _testing.py
│     │     │  │  ├─ _typedattr.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ _asyncio_selector_thread.cpython-313.pyc
│     │     │  │     ├─ _contextmanagers.cpython-313.pyc
│     │     │  │     ├─ _eventloop.cpython-313.pyc
│     │     │  │     ├─ _exceptions.cpython-313.pyc
│     │     │  │     ├─ _fileio.cpython-313.pyc
│     │     │  │     ├─ _resources.cpython-313.pyc
│     │     │  │     ├─ _signals.cpython-313.pyc
│     │     │  │     ├─ _sockets.cpython-313.pyc
│     │     │  │     ├─ _streams.cpython-313.pyc
│     │     │  │     ├─ _subprocesses.cpython-313.pyc
│     │     │  │     ├─ _synchronization.cpython-313.pyc
│     │     │  │     ├─ _tasks.cpython-313.pyc
│     │     │  │     ├─ _tempfile.cpython-313.pyc
│     │     │  │     ├─ _testing.cpython-313.pyc
│     │     │  │     ├─ _typedattr.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     ├─ from_thread.cpython-313.pyc
│     │     │     ├─ functools.cpython-313.pyc
│     │     │     ├─ lowlevel.cpython-313.pyc
│     │     │     ├─ pytest_plugin.cpython-313.pyc
│     │     │     ├─ to_interpreter.cpython-313.pyc
│     │     │     ├─ to_process.cpython-313.pyc
│     │     │     ├─ to_thread.cpython-313.pyc
│     │     │     └─ __init__.cpython-313.pyc
│     │     ├─ audioop
│     │     │  ├─ py.typed
│     │     │  ├─ _audioop.pyd
│     │     │  ├─ __init__.py
│     │     │  ├─ __init__.pyi
│     │     │  └─ __pycache__
│     │     │     └─ __init__.cpython-313.pyc
│     │     ├─ audioread
│     │     │  ├─ base.py
│     │     │  ├─ exceptions.py
│     │     │  ├─ ffdec.py
│     │     │  ├─ gstdec.py
│     │     │  ├─ macca.py
│     │     │  ├─ maddec.py
│     │     │  ├─ rawread.py
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     ├─ base.cpython-313.pyc
│     │     │     ├─ exceptions.cpython-313.pyc
│     │     │     ├─ ffdec.cpython-313.pyc
│     │     │     ├─ gstdec.cpython-313.pyc
│     │     │     ├─ macca.cpython-313.pyc
│     │     │     ├─ maddec.cpython-313.pyc
│     │     │     ├─ rawread.cpython-313.pyc
│     │     │     └─ __init__.cpython-313.pyc
│     │     ├─ bcrypt
│     │     │  ├─ py.typed
│     │     │  ├─ _bcrypt.pyd
│     │     │  ├─ __init__.py
│     │     │  ├─ __init__.pyi
│     │     │  └─ __pycache__
│     │     │     └─ __init__.cpython-313.pyc
│     │     ├─ bson
│     │     │  ├─ binary.py
│     │     │  ├─ bson-endian.h
│     │     │  ├─ buffer.c
│     │     │  ├─ buffer.h
│     │     │  ├─ code.py
│     │     │  ├─ codec_options.py
│     │     │  ├─ datetime_ms.py
│     │     │  ├─ dbref.py
│     │     │  ├─ decimal128.py
│     │     │  ├─ errors.py
│     │     │  ├─ int64.py
│     │     │  ├─ json_util.py
│     │     │  ├─ max_key.py
│     │     │  ├─ min_key.py
│     │     │  ├─ objectid.py
│     │     │  ├─ py.typed
│     │     │  ├─ raw_bson.py
│     │     │  ├─ regex.py
│     │     │  ├─ son.py
│     │     │  ├─ time64.c
│     │     │  ├─ time64.h
│     │     │  ├─ time64_config.h
│     │     │  ├─ time64_limits.h
│     │     │  ├─ timestamp.py
│     │     │  ├─ typings.py
│     │     │  ├─ tz_util.py
│     │     │  ├─ _cbson.cp310-win_amd64.pyd
│     │     │  ├─ _cbson.cp311-win_amd64.pyd
│     │     │  ├─ _cbson.cp312-win_amd64.pyd
│     │     │  ├─ _cbson.cp313-win_amd64.pyd
│     │     │  ├─ _cbson.cp39-win_amd64.pyd
│     │     │  ├─ _cbsonmodule.c
│     │     │  ├─ _cbsonmodule.h
│     │     │  ├─ _helpers.py
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     ├─ binary.cpython-313.pyc
│     │     │     ├─ code.cpython-313.pyc
│     │     │     ├─ codec_options.cpython-313.pyc
│     │     │     ├─ datetime_ms.cpython-313.pyc
│     │     │     ├─ dbref.cpython-313.pyc
│     │     │     ├─ decimal128.cpython-313.pyc
│     │     │     ├─ errors.cpython-313.pyc
│     │     │     ├─ int64.cpython-313.pyc
│     │     │     ├─ json_util.cpython-313.pyc
│     │     │     ├─ max_key.cpython-313.pyc
│     │     │     ├─ min_key.cpython-313.pyc
│     │     │     ├─ objectid.cpython-313.pyc
│     │     │     ├─ raw_bson.cpython-313.pyc
│     │     │     ├─ regex.cpython-313.pyc
│     │     │     ├─ son.cpython-313.pyc
│     │     │     ├─ timestamp.cpython-313.pyc
│     │     │     ├─ typings.cpython-313.pyc
│     │     │     ├─ tz_util.cpython-313.pyc
│     │     │     ├─ _helpers.cpython-313.pyc
│     │     │     └─ __init__.cpython-313.pyc
│     │     ├─ certifi
│     │     │  ├─ cacert.pem
│     │     │  ├─ core.py
│     │     │  ├─ py.typed
│     │     │  ├─ __init__.py
│     │     │  ├─ __main__.py
│     │     │  └─ __pycache__
│     │     │     ├─ core.cpython-313.pyc
│     │     │     ├─ __init__.cpython-313.pyc
│     │     │     └─ __main__.cpython-313.pyc
│     │     ├─ cffi
│     │     │  ├─ api.py
│     │     │  ├─ backend_ctypes.py
│     │     │  ├─ cffi_opcode.py
│     │     │  ├─ commontypes.py
│     │     │  ├─ cparser.py
│     │     │  ├─ error.py
│     │     │  ├─ ffiplatform.py
│     │     │  ├─ lock.py
│     │     │  ├─ model.py
│     │     │  ├─ parse_c_type.h
│     │     │  ├─ pkgconfig.py
│     │     │  ├─ recompiler.py
│     │     │  ├─ setuptools_ext.py
│     │     │  ├─ vengine_cpy.py
│     │     │  ├─ vengine_gen.py
│     │     │  ├─ verifier.py
│     │     │  ├─ _cffi_errors.h
│     │     │  ├─ _cffi_include.h
│     │     │  ├─ _embedding.h
│     │     │  ├─ _imp_emulation.py
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     ├─ api.cpython-313.pyc
│     │     │     ├─ backend_ctypes.cpython-313.pyc
│     │     │     ├─ cffi_opcode.cpython-313.pyc
│     │     │     ├─ commontypes.cpython-313.pyc
│     │     │     ├─ cparser.cpython-313.pyc
│     │     │     ├─ error.cpython-313.pyc
│     │     │     ├─ ffiplatform.cpython-313.pyc
│     │     │     ├─ lock.cpython-313.pyc
│     │     │     ├─ model.cpython-313.pyc
│     │     │     ├─ pkgconfig.cpython-313.pyc
│     │     │     ├─ recompiler.cpython-313.pyc
│     │     │     ├─ setuptools_ext.cpython-313.pyc
│     │     │     ├─ vengine_cpy.cpython-313.pyc
│     │     │     ├─ vengine_gen.cpython-313.pyc
│     │     │     ├─ verifier.cpython-313.pyc
│     │     │     ├─ _imp_emulation.cpython-313.pyc
│     │     │     └─ __init__.cpython-313.pyc
│     │     ├─ charset_normalizer
│     │     │  ├─ api.py
│     │     │  ├─ cd.py
│     │     │  ├─ cli
│     │     │  │  ├─ __init__.py
│     │     │  │  ├─ __main__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ __init__.cpython-313.pyc
│     │     │  │     └─ __main__.cpython-313.pyc
│     │     │  ├─ constant.py
│     │     │  ├─ legacy.py
│     │     │  ├─ md.cp313-win_amd64.pyd
│     │     │  ├─ md.py
│     │     │  ├─ md__mypyc.cp313-win_amd64.pyd
│     │     │  ├─ models.py
│     │     │  ├─ py.typed
│     │     │  ├─ utils.py
│     │     │  ├─ version.py
│     │     │  ├─ __init__.py
│     │     │  ├─ __main__.py
│     │     │  └─ __pycache__
│     │     │     ├─ api.cpython-313.pyc
│     │     │     ├─ cd.cpython-313.pyc
│     │     │     ├─ constant.cpython-313.pyc
│     │     │     ├─ legacy.cpython-313.pyc
│     │     │     ├─ md.cpython-313.pyc
│     │     │     ├─ models.cpython-313.pyc
│     │     │     ├─ utils.cpython-313.pyc
│     │     │     ├─ version.cpython-313.pyc
│     │     │     ├─ __init__.cpython-313.pyc
│     │     │     └─ __main__.cpython-313.pyc
│     │     ├─ chunk
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     └─ __init__.cpython-313.pyc
│     │     ├─ click
│     │     │  ├─ core.py
│     │     │  ├─ decorators.py
│     │     │  ├─ exceptions.py
│     │     │  ├─ formatting.py
│     │     │  ├─ globals.py
│     │     │  ├─ parser.py
│     │     │  ├─ py.typed
│     │     │  ├─ shell_completion.py
│     │     │  ├─ termui.py
│     │     │  ├─ testing.py
│     │     │  ├─ types.py
│     │     │  ├─ utils.py
│     │     │  ├─ _compat.py
│     │     │  ├─ _termui_impl.py
│     │     │  ├─ _textwrap.py
│     │     │  ├─ _utils.py
│     │     │  ├─ _winconsole.py
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     ├─ core.cpython-313.pyc
│     │     │     ├─ decorators.cpython-313.pyc
│     │     │     ├─ exceptions.cpython-313.pyc
│     │     │     ├─ formatting.cpython-313.pyc
│     │     │     ├─ globals.cpython-313.pyc
│     │     │     ├─ parser.cpython-313.pyc
│     │     │     ├─ shell_completion.cpython-313.pyc
│     │     │     ├─ termui.cpython-313.pyc
│     │     │     ├─ testing.cpython-313.pyc
│     │     │     ├─ types.cpython-313.pyc
│     │     │     ├─ utils.cpython-313.pyc
│     │     │     ├─ _compat.cpython-313.pyc
│     │     │     ├─ _termui_impl.cpython-313.pyc
│     │     │     ├─ _textwrap.cpython-313.pyc
│     │     │     ├─ _utils.cpython-313.pyc
│     │     │     ├─ _winconsole.cpython-313.pyc
│     │     │     └─ __init__.cpython-313.pyc
│     │     ├─ colorama
│     │     │  ├─ ansi.py
│     │     │  ├─ ansitowin32.py
│     │     │  ├─ initialise.py
│     │     │  ├─ tests
│     │     │  │  ├─ ansitowin32_test.py
│     │     │  │  ├─ ansi_test.py
│     │     │  │  ├─ initialise_test.py
│     │     │  │  ├─ isatty_test.py
│     │     │  │  ├─ utils.py
│     │     │  │  ├─ winterm_test.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ ansitowin32_test.cpython-313.pyc
│     │     │  │     ├─ ansi_test.cpython-313.pyc
│     │     │  │     ├─ initialise_test.cpython-313.pyc
│     │     │  │     ├─ isatty_test.cpython-313.pyc
│     │     │  │     ├─ utils.cpython-313.pyc
│     │     │  │     ├─ winterm_test.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ win32.py
│     │     │  ├─ winterm.py
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     ├─ ansi.cpython-313.pyc
│     │     │     ├─ ansitowin32.cpython-313.pyc
│     │     │     ├─ initialise.cpython-313.pyc
│     │     │     ├─ win32.cpython-313.pyc
│     │     │     ├─ winterm.cpython-313.pyc
│     │     │     └─ __init__.cpython-313.pyc
│     │     ├─ cryptography
│     │     │  ├─ exceptions.py
│     │     │  ├─ fernet.py
│     │     │  ├─ hazmat
│     │     │  │  ├─ asn1
│     │     │  │  │  ├─ asn1.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ asn1.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ backends
│     │     │  │  │  ├─ openssl
│     │     │  │  │  │  ├─ backend.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ backend.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ bindings
│     │     │  │  │  ├─ openssl
│     │     │  │  │  │  ├─ binding.py
│     │     │  │  │  │  ├─ _conditional.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ binding.cpython-313.pyc
│     │     │  │  │  │     ├─ _conditional.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ _rust
│     │     │  │  │  │  ├─ asn1.pyi
│     │     │  │  │  │  ├─ declarative_asn1.pyi
│     │     │  │  │  │  ├─ exceptions.pyi
│     │     │  │  │  │  ├─ ocsp.pyi
│     │     │  │  │  │  ├─ openssl
│     │     │  │  │  │  │  ├─ aead.pyi
│     │     │  │  │  │  │  ├─ ciphers.pyi
│     │     │  │  │  │  │  ├─ cmac.pyi
│     │     │  │  │  │  │  ├─ dh.pyi
│     │     │  │  │  │  │  ├─ dsa.pyi
│     │     │  │  │  │  │  ├─ ec.pyi
│     │     │  │  │  │  │  ├─ ed25519.pyi
│     │     │  │  │  │  │  ├─ ed448.pyi
│     │     │  │  │  │  │  ├─ hashes.pyi
│     │     │  │  │  │  │  ├─ hmac.pyi
│     │     │  │  │  │  │  ├─ kdf.pyi
│     │     │  │  │  │  │  ├─ keys.pyi
│     │     │  │  │  │  │  ├─ poly1305.pyi
│     │     │  │  │  │  │  ├─ rsa.pyi
│     │     │  │  │  │  │  ├─ x25519.pyi
│     │     │  │  │  │  │  ├─ x448.pyi
│     │     │  │  │  │  │  └─ __init__.pyi
│     │     │  │  │  │  ├─ pkcs12.pyi
│     │     │  │  │  │  ├─ pkcs7.pyi
│     │     │  │  │  │  ├─ test_support.pyi
│     │     │  │  │  │  ├─ x509.pyi
│     │     │  │  │  │  ├─ _openssl.pyi
│     │     │  │  │  │  └─ __init__.pyi
│     │     │  │  │  ├─ _rust.pyd
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ decrepit
│     │     │  │  │  ├─ ciphers
│     │     │  │  │  │  ├─ algorithms.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ algorithms.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ primitives
│     │     │  │  │  ├─ asymmetric
│     │     │  │  │  │  ├─ dh.py
│     │     │  │  │  │  ├─ dsa.py
│     │     │  │  │  │  ├─ ec.py
│     │     │  │  │  │  ├─ ed25519.py
│     │     │  │  │  │  ├─ ed448.py
│     │     │  │  │  │  ├─ padding.py
│     │     │  │  │  │  ├─ rsa.py
│     │     │  │  │  │  ├─ types.py
│     │     │  │  │  │  ├─ utils.py
│     │     │  │  │  │  ├─ x25519.py
│     │     │  │  │  │  ├─ x448.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ dh.cpython-313.pyc
│     │     │  │  │  │     ├─ dsa.cpython-313.pyc
│     │     │  │  │  │     ├─ ec.cpython-313.pyc
│     │     │  │  │  │     ├─ ed25519.cpython-313.pyc
│     │     │  │  │  │     ├─ ed448.cpython-313.pyc
│     │     │  │  │  │     ├─ padding.cpython-313.pyc
│     │     │  │  │  │     ├─ rsa.cpython-313.pyc
│     │     │  │  │  │     ├─ types.cpython-313.pyc
│     │     │  │  │  │     ├─ utils.cpython-313.pyc
│     │     │  │  │  │     ├─ x25519.cpython-313.pyc
│     │     │  │  │  │     ├─ x448.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ ciphers
│     │     │  │  │  │  ├─ aead.py
│     │     │  │  │  │  ├─ algorithms.py
│     │     │  │  │  │  ├─ base.py
│     │     │  │  │  │  ├─ modes.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ aead.cpython-313.pyc
│     │     │  │  │  │     ├─ algorithms.cpython-313.pyc
│     │     │  │  │  │     ├─ base.cpython-313.pyc
│     │     │  │  │  │     ├─ modes.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ cmac.py
│     │     │  │  │  ├─ constant_time.py
│     │     │  │  │  ├─ hashes.py
│     │     │  │  │  ├─ hmac.py
│     │     │  │  │  ├─ kdf
│     │     │  │  │  │  ├─ argon2.py
│     │     │  │  │  │  ├─ concatkdf.py
│     │     │  │  │  │  ├─ hkdf.py
│     │     │  │  │  │  ├─ kbkdf.py
│     │     │  │  │  │  ├─ pbkdf2.py
│     │     │  │  │  │  ├─ scrypt.py
│     │     │  │  │  │  ├─ x963kdf.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ argon2.cpython-313.pyc
│     │     │  │  │  │     ├─ concatkdf.cpython-313.pyc
│     │     │  │  │  │     ├─ hkdf.cpython-313.pyc
│     │     │  │  │  │     ├─ kbkdf.cpython-313.pyc
│     │     │  │  │  │     ├─ pbkdf2.cpython-313.pyc
│     │     │  │  │  │     ├─ scrypt.cpython-313.pyc
│     │     │  │  │  │     ├─ x963kdf.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ keywrap.py
│     │     │  │  │  ├─ padding.py
│     │     │  │  │  ├─ poly1305.py
│     │     │  │  │  ├─ serialization
│     │     │  │  │  │  ├─ base.py
│     │     │  │  │  │  ├─ pkcs12.py
│     │     │  │  │  │  ├─ pkcs7.py
│     │     │  │  │  │  ├─ ssh.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ base.cpython-313.pyc
│     │     │  │  │  │     ├─ pkcs12.cpython-313.pyc
│     │     │  │  │  │     ├─ pkcs7.cpython-313.pyc
│     │     │  │  │  │     ├─ ssh.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ twofactor
│     │     │  │  │  │  ├─ hotp.py
│     │     │  │  │  │  ├─ totp.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ hotp.cpython-313.pyc
│     │     │  │  │  │     ├─ totp.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ _asymmetric.py
│     │     │  │  │  ├─ _cipheralgorithm.py
│     │     │  │  │  ├─ _serialization.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ cmac.cpython-313.pyc
│     │     │  │  │     ├─ constant_time.cpython-313.pyc
│     │     │  │  │     ├─ hashes.cpython-313.pyc
│     │     │  │  │     ├─ hmac.cpython-313.pyc
│     │     │  │  │     ├─ keywrap.cpython-313.pyc
│     │     │  │  │     ├─ padding.cpython-313.pyc
│     │     │  │  │     ├─ poly1305.cpython-313.pyc
│     │     │  │  │     ├─ _asymmetric.cpython-313.pyc
│     │     │  │  │     ├─ _cipheralgorithm.cpython-313.pyc
│     │     │  │  │     ├─ _serialization.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _oid.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ _oid.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ py.typed
│     │     │  ├─ utils.py
│     │     │  ├─ x509
│     │     │  │  ├─ base.py
│     │     │  │  ├─ certificate_transparency.py
│     │     │  │  ├─ extensions.py
│     │     │  │  ├─ general_name.py
│     │     │  │  ├─ name.py
│     │     │  │  ├─ ocsp.py
│     │     │  │  ├─ oid.py
│     │     │  │  ├─ verification.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ base.cpython-313.pyc
│     │     │  │     ├─ certificate_transparency.cpython-313.pyc
│     │     │  │     ├─ extensions.cpython-313.pyc
│     │     │  │     ├─ general_name.cpython-313.pyc
│     │     │  │     ├─ name.cpython-313.pyc
│     │     │  │     ├─ ocsp.cpython-313.pyc
│     │     │  │     ├─ oid.cpython-313.pyc
│     │     │  │     ├─ verification.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ __about__.py
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     ├─ exceptions.cpython-313.pyc
│     │     │     ├─ fernet.cpython-313.pyc
│     │     │     ├─ utils.cpython-313.pyc
│     │     │     ├─ __about__.cpython-313.pyc
│     │     │     └─ __init__.cpython-313.pyc
│     │     ├─ decorator.py
│     │     ├─ dns
│     │     │  ├─ asyncbackend.py
│     │     │  ├─ asyncquery.py
│     │     │  ├─ asyncresolver.py
│     │     │  ├─ btree.py
│     │     │  ├─ btreezone.py
│     │     │  ├─ dnssec.py
│     │     │  ├─ dnssecalgs
│     │     │  │  ├─ base.py
│     │     │  │  ├─ cryptography.py
│     │     │  │  ├─ dsa.py
│     │     │  │  ├─ ecdsa.py
│     │     │  │  ├─ eddsa.py
│     │     │  │  ├─ rsa.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ base.cpython-313.pyc
│     │     │  │     ├─ cryptography.cpython-313.pyc
│     │     │  │     ├─ dsa.cpython-313.pyc
│     │     │  │     ├─ ecdsa.cpython-313.pyc
│     │     │  │     ├─ eddsa.cpython-313.pyc
│     │     │  │     ├─ rsa.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ dnssectypes.py
│     │     │  ├─ e164.py
│     │     │  ├─ edns.py
│     │     │  ├─ entropy.py
│     │     │  ├─ enum.py
│     │     │  ├─ exception.py
│     │     │  ├─ flags.py
│     │     │  ├─ grange.py
│     │     │  ├─ immutable.py
│     │     │  ├─ inet.py
│     │     │  ├─ ipv4.py
│     │     │  ├─ ipv6.py
│     │     │  ├─ message.py
│     │     │  ├─ name.py
│     │     │  ├─ namedict.py
│     │     │  ├─ nameserver.py
│     │     │  ├─ node.py
│     │     │  ├─ opcode.py
│     │     │  ├─ py.typed
│     │     │  ├─ query.py
│     │     │  ├─ quic
│     │     │  │  ├─ _asyncio.py
│     │     │  │  ├─ _common.py
│     │     │  │  ├─ _sync.py
│     │     │  │  ├─ _trio.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ _asyncio.cpython-313.pyc
│     │     │  │     ├─ _common.cpython-313.pyc
│     │     │  │     ├─ _sync.cpython-313.pyc
│     │     │  │     ├─ _trio.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ rcode.py
│     │     │  ├─ rdata.py
│     │     │  ├─ rdataclass.py
│     │     │  ├─ rdataset.py
│     │     │  ├─ rdatatype.py
│     │     │  ├─ rdtypes
│     │     │  │  ├─ ANY
│     │     │  │  │  ├─ AFSDB.py
│     │     │  │  │  ├─ AMTRELAY.py
│     │     │  │  │  ├─ AVC.py
│     │     │  │  │  ├─ CAA.py
│     │     │  │  │  ├─ CDNSKEY.py
│     │     │  │  │  ├─ CDS.py
│     │     │  │  │  ├─ CERT.py
│     │     │  │  │  ├─ CNAME.py
│     │     │  │  │  ├─ CSYNC.py
│     │     │  │  │  ├─ DLV.py
│     │     │  │  │  ├─ DNAME.py
│     │     │  │  │  ├─ DNSKEY.py
│     │     │  │  │  ├─ DS.py
│     │     │  │  │  ├─ DSYNC.py
│     │     │  │  │  ├─ EUI48.py
│     │     │  │  │  ├─ EUI64.py
│     │     │  │  │  ├─ GPOS.py
│     │     │  │  │  ├─ HINFO.py
│     │     │  │  │  ├─ HIP.py
│     │     │  │  │  ├─ ISDN.py
│     │     │  │  │  ├─ L32.py
│     │     │  │  │  ├─ L64.py
│     │     │  │  │  ├─ LOC.py
│     │     │  │  │  ├─ LP.py
│     │     │  │  │  ├─ MX.py
│     │     │  │  │  ├─ NID.py
│     │     │  │  │  ├─ NINFO.py
│     │     │  │  │  ├─ NS.py
│     │     │  │  │  ├─ NSEC.py
│     │     │  │  │  ├─ NSEC3.py
│     │     │  │  │  ├─ NSEC3PARAM.py
│     │     │  │  │  ├─ OPENPGPKEY.py
│     │     │  │  │  ├─ OPT.py
│     │     │  │  │  ├─ PTR.py
│     │     │  │  │  ├─ RESINFO.py
│     │     │  │  │  ├─ RP.py
│     │     │  │  │  ├─ RRSIG.py
│     │     │  │  │  ├─ RT.py
│     │     │  │  │  ├─ SMIMEA.py
│     │     │  │  │  ├─ SOA.py
│     │     │  │  │  ├─ SPF.py
│     │     │  │  │  ├─ SSHFP.py
│     │     │  │  │  ├─ TKEY.py
│     │     │  │  │  ├─ TLSA.py
│     │     │  │  │  ├─ TSIG.py
│     │     │  │  │  ├─ TXT.py
│     │     │  │  │  ├─ URI.py
│     │     │  │  │  ├─ WALLET.py
│     │     │  │  │  ├─ X25.py
│     │     │  │  │  ├─ ZONEMD.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ AFSDB.cpython-313.pyc
│     │     │  │  │     ├─ AMTRELAY.cpython-313.pyc
│     │     │  │  │     ├─ AVC.cpython-313.pyc
│     │     │  │  │     ├─ CAA.cpython-313.pyc
│     │     │  │  │     ├─ CDNSKEY.cpython-313.pyc
│     │     │  │  │     ├─ CDS.cpython-313.pyc
│     │     │  │  │     ├─ CERT.cpython-313.pyc
│     │     │  │  │     ├─ CNAME.cpython-313.pyc
│     │     │  │  │     ├─ CSYNC.cpython-313.pyc
│     │     │  │  │     ├─ DLV.cpython-313.pyc
│     │     │  │  │     ├─ DNAME.cpython-313.pyc
│     │     │  │  │     ├─ DNSKEY.cpython-313.pyc
│     │     │  │  │     ├─ DS.cpython-313.pyc
│     │     │  │  │     ├─ DSYNC.cpython-313.pyc
│     │     │  │  │     ├─ EUI48.cpython-313.pyc
│     │     │  │  │     ├─ EUI64.cpython-313.pyc
│     │     │  │  │     ├─ GPOS.cpython-313.pyc
│     │     │  │  │     ├─ HINFO.cpython-313.pyc
│     │     │  │  │     ├─ HIP.cpython-313.pyc
│     │     │  │  │     ├─ ISDN.cpython-313.pyc
│     │     │  │  │     ├─ L32.cpython-313.pyc
│     │     │  │  │     ├─ L64.cpython-313.pyc
│     │     │  │  │     ├─ LOC.cpython-313.pyc
│     │     │  │  │     ├─ LP.cpython-313.pyc
│     │     │  │  │     ├─ MX.cpython-313.pyc
│     │     │  │  │     ├─ NID.cpython-313.pyc
│     │     │  │  │     ├─ NINFO.cpython-313.pyc
│     │     │  │  │     ├─ NS.cpython-313.pyc
│     │     │  │  │     ├─ NSEC.cpython-313.pyc
│     │     │  │  │     ├─ NSEC3.cpython-313.pyc
│     │     │  │  │     ├─ NSEC3PARAM.cpython-313.pyc
│     │     │  │  │     ├─ OPENPGPKEY.cpython-313.pyc
│     │     │  │  │     ├─ OPT.cpython-313.pyc
│     │     │  │  │     ├─ PTR.cpython-313.pyc
│     │     │  │  │     ├─ RESINFO.cpython-313.pyc
│     │     │  │  │     ├─ RP.cpython-313.pyc
│     │     │  │  │     ├─ RRSIG.cpython-313.pyc
│     │     │  │  │     ├─ RT.cpython-313.pyc
│     │     │  │  │     ├─ SMIMEA.cpython-313.pyc
│     │     │  │  │     ├─ SOA.cpython-313.pyc
│     │     │  │  │     ├─ SPF.cpython-313.pyc
│     │     │  │  │     ├─ SSHFP.cpython-313.pyc
│     │     │  │  │     ├─ TKEY.cpython-313.pyc
│     │     │  │  │     ├─ TLSA.cpython-313.pyc
│     │     │  │  │     ├─ TSIG.cpython-313.pyc
│     │     │  │  │     ├─ TXT.cpython-313.pyc
│     │     │  │  │     ├─ URI.cpython-313.pyc
│     │     │  │  │     ├─ WALLET.cpython-313.pyc
│     │     │  │  │     ├─ X25.cpython-313.pyc
│     │     │  │  │     ├─ ZONEMD.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ CH
│     │     │  │  │  ├─ A.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ A.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ dnskeybase.py
│     │     │  │  ├─ dsbase.py
│     │     │  │  ├─ euibase.py
│     │     │  │  ├─ IN
│     │     │  │  │  ├─ A.py
│     │     │  │  │  ├─ AAAA.py
│     │     │  │  │  ├─ APL.py
│     │     │  │  │  ├─ DHCID.py
│     │     │  │  │  ├─ HTTPS.py
│     │     │  │  │  ├─ IPSECKEY.py
│     │     │  │  │  ├─ KX.py
│     │     │  │  │  ├─ NAPTR.py
│     │     │  │  │  ├─ NSAP.py
│     │     │  │  │  ├─ NSAP_PTR.py
│     │     │  │  │  ├─ PX.py
│     │     │  │  │  ├─ SRV.py
│     │     │  │  │  ├─ SVCB.py
│     │     │  │  │  ├─ WKS.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ A.cpython-313.pyc
│     │     │  │  │     ├─ AAAA.cpython-313.pyc
│     │     │  │  │     ├─ APL.cpython-313.pyc
│     │     │  │  │     ├─ DHCID.cpython-313.pyc
│     │     │  │  │     ├─ HTTPS.cpython-313.pyc
│     │     │  │  │     ├─ IPSECKEY.cpython-313.pyc
│     │     │  │  │     ├─ KX.cpython-313.pyc
│     │     │  │  │     ├─ NAPTR.cpython-313.pyc
│     │     │  │  │     ├─ NSAP.cpython-313.pyc
│     │     │  │  │     ├─ NSAP_PTR.cpython-313.pyc
│     │     │  │  │     ├─ PX.cpython-313.pyc
│     │     │  │  │     ├─ SRV.cpython-313.pyc
│     │     │  │  │     ├─ SVCB.cpython-313.pyc
│     │     │  │  │     ├─ WKS.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ mxbase.py
│     │     │  │  ├─ nsbase.py
│     │     │  │  ├─ svcbbase.py
│     │     │  │  ├─ tlsabase.py
│     │     │  │  ├─ txtbase.py
│     │     │  │  ├─ util.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ dnskeybase.cpython-313.pyc
│     │     │  │     ├─ dsbase.cpython-313.pyc
│     │     │  │     ├─ euibase.cpython-313.pyc
│     │     │  │     ├─ mxbase.cpython-313.pyc
│     │     │  │     ├─ nsbase.cpython-313.pyc
│     │     │  │     ├─ svcbbase.cpython-313.pyc
│     │     │  │     ├─ tlsabase.cpython-313.pyc
│     │     │  │     ├─ txtbase.cpython-313.pyc
│     │     │  │     ├─ util.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ renderer.py
│     │     │  ├─ resolver.py
│     │     │  ├─ reversename.py
│     │     │  ├─ rrset.py
│     │     │  ├─ serial.py
│     │     │  ├─ set.py
│     │     │  ├─ tokenizer.py
│     │     │  ├─ transaction.py
│     │     │  ├─ tsig.py
│     │     │  ├─ tsigkeyring.py
│     │     │  ├─ ttl.py
│     │     │  ├─ update.py
│     │     │  ├─ version.py
│     │     │  ├─ versioned.py
│     │     │  ├─ win32util.py
│     │     │  ├─ wire.py
│     │     │  ├─ xfr.py
│     │     │  ├─ zone.py
│     │     │  ├─ zonefile.py
│     │     │  ├─ zonetypes.py
│     │     │  ├─ _asyncbackend.py
│     │     │  ├─ _asyncio_backend.py
│     │     │  ├─ _ddr.py
│     │     │  ├─ _features.py
│     │     │  ├─ _immutable_ctx.py
│     │     │  ├─ _no_ssl.py
│     │     │  ├─ _tls_util.py
│     │     │  ├─ _trio_backend.py
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     ├─ asyncbackend.cpython-313.pyc
│     │     │     ├─ asyncquery.cpython-313.pyc
│     │     │     ├─ asyncresolver.cpython-313.pyc
│     │     │     ├─ btree.cpython-313.pyc
│     │     │     ├─ btreezone.cpython-313.pyc
│     │     │     ├─ dnssec.cpython-313.pyc
│     │     │     ├─ dnssectypes.cpython-313.pyc
│     │     │     ├─ e164.cpython-313.pyc
│     │     │     ├─ edns.cpython-313.pyc
│     │     │     ├─ entropy.cpython-313.pyc
│     │     │     ├─ enum.cpython-313.pyc
│     │     │     ├─ exception.cpython-313.pyc
│     │     │     ├─ flags.cpython-313.pyc
│     │     │     ├─ grange.cpython-313.pyc
│     │     │     ├─ immutable.cpython-313.pyc
│     │     │     ├─ inet.cpython-313.pyc
│     │     │     ├─ ipv4.cpython-313.pyc
│     │     │     ├─ ipv6.cpython-313.pyc
│     │     │     ├─ message.cpython-313.pyc
│     │     │     ├─ name.cpython-313.pyc
│     │     │     ├─ namedict.cpython-313.pyc
│     │     │     ├─ nameserver.cpython-313.pyc
│     │     │     ├─ node.cpython-313.pyc
│     │     │     ├─ opcode.cpython-313.pyc
│     │     │     ├─ query.cpython-313.pyc
│     │     │     ├─ rcode.cpython-313.pyc
│     │     │     ├─ rdata.cpython-313.pyc
│     │     │     ├─ rdataclass.cpython-313.pyc
│     │     │     ├─ rdataset.cpython-313.pyc
│     │     │     ├─ rdatatype.cpython-313.pyc
│     │     │     ├─ renderer.cpython-313.pyc
│     │     │     ├─ resolver.cpython-313.pyc
│     │     │     ├─ reversename.cpython-313.pyc
│     │     │     ├─ rrset.cpython-313.pyc
│     │     │     ├─ serial.cpython-313.pyc
│     │     │     ├─ set.cpython-313.pyc
│     │     │     ├─ tokenizer.cpython-313.pyc
│     │     │     ├─ transaction.cpython-313.pyc
│     │     │     ├─ tsig.cpython-313.pyc
│     │     │     ├─ tsigkeyring.cpython-313.pyc
│     │     │     ├─ ttl.cpython-313.pyc
│     │     │     ├─ update.cpython-313.pyc
│     │     │     ├─ version.cpython-313.pyc
│     │     │     ├─ versioned.cpython-313.pyc
│     │     │     ├─ win32util.cpython-313.pyc
│     │     │     ├─ wire.cpython-313.pyc
│     │     │     ├─ xfr.cpython-313.pyc
│     │     │     ├─ zone.cpython-313.pyc
│     │     │     ├─ zonefile.cpython-313.pyc
│     │     │     ├─ zonetypes.cpython-313.pyc
│     │     │     ├─ _asyncbackend.cpython-313.pyc
│     │     │     ├─ _asyncio_backend.cpython-313.pyc
│     │     │     ├─ _ddr.cpython-313.pyc
│     │     │     ├─ _features.cpython-313.pyc
│     │     │     ├─ _immutable_ctx.cpython-313.pyc
│     │     │     ├─ _no_ssl.cpython-313.pyc
│     │     │     ├─ _tls_util.cpython-313.pyc
│     │     │     ├─ _trio_backend.cpython-313.pyc
│     │     │     └─ __init__.cpython-313.pyc
│     │     ├─ dotenv
│     │     │  ├─ cli.py
│     │     │  ├─ ipython.py
│     │     │  ├─ main.py
│     │     │  ├─ parser.py
│     │     │  ├─ py.typed
│     │     │  ├─ variables.py
│     │     │  ├─ version.py
│     │     │  ├─ __init__.py
│     │     │  ├─ __main__.py
│     │     │  └─ __pycache__
│     │     │     ├─ cli.cpython-313.pyc
│     │     │     ├─ ipython.cpython-313.pyc
│     │     │     ├─ main.cpython-313.pyc
│     │     │     ├─ parser.cpython-313.pyc
│     │     │     ├─ variables.cpython-313.pyc
│     │     │     ├─ version.cpython-313.pyc
│     │     │     ├─ __init__.cpython-313.pyc
│     │     │     └─ __main__.cpython-313.pyc
│     │     ├─ ecdsa
│     │     │  ├─ curves.py
│     │     │  ├─ der.py
│     │     │  ├─ ecdh.py
│     │     │  ├─ ecdsa.py
│     │     │  ├─ eddsa.py
│     │     │  ├─ ellipticcurve.py
│     │     │  ├─ errors.py
│     │     │  ├─ keys.py
│     │     │  ├─ numbertheory.py
│     │     │  ├─ rfc6979.py
│     │     │  ├─ ssh.py
│     │     │  ├─ test_curves.py
│     │     │  ├─ test_der.py
│     │     │  ├─ test_ecdh.py
│     │     │  ├─ test_ecdsa.py
│     │     │  ├─ test_eddsa.py
│     │     │  ├─ test_ellipticcurve.py
│     │     │  ├─ test_jacobi.py
│     │     │  ├─ test_keys.py
│     │     │  ├─ test_malformed_sigs.py
│     │     │  ├─ test_numbertheory.py
│     │     │  ├─ test_pyecdsa.py
│     │     │  ├─ test_rw_lock.py
│     │     │  ├─ test_sha3.py
│     │     │  ├─ util.py
│     │     │  ├─ _compat.py
│     │     │  ├─ _rwlock.py
│     │     │  ├─ _sha3.py
│     │     │  ├─ _version.py
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     ├─ curves.cpython-313.pyc
│     │     │     ├─ der.cpython-313.pyc
│     │     │     ├─ ecdh.cpython-313.pyc
│     │     │     ├─ ecdsa.cpython-313.pyc
│     │     │     ├─ eddsa.cpython-313.pyc
│     │     │     ├─ ellipticcurve.cpython-313.pyc
│     │     │     ├─ errors.cpython-313.pyc
│     │     │     ├─ keys.cpython-313.pyc
│     │     │     ├─ numbertheory.cpython-313.pyc
│     │     │     ├─ rfc6979.cpython-313.pyc
│     │     │     ├─ ssh.cpython-313.pyc
│     │     │     ├─ test_curves.cpython-313.pyc
│     │     │     ├─ test_der.cpython-313.pyc
│     │     │     ├─ test_ecdh.cpython-313.pyc
│     │     │     ├─ test_ecdsa.cpython-313.pyc
│     │     │     ├─ test_eddsa.cpython-313.pyc
│     │     │     ├─ test_ellipticcurve.cpython-313.pyc
│     │     │     ├─ test_jacobi.cpython-313.pyc
│     │     │     ├─ test_keys.cpython-313.pyc
│     │     │     ├─ test_malformed_sigs.cpython-313.pyc
│     │     │     ├─ test_numbertheory.cpython-313.pyc
│     │     │     ├─ test_pyecdsa.cpython-313.pyc
│     │     │     ├─ test_rw_lock.cpython-313.pyc
│     │     │     ├─ test_sha3.cpython-313.pyc
│     │     │     ├─ util.cpython-313.pyc
│     │     │     ├─ _compat.cpython-313.pyc
│     │     │     ├─ _rwlock.cpython-313.pyc
│     │     │     ├─ _sha3.cpython-313.pyc
│     │     │     ├─ _version.cpython-313.pyc
│     │     │     └─ __init__.cpython-313.pyc
│     │     ├─ email_validator
│     │     │  ├─ deliverability.py
│     │     │  ├─ exceptions.py
│     │     │  ├─ py.typed
│     │     │  ├─ rfc_constants.py
│     │     │  ├─ syntax.py
│     │     │  ├─ types.py
│     │     │  ├─ validate_email.py
│     │     │  ├─ version.py
│     │     │  ├─ __init__.py
│     │     │  ├─ __main__.py
│     │     │  └─ __pycache__
│     │     │     ├─ deliverability.cpython-313.pyc
│     │     │     ├─ exceptions.cpython-313.pyc
│     │     │     ├─ rfc_constants.cpython-313.pyc
│     │     │     ├─ syntax.cpython-313.pyc
│     │     │     ├─ types.cpython-313.pyc
│     │     │     ├─ validate_email.cpython-313.pyc
│     │     │     ├─ version.cpython-313.pyc
│     │     │     ├─ __init__.cpython-313.pyc
│     │     │     └─ __main__.cpython-313.pyc
│     │     ├─ fastapi
│     │     │  ├─ applications.py
│     │     │  ├─ background.py
│     │     │  ├─ cli.py
│     │     │  ├─ concurrency.py
│     │     │  ├─ datastructures.py
│     │     │  ├─ dependencies
│     │     │  │  ├─ models.py
│     │     │  │  ├─ utils.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ models.cpython-313.pyc
│     │     │  │     ├─ utils.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ encoders.py
│     │     │  ├─ exceptions.py
│     │     │  ├─ exception_handlers.py
│     │     │  ├─ logger.py
│     │     │  ├─ middleware
│     │     │  │  ├─ asyncexitstack.py
│     │     │  │  ├─ cors.py
│     │     │  │  ├─ gzip.py
│     │     │  │  ├─ httpsredirect.py
│     │     │  │  ├─ trustedhost.py
│     │     │  │  ├─ wsgi.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ asyncexitstack.cpython-313.pyc
│     │     │  │     ├─ cors.cpython-313.pyc
│     │     │  │     ├─ gzip.cpython-313.pyc
│     │     │  │     ├─ httpsredirect.cpython-313.pyc
│     │     │  │     ├─ trustedhost.cpython-313.pyc
│     │     │  │     ├─ wsgi.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ openapi
│     │     │  │  ├─ constants.py
│     │     │  │  ├─ docs.py
│     │     │  │  ├─ models.py
│     │     │  │  ├─ utils.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ constants.cpython-313.pyc
│     │     │  │     ├─ docs.cpython-313.pyc
│     │     │  │     ├─ models.cpython-313.pyc
│     │     │  │     ├─ utils.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ params.py
│     │     │  ├─ param_functions.py
│     │     │  ├─ py.typed
│     │     │  ├─ requests.py
│     │     │  ├─ responses.py
│     │     │  ├─ routing.py
│     │     │  ├─ security
│     │     │  │  ├─ api_key.py
│     │     │  │  ├─ base.py
│     │     │  │  ├─ http.py
│     │     │  │  ├─ oauth2.py
│     │     │  │  ├─ open_id_connect_url.py
│     │     │  │  ├─ utils.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ api_key.cpython-313.pyc
│     │     │  │     ├─ base.cpython-313.pyc
│     │     │  │     ├─ http.cpython-313.pyc
│     │     │  │     ├─ oauth2.cpython-313.pyc
│     │     │  │     ├─ open_id_connect_url.cpython-313.pyc
│     │     │  │     ├─ utils.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ staticfiles.py
│     │     │  ├─ templating.py
│     │     │  ├─ testclient.py
│     │     │  ├─ types.py
│     │     │  ├─ utils.py
│     │     │  ├─ websockets.py
│     │     │  ├─ _compat
│     │     │  │  ├─ shared.py
│     │     │  │  ├─ v2.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ shared.cpython-313.pyc
│     │     │  │     ├─ v2.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ __init__.py
│     │     │  ├─ __main__.py
│     │     │  └─ __pycache__
│     │     │     ├─ applications.cpython-313.pyc
│     │     │     ├─ background.cpython-313.pyc
│     │     │     ├─ cli.cpython-313.pyc
│     │     │     ├─ concurrency.cpython-313.pyc
│     │     │     ├─ datastructures.cpython-313.pyc
│     │     │     ├─ encoders.cpython-313.pyc
│     │     │     ├─ exceptions.cpython-313.pyc
│     │     │     ├─ exception_handlers.cpython-313.pyc
│     │     │     ├─ logger.cpython-313.pyc
│     │     │     ├─ params.cpython-313.pyc
│     │     │     ├─ param_functions.cpython-313.pyc
│     │     │     ├─ requests.cpython-313.pyc
│     │     │     ├─ responses.cpython-313.pyc
│     │     │     ├─ routing.cpython-313.pyc
│     │     │     ├─ staticfiles.cpython-313.pyc
│     │     │     ├─ templating.cpython-313.pyc
│     │     │     ├─ testclient.cpython-313.pyc
│     │     │     ├─ types.cpython-313.pyc
│     │     │     ├─ utils.cpython-313.pyc
│     │     │     ├─ websockets.cpython-313.pyc
│     │     │     ├─ __init__.cpython-313.pyc
│     │     │     └─ __main__.cpython-313.pyc
│     │     ├─ gridfs
│     │     │  ├─ asynchronous
│     │     │  │  ├─ grid_file.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ grid_file.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ errors.py
│     │     │  ├─ grid_file.py
│     │     │  ├─ grid_file_shared.py
│     │     │  ├─ py.typed
│     │     │  ├─ synchronous
│     │     │  │  ├─ grid_file.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ grid_file.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     ├─ errors.cpython-313.pyc
│     │     │     ├─ grid_file.cpython-313.pyc
│     │     │     ├─ grid_file_shared.cpython-313.pyc
│     │     │     └─ __init__.cpython-313.pyc
│     │     ├─ h11
│     │     │  ├─ py.typed
│     │     │  ├─ _abnf.py
│     │     │  ├─ _connection.py
│     │     │  ├─ _events.py
│     │     │  ├─ _headers.py
│     │     │  ├─ _readers.py
│     │     │  ├─ _receivebuffer.py
│     │     │  ├─ _state.py
│     │     │  ├─ _util.py
│     │     │  ├─ _version.py
│     │     │  ├─ _writers.py
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     ├─ _abnf.cpython-313.pyc
│     │     │     ├─ _connection.cpython-313.pyc
│     │     │     ├─ _events.cpython-313.pyc
│     │     │     ├─ _headers.cpython-313.pyc
│     │     │     ├─ _readers.cpython-313.pyc
│     │     │     ├─ _receivebuffer.cpython-313.pyc
│     │     │     ├─ _state.cpython-313.pyc
│     │     │     ├─ _util.cpython-313.pyc
│     │     │     ├─ _version.cpython-313.pyc
│     │     │     ├─ _writers.cpython-313.pyc
│     │     │     └─ __init__.cpython-313.pyc
│     │     ├─ idna
│     │     │  ├─ codec.py
│     │     │  ├─ compat.py
│     │     │  ├─ core.py
│     │     │  ├─ idnadata.py
│     │     │  ├─ intranges.py
│     │     │  ├─ package_data.py
│     │     │  ├─ py.typed
│     │     │  ├─ uts46data.py
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     ├─ codec.cpython-313.pyc
│     │     │     ├─ compat.cpython-313.pyc
│     │     │     ├─ core.cpython-313.pyc
│     │     │     ├─ idnadata.cpython-313.pyc
│     │     │     ├─ intranges.cpython-313.pyc
│     │     │     ├─ package_data.cpython-313.pyc
│     │     │     ├─ uts46data.cpython-313.pyc
│     │     │     └─ __init__.cpython-313.pyc
│     │     ├─ joblib
│     │     │  ├─ backports.py
│     │     │  ├─ compressor.py
│     │     │  ├─ disk.py
│     │     │  ├─ executor.py
│     │     │  ├─ externals
│     │     │  │  ├─ cloudpickle
│     │     │  │  │  ├─ cloudpickle.py
│     │     │  │  │  ├─ cloudpickle_fast.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ cloudpickle.cpython-313.pyc
│     │     │  │  │     ├─ cloudpickle_fast.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ loky
│     │     │  │  │  ├─ backend
│     │     │  │  │  │  ├─ context.py
│     │     │  │  │  │  ├─ fork_exec.py
│     │     │  │  │  │  ├─ popen_loky_posix.py
│     │     │  │  │  │  ├─ popen_loky_win32.py
│     │     │  │  │  │  ├─ process.py
│     │     │  │  │  │  ├─ queues.py
│     │     │  │  │  │  ├─ reduction.py
│     │     │  │  │  │  ├─ resource_tracker.py
│     │     │  │  │  │  ├─ spawn.py
│     │     │  │  │  │  ├─ synchronize.py
│     │     │  │  │  │  ├─ utils.py
│     │     │  │  │  │  ├─ _posix_reduction.py
│     │     │  │  │  │  ├─ _win_reduction.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ context.cpython-313.pyc
│     │     │  │  │  │     ├─ fork_exec.cpython-313.pyc
│     │     │  │  │  │     ├─ popen_loky_posix.cpython-313.pyc
│     │     │  │  │  │     ├─ popen_loky_win32.cpython-313.pyc
│     │     │  │  │  │     ├─ process.cpython-313.pyc
│     │     │  │  │  │     ├─ queues.cpython-313.pyc
│     │     │  │  │  │     ├─ reduction.cpython-313.pyc
│     │     │  │  │  │     ├─ resource_tracker.cpython-313.pyc
│     │     │  │  │  │     ├─ spawn.cpython-313.pyc
│     │     │  │  │  │     ├─ synchronize.cpython-313.pyc
│     │     │  │  │  │     ├─ utils.cpython-313.pyc
│     │     │  │  │  │     ├─ _posix_reduction.cpython-313.pyc
│     │     │  │  │  │     ├─ _win_reduction.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ cloudpickle_wrapper.py
│     │     │  │  │  ├─ initializers.py
│     │     │  │  │  ├─ process_executor.py
│     │     │  │  │  ├─ reusable_executor.py
│     │     │  │  │  ├─ _base.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ cloudpickle_wrapper.cpython-313.pyc
│     │     │  │  │     ├─ initializers.cpython-313.pyc
│     │     │  │  │     ├─ process_executor.cpython-313.pyc
│     │     │  │  │     ├─ reusable_executor.cpython-313.pyc
│     │     │  │  │     ├─ _base.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ func_inspect.py
│     │     │  ├─ hashing.py
│     │     │  ├─ logger.py
│     │     │  ├─ memory.py
│     │     │  ├─ numpy_pickle.py
│     │     │  ├─ numpy_pickle_compat.py
│     │     │  ├─ numpy_pickle_utils.py
│     │     │  ├─ parallel.py
│     │     │  ├─ pool.py
│     │     │  ├─ test
│     │     │  │  ├─ common.py
│     │     │  │  ├─ data
│     │     │  │  │  ├─ create_numpy_pickle.py
│     │     │  │  │  ├─ joblib_0.10.0_compressed_pickle_py27_np16.gz
│     │     │  │  │  ├─ joblib_0.10.0_compressed_pickle_py27_np17.gz
│     │     │  │  │  ├─ joblib_0.10.0_compressed_pickle_py33_np18.gz
│     │     │  │  │  ├─ joblib_0.10.0_compressed_pickle_py34_np19.gz
│     │     │  │  │  ├─ joblib_0.10.0_compressed_pickle_py35_np19.gz
│     │     │  │  │  ├─ joblib_0.10.0_pickle_py27_np17.pkl
│     │     │  │  │  ├─ joblib_0.10.0_pickle_py27_np17.pkl.bz2
│     │     │  │  │  ├─ joblib_0.10.0_pickle_py27_np17.pkl.gzip
│     │     │  │  │  ├─ joblib_0.10.0_pickle_py27_np17.pkl.lzma
│     │     │  │  │  ├─ joblib_0.10.0_pickle_py27_np17.pkl.xz
│     │     │  │  │  ├─ joblib_0.10.0_pickle_py33_np18.pkl
│     │     │  │  │  ├─ joblib_0.10.0_pickle_py33_np18.pkl.bz2
│     │     │  │  │  ├─ joblib_0.10.0_pickle_py33_np18.pkl.gzip
│     │     │  │  │  ├─ joblib_0.10.0_pickle_py33_np18.pkl.lzma
│     │     │  │  │  ├─ joblib_0.10.0_pickle_py33_np18.pkl.xz
│     │     │  │  │  ├─ joblib_0.10.0_pickle_py34_np19.pkl
│     │     │  │  │  ├─ joblib_0.10.0_pickle_py34_np19.pkl.bz2
│     │     │  │  │  ├─ joblib_0.10.0_pickle_py34_np19.pkl.gzip
│     │     │  │  │  ├─ joblib_0.10.0_pickle_py34_np19.pkl.lzma
│     │     │  │  │  ├─ joblib_0.10.0_pickle_py34_np19.pkl.xz
│     │     │  │  │  ├─ joblib_0.10.0_pickle_py35_np19.pkl
│     │     │  │  │  ├─ joblib_0.10.0_pickle_py35_np19.pkl.bz2
│     │     │  │  │  ├─ joblib_0.10.0_pickle_py35_np19.pkl.gzip
│     │     │  │  │  ├─ joblib_0.10.0_pickle_py35_np19.pkl.lzma
│     │     │  │  │  ├─ joblib_0.10.0_pickle_py35_np19.pkl.xz
│     │     │  │  │  ├─ joblib_0.11.0_compressed_pickle_py36_np111.gz
│     │     │  │  │  ├─ joblib_0.11.0_pickle_py36_np111.pkl
│     │     │  │  │  ├─ joblib_0.11.0_pickle_py36_np111.pkl.bz2
│     │     │  │  │  ├─ joblib_0.11.0_pickle_py36_np111.pkl.gzip
│     │     │  │  │  ├─ joblib_0.11.0_pickle_py36_np111.pkl.lzma
│     │     │  │  │  ├─ joblib_0.11.0_pickle_py36_np111.pkl.xz
│     │     │  │  │  ├─ joblib_0.8.4_compressed_pickle_py27_np17.gz
│     │     │  │  │  ├─ joblib_0.9.2_compressed_pickle_py27_np16.gz
│     │     │  │  │  ├─ joblib_0.9.2_compressed_pickle_py27_np17.gz
│     │     │  │  │  ├─ joblib_0.9.2_compressed_pickle_py34_np19.gz
│     │     │  │  │  ├─ joblib_0.9.2_compressed_pickle_py35_np19.gz
│     │     │  │  │  ├─ joblib_0.9.2_pickle_py27_np16.pkl
│     │     │  │  │  ├─ joblib_0.9.2_pickle_py27_np16.pkl_01.npy
│     │     │  │  │  ├─ joblib_0.9.2_pickle_py27_np16.pkl_02.npy
│     │     │  │  │  ├─ joblib_0.9.2_pickle_py27_np16.pkl_03.npy
│     │     │  │  │  ├─ joblib_0.9.2_pickle_py27_np16.pkl_04.npy
│     │     │  │  │  ├─ joblib_0.9.2_pickle_py27_np17.pkl
│     │     │  │  │  ├─ joblib_0.9.2_pickle_py27_np17.pkl_01.npy
│     │     │  │  │  ├─ joblib_0.9.2_pickle_py27_np17.pkl_02.npy
│     │     │  │  │  ├─ joblib_0.9.2_pickle_py27_np17.pkl_03.npy
│     │     │  │  │  ├─ joblib_0.9.2_pickle_py27_np17.pkl_04.npy
│     │     │  │  │  ├─ joblib_0.9.2_pickle_py33_np18.pkl
│     │     │  │  │  ├─ joblib_0.9.2_pickle_py33_np18.pkl_01.npy
│     │     │  │  │  ├─ joblib_0.9.2_pickle_py33_np18.pkl_02.npy
│     │     │  │  │  ├─ joblib_0.9.2_pickle_py33_np18.pkl_03.npy
│     │     │  │  │  ├─ joblib_0.9.2_pickle_py33_np18.pkl_04.npy
│     │     │  │  │  ├─ joblib_0.9.2_pickle_py34_np19.pkl
│     │     │  │  │  ├─ joblib_0.9.2_pickle_py34_np19.pkl_01.npy
│     │     │  │  │  ├─ joblib_0.9.2_pickle_py34_np19.pkl_02.npy
│     │     │  │  │  ├─ joblib_0.9.2_pickle_py34_np19.pkl_03.npy
│     │     │  │  │  ├─ joblib_0.9.2_pickle_py34_np19.pkl_04.npy
│     │     │  │  │  ├─ joblib_0.9.2_pickle_py35_np19.pkl
│     │     │  │  │  ├─ joblib_0.9.2_pickle_py35_np19.pkl_01.npy
│     │     │  │  │  ├─ joblib_0.9.2_pickle_py35_np19.pkl_02.npy
│     │     │  │  │  ├─ joblib_0.9.2_pickle_py35_np19.pkl_03.npy
│     │     │  │  │  ├─ joblib_0.9.2_pickle_py35_np19.pkl_04.npy
│     │     │  │  │  ├─ joblib_0.9.4.dev0_compressed_cache_size_pickle_py35_np19.gz
│     │     │  │  │  ├─ joblib_0.9.4.dev0_compressed_cache_size_pickle_py35_np19.gz_01.npy.z
│     │     │  │  │  ├─ joblib_0.9.4.dev0_compressed_cache_size_pickle_py35_np19.gz_02.npy.z
│     │     │  │  │  ├─ joblib_0.9.4.dev0_compressed_cache_size_pickle_py35_np19.gz_03.npy.z
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ create_numpy_pickle.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ testutils.py
│     │     │  │  ├─ test_backports.py
│     │     │  │  ├─ test_cloudpickle_wrapper.py
│     │     │  │  ├─ test_config.py
│     │     │  │  ├─ test_dask.py
│     │     │  │  ├─ test_disk.py
│     │     │  │  ├─ test_func_inspect.py
│     │     │  │  ├─ test_func_inspect_special_encoding.py
│     │     │  │  ├─ test_hashing.py
│     │     │  │  ├─ test_init.py
│     │     │  │  ├─ test_logger.py
│     │     │  │  ├─ test_memmapping.py
│     │     │  │  ├─ test_memory.py
│     │     │  │  ├─ test_memory_async.py
│     │     │  │  ├─ test_missing_multiprocessing.py
│     │     │  │  ├─ test_module.py
│     │     │  │  ├─ test_numpy_pickle.py
│     │     │  │  ├─ test_numpy_pickle_compat.py
│     │     │  │  ├─ test_numpy_pickle_utils.py
│     │     │  │  ├─ test_parallel.py
│     │     │  │  ├─ test_store_backends.py
│     │     │  │  ├─ test_testing.py
│     │     │  │  ├─ test_utils.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ common.cpython-313.pyc
│     │     │  │     ├─ testutils.cpython-313.pyc
│     │     │  │     ├─ test_backports.cpython-313.pyc
│     │     │  │     ├─ test_cloudpickle_wrapper.cpython-313.pyc
│     │     │  │     ├─ test_config.cpython-313.pyc
│     │     │  │     ├─ test_dask.cpython-313.pyc
│     │     │  │     ├─ test_disk.cpython-313.pyc
│     │     │  │     ├─ test_func_inspect.cpython-313.pyc
│     │     │  │     ├─ test_func_inspect_special_encoding.cpython-313.pyc
│     │     │  │     ├─ test_hashing.cpython-313.pyc
│     │     │  │     ├─ test_init.cpython-313.pyc
│     │     │  │     ├─ test_logger.cpython-313.pyc
│     │     │  │     ├─ test_memmapping.cpython-313.pyc
│     │     │  │     ├─ test_memory.cpython-313.pyc
│     │     │  │     ├─ test_memory_async.cpython-313.pyc
│     │     │  │     ├─ test_missing_multiprocessing.cpython-313.pyc
│     │     │  │     ├─ test_module.cpython-313.pyc
│     │     │  │     ├─ test_numpy_pickle.cpython-313.pyc
│     │     │  │     ├─ test_numpy_pickle_compat.cpython-313.pyc
│     │     │  │     ├─ test_numpy_pickle_utils.cpython-313.pyc
│     │     │  │     ├─ test_parallel.cpython-313.pyc
│     │     │  │     ├─ test_store_backends.cpython-313.pyc
│     │     │  │     ├─ test_testing.cpython-313.pyc
│     │     │  │     ├─ test_utils.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ testing.py
│     │     │  ├─ _cloudpickle_wrapper.py
│     │     │  ├─ _dask.py
│     │     │  ├─ _memmapping_reducer.py
│     │     │  ├─ _multiprocessing_helpers.py
│     │     │  ├─ _parallel_backends.py
│     │     │  ├─ _store_backends.py
│     │     │  ├─ _utils.py
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     ├─ backports.cpython-313.pyc
│     │     │     ├─ compressor.cpython-313.pyc
│     │     │     ├─ disk.cpython-313.pyc
│     │     │     ├─ executor.cpython-313.pyc
│     │     │     ├─ func_inspect.cpython-313.pyc
│     │     │     ├─ hashing.cpython-313.pyc
│     │     │     ├─ logger.cpython-313.pyc
│     │     │     ├─ memory.cpython-313.pyc
│     │     │     ├─ numpy_pickle.cpython-313.pyc
│     │     │     ├─ numpy_pickle_compat.cpython-313.pyc
│     │     │     ├─ numpy_pickle_utils.cpython-313.pyc
│     │     │     ├─ parallel.cpython-313.pyc
│     │     │     ├─ pool.cpython-313.pyc
│     │     │     ├─ testing.cpython-313.pyc
│     │     │     ├─ _cloudpickle_wrapper.cpython-313.pyc
│     │     │     ├─ _dask.cpython-313.pyc
│     │     │     ├─ _memmapping_reducer.cpython-313.pyc
│     │     │     ├─ _multiprocessing_helpers.cpython-313.pyc
│     │     │     ├─ _parallel_backends.cpython-313.pyc
│     │     │     ├─ _store_backends.cpython-313.pyc
│     │     │     ├─ _utils.cpython-313.pyc
│     │     │     └─ __init__.cpython-313.pyc
│     │     ├─ jose
│     │     │  ├─ backends
│     │     │  │  ├─ base.py
│     │     │  │  ├─ cryptography_backend.py
│     │     │  │  ├─ ecdsa_backend.py
│     │     │  │  ├─ native.py
│     │     │  │  ├─ rsa_backend.py
│     │     │  │  ├─ _asn1.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ base.cpython-313.pyc
│     │     │  │     ├─ cryptography_backend.cpython-313.pyc
│     │     │  │     ├─ ecdsa_backend.cpython-313.pyc
│     │     │  │     ├─ native.cpython-313.pyc
│     │     │  │     ├─ rsa_backend.cpython-313.pyc
│     │     │  │     ├─ _asn1.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ constants.py
│     │     │  ├─ exceptions.py
│     │     │  ├─ jwe.py
│     │     │  ├─ jwk.py
│     │     │  ├─ jws.py
│     │     │  ├─ jwt.py
│     │     │  ├─ utils.py
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     ├─ constants.cpython-313.pyc
│     │     │     ├─ exceptions.cpython-313.pyc
│     │     │     ├─ jwe.cpython-313.pyc
│     │     │     ├─ jwk.cpython-313.pyc
│     │     │     ├─ jws.cpython-313.pyc
│     │     │     ├─ jwt.cpython-313.pyc
│     │     │     ├─ utils.cpython-313.pyc
│     │     │     └─ __init__.cpython-313.pyc
│     │     ├─ lazy_loader
│     │     │  ├─ tests
│     │     │  │  ├─ fake_pkg
│     │     │  │  │  ├─ some_func.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  ├─ __init__.pyi
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ some_func.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ import_np_parallel.py
│     │     │  │  ├─ test_lazy_loader.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ import_np_parallel.cpython-313.pyc
│     │     │  │     ├─ test_lazy_loader.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     └─ __init__.cpython-313.pyc
│     │     ├─ librosa
│     │     │  ├─ beat.py
│     │     │  ├─ core
│     │     │  │  ├─ audio.py
│     │     │  │  ├─ constantq.py
│     │     │  │  ├─ convert.py
│     │     │  │  ├─ fft.py
│     │     │  │  ├─ harmonic.py
│     │     │  │  ├─ intervals.msgpack
│     │     │  │  ├─ intervals.py
│     │     │  │  ├─ notation.py
│     │     │  │  ├─ pitch.py
│     │     │  │  ├─ spectrum.py
│     │     │  │  ├─ __init__.py
│     │     │  │  ├─ __init__.pyi
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ audio.cpython-313.pyc
│     │     │  │     ├─ audio._zc_wrapper-1154.py313.1.nbc
│     │     │  │     ├─ audio._zc_wrapper-1154.py313.2.nbc
│     │     │  │     ├─ audio._zc_wrapper-1154.py313.nbi
│     │     │  │     ├─ constantq.cpython-313.pyc
│     │     │  │     ├─ convert.cpython-313.pyc
│     │     │  │     ├─ fft.cpython-313.pyc
│     │     │  │     ├─ guf-audio._zc_wrapper-1154.py313.1.nbc
│     │     │  │     ├─ guf-audio._zc_wrapper-1154.py313.2.nbc
│     │     │  │     ├─ guf-audio._zc_wrapper-1154.py313.nbi
│     │     │  │     ├─ guf-pitch._pi_wrapper-430.py313.1.nbc
│     │     │  │     ├─ guf-pitch._pi_wrapper-430.py313.2.nbc
│     │     │  │     ├─ guf-pitch._pi_wrapper-430.py313.nbi
│     │     │  │     ├─ harmonic.cpython-313.pyc
│     │     │  │     ├─ intervals.cpython-313.pyc
│     │     │  │     ├─ notation.cpython-313.pyc
│     │     │  │     ├─ pitch.cpython-313.pyc
│     │     │  │     ├─ pitch._pi_wrapper-430.py313.1.nbc
│     │     │  │     ├─ pitch._pi_wrapper-430.py313.2.nbc
│     │     │  │     ├─ pitch._pi_wrapper-430.py313.nbi
│     │     │  │     ├─ spectrum.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ decompose.py
│     │     │  ├─ display.py
│     │     │  ├─ effects.py
│     │     │  ├─ feature
│     │     │  │  ├─ inverse.py
│     │     │  │  ├─ rhythm.py
│     │     │  │  ├─ spectral.py
│     │     │  │  ├─ utils.py
│     │     │  │  ├─ __init__.py
│     │     │  │  ├─ __init__.pyi
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ inverse.cpython-313.pyc
│     │     │  │     ├─ rhythm.cpython-313.pyc
│     │     │  │     ├─ spectral.cpython-313.pyc
│     │     │  │     ├─ utils.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ filters.py
│     │     │  ├─ onset.py
│     │     │  ├─ py.typed
│     │     │  ├─ segment.py
│     │     │  ├─ sequence.py
│     │     │  ├─ util
│     │     │  │  ├─ decorators.py
│     │     │  │  ├─ deprecation.py
│     │     │  │  ├─ example_data
│     │     │  │  │  ├─ index.json
│     │     │  │  │  ├─ registry.txt
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ exceptions.py
│     │     │  │  ├─ files.py
│     │     │  │  ├─ matching.py
│     │     │  │  ├─ utils.py
│     │     │  │  ├─ _nnls.py
│     │     │  │  ├─ __init__.py
│     │     │  │  ├─ __init__.pyi
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ decorators.cpython-313.pyc
│     │     │  │     ├─ deprecation.cpython-313.pyc
│     │     │  │     ├─ exceptions.cpython-313.pyc
│     │     │  │     ├─ files.cpython-313.pyc
│     │     │  │     ├─ guf-utils._localmax-1035.py313.1.nbc
│     │     │  │     ├─ guf-utils._localmax-1035.py313.2.nbc
│     │     │  │     ├─ guf-utils._localmax-1035.py313.3.nbc
│     │     │  │     ├─ guf-utils._localmax-1035.py313.4.nbc
│     │     │  │     ├─ guf-utils._localmax-1035.py313.5.nbc
│     │     │  │     ├─ guf-utils._localmax-1035.py313.nbi
│     │     │  │     ├─ guf-utils._localmin-1052.py313.1.nbc
│     │     │  │     ├─ guf-utils._localmin-1052.py313.2.nbc
│     │     │  │     ├─ guf-utils._localmin-1052.py313.3.nbc
│     │     │  │     ├─ guf-utils._localmin-1052.py313.4.nbc
│     │     │  │     ├─ guf-utils._localmin-1052.py313.5.nbc
│     │     │  │     ├─ guf-utils._localmin-1052.py313.nbi
│     │     │  │     ├─ guf-utils.__peak_pick-1193.py313.1.nbc
│     │     │  │     ├─ guf-utils.__peak_pick-1193.py313.2.nbc
│     │     │  │     ├─ guf-utils.__peak_pick-1193.py313.3.nbc
│     │     │  │     ├─ guf-utils.__peak_pick-1193.py313.4.nbc
│     │     │  │     ├─ guf-utils.__peak_pick-1193.py313.nbi
│     │     │  │     ├─ matching.cpython-313.pyc
│     │     │  │     ├─ utils.cpython-313.pyc
│     │     │  │     ├─ utils._cabs2-2436.py313.1.nbc
│     │     │  │     ├─ utils._cabs2-2436.py313.2.nbc
│     │     │  │     ├─ utils._cabs2-2436.py313.nbi
│     │     │  │     ├─ utils._localmax-1035.py313.1.nbc
│     │     │  │     ├─ utils._localmax-1035.py313.2.nbc
│     │     │  │     ├─ utils._localmax-1035.py313.3.nbc
│     │     │  │     ├─ utils._localmax-1035.py313.4.nbc
│     │     │  │     ├─ utils._localmax-1035.py313.5.nbc
│     │     │  │     ├─ utils._localmax-1035.py313.nbi
│     │     │  │     ├─ utils._localmin-1052.py313.1.nbc
│     │     │  │     ├─ utils._localmin-1052.py313.2.nbc
│     │     │  │     ├─ utils._localmin-1052.py313.3.nbc
│     │     │  │     ├─ utils._localmin-1052.py313.4.nbc
│     │     │  │     ├─ utils._localmin-1052.py313.5.nbc
│     │     │  │     ├─ utils._localmin-1052.py313.nbi
│     │     │  │     ├─ utils._phasor_angles-2488.py313.1.nbc
│     │     │  │     ├─ utils._phasor_angles-2488.py313.2.nbc
│     │     │  │     ├─ utils._phasor_angles-2488.py313.nbi
│     │     │  │     ├─ utils.__peak_pick-1193.py313.1.nbc
│     │     │  │     ├─ utils.__peak_pick-1193.py313.2.nbc
│     │     │  │     ├─ utils.__peak_pick-1193.py313.3.nbc
│     │     │  │     ├─ utils.__peak_pick-1193.py313.4.nbc
│     │     │  │     ├─ utils.__peak_pick-1193.py313.nbi
│     │     │  │     ├─ _nnls.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ version.py
│     │     │  ├─ _cache.py
│     │     │  ├─ _typing.py
│     │     │  ├─ __init__.py
│     │     │  ├─ __init__.pyi
│     │     │  └─ __pycache__
│     │     │     ├─ beat.cpython-313.pyc
│     │     │     ├─ beat.__beat_track_dp-558.py313.1.nbc
│     │     │     ├─ beat.__beat_track_dp-558.py313.2.nbc
│     │     │     ├─ beat.__beat_track_dp-558.py313.nbi
│     │     │     ├─ beat.__dp_backtrack-686.py313.1.nbc
│     │     │     ├─ beat.__dp_backtrack-686.py313.2.nbc
│     │     │     ├─ beat.__dp_backtrack-686.py313.nbi
│     │     │     ├─ beat.__last_beat_selector-662.py313.1.nbc
│     │     │     ├─ beat.__last_beat_selector-662.py313.2.nbc
│     │     │     ├─ beat.__last_beat_selector-662.py313.nbi
│     │     │     ├─ beat.__trim_beats-609.py313.1.nbc
│     │     │     ├─ beat.__trim_beats-609.py313.2.nbc
│     │     │     ├─ beat.__trim_beats-609.py313.nbi
│     │     │     ├─ decompose.cpython-313.pyc
│     │     │     ├─ display.cpython-313.pyc
│     │     │     ├─ effects.cpython-313.pyc
│     │     │     ├─ filters.cpython-313.pyc
│     │     │     ├─ guf-beat.__beat_track_dp-558.py313.1.nbc
│     │     │     ├─ guf-beat.__beat_track_dp-558.py313.2.nbc
│     │     │     ├─ guf-beat.__beat_track_dp-558.py313.nbi
│     │     │     ├─ guf-beat.__dp_backtrack-686.py313.1.nbc
│     │     │     ├─ guf-beat.__dp_backtrack-686.py313.2.nbc
│     │     │     ├─ guf-beat.__dp_backtrack-686.py313.nbi
│     │     │     ├─ guf-beat.__last_beat_selector-662.py313.1.nbc
│     │     │     ├─ guf-beat.__last_beat_selector-662.py313.2.nbc
│     │     │     ├─ guf-beat.__last_beat_selector-662.py313.nbi
│     │     │     ├─ guf-beat.__trim_beats-609.py313.1.nbc
│     │     │     ├─ guf-beat.__trim_beats-609.py313.2.nbc
│     │     │     ├─ guf-beat.__trim_beats-609.py313.nbi
│     │     │     ├─ onset.cpython-313.pyc
│     │     │     ├─ segment.cpython-313.pyc
│     │     │     ├─ sequence.cpython-313.pyc
│     │     │     ├─ version.cpython-313.pyc
│     │     │     ├─ _cache.cpython-313.pyc
│     │     │     ├─ _typing.cpython-313.pyc
│     │     │     └─ __init__.cpython-313.pyc
│     │     ├─ llvmlite
│     │     │  ├─ binding
│     │     │  │  ├─ analysis.py
│     │     │  │  ├─ common.py
│     │     │  │  ├─ config.py
│     │     │  │  ├─ context.py
│     │     │  │  ├─ dylib.py
│     │     │  │  ├─ executionengine.py
│     │     │  │  ├─ ffi.py
│     │     │  │  ├─ initfini.py
│     │     │  │  ├─ linker.py
│     │     │  │  ├─ llvmlite.dll
│     │     │  │  ├─ module.py
│     │     │  │  ├─ newpassmanagers.py
│     │     │  │  ├─ object_file.py
│     │     │  │  ├─ options.py
│     │     │  │  ├─ orcjit.py
│     │     │  │  ├─ targets.py
│     │     │  │  ├─ typeref.py
│     │     │  │  ├─ value.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ analysis.cpython-313.pyc
│     │     │  │     ├─ common.cpython-313.pyc
│     │     │  │     ├─ config.cpython-313.pyc
│     │     │  │     ├─ context.cpython-313.pyc
│     │     │  │     ├─ dylib.cpython-313.pyc
│     │     │  │     ├─ executionengine.cpython-313.pyc
│     │     │  │     ├─ ffi.cpython-313.pyc
│     │     │  │     ├─ initfini.cpython-313.pyc
│     │     │  │     ├─ linker.cpython-313.pyc
│     │     │  │     ├─ module.cpython-313.pyc
│     │     │  │     ├─ newpassmanagers.cpython-313.pyc
│     │     │  │     ├─ object_file.cpython-313.pyc
│     │     │  │     ├─ options.cpython-313.pyc
│     │     │  │     ├─ orcjit.cpython-313.pyc
│     │     │  │     ├─ targets.cpython-313.pyc
│     │     │  │     ├─ typeref.cpython-313.pyc
│     │     │  │     ├─ value.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ ir
│     │     │  │  ├─ builder.py
│     │     │  │  ├─ context.py
│     │     │  │  ├─ instructions.py
│     │     │  │  ├─ module.py
│     │     │  │  ├─ transforms.py
│     │     │  │  ├─ types.py
│     │     │  │  ├─ values.py
│     │     │  │  ├─ _utils.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ builder.cpython-313.pyc
│     │     │  │     ├─ context.cpython-313.pyc
│     │     │  │     ├─ instructions.cpython-313.pyc
│     │     │  │     ├─ module.cpython-313.pyc
│     │     │  │     ├─ transforms.cpython-313.pyc
│     │     │  │     ├─ types.cpython-313.pyc
│     │     │  │     ├─ values.cpython-313.pyc
│     │     │  │     ├─ _utils.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ tests
│     │     │  │  ├─ customize.py
│     │     │  │  ├─ refprune_proto.py
│     │     │  │  ├─ test_binding.py
│     │     │  │  ├─ test_ir.py
│     │     │  │  ├─ test_refprune.py
│     │     │  │  ├─ test_valuerepr.py
│     │     │  │  ├─ __init__.py
│     │     │  │  ├─ __main__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ customize.cpython-313.pyc
│     │     │  │     ├─ refprune_proto.cpython-313.pyc
│     │     │  │     ├─ test_binding.cpython-313.pyc
│     │     │  │     ├─ test_ir.cpython-313.pyc
│     │     │  │     ├─ test_refprune.cpython-313.pyc
│     │     │  │     ├─ test_valuerepr.cpython-313.pyc
│     │     │  │     ├─ __init__.cpython-313.pyc
│     │     │  │     └─ __main__.cpython-313.pyc
│     │     │  ├─ utils.py
│     │     │  ├─ _version.py
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     ├─ utils.cpython-313.pyc
│     │     │     ├─ _version.cpython-313.pyc
│     │     │     └─ __init__.cpython-313.pyc
│     │     ├─ llvmlite.libs
│     │     │  └─ msvcp140-8f141b4454fa78db34bc1f28c571b4da.dll
│     │     ├─ motor
│     │     │  ├─ aiohttp
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ core.py
│     │     │  ├─ core.pyi
│     │     │  ├─ docstrings.py
│     │     │  ├─ frameworks
│     │     │  │  ├─ asyncio
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ tornado
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ metaprogramming.py
│     │     │  ├─ motor_asyncio.py
│     │     │  ├─ motor_asyncio.pyi
│     │     │  ├─ motor_common.py
│     │     │  ├─ motor_gridfs.py
│     │     │  ├─ motor_gridfs.pyi
│     │     │  ├─ motor_tornado.py
│     │     │  ├─ motor_tornado.pyi
│     │     │  ├─ py.typed
│     │     │  ├─ web.py
│     │     │  ├─ _version.py
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     ├─ core.cpython-313.pyc
│     │     │     ├─ docstrings.cpython-313.pyc
│     │     │     ├─ metaprogramming.cpython-313.pyc
│     │     │     ├─ motor_asyncio.cpython-313.pyc
│     │     │     ├─ motor_common.cpython-313.pyc
│     │     │     ├─ motor_gridfs.cpython-313.pyc
│     │     │     ├─ motor_tornado.cpython-313.pyc
│     │     │     ├─ web.cpython-313.pyc
│     │     │     ├─ _version.cpython-313.pyc
│     │     │     └─ __init__.cpython-313.pyc
│     │     ├─ msgpack
│     │     │  ├─ exceptions.py
│     │     │  ├─ ext.py
│     │     │  ├─ fallback.py
│     │     │  ├─ _cmsgpack.cp313-win_amd64.pyd
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     ├─ exceptions.cpython-313.pyc
│     │     │     ├─ ext.cpython-313.pyc
│     │     │     ├─ fallback.cpython-313.pyc
│     │     │     └─ __init__.cpython-313.pyc
│     │     ├─ multipart
│     │     │  ├─ decoders.py
│     │     │  ├─ exceptions.py
│     │     │  ├─ multipart.py
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     ├─ decoders.cpython-313.pyc
│     │     │     ├─ exceptions.cpython-313.pyc
│     │     │     ├─ multipart.cpython-313.pyc
│     │     │     └─ __init__.cpython-313.pyc
│     │     ├─ numba
│     │     │  ├─ cext
│     │     │  │  ├─ cext.h
│     │     │  │  ├─ dictobject.c
│     │     │  │  ├─ dictobject.h
│     │     │  │  ├─ listobject.c
│     │     │  │  ├─ listobject.h
│     │     │  │  ├─ utils.c
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ cloudpickle
│     │     │  │  ├─ cloudpickle.py
│     │     │  │  ├─ cloudpickle_fast.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ cloudpickle.cpython-313.pyc
│     │     │  │     ├─ cloudpickle_fast.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ core
│     │     │  │  ├─ analysis.py
│     │     │  │  ├─ annotations
│     │     │  │  │  ├─ pretty_annotate.py
│     │     │  │  │  ├─ template.html
│     │     │  │  │  ├─ type_annotations.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ pretty_annotate.cpython-313.pyc
│     │     │  │  │     ├─ type_annotations.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ base.py
│     │     │  │  ├─ boxing.py
│     │     │  │  ├─ bytecode.py
│     │     │  │  ├─ byteflow.py
│     │     │  │  ├─ caching.py
│     │     │  │  ├─ callconv.py
│     │     │  │  ├─ callwrapper.py
│     │     │  │  ├─ ccallback.py
│     │     │  │  ├─ cgutils.py
│     │     │  │  ├─ codegen.py
│     │     │  │  ├─ compiler.py
│     │     │  │  ├─ compiler_lock.py
│     │     │  │  ├─ compiler_machinery.py
│     │     │  │  ├─ config.py
│     │     │  │  ├─ consts.py
│     │     │  │  ├─ controlflow.py
│     │     │  │  ├─ cpu.py
│     │     │  │  ├─ cpu_options.py
│     │     │  │  ├─ datamodel
│     │     │  │  │  ├─ manager.py
│     │     │  │  │  ├─ models.py
│     │     │  │  │  ├─ packer.py
│     │     │  │  │  ├─ registry.py
│     │     │  │  │  ├─ testing.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ manager.cpython-313.pyc
│     │     │  │  │     ├─ models.cpython-313.pyc
│     │     │  │  │     ├─ packer.cpython-313.pyc
│     │     │  │  │     ├─ registry.cpython-313.pyc
│     │     │  │  │     ├─ testing.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ debuginfo.py
│     │     │  │  ├─ decorators.py
│     │     │  │  ├─ descriptors.py
│     │     │  │  ├─ dispatcher.py
│     │     │  │  ├─ entrypoints.py
│     │     │  │  ├─ environment.py
│     │     │  │  ├─ errors.py
│     │     │  │  ├─ event.py
│     │     │  │  ├─ extending.py
│     │     │  │  ├─ extending.pyi
│     │     │  │  ├─ externals.py
│     │     │  │  ├─ fastmathpass.py
│     │     │  │  ├─ funcdesc.py
│     │     │  │  ├─ generators.py
│     │     │  │  ├─ imputils.py
│     │     │  │  ├─ inline_closurecall.py
│     │     │  │  ├─ interpreter.py
│     │     │  │  ├─ intrinsics.py
│     │     │  │  ├─ ir.py
│     │     │  │  ├─ ir_utils.py
│     │     │  │  ├─ itanium_mangler.py
│     │     │  │  ├─ llvm_bindings.py
│     │     │  │  ├─ lowering.py
│     │     │  │  ├─ object_mode_passes.py
│     │     │  │  ├─ optional.py
│     │     │  │  ├─ options.py
│     │     │  │  ├─ postproc.py
│     │     │  │  ├─ pylowering.py
│     │     │  │  ├─ pythonapi.py
│     │     │  │  ├─ registry.py
│     │     │  │  ├─ removerefctpass.py
│     │     │  │  ├─ rewrites
│     │     │  │  │  ├─ ir_print.py
│     │     │  │  │  ├─ registry.py
│     │     │  │  │  ├─ static_binop.py
│     │     │  │  │  ├─ static_getitem.py
│     │     │  │  │  ├─ static_raise.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ ir_print.cpython-313.pyc
│     │     │  │  │     ├─ registry.cpython-313.pyc
│     │     │  │  │     ├─ static_binop.cpython-313.pyc
│     │     │  │  │     ├─ static_getitem.cpython-313.pyc
│     │     │  │  │     ├─ static_raise.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ runtime
│     │     │  │  │  ├─ context.py
│     │     │  │  │  ├─ nrt.cpp
│     │     │  │  │  ├─ nrt.h
│     │     │  │  │  ├─ nrt.py
│     │     │  │  │  ├─ nrtdynmod.py
│     │     │  │  │  ├─ nrtopt.py
│     │     │  │  │  ├─ nrt_external.h
│     │     │  │  │  ├─ _nrt_python.c
│     │     │  │  │  ├─ _nrt_python.cp313-win_amd64.pyd
│     │     │  │  │  ├─ _nrt_pythonmod.c
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ context.cpython-313.pyc
│     │     │  │  │     ├─ nrt.cpython-313.pyc
│     │     │  │  │     ├─ nrtdynmod.cpython-313.pyc
│     │     │  │  │     ├─ nrtopt.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ serialize.py
│     │     │  │  ├─ sigutils.py
│     │     │  │  ├─ ssa.py
│     │     │  │  ├─ targetconfig.py
│     │     │  │  ├─ target_extension.py
│     │     │  │  ├─ tracing.py
│     │     │  │  ├─ transforms.py
│     │     │  │  ├─ typeconv
│     │     │  │  │  ├─ castgraph.py
│     │     │  │  │  ├─ rules.py
│     │     │  │  │  ├─ typeconv.py
│     │     │  │  │  ├─ _typeconv.cp313-win_amd64.pyd
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ castgraph.cpython-313.pyc
│     │     │  │  │     ├─ rules.cpython-313.pyc
│     │     │  │  │     ├─ typeconv.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ typed_passes.py
│     │     │  │  ├─ typeinfer.py
│     │     │  │  ├─ types
│     │     │  │  │  ├─ abstract.py
│     │     │  │  │  ├─ common.py
│     │     │  │  │  ├─ containers.py
│     │     │  │  │  ├─ functions.py
│     │     │  │  │  ├─ function_type.py
│     │     │  │  │  ├─ iterators.py
│     │     │  │  │  ├─ misc.py
│     │     │  │  │  ├─ npytypes.py
│     │     │  │  │  ├─ scalars.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  ├─ __init__.pyi
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ abstract.cpython-313.pyc
│     │     │  │  │     ├─ common.cpython-313.pyc
│     │     │  │  │     ├─ containers.cpython-313.pyc
│     │     │  │  │     ├─ functions.cpython-313.pyc
│     │     │  │  │     ├─ function_type.cpython-313.pyc
│     │     │  │  │     ├─ iterators.cpython-313.pyc
│     │     │  │  │     ├─ misc.cpython-313.pyc
│     │     │  │  │     ├─ npytypes.cpython-313.pyc
│     │     │  │  │     ├─ scalars.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ typing
│     │     │  │  │  ├─ arraydecl.py
│     │     │  │  │  ├─ asnumbatype.py
│     │     │  │  │  ├─ bufproto.py
│     │     │  │  │  ├─ builtins.py
│     │     │  │  │  ├─ cffi_utils.py
│     │     │  │  │  ├─ cmathdecl.py
│     │     │  │  │  ├─ collections.py
│     │     │  │  │  ├─ context.py
│     │     │  │  │  ├─ ctypes_utils.py
│     │     │  │  │  ├─ dictdecl.py
│     │     │  │  │  ├─ enumdecl.py
│     │     │  │  │  ├─ listdecl.py
│     │     │  │  │  ├─ mathdecl.py
│     │     │  │  │  ├─ npdatetime.py
│     │     │  │  │  ├─ npydecl.py
│     │     │  │  │  ├─ setdecl.py
│     │     │  │  │  ├─ templates.py
│     │     │  │  │  ├─ typeof.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ arraydecl.cpython-313.pyc
│     │     │  │  │     ├─ asnumbatype.cpython-313.pyc
│     │     │  │  │     ├─ bufproto.cpython-313.pyc
│     │     │  │  │     ├─ builtins.cpython-313.pyc
│     │     │  │  │     ├─ cffi_utils.cpython-313.pyc
│     │     │  │  │     ├─ cmathdecl.cpython-313.pyc
│     │     │  │  │     ├─ collections.cpython-313.pyc
│     │     │  │  │     ├─ context.cpython-313.pyc
│     │     │  │  │     ├─ ctypes_utils.cpython-313.pyc
│     │     │  │  │     ├─ dictdecl.cpython-313.pyc
│     │     │  │  │     ├─ enumdecl.cpython-313.pyc
│     │     │  │  │     ├─ listdecl.cpython-313.pyc
│     │     │  │  │     ├─ mathdecl.cpython-313.pyc
│     │     │  │  │     ├─ npdatetime.cpython-313.pyc
│     │     │  │  │     ├─ npydecl.cpython-313.pyc
│     │     │  │  │     ├─ setdecl.cpython-313.pyc
│     │     │  │  │     ├─ templates.cpython-313.pyc
│     │     │  │  │     ├─ typeof.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ unsafe
│     │     │  │  │  ├─ bytes.py
│     │     │  │  │  ├─ eh.py
│     │     │  │  │  ├─ nrt.py
│     │     │  │  │  ├─ refcount.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ bytes.cpython-313.pyc
│     │     │  │  │     ├─ eh.cpython-313.pyc
│     │     │  │  │     ├─ nrt.cpython-313.pyc
│     │     │  │  │     ├─ refcount.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ untyped_passes.py
│     │     │  │  ├─ utils.py
│     │     │  │  ├─ withcontexts.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ analysis.cpython-313.pyc
│     │     │  │     ├─ base.cpython-313.pyc
│     │     │  │     ├─ boxing.cpython-313.pyc
│     │     │  │     ├─ bytecode.cpython-313.pyc
│     │     │  │     ├─ byteflow.cpython-313.pyc
│     │     │  │     ├─ caching.cpython-313.pyc
│     │     │  │     ├─ callconv.cpython-313.pyc
│     │     │  │     ├─ callwrapper.cpython-313.pyc
│     │     │  │     ├─ ccallback.cpython-313.pyc
│     │     │  │     ├─ cgutils.cpython-313.pyc
│     │     │  │     ├─ codegen.cpython-313.pyc
│     │     │  │     ├─ compiler.cpython-313.pyc
│     │     │  │     ├─ compiler_lock.cpython-313.pyc
│     │     │  │     ├─ compiler_machinery.cpython-313.pyc
│     │     │  │     ├─ config.cpython-313.pyc
│     │     │  │     ├─ consts.cpython-313.pyc
│     │     │  │     ├─ controlflow.cpython-313.pyc
│     │     │  │     ├─ cpu.cpython-313.pyc
│     │     │  │     ├─ cpu_options.cpython-313.pyc
│     │     │  │     ├─ debuginfo.cpython-313.pyc
│     │     │  │     ├─ decorators.cpython-313.pyc
│     │     │  │     ├─ descriptors.cpython-313.pyc
│     │     │  │     ├─ dispatcher.cpython-313.pyc
│     │     │  │     ├─ entrypoints.cpython-313.pyc
│     │     │  │     ├─ environment.cpython-313.pyc
│     │     │  │     ├─ errors.cpython-313.pyc
│     │     │  │     ├─ event.cpython-313.pyc
│     │     │  │     ├─ extending.cpython-313.pyc
│     │     │  │     ├─ externals.cpython-313.pyc
│     │     │  │     ├─ fastmathpass.cpython-313.pyc
│     │     │  │     ├─ funcdesc.cpython-313.pyc
│     │     │  │     ├─ generators.cpython-313.pyc
│     │     │  │     ├─ imputils.cpython-313.pyc
│     │     │  │     ├─ inline_closurecall.cpython-313.pyc
│     │     │  │     ├─ interpreter.cpython-313.pyc
│     │     │  │     ├─ intrinsics.cpython-313.pyc
│     │     │  │     ├─ ir.cpython-313.pyc
│     │     │  │     ├─ ir_utils.cpython-313.pyc
│     │     │  │     ├─ itanium_mangler.cpython-313.pyc
│     │     │  │     ├─ llvm_bindings.cpython-313.pyc
│     │     │  │     ├─ lowering.cpython-313.pyc
│     │     │  │     ├─ object_mode_passes.cpython-313.pyc
│     │     │  │     ├─ optional.cpython-313.pyc
│     │     │  │     ├─ options.cpython-313.pyc
│     │     │  │     ├─ postproc.cpython-313.pyc
│     │     │  │     ├─ pylowering.cpython-313.pyc
│     │     │  │     ├─ pythonapi.cpython-313.pyc
│     │     │  │     ├─ registry.cpython-313.pyc
│     │     │  │     ├─ removerefctpass.cpython-313.pyc
│     │     │  │     ├─ serialize.cpython-313.pyc
│     │     │  │     ├─ sigutils.cpython-313.pyc
│     │     │  │     ├─ ssa.cpython-313.pyc
│     │     │  │     ├─ targetconfig.cpython-313.pyc
│     │     │  │     ├─ target_extension.cpython-313.pyc
│     │     │  │     ├─ tracing.cpython-313.pyc
│     │     │  │     ├─ transforms.cpython-313.pyc
│     │     │  │     ├─ typed_passes.cpython-313.pyc
│     │     │  │     ├─ typeinfer.cpython-313.pyc
│     │     │  │     ├─ untyped_passes.cpython-313.pyc
│     │     │  │     ├─ utils.cpython-313.pyc
│     │     │  │     ├─ withcontexts.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ cpython
│     │     │  │  ├─ builtins.py
│     │     │  │  ├─ charseq.py
│     │     │  │  ├─ cmathimpl.py
│     │     │  │  ├─ enumimpl.py
│     │     │  │  ├─ hashing.py
│     │     │  │  ├─ heapq.py
│     │     │  │  ├─ iterators.py
│     │     │  │  ├─ listobj.py
│     │     │  │  ├─ mathimpl.py
│     │     │  │  ├─ numbers.py
│     │     │  │  ├─ printimpl.py
│     │     │  │  ├─ randomimpl.py
│     │     │  │  ├─ rangeobj.py
│     │     │  │  ├─ setobj.py
│     │     │  │  ├─ slicing.py
│     │     │  │  ├─ tupleobj.py
│     │     │  │  ├─ unicode.py
│     │     │  │  ├─ unicode_support.py
│     │     │  │  ├─ unsafe
│     │     │  │  │  ├─ numbers.py
│     │     │  │  │  ├─ tuple.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ numbers.cpython-313.pyc
│     │     │  │  │     ├─ tuple.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ builtins.cpython-313.pyc
│     │     │  │     ├─ charseq.cpython-313.pyc
│     │     │  │     ├─ cmathimpl.cpython-313.pyc
│     │     │  │     ├─ enumimpl.cpython-313.pyc
│     │     │  │     ├─ hashing.cpython-313.pyc
│     │     │  │     ├─ heapq.cpython-313.pyc
│     │     │  │     ├─ iterators.cpython-313.pyc
│     │     │  │     ├─ listobj.cpython-313.pyc
│     │     │  │     ├─ mathimpl.cpython-313.pyc
│     │     │  │     ├─ numbers.cpython-313.pyc
│     │     │  │     ├─ printimpl.cpython-313.pyc
│     │     │  │     ├─ randomimpl.cpython-313.pyc
│     │     │  │     ├─ rangeobj.cpython-313.pyc
│     │     │  │     ├─ setobj.cpython-313.pyc
│     │     │  │     ├─ slicing.cpython-313.pyc
│     │     │  │     ├─ tupleobj.cpython-313.pyc
│     │     │  │     ├─ unicode.cpython-313.pyc
│     │     │  │     ├─ unicode_support.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ cuda
│     │     │  │  ├─ api.py
│     │     │  │  ├─ api_util.py
│     │     │  │  ├─ args.py
│     │     │  │  ├─ cg.py
│     │     │  │  ├─ codegen.py
│     │     │  │  ├─ compiler.py
│     │     │  │  ├─ cpp_function_wrappers.cu
│     │     │  │  ├─ cudadecl.py
│     │     │  │  ├─ cudadrv
│     │     │  │  │  ├─ devicearray.py
│     │     │  │  │  ├─ devices.py
│     │     │  │  │  ├─ driver.py
│     │     │  │  │  ├─ drvapi.py
│     │     │  │  │  ├─ dummyarray.py
│     │     │  │  │  ├─ enums.py
│     │     │  │  │  ├─ error.py
│     │     │  │  │  ├─ libs.py
│     │     │  │  │  ├─ ndarray.py
│     │     │  │  │  ├─ nvrtc.py
│     │     │  │  │  ├─ nvvm.py
│     │     │  │  │  ├─ rtapi.py
│     │     │  │  │  ├─ runtime.py
│     │     │  │  │  ├─ _extras.cp313-win_amd64.pyd
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ devicearray.cpython-313.pyc
│     │     │  │  │     ├─ devices.cpython-313.pyc
│     │     │  │  │     ├─ driver.cpython-313.pyc
│     │     │  │  │     ├─ drvapi.cpython-313.pyc
│     │     │  │  │     ├─ dummyarray.cpython-313.pyc
│     │     │  │  │     ├─ enums.cpython-313.pyc
│     │     │  │  │     ├─ error.cpython-313.pyc
│     │     │  │  │     ├─ libs.cpython-313.pyc
│     │     │  │  │     ├─ ndarray.cpython-313.pyc
│     │     │  │  │     ├─ nvrtc.cpython-313.pyc
│     │     │  │  │     ├─ nvvm.cpython-313.pyc
│     │     │  │  │     ├─ rtapi.cpython-313.pyc
│     │     │  │  │     ├─ runtime.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ cudaimpl.py
│     │     │  │  ├─ cudamath.py
│     │     │  │  ├─ cuda_fp16.h
│     │     │  │  ├─ cuda_fp16.hpp
│     │     │  │  ├─ cuda_paths.py
│     │     │  │  ├─ decorators.py
│     │     │  │  ├─ descriptor.py
│     │     │  │  ├─ deviceufunc.py
│     │     │  │  ├─ device_init.py
│     │     │  │  ├─ dispatcher.py
│     │     │  │  ├─ errors.py
│     │     │  │  ├─ extending.py
│     │     │  │  ├─ initialize.py
│     │     │  │  ├─ intrinsics.py
│     │     │  │  ├─ intrinsic_wrapper.py
│     │     │  │  ├─ kernels
│     │     │  │  │  ├─ reduction.py
│     │     │  │  │  ├─ transpose.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ reduction.cpython-313.pyc
│     │     │  │  │     ├─ transpose.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ libdevice.py
│     │     │  │  ├─ libdevicedecl.py
│     │     │  │  ├─ libdevicefuncs.py
│     │     │  │  ├─ libdeviceimpl.py
│     │     │  │  ├─ mathimpl.py
│     │     │  │  ├─ models.py
│     │     │  │  ├─ nvvmutils.py
│     │     │  │  ├─ printimpl.py
│     │     │  │  ├─ random.py
│     │     │  │  ├─ simulator
│     │     │  │  │  ├─ api.py
│     │     │  │  │  ├─ compiler.py
│     │     │  │  │  ├─ cudadrv
│     │     │  │  │  │  ├─ devicearray.py
│     │     │  │  │  │  ├─ devices.py
│     │     │  │  │  │  ├─ driver.py
│     │     │  │  │  │  ├─ drvapi.py
│     │     │  │  │  │  ├─ dummyarray.py
│     │     │  │  │  │  ├─ error.py
│     │     │  │  │  │  ├─ libs.py
│     │     │  │  │  │  ├─ nvvm.py
│     │     │  │  │  │  ├─ runtime.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ devicearray.cpython-313.pyc
│     │     │  │  │  │     ├─ devices.cpython-313.pyc
│     │     │  │  │  │     ├─ driver.cpython-313.pyc
│     │     │  │  │  │     ├─ drvapi.cpython-313.pyc
│     │     │  │  │  │     ├─ dummyarray.cpython-313.pyc
│     │     │  │  │  │     ├─ error.cpython-313.pyc
│     │     │  │  │  │     ├─ libs.cpython-313.pyc
│     │     │  │  │  │     ├─ nvvm.cpython-313.pyc
│     │     │  │  │  │     ├─ runtime.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ kernel.py
│     │     │  │  │  ├─ kernelapi.py
│     │     │  │  │  ├─ reduction.py
│     │     │  │  │  ├─ vector_types.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ api.cpython-313.pyc
│     │     │  │  │     ├─ compiler.cpython-313.pyc
│     │     │  │  │     ├─ kernel.cpython-313.pyc
│     │     │  │  │     ├─ kernelapi.cpython-313.pyc
│     │     │  │  │     ├─ reduction.cpython-313.pyc
│     │     │  │  │     ├─ vector_types.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ simulator_init.py
│     │     │  │  ├─ stubs.py
│     │     │  │  ├─ target.py
│     │     │  │  ├─ testing.py
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ cudadrv
│     │     │  │  │  │  ├─ test_array_attr.py
│     │     │  │  │  │  ├─ test_context_stack.py
│     │     │  │  │  │  ├─ test_cuda_array_slicing.py
│     │     │  │  │  │  ├─ test_cuda_auto_context.py
│     │     │  │  │  │  ├─ test_cuda_devicerecord.py
│     │     │  │  │  │  ├─ test_cuda_driver.py
│     │     │  │  │  │  ├─ test_cuda_libraries.py
│     │     │  │  │  │  ├─ test_cuda_memory.py
│     │     │  │  │  │  ├─ test_cuda_ndarray.py
│     │     │  │  │  │  ├─ test_deallocations.py
│     │     │  │  │  │  ├─ test_detect.py
│     │     │  │  │  │  ├─ test_emm_plugins.py
│     │     │  │  │  │  ├─ test_events.py
│     │     │  │  │  │  ├─ test_host_alloc.py
│     │     │  │  │  │  ├─ test_init.py
│     │     │  │  │  │  ├─ test_inline_ptx.py
│     │     │  │  │  │  ├─ test_is_fp16.py
│     │     │  │  │  │  ├─ test_linker.py
│     │     │  │  │  │  ├─ test_managed_alloc.py
│     │     │  │  │  │  ├─ test_mvc.py
│     │     │  │  │  │  ├─ test_nvvm_driver.py
│     │     │  │  │  │  ├─ test_pinned.py
│     │     │  │  │  │  ├─ test_profiler.py
│     │     │  │  │  │  ├─ test_ptds.py
│     │     │  │  │  │  ├─ test_reset_device.py
│     │     │  │  │  │  ├─ test_runtime.py
│     │     │  │  │  │  ├─ test_select_device.py
│     │     │  │  │  │  ├─ test_streams.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ test_array_attr.cpython-313.pyc
│     │     │  │  │  │     ├─ test_context_stack.cpython-313.pyc
│     │     │  │  │  │     ├─ test_cuda_array_slicing.cpython-313.pyc
│     │     │  │  │  │     ├─ test_cuda_auto_context.cpython-313.pyc
│     │     │  │  │  │     ├─ test_cuda_devicerecord.cpython-313.pyc
│     │     │  │  │  │     ├─ test_cuda_driver.cpython-313.pyc
│     │     │  │  │  │     ├─ test_cuda_libraries.cpython-313.pyc
│     │     │  │  │  │     ├─ test_cuda_memory.cpython-313.pyc
│     │     │  │  │  │     ├─ test_cuda_ndarray.cpython-313.pyc
│     │     │  │  │  │     ├─ test_deallocations.cpython-313.pyc
│     │     │  │  │  │     ├─ test_detect.cpython-313.pyc
│     │     │  │  │  │     ├─ test_emm_plugins.cpython-313.pyc
│     │     │  │  │  │     ├─ test_events.cpython-313.pyc
│     │     │  │  │  │     ├─ test_host_alloc.cpython-313.pyc
│     │     │  │  │  │     ├─ test_init.cpython-313.pyc
│     │     │  │  │  │     ├─ test_inline_ptx.cpython-313.pyc
│     │     │  │  │  │     ├─ test_is_fp16.cpython-313.pyc
│     │     │  │  │  │     ├─ test_linker.cpython-313.pyc
│     │     │  │  │  │     ├─ test_managed_alloc.cpython-313.pyc
│     │     │  │  │  │     ├─ test_mvc.cpython-313.pyc
│     │     │  │  │  │     ├─ test_nvvm_driver.cpython-313.pyc
│     │     │  │  │  │     ├─ test_pinned.cpython-313.pyc
│     │     │  │  │  │     ├─ test_profiler.cpython-313.pyc
│     │     │  │  │  │     ├─ test_ptds.cpython-313.pyc
│     │     │  │  │  │     ├─ test_reset_device.cpython-313.pyc
│     │     │  │  │  │     ├─ test_runtime.cpython-313.pyc
│     │     │  │  │  │     ├─ test_select_device.cpython-313.pyc
│     │     │  │  │  │     ├─ test_streams.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ cudapy
│     │     │  │  │  │  ├─ cache_usecases.py
│     │     │  │  │  │  ├─ cache_with_cpu_usecases.py
│     │     │  │  │  │  ├─ extensions_usecases.py
│     │     │  │  │  │  ├─ recursion_usecases.py
│     │     │  │  │  │  ├─ test_alignment.py
│     │     │  │  │  │  ├─ test_array.py
│     │     │  │  │  │  ├─ test_array_args.py
│     │     │  │  │  │  ├─ test_array_methods.py
│     │     │  │  │  │  ├─ test_atomics.py
│     │     │  │  │  │  ├─ test_blackscholes.py
│     │     │  │  │  │  ├─ test_boolean.py
│     │     │  │  │  │  ├─ test_caching.py
│     │     │  │  │  │  ├─ test_casting.py
│     │     │  │  │  │  ├─ test_cffi.py
│     │     │  │  │  │  ├─ test_compiler.py
│     │     │  │  │  │  ├─ test_complex.py
│     │     │  │  │  │  ├─ test_complex_kernel.py
│     │     │  │  │  │  ├─ test_constmem.py
│     │     │  │  │  │  ├─ test_const_string.py
│     │     │  │  │  │  ├─ test_cooperative_groups.py
│     │     │  │  │  │  ├─ test_cuda_array_interface.py
│     │     │  │  │  │  ├─ test_cuda_jit_no_types.py
│     │     │  │  │  │  ├─ test_datetime.py
│     │     │  │  │  │  ├─ test_debug.py
│     │     │  │  │  │  ├─ test_debuginfo.py
│     │     │  │  │  │  ├─ test_device_func.py
│     │     │  │  │  │  ├─ test_dispatcher.py
│     │     │  │  │  │  ├─ test_enums.py
│     │     │  │  │  │  ├─ test_errors.py
│     │     │  │  │  │  ├─ test_exception.py
│     │     │  │  │  │  ├─ test_extending.py
│     │     │  │  │  │  ├─ test_fastmath.py
│     │     │  │  │  │  ├─ test_forall.py
│     │     │  │  │  │  ├─ test_freevar.py
│     │     │  │  │  │  ├─ test_frexp_ldexp.py
│     │     │  │  │  │  ├─ test_globals.py
│     │     │  │  │  │  ├─ test_gufunc.py
│     │     │  │  │  │  ├─ test_gufunc_scalar.py
│     │     │  │  │  │  ├─ test_gufunc_scheduling.py
│     │     │  │  │  │  ├─ test_idiv.py
│     │     │  │  │  │  ├─ test_inspect.py
│     │     │  │  │  │  ├─ test_intrinsics.py
│     │     │  │  │  │  ├─ test_ipc.py
│     │     │  │  │  │  ├─ test_iterators.py
│     │     │  │  │  │  ├─ test_lang.py
│     │     │  │  │  │  ├─ test_laplace.py
│     │     │  │  │  │  ├─ test_libdevice.py
│     │     │  │  │  │  ├─ test_lineinfo.py
│     │     │  │  │  │  ├─ test_localmem.py
│     │     │  │  │  │  ├─ test_mandel.py
│     │     │  │  │  │  ├─ test_math.py
│     │     │  │  │  │  ├─ test_matmul.py
│     │     │  │  │  │  ├─ test_minmax.py
│     │     │  │  │  │  ├─ test_montecarlo.py
│     │     │  │  │  │  ├─ test_multigpu.py
│     │     │  │  │  │  ├─ test_multiprocessing.py
│     │     │  │  │  │  ├─ test_multithreads.py
│     │     │  │  │  │  ├─ test_nondet.py
│     │     │  │  │  │  ├─ test_operator.py
│     │     │  │  │  │  ├─ test_optimization.py
│     │     │  │  │  │  ├─ test_overload.py
│     │     │  │  │  │  ├─ test_powi.py
│     │     │  │  │  │  ├─ test_print.py
│     │     │  │  │  │  ├─ test_py2_div_issue.py
│     │     │  │  │  │  ├─ test_random.py
│     │     │  │  │  │  ├─ test_record_dtype.py
│     │     │  │  │  │  ├─ test_recursion.py
│     │     │  │  │  │  ├─ test_reduction.py
│     │     │  │  │  │  ├─ test_retrieve_autoconverted_arrays.py
│     │     │  │  │  │  ├─ test_serialize.py
│     │     │  │  │  │  ├─ test_slicing.py
│     │     │  │  │  │  ├─ test_sm.py
│     │     │  │  │  │  ├─ test_sm_creation.py
│     │     │  │  │  │  ├─ test_sync.py
│     │     │  │  │  │  ├─ test_transpose.py
│     │     │  │  │  │  ├─ test_ufuncs.py
│     │     │  │  │  │  ├─ test_userexc.py
│     │     │  │  │  │  ├─ test_vectorize.py
│     │     │  │  │  │  ├─ test_vectorize_complex.py
│     │     │  │  │  │  ├─ test_vectorize_decor.py
│     │     │  │  │  │  ├─ test_vectorize_device.py
│     │     │  │  │  │  ├─ test_vectorize_scalar_arg.py
│     │     │  │  │  │  ├─ test_vector_type.py
│     │     │  │  │  │  ├─ test_warning.py
│     │     │  │  │  │  ├─ test_warp_ops.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ cache_usecases.cpython-313.pyc
│     │     │  │  │  │     ├─ cache_with_cpu_usecases.cpython-313.pyc
│     │     │  │  │  │     ├─ extensions_usecases.cpython-313.pyc
│     │     │  │  │  │     ├─ recursion_usecases.cpython-313.pyc
│     │     │  │  │  │     ├─ test_alignment.cpython-313.pyc
│     │     │  │  │  │     ├─ test_array.cpython-313.pyc
│     │     │  │  │  │     ├─ test_array_args.cpython-313.pyc
│     │     │  │  │  │     ├─ test_array_methods.cpython-313.pyc
│     │     │  │  │  │     ├─ test_atomics.cpython-313.pyc
│     │     │  │  │  │     ├─ test_blackscholes.cpython-313.pyc
│     │     │  │  │  │     ├─ test_boolean.cpython-313.pyc
│     │     │  │  │  │     ├─ test_caching.cpython-313.pyc
│     │     │  │  │  │     ├─ test_casting.cpython-313.pyc
│     │     │  │  │  │     ├─ test_cffi.cpython-313.pyc
│     │     │  │  │  │     ├─ test_compiler.cpython-313.pyc
│     │     │  │  │  │     ├─ test_complex.cpython-313.pyc
│     │     │  │  │  │     ├─ test_complex_kernel.cpython-313.pyc
│     │     │  │  │  │     ├─ test_constmem.cpython-313.pyc
│     │     │  │  │  │     ├─ test_const_string.cpython-313.pyc
│     │     │  │  │  │     ├─ test_cooperative_groups.cpython-313.pyc
│     │     │  │  │  │     ├─ test_cuda_array_interface.cpython-313.pyc
│     │     │  │  │  │     ├─ test_cuda_jit_no_types.cpython-313.pyc
│     │     │  │  │  │     ├─ test_datetime.cpython-313.pyc
│     │     │  │  │  │     ├─ test_debug.cpython-313.pyc
│     │     │  │  │  │     ├─ test_debuginfo.cpython-313.pyc
│     │     │  │  │  │     ├─ test_device_func.cpython-313.pyc
│     │     │  │  │  │     ├─ test_dispatcher.cpython-313.pyc
│     │     │  │  │  │     ├─ test_enums.cpython-313.pyc
│     │     │  │  │  │     ├─ test_errors.cpython-313.pyc
│     │     │  │  │  │     ├─ test_exception.cpython-313.pyc
│     │     │  │  │  │     ├─ test_extending.cpython-313.pyc
│     │     │  │  │  │     ├─ test_fastmath.cpython-313.pyc
│     │     │  │  │  │     ├─ test_forall.cpython-313.pyc
│     │     │  │  │  │     ├─ test_freevar.cpython-313.pyc
│     │     │  │  │  │     ├─ test_frexp_ldexp.cpython-313.pyc
│     │     │  │  │  │     ├─ test_globals.cpython-313.pyc
│     │     │  │  │  │     ├─ test_gufunc.cpython-313.pyc
│     │     │  │  │  │     ├─ test_gufunc_scalar.cpython-313.pyc
│     │     │  │  │  │     ├─ test_gufunc_scheduling.cpython-313.pyc
│     │     │  │  │  │     ├─ test_idiv.cpython-313.pyc
│     │     │  │  │  │     ├─ test_inspect.cpython-313.pyc
│     │     │  │  │  │     ├─ test_intrinsics.cpython-313.pyc
│     │     │  │  │  │     ├─ test_ipc.cpython-313.pyc
│     │     │  │  │  │     ├─ test_iterators.cpython-313.pyc
│     │     │  │  │  │     ├─ test_lang.cpython-313.pyc
│     │     │  │  │  │     ├─ test_laplace.cpython-313.pyc
│     │     │  │  │  │     ├─ test_libdevice.cpython-313.pyc
│     │     │  │  │  │     ├─ test_lineinfo.cpython-313.pyc
│     │     │  │  │  │     ├─ test_localmem.cpython-313.pyc
│     │     │  │  │  │     ├─ test_mandel.cpython-313.pyc
│     │     │  │  │  │     ├─ test_math.cpython-313.pyc
│     │     │  │  │  │     ├─ test_matmul.cpython-313.pyc
│     │     │  │  │  │     ├─ test_minmax.cpython-313.pyc
│     │     │  │  │  │     ├─ test_montecarlo.cpython-313.pyc
│     │     │  │  │  │     ├─ test_multigpu.cpython-313.pyc
│     │     │  │  │  │     ├─ test_multiprocessing.cpython-313.pyc
│     │     │  │  │  │     ├─ test_multithreads.cpython-313.pyc
│     │     │  │  │  │     ├─ test_nondet.cpython-313.pyc
│     │     │  │  │  │     ├─ test_operator.cpython-313.pyc
│     │     │  │  │  │     ├─ test_optimization.cpython-313.pyc
│     │     │  │  │  │     ├─ test_overload.cpython-313.pyc
│     │     │  │  │  │     ├─ test_powi.cpython-313.pyc
│     │     │  │  │  │     ├─ test_print.cpython-313.pyc
│     │     │  │  │  │     ├─ test_py2_div_issue.cpython-313.pyc
│     │     │  │  │  │     ├─ test_random.cpython-313.pyc
│     │     │  │  │  │     ├─ test_record_dtype.cpython-313.pyc
│     │     │  │  │  │     ├─ test_recursion.cpython-313.pyc
│     │     │  │  │  │     ├─ test_reduction.cpython-313.pyc
│     │     │  │  │  │     ├─ test_retrieve_autoconverted_arrays.cpython-313.pyc
│     │     │  │  │  │     ├─ test_serialize.cpython-313.pyc
│     │     │  │  │  │     ├─ test_slicing.cpython-313.pyc
│     │     │  │  │  │     ├─ test_sm.cpython-313.pyc
│     │     │  │  │  │     ├─ test_sm_creation.cpython-313.pyc
│     │     │  │  │  │     ├─ test_sync.cpython-313.pyc
│     │     │  │  │  │     ├─ test_transpose.cpython-313.pyc
│     │     │  │  │  │     ├─ test_ufuncs.cpython-313.pyc
│     │     │  │  │  │     ├─ test_userexc.cpython-313.pyc
│     │     │  │  │  │     ├─ test_vectorize.cpython-313.pyc
│     │     │  │  │  │     ├─ test_vectorize_complex.cpython-313.pyc
│     │     │  │  │  │     ├─ test_vectorize_decor.cpython-313.pyc
│     │     │  │  │  │     ├─ test_vectorize_device.cpython-313.pyc
│     │     │  │  │  │     ├─ test_vectorize_scalar_arg.cpython-313.pyc
│     │     │  │  │  │     ├─ test_vector_type.cpython-313.pyc
│     │     │  │  │  │     ├─ test_warning.cpython-313.pyc
│     │     │  │  │  │     ├─ test_warp_ops.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ cudasim
│     │     │  │  │  │  ├─ support.py
│     │     │  │  │  │  ├─ test_cudasim_issues.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ support.cpython-313.pyc
│     │     │  │  │  │     ├─ test_cudasim_issues.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ data
│     │     │  │  │  │  ├─ cuda_include.cu
│     │     │  │  │  │  ├─ error.cu
│     │     │  │  │  │  ├─ jitlink.cu
│     │     │  │  │  │  ├─ jitlink.ptx
│     │     │  │  │  │  ├─ warn.cu
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ doc_examples
│     │     │  │  │  │  ├─ ffi
│     │     │  │  │  │  │  ├─ functions.cu
│     │     │  │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  │  └─ __pycache__
│     │     │  │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  │  ├─ test_cg.py
│     │     │  │  │  │  ├─ test_cpu_gpu_compat.py
│     │     │  │  │  │  ├─ test_ffi.py
│     │     │  │  │  │  ├─ test_laplace.py
│     │     │  │  │  │  ├─ test_matmul.py
│     │     │  │  │  │  ├─ test_montecarlo.py
│     │     │  │  │  │  ├─ test_random.py
│     │     │  │  │  │  ├─ test_reduction.py
│     │     │  │  │  │  ├─ test_sessionize.py
│     │     │  │  │  │  ├─ test_ufunc.py
│     │     │  │  │  │  ├─ test_vecadd.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ test_cg.cpython-313.pyc
│     │     │  │  │  │     ├─ test_cpu_gpu_compat.cpython-313.pyc
│     │     │  │  │  │     ├─ test_ffi.cpython-313.pyc
│     │     │  │  │  │     ├─ test_laplace.cpython-313.pyc
│     │     │  │  │  │     ├─ test_matmul.cpython-313.pyc
│     │     │  │  │  │     ├─ test_montecarlo.cpython-313.pyc
│     │     │  │  │  │     ├─ test_random.cpython-313.pyc
│     │     │  │  │  │     ├─ test_reduction.cpython-313.pyc
│     │     │  │  │  │     ├─ test_sessionize.cpython-313.pyc
│     │     │  │  │  │     ├─ test_ufunc.cpython-313.pyc
│     │     │  │  │  │     ├─ test_vecadd.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ nocuda
│     │     │  │  │  │  ├─ test_dummyarray.py
│     │     │  │  │  │  ├─ test_function_resolution.py
│     │     │  │  │  │  ├─ test_import.py
│     │     │  │  │  │  ├─ test_library_lookup.py
│     │     │  │  │  │  ├─ test_nvvm.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ test_dummyarray.cpython-313.pyc
│     │     │  │  │  │     ├─ test_function_resolution.cpython-313.pyc
│     │     │  │  │  │     ├─ test_import.cpython-313.pyc
│     │     │  │  │  │     ├─ test_library_lookup.cpython-313.pyc
│     │     │  │  │  │     ├─ test_nvvm.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ types.py
│     │     │  │  ├─ ufuncs.py
│     │     │  │  ├─ vectorizers.py
│     │     │  │  ├─ vector_types.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ api.cpython-313.pyc
│     │     │  │     ├─ api_util.cpython-313.pyc
│     │     │  │     ├─ args.cpython-313.pyc
│     │     │  │     ├─ cg.cpython-313.pyc
│     │     │  │     ├─ codegen.cpython-313.pyc
│     │     │  │     ├─ compiler.cpython-313.pyc
│     │     │  │     ├─ cudadecl.cpython-313.pyc
│     │     │  │     ├─ cudaimpl.cpython-313.pyc
│     │     │  │     ├─ cudamath.cpython-313.pyc
│     │     │  │     ├─ cuda_paths.cpython-313.pyc
│     │     │  │     ├─ decorators.cpython-313.pyc
│     │     │  │     ├─ descriptor.cpython-313.pyc
│     │     │  │     ├─ deviceufunc.cpython-313.pyc
│     │     │  │     ├─ device_init.cpython-313.pyc
│     │     │  │     ├─ dispatcher.cpython-313.pyc
│     │     │  │     ├─ errors.cpython-313.pyc
│     │     │  │     ├─ extending.cpython-313.pyc
│     │     │  │     ├─ initialize.cpython-313.pyc
│     │     │  │     ├─ intrinsics.cpython-313.pyc
│     │     │  │     ├─ intrinsic_wrapper.cpython-313.pyc
│     │     │  │     ├─ libdevice.cpython-313.pyc
│     │     │  │     ├─ libdevicedecl.cpython-313.pyc
│     │     │  │     ├─ libdevicefuncs.cpython-313.pyc
│     │     │  │     ├─ libdeviceimpl.cpython-313.pyc
│     │     │  │     ├─ mathimpl.cpython-313.pyc
│     │     │  │     ├─ models.cpython-313.pyc
│     │     │  │     ├─ nvvmutils.cpython-313.pyc
│     │     │  │     ├─ printimpl.cpython-313.pyc
│     │     │  │     ├─ random.cpython-313.pyc
│     │     │  │     ├─ simulator_init.cpython-313.pyc
│     │     │  │     ├─ stubs.cpython-313.pyc
│     │     │  │     ├─ target.cpython-313.pyc
│     │     │  │     ├─ testing.cpython-313.pyc
│     │     │  │     ├─ types.cpython-313.pyc
│     │     │  │     ├─ ufuncs.cpython-313.pyc
│     │     │  │     ├─ vectorizers.cpython-313.pyc
│     │     │  │     ├─ vector_types.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ experimental
│     │     │  │  ├─ function_type.py
│     │     │  │  ├─ jitclass
│     │     │  │  │  ├─ base.py
│     │     │  │  │  ├─ boxing.py
│     │     │  │  │  ├─ decorators.py
│     │     │  │  │  ├─ overloads.py
│     │     │  │  │  ├─ _box.cp313-win_amd64.pyd
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ base.cpython-313.pyc
│     │     │  │  │     ├─ boxing.cpython-313.pyc
│     │     │  │  │     ├─ decorators.cpython-313.pyc
│     │     │  │  │     ├─ overloads.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ structref.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ function_type.cpython-313.pyc
│     │     │  │     ├─ structref.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ extending.py
│     │     │  ├─ mathnames.h
│     │     │  ├─ misc
│     │     │  │  ├─ appdirs.py
│     │     │  │  ├─ cffiimpl.py
│     │     │  │  ├─ cmdlang.gdb
│     │     │  │  ├─ coverage_support.py
│     │     │  │  ├─ dump_style.py
│     │     │  │  ├─ findlib.py
│     │     │  │  ├─ firstlinefinder.py
│     │     │  │  ├─ gdb_hook.py
│     │     │  │  ├─ gdb_print_extension.py
│     │     │  │  ├─ help
│     │     │  │  │  ├─ inspector.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ inspector.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ init_utils.py
│     │     │  │  ├─ inspection.py
│     │     │  │  ├─ literal.py
│     │     │  │  ├─ llvm_pass_timings.py
│     │     │  │  ├─ memoryutils.py
│     │     │  │  ├─ mergesort.py
│     │     │  │  ├─ numba_entry.py
│     │     │  │  ├─ numba_gdbinfo.py
│     │     │  │  ├─ numba_sysinfo.py
│     │     │  │  ├─ POST.py
│     │     │  │  ├─ quicksort.py
│     │     │  │  ├─ special.py
│     │     │  │  ├─ timsort.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ appdirs.cpython-313.pyc
│     │     │  │     ├─ cffiimpl.cpython-313.pyc
│     │     │  │     ├─ coverage_support.cpython-313.pyc
│     │     │  │     ├─ dump_style.cpython-313.pyc
│     │     │  │     ├─ findlib.cpython-313.pyc
│     │     │  │     ├─ firstlinefinder.cpython-313.pyc
│     │     │  │     ├─ gdb_hook.cpython-313.pyc
│     │     │  │     ├─ gdb_print_extension.cpython-313.pyc
│     │     │  │     ├─ init_utils.cpython-313.pyc
│     │     │  │     ├─ inspection.cpython-313.pyc
│     │     │  │     ├─ literal.cpython-313.pyc
│     │     │  │     ├─ llvm_pass_timings.cpython-313.pyc
│     │     │  │     ├─ memoryutils.cpython-313.pyc
│     │     │  │     ├─ mergesort.cpython-313.pyc
│     │     │  │     ├─ numba_entry.cpython-313.pyc
│     │     │  │     ├─ numba_gdbinfo.cpython-313.pyc
│     │     │  │     ├─ numba_sysinfo.cpython-313.pyc
│     │     │  │     ├─ POST.cpython-313.pyc
│     │     │  │     ├─ quicksort.cpython-313.pyc
│     │     │  │     ├─ special.cpython-313.pyc
│     │     │  │     ├─ timsort.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ mviewbuf.c
│     │     │  ├─ mviewbuf.cp313-win_amd64.pyd
│     │     │  ├─ np
│     │     │  │  ├─ arraymath.py
│     │     │  │  ├─ arrayobj.py
│     │     │  │  ├─ extensions.py
│     │     │  │  ├─ linalg.py
│     │     │  │  ├─ math
│     │     │  │  │  ├─ cmathimpl.py
│     │     │  │  │  ├─ mathimpl.py
│     │     │  │  │  ├─ numbers.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ cmathimpl.cpython-313.pyc
│     │     │  │  │     ├─ mathimpl.cpython-313.pyc
│     │     │  │  │     ├─ numbers.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ npdatetime.py
│     │     │  │  ├─ npdatetime_helpers.py
│     │     │  │  ├─ npyfuncs.py
│     │     │  │  ├─ npyimpl.py
│     │     │  │  ├─ numpy_support.py
│     │     │  │  ├─ polynomial
│     │     │  │  │  ├─ polynomial_core.py
│     │     │  │  │  ├─ polynomial_functions.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ polynomial_core.cpython-313.pyc
│     │     │  │  │     ├─ polynomial_functions.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ random
│     │     │  │  │  ├─ generator_core.py
│     │     │  │  │  ├─ generator_methods.py
│     │     │  │  │  ├─ random_methods.py
│     │     │  │  │  ├─ _constants.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ generator_core.cpython-313.pyc
│     │     │  │  │     ├─ generator_methods.cpython-313.pyc
│     │     │  │  │     ├─ random_methods.cpython-313.pyc
│     │     │  │  │     ├─ _constants.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ ufunc
│     │     │  │  │  ├─ array_exprs.py
│     │     │  │  │  ├─ decorators.py
│     │     │  │  │  ├─ dufunc.py
│     │     │  │  │  ├─ gufunc.py
│     │     │  │  │  ├─ omppool.cp313-win_amd64.pyd
│     │     │  │  │  ├─ parallel.py
│     │     │  │  │  ├─ sigparse.py
│     │     │  │  │  ├─ tbbpool.cp313-win_amd64.pyd
│     │     │  │  │  ├─ ufuncbuilder.py
│     │     │  │  │  ├─ ufunc_base.py
│     │     │  │  │  ├─ workqueue.cp313-win_amd64.pyd
│     │     │  │  │  ├─ wrappers.py
│     │     │  │  │  ├─ _internal.cp313-win_amd64.pyd
│     │     │  │  │  ├─ _num_threads.cp313-win_amd64.pyd
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ array_exprs.cpython-313.pyc
│     │     │  │  │     ├─ decorators.cpython-313.pyc
│     │     │  │  │     ├─ dufunc.cpython-313.pyc
│     │     │  │  │     ├─ gufunc.cpython-313.pyc
│     │     │  │  │     ├─ parallel.cpython-313.pyc
│     │     │  │  │     ├─ sigparse.cpython-313.pyc
│     │     │  │  │     ├─ ufuncbuilder.cpython-313.pyc
│     │     │  │  │     ├─ ufunc_base.cpython-313.pyc
│     │     │  │  │     ├─ wrappers.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ ufunc_db.py
│     │     │  │  ├─ unsafe
│     │     │  │  │  ├─ ndarray.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ ndarray.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ arraymath.cpython-313.pyc
│     │     │  │     ├─ arrayobj.cpython-313.pyc
│     │     │  │     ├─ extensions.cpython-313.pyc
│     │     │  │     ├─ linalg.cpython-313.pyc
│     │     │  │     ├─ npdatetime.cpython-313.pyc
│     │     │  │     ├─ npdatetime_helpers.cpython-313.pyc
│     │     │  │     ├─ npyfuncs.cpython-313.pyc
│     │     │  │     ├─ npyimpl.cpython-313.pyc
│     │     │  │     ├─ numpy_support.cpython-313.pyc
│     │     │  │     ├─ ufunc_db.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ parfors
│     │     │  │  ├─ array_analysis.py
│     │     │  │  ├─ parfor.py
│     │     │  │  ├─ parfor_lowering.py
│     │     │  │  ├─ parfor_lowering_utils.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ array_analysis.cpython-313.pyc
│     │     │  │     ├─ parfor.cpython-313.pyc
│     │     │  │     ├─ parfor_lowering.cpython-313.pyc
│     │     │  │     ├─ parfor_lowering_utils.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ pycc
│     │     │  │  ├─ cc.py
│     │     │  │  ├─ compiler.py
│     │     │  │  ├─ decorators.py
│     │     │  │  ├─ llvm_types.py
│     │     │  │  ├─ modulemixin.c
│     │     │  │  ├─ platform.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ cc.cpython-313.pyc
│     │     │  │     ├─ compiler.cpython-313.pyc
│     │     │  │     ├─ decorators.cpython-313.pyc
│     │     │  │     ├─ llvm_types.cpython-313.pyc
│     │     │  │     ├─ platform.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ pythoncapi_compat.h
│     │     │  ├─ runtests.py
│     │     │  ├─ scripts
│     │     │  │  ├─ generate_lower_listing.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ generate_lower_listing.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ stencils
│     │     │  │  ├─ stencil.py
│     │     │  │  ├─ stencilparfor.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ stencil.cpython-313.pyc
│     │     │  │     ├─ stencilparfor.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ testing
│     │     │  │  ├─ loader.py
│     │     │  │  ├─ main.py
│     │     │  │  ├─ notebook.py
│     │     │  │  ├─ _runtests.py
│     │     │  │  ├─ __init__.py
│     │     │  │  ├─ __main__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ loader.cpython-313.pyc
│     │     │  │     ├─ main.cpython-313.pyc
│     │     │  │     ├─ notebook.cpython-313.pyc
│     │     │  │     ├─ _runtests.cpython-313.pyc
│     │     │  │     ├─ __init__.cpython-313.pyc
│     │     │  │     └─ __main__.cpython-313.pyc
│     │     │  ├─ tests
│     │     │  │  ├─ annotation_usecases.py
│     │     │  │  ├─ cache_usecases.py
│     │     │  │  ├─ cffi_usecases.py
│     │     │  │  ├─ cfunc_cache_usecases.py
│     │     │  │  ├─ chained_assign_usecases.py
│     │     │  │  ├─ cloudpickle_main_class.py
│     │     │  │  ├─ compile_with_pycc.py
│     │     │  │  ├─ complex_usecases.py
│     │     │  │  ├─ ctypes_usecases.py
│     │     │  │  ├─ doctest_usecase.py
│     │     │  │  ├─ doc_examples
│     │     │  │  │  ├─ test_examples.py
│     │     │  │  │  ├─ test_interval_example.py
│     │     │  │  │  ├─ test_jitclass.py
│     │     │  │  │  ├─ test_literally_usage.py
│     │     │  │  │  ├─ test_literal_container_usage.py
│     │     │  │  │  ├─ test_llvm_pass_timings.py
│     │     │  │  │  ├─ test_numpy_generators.py
│     │     │  │  │  ├─ test_parallel_chunksize.py
│     │     │  │  │  ├─ test_rec_array.py
│     │     │  │  │  ├─ test_structref_usage.py
│     │     │  │  │  ├─ test_typed_dict_usage.py
│     │     │  │  │  ├─ test_typed_list_usage.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ test_examples.cpython-313.pyc
│     │     │  │  │     ├─ test_interval_example.cpython-313.pyc
│     │     │  │  │     ├─ test_jitclass.cpython-313.pyc
│     │     │  │  │     ├─ test_literally_usage.cpython-313.pyc
│     │     │  │  │     ├─ test_literal_container_usage.cpython-313.pyc
│     │     │  │  │     ├─ test_llvm_pass_timings.cpython-313.pyc
│     │     │  │  │     ├─ test_numpy_generators.cpython-313.pyc
│     │     │  │  │     ├─ test_parallel_chunksize.cpython-313.pyc
│     │     │  │  │     ├─ test_rec_array.cpython-313.pyc
│     │     │  │  │     ├─ test_structref_usage.cpython-313.pyc
│     │     │  │  │     ├─ test_typed_dict_usage.cpython-313.pyc
│     │     │  │  │     ├─ test_typed_list_usage.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ dummy_module.py
│     │     │  │  ├─ enum_usecases.py
│     │     │  │  ├─ errorhandling_usecases.py
│     │     │  │  ├─ error_usecases.py
│     │     │  │  ├─ gdb
│     │     │  │  │  ├─ test_array_arg.py
│     │     │  │  │  ├─ test_basic.py
│     │     │  │  │  ├─ test_break_on_symbol.py
│     │     │  │  │  ├─ test_break_on_symbol_version.py
│     │     │  │  │  ├─ test_conditional_breakpoint.py
│     │     │  │  │  ├─ test_pretty_print.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ test_array_arg.cpython-313.pyc
│     │     │  │  │     ├─ test_basic.cpython-313.pyc
│     │     │  │  │     ├─ test_break_on_symbol.cpython-313.pyc
│     │     │  │  │     ├─ test_break_on_symbol_version.cpython-313.pyc
│     │     │  │  │     ├─ test_conditional_breakpoint.cpython-313.pyc
│     │     │  │  │     ├─ test_pretty_print.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ gdb_support.py
│     │     │  │  ├─ inlining_usecases.py
│     │     │  │  ├─ matmul_usecase.py
│     │     │  │  ├─ npyufunc
│     │     │  │  │  ├─ cache_usecases.py
│     │     │  │  │  ├─ test_caching.py
│     │     │  │  │  ├─ test_dufunc.py
│     │     │  │  │  ├─ test_errors.py
│     │     │  │  │  ├─ test_gufunc.py
│     │     │  │  │  ├─ test_parallel_env_variable.py
│     │     │  │  │  ├─ test_parallel_low_work.py
│     │     │  │  │  ├─ test_parallel_ufunc_issues.py
│     │     │  │  │  ├─ test_ufunc.py
│     │     │  │  │  ├─ test_ufuncbuilding.py
│     │     │  │  │  ├─ test_update_inplace.py
│     │     │  │  │  ├─ test_vectorize_decor.py
│     │     │  │  │  ├─ ufuncbuilding_usecases.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ cache_usecases.cpython-313.pyc
│     │     │  │  │     ├─ test_caching.cpython-313.pyc
│     │     │  │  │     ├─ test_dufunc.cpython-313.pyc
│     │     │  │  │     ├─ test_errors.cpython-313.pyc
│     │     │  │  │     ├─ test_gufunc.cpython-313.pyc
│     │     │  │  │     ├─ test_parallel_env_variable.cpython-313.pyc
│     │     │  │  │     ├─ test_parallel_low_work.cpython-313.pyc
│     │     │  │  │     ├─ test_parallel_ufunc_issues.cpython-313.pyc
│     │     │  │  │     ├─ test_ufunc.cpython-313.pyc
│     │     │  │  │     ├─ test_ufuncbuilding.cpython-313.pyc
│     │     │  │  │     ├─ test_update_inplace.cpython-313.pyc
│     │     │  │  │     ├─ test_vectorize_decor.cpython-313.pyc
│     │     │  │  │     ├─ ufuncbuilding_usecases.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ orphaned_semaphore_usecase.py
│     │     │  │  ├─ overload_usecases.py
│     │     │  │  ├─ parfors_cache_usecases.py
│     │     │  │  ├─ parfor_iss9490_usecase.py
│     │     │  │  ├─ pdlike_usecase.py
│     │     │  │  ├─ recursion_usecases.py
│     │     │  │  ├─ serialize_usecases.py
│     │     │  │  ├─ support.py
│     │     │  │  ├─ test_alignment.py
│     │     │  │  ├─ test_analysis.py
│     │     │  │  ├─ test_annotations.py
│     │     │  │  ├─ test_api.py
│     │     │  │  ├─ test_array_analysis.py
│     │     │  │  ├─ test_array_attr.py
│     │     │  │  ├─ test_array_constants.py
│     │     │  │  ├─ test_array_exprs.py
│     │     │  │  ├─ test_array_iterators.py
│     │     │  │  ├─ test_array_manipulation.py
│     │     │  │  ├─ test_array_methods.py
│     │     │  │  ├─ test_array_reductions.py
│     │     │  │  ├─ test_array_return.py
│     │     │  │  ├─ test_asnumbatype.py
│     │     │  │  ├─ test_auto_constants.py
│     │     │  │  ├─ test_blackscholes.py
│     │     │  │  ├─ test_boundscheck.py
│     │     │  │  ├─ test_buffer_protocol.py
│     │     │  │  ├─ test_builtins.py
│     │     │  │  ├─ test_byteflow.py
│     │     │  │  ├─ test_caching.py
│     │     │  │  ├─ test_casting.py
│     │     │  │  ├─ test_cffi.py
│     │     │  │  ├─ test_cfunc.py
│     │     │  │  ├─ test_cgutils.py
│     │     │  │  ├─ test_chained_assign.py
│     │     │  │  ├─ test_chrome_trace.py
│     │     │  │  ├─ test_cli.py
│     │     │  │  ├─ test_closure.py
│     │     │  │  ├─ test_codegen.py
│     │     │  │  ├─ test_compiler_flags.py
│     │     │  │  ├─ test_compiler_lock.py
│     │     │  │  ├─ test_compile_cache.py
│     │     │  │  ├─ test_complex.py
│     │     │  │  ├─ test_comprehension.py
│     │     │  │  ├─ test_conditions_as_predicates.py
│     │     │  │  ├─ test_config.py
│     │     │  │  ├─ test_conversion.py
│     │     │  │  ├─ test_copy_propagate.py
│     │     │  │  ├─ test_ctypes.py
│     │     │  │  ├─ test_dataflow.py
│     │     │  │  ├─ test_datamodel.py
│     │     │  │  ├─ test_debug.py
│     │     │  │  ├─ test_debuginfo.py
│     │     │  │  ├─ test_deprecations.py
│     │     │  │  ├─ test_dictimpl.py
│     │     │  │  ├─ test_dictobject.py
│     │     │  │  ├─ test_dicts.py
│     │     │  │  ├─ test_dispatcher.py
│     │     │  │  ├─ test_doctest.py
│     │     │  │  ├─ test_dyn_array.py
│     │     │  │  ├─ test_dyn_func.py
│     │     │  │  ├─ test_entrypoints.py
│     │     │  │  ├─ test_enums.py
│     │     │  │  ├─ test_errorhandling.py
│     │     │  │  ├─ test_errormodels.py
│     │     │  │  ├─ test_event.py
│     │     │  │  ├─ test_exceptions.py
│     │     │  │  ├─ test_extended_arg.py
│     │     │  │  ├─ test_extending.py
│     │     │  │  ├─ test_extending_types.py
│     │     │  │  ├─ test_fancy_indexing.py
│     │     │  │  ├─ test_fastmath.py
│     │     │  │  ├─ test_findlib.py
│     │     │  │  ├─ test_firstlinefinder.py
│     │     │  │  ├─ test_flow_control.py
│     │     │  │  ├─ test_funcdesc.py
│     │     │  │  ├─ test_function_type.py
│     │     │  │  ├─ test_func_interface.py
│     │     │  │  ├─ test_func_lifetime.py
│     │     │  │  ├─ test_gdb_bindings.py
│     │     │  │  ├─ test_gdb_dwarf.py
│     │     │  │  ├─ test_generators.py
│     │     │  │  ├─ test_getitem_on_types.py
│     │     │  │  ├─ test_gil.py
│     │     │  │  ├─ test_globals.py
│     │     │  │  ├─ test_hashing.py
│     │     │  │  ├─ test_heapq.py
│     │     │  │  ├─ test_help.py
│     │     │  │  ├─ test_import.py
│     │     │  │  ├─ test_indexing.py
│     │     │  │  ├─ test_init_utils.py
│     │     │  │  ├─ test_inlining.py
│     │     │  │  ├─ test_interpreter.py
│     │     │  │  ├─ test_interproc.py
│     │     │  │  ├─ test_intwidth.py
│     │     │  │  ├─ test_ir.py
│     │     │  │  ├─ test_ir_inlining.py
│     │     │  │  ├─ test_ir_utils.py
│     │     │  │  ├─ test_itanium_mangler.py
│     │     │  │  ├─ test_iteration.py
│     │     │  │  ├─ test_jitclasses.py
│     │     │  │  ├─ test_jitmethod.py
│     │     │  │  ├─ test_jit_module.py
│     │     │  │  ├─ test_linalg.py
│     │     │  │  ├─ test_listimpl.py
│     │     │  │  ├─ test_listobject.py
│     │     │  │  ├─ test_lists.py
│     │     │  │  ├─ test_literal_dispatch.py
│     │     │  │  ├─ test_llvm_pass_timings.py
│     │     │  │  ├─ test_llvm_version_check.py
│     │     │  │  ├─ test_locals.py
│     │     │  │  ├─ test_looplifting.py
│     │     │  │  ├─ test_make_function_to_jit_function.py
│     │     │  │  ├─ test_mandelbrot.py
│     │     │  │  ├─ test_mangling.py
│     │     │  │  ├─ test_map_filter_reduce.py
│     │     │  │  ├─ test_mathlib.py
│     │     │  │  ├─ test_maxmin.py
│     │     │  │  ├─ test_misc_coverage_support.py
│     │     │  │  ├─ test_mixed_tuple_unroller.py
│     │     │  │  ├─ test_moved_modules.py
│     │     │  │  ├─ test_multi3.py
│     │     │  │  ├─ test_nan.py
│     │     │  │  ├─ test_ndarray_subclasses.py
│     │     │  │  ├─ test_nested_calls.py
│     │     │  │  ├─ test_new_type_system.py
│     │     │  │  ├─ test_npdatetime.py
│     │     │  │  ├─ test_np_functions.py
│     │     │  │  ├─ test_np_randomgen.py
│     │     │  │  ├─ test_nrt.py
│     │     │  │  ├─ test_nrt_refct.py
│     │     │  │  ├─ test_numberctor.py
│     │     │  │  ├─ test_numbers.py
│     │     │  │  ├─ test_numconv.py
│     │     │  │  ├─ test_numpyadapt.py
│     │     │  │  ├─ test_numpy_support.py
│     │     │  │  ├─ test_num_threads.py
│     │     │  │  ├─ test_objects.py
│     │     │  │  ├─ test_object_mode.py
│     │     │  │  ├─ test_obj_lifetime.py
│     │     │  │  ├─ test_operators.py
│     │     │  │  ├─ test_optimisation_pipelines.py
│     │     │  │  ├─ test_optional.py
│     │     │  │  ├─ test_overlap.py
│     │     │  │  ├─ test_parallel_backend.py
│     │     │  │  ├─ test_parfors.py
│     │     │  │  ├─ test_parfors_caching.py
│     │     │  │  ├─ test_parfors_passes.py
│     │     │  │  ├─ test_pipeline.py
│     │     │  │  ├─ test_polynomial.py
│     │     │  │  ├─ test_practical_lowering_issues.py
│     │     │  │  ├─ test_print.py
│     │     │  │  ├─ test_profiler.py
│     │     │  │  ├─ test_pycc.py
│     │     │  │  ├─ test_pythonapi.py
│     │     │  │  ├─ test_python_int.py
│     │     │  │  ├─ test_random.py
│     │     │  │  ├─ test_range.py
│     │     │  │  ├─ test_recarray_usecases.py
│     │     │  │  ├─ test_record_dtype.py
│     │     │  │  ├─ test_recursion.py
│     │     │  │  ├─ test_refop_pruning.py
│     │     │  │  ├─ test_remove_dead.py
│     │     │  │  ├─ test_repr.py
│     │     │  │  ├─ test_return_values.py
│     │     │  │  ├─ test_runtests.py
│     │     │  │  ├─ test_serialize.py
│     │     │  │  ├─ test_sets.py
│     │     │  │  ├─ test_slices.py
│     │     │  │  ├─ test_sort.py
│     │     │  │  ├─ test_ssa.py
│     │     │  │  ├─ test_stencils.py
│     │     │  │  ├─ test_storeslice.py
│     │     │  │  ├─ test_struct_ref.py
│     │     │  │  ├─ test_support.py
│     │     │  │  ├─ test_svml.py
│     │     │  │  ├─ test_sysinfo.py
│     │     │  │  ├─ test_sys_monitoring.py
│     │     │  │  ├─ test_sys_stdin_assignment.py
│     │     │  │  ├─ test_target_extension.py
│     │     │  │  ├─ test_target_overloadselector.py
│     │     │  │  ├─ test_threadsafety.py
│     │     │  │  ├─ test_tracing.py
│     │     │  │  ├─ test_try_except.py
│     │     │  │  ├─ test_tuples.py
│     │     │  │  ├─ test_typeconv.py
│     │     │  │  ├─ test_typedlist.py
│     │     │  │  ├─ test_typedobjectutils.py
│     │     │  │  ├─ test_typeguard.py
│     │     │  │  ├─ test_typeinfer.py
│     │     │  │  ├─ test_typenames.py
│     │     │  │  ├─ test_typeof.py
│     │     │  │  ├─ test_types.py
│     │     │  │  ├─ test_typingerror.py
│     │     │  │  ├─ test_ufuncs.py
│     │     │  │  ├─ test_unicode.py
│     │     │  │  ├─ test_unicode_array.py
│     │     │  │  ├─ test_unicode_names.py
│     │     │  │  ├─ test_unpack_sequence.py
│     │     │  │  ├─ test_unpickle_without_module.py
│     │     │  │  ├─ test_unsafe_intrinsics.py
│     │     │  │  ├─ test_usecases.py
│     │     │  │  ├─ test_vectorization.py
│     │     │  │  ├─ test_vectorization_type_inference.py
│     │     │  │  ├─ test_warnings.py
│     │     │  │  ├─ test_withlifting.py
│     │     │  │  ├─ threading_backend_usecases.py
│     │     │  │  ├─ typedlist_usecases.py
│     │     │  │  ├─ usecases.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ annotation_usecases.cpython-313.pyc
│     │     │  │     ├─ cache_usecases.cpython-313.pyc
│     │     │  │     ├─ cffi_usecases.cpython-313.pyc
│     │     │  │     ├─ cfunc_cache_usecases.cpython-313.pyc
│     │     │  │     ├─ chained_assign_usecases.cpython-313.pyc
│     │     │  │     ├─ cloudpickle_main_class.cpython-313.pyc
│     │     │  │     ├─ compile_with_pycc.cpython-313.pyc
│     │     │  │     ├─ complex_usecases.cpython-313.pyc
│     │     │  │     ├─ ctypes_usecases.cpython-313.pyc
│     │     │  │     ├─ doctest_usecase.cpython-313.pyc
│     │     │  │     ├─ dummy_module.cpython-313.pyc
│     │     │  │     ├─ enum_usecases.cpython-313.pyc
│     │     │  │     ├─ errorhandling_usecases.cpython-313.pyc
│     │     │  │     ├─ error_usecases.cpython-313.pyc
│     │     │  │     ├─ gdb_support.cpython-313.pyc
│     │     │  │     ├─ inlining_usecases.cpython-313.pyc
│     │     │  │     ├─ matmul_usecase.cpython-313.pyc
│     │     │  │     ├─ orphaned_semaphore_usecase.cpython-313.pyc
│     │     │  │     ├─ overload_usecases.cpython-313.pyc
│     │     │  │     ├─ parfors_cache_usecases.cpython-313.pyc
│     │     │  │     ├─ parfor_iss9490_usecase.cpython-313.pyc
│     │     │  │     ├─ pdlike_usecase.cpython-313.pyc
│     │     │  │     ├─ recursion_usecases.cpython-313.pyc
│     │     │  │     ├─ serialize_usecases.cpython-313.pyc
│     │     │  │     ├─ support.cpython-313.pyc
│     │     │  │     ├─ test_alignment.cpython-313.pyc
│     │     │  │     ├─ test_analysis.cpython-313.pyc
│     │     │  │     ├─ test_annotations.cpython-313.pyc
│     │     │  │     ├─ test_api.cpython-313.pyc
│     │     │  │     ├─ test_array_analysis.cpython-313.pyc
│     │     │  │     ├─ test_array_attr.cpython-313.pyc
│     │     │  │     ├─ test_array_constants.cpython-313.pyc
│     │     │  │     ├─ test_array_exprs.cpython-313.pyc
│     │     │  │     ├─ test_array_iterators.cpython-313.pyc
│     │     │  │     ├─ test_array_manipulation.cpython-313.pyc
│     │     │  │     ├─ test_array_methods.cpython-313.pyc
│     │     │  │     ├─ test_array_reductions.cpython-313.pyc
│     │     │  │     ├─ test_array_return.cpython-313.pyc
│     │     │  │     ├─ test_asnumbatype.cpython-313.pyc
│     │     │  │     ├─ test_auto_constants.cpython-313.pyc
│     │     │  │     ├─ test_blackscholes.cpython-313.pyc
│     │     │  │     ├─ test_boundscheck.cpython-313.pyc
│     │     │  │     ├─ test_buffer_protocol.cpython-313.pyc
│     │     │  │     ├─ test_builtins.cpython-313.pyc
│     │     │  │     ├─ test_byteflow.cpython-313.pyc
│     │     │  │     ├─ test_caching.cpython-313.pyc
│     │     │  │     ├─ test_casting.cpython-313.pyc
│     │     │  │     ├─ test_cffi.cpython-313.pyc
│     │     │  │     ├─ test_cfunc.cpython-313.pyc
│     │     │  │     ├─ test_cgutils.cpython-313.pyc
│     │     │  │     ├─ test_chained_assign.cpython-313.pyc
│     │     │  │     ├─ test_chrome_trace.cpython-313.pyc
│     │     │  │     ├─ test_cli.cpython-313.pyc
│     │     │  │     ├─ test_closure.cpython-313.pyc
│     │     │  │     ├─ test_codegen.cpython-313.pyc
│     │     │  │     ├─ test_compiler_flags.cpython-313.pyc
│     │     │  │     ├─ test_compiler_lock.cpython-313.pyc
│     │     │  │     ├─ test_compile_cache.cpython-313.pyc
│     │     │  │     ├─ test_complex.cpython-313.pyc
│     │     │  │     ├─ test_comprehension.cpython-313.pyc
│     │     │  │     ├─ test_conditions_as_predicates.cpython-313.pyc
│     │     │  │     ├─ test_config.cpython-313.pyc
│     │     │  │     ├─ test_conversion.cpython-313.pyc
│     │     │  │     ├─ test_copy_propagate.cpython-313.pyc
│     │     │  │     ├─ test_ctypes.cpython-313.pyc
│     │     │  │     ├─ test_dataflow.cpython-313.pyc
│     │     │  │     ├─ test_datamodel.cpython-313.pyc
│     │     │  │     ├─ test_debug.cpython-313.pyc
│     │     │  │     ├─ test_debuginfo.cpython-313.pyc
│     │     │  │     ├─ test_deprecations.cpython-313.pyc
│     │     │  │     ├─ test_dictimpl.cpython-313.pyc
│     │     │  │     ├─ test_dictobject.cpython-313.pyc
│     │     │  │     ├─ test_dicts.cpython-313.pyc
│     │     │  │     ├─ test_dispatcher.cpython-313.pyc
│     │     │  │     ├─ test_doctest.cpython-313.pyc
│     │     │  │     ├─ test_dyn_array.cpython-313.pyc
│     │     │  │     ├─ test_dyn_func.cpython-313.pyc
│     │     │  │     ├─ test_entrypoints.cpython-313.pyc
│     │     │  │     ├─ test_enums.cpython-313.pyc
│     │     │  │     ├─ test_errorhandling.cpython-313.pyc
│     │     │  │     ├─ test_errormodels.cpython-313.pyc
│     │     │  │     ├─ test_event.cpython-313.pyc
│     │     │  │     ├─ test_exceptions.cpython-313.pyc
│     │     │  │     ├─ test_extended_arg.cpython-313.pyc
│     │     │  │     ├─ test_extending.cpython-313.pyc
│     │     │  │     ├─ test_extending_types.cpython-313.pyc
│     │     │  │     ├─ test_fancy_indexing.cpython-313.pyc
│     │     │  │     ├─ test_fastmath.cpython-313.pyc
│     │     │  │     ├─ test_findlib.cpython-313.pyc
│     │     │  │     ├─ test_firstlinefinder.cpython-313.pyc
│     │     │  │     ├─ test_flow_control.cpython-313.pyc
│     │     │  │     ├─ test_funcdesc.cpython-313.pyc
│     │     │  │     ├─ test_function_type.cpython-313.pyc
│     │     │  │     ├─ test_func_interface.cpython-313.pyc
│     │     │  │     ├─ test_func_lifetime.cpython-313.pyc
│     │     │  │     ├─ test_gdb_bindings.cpython-313.pyc
│     │     │  │     ├─ test_gdb_dwarf.cpython-313.pyc
│     │     │  │     ├─ test_generators.cpython-313.pyc
│     │     │  │     ├─ test_getitem_on_types.cpython-313.pyc
│     │     │  │     ├─ test_gil.cpython-313.pyc
│     │     │  │     ├─ test_globals.cpython-313.pyc
│     │     │  │     ├─ test_hashing.cpython-313.pyc
│     │     │  │     ├─ test_heapq.cpython-313.pyc
│     │     │  │     ├─ test_help.cpython-313.pyc
│     │     │  │     ├─ test_import.cpython-313.pyc
│     │     │  │     ├─ test_indexing.cpython-313.pyc
│     │     │  │     ├─ test_init_utils.cpython-313.pyc
│     │     │  │     ├─ test_inlining.cpython-313.pyc
│     │     │  │     ├─ test_interpreter.cpython-313.pyc
│     │     │  │     ├─ test_interproc.cpython-313.pyc
│     │     │  │     ├─ test_intwidth.cpython-313.pyc
│     │     │  │     ├─ test_ir.cpython-313.pyc
│     │     │  │     ├─ test_ir_inlining.cpython-313.pyc
│     │     │  │     ├─ test_ir_utils.cpython-313.pyc
│     │     │  │     ├─ test_itanium_mangler.cpython-313.pyc
│     │     │  │     ├─ test_iteration.cpython-313.pyc
│     │     │  │     ├─ test_jitclasses.cpython-313.pyc
│     │     │  │     ├─ test_jitmethod.cpython-313.pyc
│     │     │  │     ├─ test_jit_module.cpython-313.pyc
│     │     │  │     ├─ test_linalg.cpython-313.pyc
│     │     │  │     ├─ test_listimpl.cpython-313.pyc
│     │     │  │     ├─ test_listobject.cpython-313.pyc
│     │     │  │     ├─ test_lists.cpython-313.pyc
│     │     │  │     ├─ test_literal_dispatch.cpython-313.pyc
│     │     │  │     ├─ test_llvm_pass_timings.cpython-313.pyc
│     │     │  │     ├─ test_llvm_version_check.cpython-313.pyc
│     │     │  │     ├─ test_locals.cpython-313.pyc
│     │     │  │     ├─ test_looplifting.cpython-313.pyc
│     │     │  │     ├─ test_make_function_to_jit_function.cpython-313.pyc
│     │     │  │     ├─ test_mandelbrot.cpython-313.pyc
│     │     │  │     ├─ test_mangling.cpython-313.pyc
│     │     │  │     ├─ test_map_filter_reduce.cpython-313.pyc
│     │     │  │     ├─ test_mathlib.cpython-313.pyc
│     │     │  │     ├─ test_maxmin.cpython-313.pyc
│     │     │  │     ├─ test_misc_coverage_support.cpython-313.pyc
│     │     │  │     ├─ test_mixed_tuple_unroller.cpython-313.pyc
│     │     │  │     ├─ test_moved_modules.cpython-313.pyc
│     │     │  │     ├─ test_multi3.cpython-313.pyc
│     │     │  │     ├─ test_nan.cpython-313.pyc
│     │     │  │     ├─ test_ndarray_subclasses.cpython-313.pyc
│     │     │  │     ├─ test_nested_calls.cpython-313.pyc
│     │     │  │     ├─ test_new_type_system.cpython-313.pyc
│     │     │  │     ├─ test_npdatetime.cpython-313.pyc
│     │     │  │     ├─ test_np_functions.cpython-313.pyc
│     │     │  │     ├─ test_np_randomgen.cpython-313.pyc
│     │     │  │     ├─ test_nrt.cpython-313.pyc
│     │     │  │     ├─ test_nrt_refct.cpython-313.pyc
│     │     │  │     ├─ test_numberctor.cpython-313.pyc
│     │     │  │     ├─ test_numbers.cpython-313.pyc
│     │     │  │     ├─ test_numconv.cpython-313.pyc
│     │     │  │     ├─ test_numpyadapt.cpython-313.pyc
│     │     │  │     ├─ test_numpy_support.cpython-313.pyc
│     │     │  │     ├─ test_num_threads.cpython-313.pyc
│     │     │  │     ├─ test_objects.cpython-313.pyc
│     │     │  │     ├─ test_object_mode.cpython-313.pyc
│     │     │  │     ├─ test_obj_lifetime.cpython-313.pyc
│     │     │  │     ├─ test_operators.cpython-313.pyc
│     │     │  │     ├─ test_optimisation_pipelines.cpython-313.pyc
│     │     │  │     ├─ test_optional.cpython-313.pyc
│     │     │  │     ├─ test_overlap.cpython-313.pyc
│     │     │  │     ├─ test_parallel_backend.cpython-313.pyc
│     │     │  │     ├─ test_parfors.cpython-313.pyc
│     │     │  │     ├─ test_parfors_caching.cpython-313.pyc
│     │     │  │     ├─ test_parfors_passes.cpython-313.pyc
│     │     │  │     ├─ test_pipeline.cpython-313.pyc
│     │     │  │     ├─ test_polynomial.cpython-313.pyc
│     │     │  │     ├─ test_practical_lowering_issues.cpython-313.pyc
│     │     │  │     ├─ test_print.cpython-313.pyc
│     │     │  │     ├─ test_profiler.cpython-313.pyc
│     │     │  │     ├─ test_pycc.cpython-313.pyc
│     │     │  │     ├─ test_pythonapi.cpython-313.pyc
│     │     │  │     ├─ test_python_int.cpython-313.pyc
│     │     │  │     ├─ test_random.cpython-313.pyc
│     │     │  │     ├─ test_range.cpython-313.pyc
│     │     │  │     ├─ test_recarray_usecases.cpython-313.pyc
│     │     │  │     ├─ test_record_dtype.cpython-313.pyc
│     │     │  │     ├─ test_recursion.cpython-313.pyc
│     │     │  │     ├─ test_refop_pruning.cpython-313.pyc
│     │     │  │     ├─ test_remove_dead.cpython-313.pyc
│     │     │  │     ├─ test_repr.cpython-313.pyc
│     │     │  │     ├─ test_return_values.cpython-313.pyc
│     │     │  │     ├─ test_runtests.cpython-313.pyc
│     │     │  │     ├─ test_serialize.cpython-313.pyc
│     │     │  │     ├─ test_sets.cpython-313.pyc
│     │     │  │     ├─ test_slices.cpython-313.pyc
│     │     │  │     ├─ test_sort.cpython-313.pyc
│     │     │  │     ├─ test_ssa.cpython-313.pyc
│     │     │  │     ├─ test_stencils.cpython-313.pyc
│     │     │  │     ├─ test_storeslice.cpython-313.pyc
│     │     │  │     ├─ test_struct_ref.cpython-313.pyc
│     │     │  │     ├─ test_support.cpython-313.pyc
│     │     │  │     ├─ test_svml.cpython-313.pyc
│     │     │  │     ├─ test_sysinfo.cpython-313.pyc
│     │     │  │     ├─ test_sys_monitoring.cpython-313.pyc
│     │     │  │     ├─ test_sys_stdin_assignment.cpython-313.pyc
│     │     │  │     ├─ test_target_extension.cpython-313.pyc
│     │     │  │     ├─ test_target_overloadselector.cpython-313.pyc
│     │     │  │     ├─ test_threadsafety.cpython-313.pyc
│     │     │  │     ├─ test_tracing.cpython-313.pyc
│     │     │  │     ├─ test_try_except.cpython-313.pyc
│     │     │  │     ├─ test_tuples.cpython-313.pyc
│     │     │  │     ├─ test_typeconv.cpython-313.pyc
│     │     │  │     ├─ test_typedlist.cpython-313.pyc
│     │     │  │     ├─ test_typedobjectutils.cpython-313.pyc
│     │     │  │     ├─ test_typeguard.cpython-313.pyc
│     │     │  │     ├─ test_typeinfer.cpython-313.pyc
│     │     │  │     ├─ test_typenames.cpython-313.pyc
│     │     │  │     ├─ test_typeof.cpython-313.pyc
│     │     │  │     ├─ test_types.cpython-313.pyc
│     │     │  │     ├─ test_typingerror.cpython-313.pyc
│     │     │  │     ├─ test_ufuncs.cpython-313.pyc
│     │     │  │     ├─ test_unicode.cpython-313.pyc
│     │     │  │     ├─ test_unicode_array.cpython-313.pyc
│     │     │  │     ├─ test_unicode_names.cpython-313.pyc
│     │     │  │     ├─ test_unpack_sequence.cpython-313.pyc
│     │     │  │     ├─ test_unpickle_without_module.cpython-313.pyc
│     │     │  │     ├─ test_unsafe_intrinsics.cpython-313.pyc
│     │     │  │     ├─ test_usecases.cpython-313.pyc
│     │     │  │     ├─ test_vectorization.cpython-313.pyc
│     │     │  │     ├─ test_vectorization_type_inference.cpython-313.pyc
│     │     │  │     ├─ test_warnings.cpython-313.pyc
│     │     │  │     ├─ test_withlifting.cpython-313.pyc
│     │     │  │     ├─ threading_backend_usecases.cpython-313.pyc
│     │     │  │     ├─ typedlist_usecases.cpython-313.pyc
│     │     │  │     ├─ usecases.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ typed
│     │     │  │  ├─ dictimpl.py
│     │     │  │  ├─ dictobject.py
│     │     │  │  ├─ listobject.py
│     │     │  │  ├─ py.typed
│     │     │  │  ├─ typeddict.py
│     │     │  │  ├─ typedlist.py
│     │     │  │  ├─ typedobjectutils.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ dictimpl.cpython-313.pyc
│     │     │  │     ├─ dictobject.cpython-313.pyc
│     │     │  │     ├─ listobject.cpython-313.pyc
│     │     │  │     ├─ typeddict.cpython-313.pyc
│     │     │  │     ├─ typedlist.cpython-313.pyc
│     │     │  │     ├─ typedobjectutils.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ types
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ _arraystruct.h
│     │     │  ├─ _devicearray.cp313-win_amd64.pyd
│     │     │  ├─ _devicearray.h
│     │     │  ├─ _dispatcher.cp313-win_amd64.pyd
│     │     │  ├─ _dynfunc.c
│     │     │  ├─ _dynfunc.cp313-win_amd64.pyd
│     │     │  ├─ _dynfuncmod.c
│     │     │  ├─ _hashtable.h
│     │     │  ├─ _helperlib.c
│     │     │  ├─ _helperlib.cp313-win_amd64.pyd
│     │     │  ├─ _helperlib.pyi
│     │     │  ├─ _helpermod.c
│     │     │  ├─ _lapack.c
│     │     │  ├─ _numba_common.h
│     │     │  ├─ _pymodule.h
│     │     │  ├─ _random.c
│     │     │  ├─ _typeof.h
│     │     │  ├─ _unicodetype_db.h
│     │     │  ├─ _version.py
│     │     │  ├─ __init__.py
│     │     │  ├─ __main__.py
│     │     │  └─ __pycache__
│     │     │     ├─ extending.cpython-313.pyc
│     │     │     ├─ runtests.cpython-313.pyc
│     │     │     ├─ _version.cpython-313.pyc
│     │     │     ├─ __init__.cpython-313.pyc
│     │     │     └─ __main__.cpython-313.pyc
│     │     ├─ numpy
│     │     │  ├─ char
│     │     │  │  ├─ __init__.py
│     │     │  │  ├─ __init__.pyi
│     │     │  │  └─ __pycache__
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ conftest.py
│     │     │  ├─ core
│     │     │  │  ├─ arrayprint.py
│     │     │  │  ├─ defchararray.py
│     │     │  │  ├─ einsumfunc.py
│     │     │  │  ├─ fromnumeric.py
│     │     │  │  ├─ function_base.py
│     │     │  │  ├─ getlimits.py
│     │     │  │  ├─ multiarray.py
│     │     │  │  ├─ numeric.py
│     │     │  │  ├─ numerictypes.py
│     │     │  │  ├─ overrides.py
│     │     │  │  ├─ overrides.pyi
│     │     │  │  ├─ records.py
│     │     │  │  ├─ shape_base.py
│     │     │  │  ├─ umath.py
│     │     │  │  ├─ _dtype.py
│     │     │  │  ├─ _dtype.pyi
│     │     │  │  ├─ _dtype_ctypes.py
│     │     │  │  ├─ _dtype_ctypes.pyi
│     │     │  │  ├─ _internal.py
│     │     │  │  ├─ _multiarray_umath.py
│     │     │  │  ├─ _utils.py
│     │     │  │  ├─ __init__.py
│     │     │  │  ├─ __init__.pyi
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ arrayprint.cpython-313.pyc
│     │     │  │     ├─ defchararray.cpython-313.pyc
│     │     │  │     ├─ einsumfunc.cpython-313.pyc
│     │     │  │     ├─ fromnumeric.cpython-313.pyc
│     │     │  │     ├─ function_base.cpython-313.pyc
│     │     │  │     ├─ getlimits.cpython-313.pyc
│     │     │  │     ├─ multiarray.cpython-313.pyc
│     │     │  │     ├─ numeric.cpython-313.pyc
│     │     │  │     ├─ numerictypes.cpython-313.pyc
│     │     │  │     ├─ overrides.cpython-313.pyc
│     │     │  │     ├─ records.cpython-313.pyc
│     │     │  │     ├─ shape_base.cpython-313.pyc
│     │     │  │     ├─ umath.cpython-313.pyc
│     │     │  │     ├─ _dtype.cpython-313.pyc
│     │     │  │     ├─ _dtype_ctypes.cpython-313.pyc
│     │     │  │     ├─ _internal.cpython-313.pyc
│     │     │  │     ├─ _multiarray_umath.cpython-313.pyc
│     │     │  │     ├─ _utils.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ ctypeslib
│     │     │  │  ├─ _ctypeslib.py
│     │     │  │  ├─ _ctypeslib.pyi
│     │     │  │  ├─ __init__.py
│     │     │  │  ├─ __init__.pyi
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ _ctypeslib.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ doc
│     │     │  │  ├─ ufuncs.py
│     │     │  │  └─ __pycache__
│     │     │  │     └─ ufuncs.cpython-313.pyc
│     │     │  ├─ dtypes.py
│     │     │  ├─ dtypes.pyi
│     │     │  ├─ exceptions.py
│     │     │  ├─ exceptions.pyi
│     │     │  ├─ f2py
│     │     │  │  ├─ auxfuncs.py
│     │     │  │  ├─ auxfuncs.pyi
│     │     │  │  ├─ capi_maps.py
│     │     │  │  ├─ capi_maps.pyi
│     │     │  │  ├─ cb_rules.py
│     │     │  │  ├─ cb_rules.pyi
│     │     │  │  ├─ cfuncs.py
│     │     │  │  ├─ cfuncs.pyi
│     │     │  │  ├─ common_rules.py
│     │     │  │  ├─ common_rules.pyi
│     │     │  │  ├─ crackfortran.py
│     │     │  │  ├─ crackfortran.pyi
│     │     │  │  ├─ diagnose.py
│     │     │  │  ├─ diagnose.pyi
│     │     │  │  ├─ f2py2e.py
│     │     │  │  ├─ f2py2e.pyi
│     │     │  │  ├─ f90mod_rules.py
│     │     │  │  ├─ f90mod_rules.pyi
│     │     │  │  ├─ func2subr.py
│     │     │  │  ├─ func2subr.pyi
│     │     │  │  ├─ rules.py
│     │     │  │  ├─ rules.pyi
│     │     │  │  ├─ setup.cfg
│     │     │  │  ├─ src
│     │     │  │  │  ├─ fortranobject.c
│     │     │  │  │  └─ fortranobject.h
│     │     │  │  ├─ symbolic.py
│     │     │  │  ├─ symbolic.pyi
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ src
│     │     │  │  │  │  ├─ abstract_interface
│     │     │  │  │  │  │  ├─ foo.f90
│     │     │  │  │  │  │  └─ gh18403_mod.f90
│     │     │  │  │  │  ├─ array_from_pyobj
│     │     │  │  │  │  │  └─ wrapmodule.c
│     │     │  │  │  │  ├─ assumed_shape
│     │     │  │  │  │  │  ├─ .f2py_f2cmap
│     │     │  │  │  │  │  ├─ foo_free.f90
│     │     │  │  │  │  │  ├─ foo_mod.f90
│     │     │  │  │  │  │  ├─ foo_use.f90
│     │     │  │  │  │  │  └─ precision.f90
│     │     │  │  │  │  ├─ block_docstring
│     │     │  │  │  │  │  └─ foo.f
│     │     │  │  │  │  ├─ callback
│     │     │  │  │  │  │  ├─ foo.f
│     │     │  │  │  │  │  ├─ gh17797.f90
│     │     │  │  │  │  │  ├─ gh18335.f90
│     │     │  │  │  │  │  ├─ gh25211.f
│     │     │  │  │  │  │  ├─ gh25211.pyf
│     │     │  │  │  │  │  └─ gh26681.f90
│     │     │  │  │  │  ├─ cli
│     │     │  │  │  │  │  ├─ gh_22819.pyf
│     │     │  │  │  │  │  ├─ hi77.f
│     │     │  │  │  │  │  └─ hiworld.f90
│     │     │  │  │  │  ├─ common
│     │     │  │  │  │  │  ├─ block.f
│     │     │  │  │  │  │  └─ gh19161.f90
│     │     │  │  │  │  ├─ crackfortran
│     │     │  │  │  │  │  ├─ accesstype.f90
│     │     │  │  │  │  │  ├─ common_with_division.f
│     │     │  │  │  │  │  ├─ data_common.f
│     │     │  │  │  │  │  ├─ data_multiplier.f
│     │     │  │  │  │  │  ├─ data_stmts.f90
│     │     │  │  │  │  │  ├─ data_with_comments.f
│     │     │  │  │  │  │  ├─ foo_deps.f90
│     │     │  │  │  │  │  ├─ gh15035.f
│     │     │  │  │  │  │  ├─ gh17859.f
│     │     │  │  │  │  │  ├─ gh22648.pyf
│     │     │  │  │  │  │  ├─ gh23533.f
│     │     │  │  │  │  │  ├─ gh23598.f90
│     │     │  │  │  │  │  ├─ gh23598Warn.f90
│     │     │  │  │  │  │  ├─ gh23879.f90
│     │     │  │  │  │  │  ├─ gh27697.f90
│     │     │  │  │  │  │  ├─ gh2848.f90
│     │     │  │  │  │  │  ├─ operators.f90
│     │     │  │  │  │  │  ├─ privatemod.f90
│     │     │  │  │  │  │  ├─ publicmod.f90
│     │     │  │  │  │  │  ├─ pubprivmod.f90
│     │     │  │  │  │  │  └─ unicode_comment.f90
│     │     │  │  │  │  ├─ f2cmap
│     │     │  │  │  │  │  ├─ .f2py_f2cmap
│     │     │  │  │  │  │  └─ isoFortranEnvMap.f90
│     │     │  │  │  │  ├─ isocintrin
│     │     │  │  │  │  │  └─ isoCtests.f90
│     │     │  │  │  │  ├─ kind
│     │     │  │  │  │  │  └─ foo.f90
│     │     │  │  │  │  ├─ mixed
│     │     │  │  │  │  │  ├─ foo.f
│     │     │  │  │  │  │  ├─ foo_fixed.f90
│     │     │  │  │  │  │  └─ foo_free.f90
│     │     │  │  │  │  ├─ modules
│     │     │  │  │  │  │  ├─ gh25337
│     │     │  │  │  │  │  │  ├─ data.f90
│     │     │  │  │  │  │  │  └─ use_data.f90
│     │     │  │  │  │  │  ├─ gh26920
│     │     │  │  │  │  │  │  ├─ two_mods_with_no_public_entities.f90
│     │     │  │  │  │  │  │  └─ two_mods_with_one_public_routine.f90
│     │     │  │  │  │  │  ├─ module_data_docstring.f90
│     │     │  │  │  │  │  └─ use_modules.f90
│     │     │  │  │  │  ├─ negative_bounds
│     │     │  │  │  │  │  └─ issue_20853.f90
│     │     │  │  │  │  ├─ parameter
│     │     │  │  │  │  │  ├─ constant_array.f90
│     │     │  │  │  │  │  ├─ constant_both.f90
│     │     │  │  │  │  │  ├─ constant_compound.f90
│     │     │  │  │  │  │  ├─ constant_integer.f90
│     │     │  │  │  │  │  ├─ constant_non_compound.f90
│     │     │  │  │  │  │  └─ constant_real.f90
│     │     │  │  │  │  ├─ quoted_character
│     │     │  │  │  │  │  └─ foo.f
│     │     │  │  │  │  ├─ regression
│     │     │  │  │  │  │  ├─ AB.inc
│     │     │  │  │  │  │  ├─ assignOnlyModule.f90
│     │     │  │  │  │  │  ├─ datonly.f90
│     │     │  │  │  │  │  ├─ f77comments.f
│     │     │  │  │  │  │  ├─ f77fixedform.f95
│     │     │  │  │  │  │  ├─ f90continuation.f90
│     │     │  │  │  │  │  ├─ incfile.f90
│     │     │  │  │  │  │  ├─ inout.f90
│     │     │  │  │  │  │  ├─ lower_f2py_fortran.f90
│     │     │  │  │  │  │  └─ mod_derived_types.f90
│     │     │  │  │  │  ├─ return_character
│     │     │  │  │  │  │  ├─ foo77.f
│     │     │  │  │  │  │  └─ foo90.f90
│     │     │  │  │  │  ├─ return_complex
│     │     │  │  │  │  │  ├─ foo77.f
│     │     │  │  │  │  │  └─ foo90.f90
│     │     │  │  │  │  ├─ return_integer
│     │     │  │  │  │  │  ├─ foo77.f
│     │     │  │  │  │  │  └─ foo90.f90
│     │     │  │  │  │  ├─ return_logical
│     │     │  │  │  │  │  ├─ foo77.f
│     │     │  │  │  │  │  └─ foo90.f90
│     │     │  │  │  │  ├─ return_real
│     │     │  │  │  │  │  ├─ foo77.f
│     │     │  │  │  │  │  └─ foo90.f90
│     │     │  │  │  │  ├─ routines
│     │     │  │  │  │  │  ├─ funcfortranname.f
│     │     │  │  │  │  │  ├─ funcfortranname.pyf
│     │     │  │  │  │  │  ├─ subrout.f
│     │     │  │  │  │  │  └─ subrout.pyf
│     │     │  │  │  │  ├─ size
│     │     │  │  │  │  │  └─ foo.f90
│     │     │  │  │  │  ├─ string
│     │     │  │  │  │  │  ├─ char.f90
│     │     │  │  │  │  │  ├─ fixed_string.f90
│     │     │  │  │  │  │  ├─ gh24008.f
│     │     │  │  │  │  │  ├─ gh24662.f90
│     │     │  │  │  │  │  ├─ gh25286.f90
│     │     │  │  │  │  │  ├─ gh25286.pyf
│     │     │  │  │  │  │  ├─ gh25286_bc.pyf
│     │     │  │  │  │  │  ├─ scalar_string.f90
│     │     │  │  │  │  │  └─ string.f
│     │     │  │  │  │  └─ value_attrspec
│     │     │  │  │  │     └─ gh21665.f90
│     │     │  │  │  ├─ test_abstract_interface.py
│     │     │  │  │  ├─ test_array_from_pyobj.py
│     │     │  │  │  ├─ test_assumed_shape.py
│     │     │  │  │  ├─ test_block_docstring.py
│     │     │  │  │  ├─ test_callback.py
│     │     │  │  │  ├─ test_character.py
│     │     │  │  │  ├─ test_common.py
│     │     │  │  │  ├─ test_crackfortran.py
│     │     │  │  │  ├─ test_data.py
│     │     │  │  │  ├─ test_docs.py
│     │     │  │  │  ├─ test_f2cmap.py
│     │     │  │  │  ├─ test_f2py2e.py
│     │     │  │  │  ├─ test_isoc.py
│     │     │  │  │  ├─ test_kind.py
│     │     │  │  │  ├─ test_mixed.py
│     │     │  │  │  ├─ test_modules.py
│     │     │  │  │  ├─ test_parameter.py
│     │     │  │  │  ├─ test_pyf_src.py
│     │     │  │  │  ├─ test_quoted_character.py
│     │     │  │  │  ├─ test_regression.py
│     │     │  │  │  ├─ test_return_character.py
│     │     │  │  │  ├─ test_return_complex.py
│     │     │  │  │  ├─ test_return_integer.py
│     │     │  │  │  ├─ test_return_logical.py
│     │     │  │  │  ├─ test_return_real.py
│     │     │  │  │  ├─ test_routines.py
│     │     │  │  │  ├─ test_semicolon_split.py
│     │     │  │  │  ├─ test_size.py
│     │     │  │  │  ├─ test_string.py
│     │     │  │  │  ├─ test_symbolic.py
│     │     │  │  │  ├─ test_value_attrspec.py
│     │     │  │  │  ├─ util.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ test_abstract_interface.cpython-313.pyc
│     │     │  │  │     ├─ test_array_from_pyobj.cpython-313.pyc
│     │     │  │  │     ├─ test_assumed_shape.cpython-313.pyc
│     │     │  │  │     ├─ test_block_docstring.cpython-313.pyc
│     │     │  │  │     ├─ test_callback.cpython-313.pyc
│     │     │  │  │     ├─ test_character.cpython-313.pyc
│     │     │  │  │     ├─ test_common.cpython-313.pyc
│     │     │  │  │     ├─ test_crackfortran.cpython-313.pyc
│     │     │  │  │     ├─ test_data.cpython-313.pyc
│     │     │  │  │     ├─ test_docs.cpython-313.pyc
│     │     │  │  │     ├─ test_f2cmap.cpython-313.pyc
│     │     │  │  │     ├─ test_f2py2e.cpython-313.pyc
│     │     │  │  │     ├─ test_isoc.cpython-313.pyc
│     │     │  │  │     ├─ test_kind.cpython-313.pyc
│     │     │  │  │     ├─ test_mixed.cpython-313.pyc
│     │     │  │  │     ├─ test_modules.cpython-313.pyc
│     │     │  │  │     ├─ test_parameter.cpython-313.pyc
│     │     │  │  │     ├─ test_pyf_src.cpython-313.pyc
│     │     │  │  │     ├─ test_quoted_character.cpython-313.pyc
│     │     │  │  │     ├─ test_regression.cpython-313.pyc
│     │     │  │  │     ├─ test_return_character.cpython-313.pyc
│     │     │  │  │     ├─ test_return_complex.cpython-313.pyc
│     │     │  │  │     ├─ test_return_integer.cpython-313.pyc
│     │     │  │  │     ├─ test_return_logical.cpython-313.pyc
│     │     │  │  │     ├─ test_return_real.cpython-313.pyc
│     │     │  │  │     ├─ test_routines.cpython-313.pyc
│     │     │  │  │     ├─ test_semicolon_split.cpython-313.pyc
│     │     │  │  │     ├─ test_size.cpython-313.pyc
│     │     │  │  │     ├─ test_string.cpython-313.pyc
│     │     │  │  │     ├─ test_symbolic.cpython-313.pyc
│     │     │  │  │     ├─ test_value_attrspec.cpython-313.pyc
│     │     │  │  │     ├─ util.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ use_rules.py
│     │     │  │  ├─ use_rules.pyi
│     │     │  │  ├─ _backends
│     │     │  │  │  ├─ meson.build.template
│     │     │  │  │  ├─ _backend.py
│     │     │  │  │  ├─ _backend.pyi
│     │     │  │  │  ├─ _meson.py
│     │     │  │  │  ├─ _meson.pyi
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  ├─ __init__.pyi
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ _backend.cpython-313.pyc
│     │     │  │  │     ├─ _meson.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _isocbind.py
│     │     │  │  ├─ _isocbind.pyi
│     │     │  │  ├─ _src_pyf.py
│     │     │  │  ├─ _src_pyf.pyi
│     │     │  │  ├─ __init__.py
│     │     │  │  ├─ __init__.pyi
│     │     │  │  ├─ __main__.py
│     │     │  │  ├─ __pycache__
│     │     │  │  │  ├─ auxfuncs.cpython-313.pyc
│     │     │  │  │  ├─ capi_maps.cpython-313.pyc
│     │     │  │  │  ├─ cb_rules.cpython-313.pyc
│     │     │  │  │  ├─ cfuncs.cpython-313.pyc
│     │     │  │  │  ├─ common_rules.cpython-313.pyc
│     │     │  │  │  ├─ crackfortran.cpython-313.pyc
│     │     │  │  │  ├─ diagnose.cpython-313.pyc
│     │     │  │  │  ├─ f2py2e.cpython-313.pyc
│     │     │  │  │  ├─ f90mod_rules.cpython-313.pyc
│     │     │  │  │  ├─ func2subr.cpython-313.pyc
│     │     │  │  │  ├─ rules.cpython-313.pyc
│     │     │  │  │  ├─ symbolic.cpython-313.pyc
│     │     │  │  │  ├─ use_rules.cpython-313.pyc
│     │     │  │  │  ├─ _isocbind.cpython-313.pyc
│     │     │  │  │  ├─ _src_pyf.cpython-313.pyc
│     │     │  │  │  ├─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ __main__.cpython-313.pyc
│     │     │  │  │  └─ __version__.cpython-313.pyc
│     │     │  │  ├─ __version__.py
│     │     │  │  └─ __version__.pyi
│     │     │  ├─ fft
│     │     │  │  ├─ helper.py
│     │     │  │  ├─ helper.pyi
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ test_helper.py
│     │     │  │  │  ├─ test_pocketfft.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ test_helper.cpython-313.pyc
│     │     │  │  │     ├─ test_pocketfft.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _helper.py
│     │     │  │  ├─ _helper.pyi
│     │     │  │  ├─ _pocketfft.py
│     │     │  │  ├─ _pocketfft.pyi
│     │     │  │  ├─ _pocketfft_umath.cp313-win_amd64.lib
│     │     │  │  ├─ _pocketfft_umath.cp313-win_amd64.pyd
│     │     │  │  ├─ __init__.py
│     │     │  │  ├─ __init__.pyi
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ helper.cpython-313.pyc
│     │     │  │     ├─ _helper.cpython-313.pyc
│     │     │  │     ├─ _pocketfft.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ lib
│     │     │  │  ├─ array_utils.py
│     │     │  │  ├─ array_utils.pyi
│     │     │  │  ├─ format.py
│     │     │  │  ├─ format.pyi
│     │     │  │  ├─ introspect.py
│     │     │  │  ├─ introspect.pyi
│     │     │  │  ├─ mixins.py
│     │     │  │  ├─ mixins.pyi
│     │     │  │  ├─ npyio.py
│     │     │  │  ├─ npyio.pyi
│     │     │  │  ├─ recfunctions.py
│     │     │  │  ├─ recfunctions.pyi
│     │     │  │  ├─ scimath.py
│     │     │  │  ├─ scimath.pyi
│     │     │  │  ├─ stride_tricks.py
│     │     │  │  ├─ stride_tricks.pyi
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ data
│     │     │  │  │  │  ├─ py2-np0-objarr.npy
│     │     │  │  │  │  ├─ py2-objarr.npy
│     │     │  │  │  │  ├─ py2-objarr.npz
│     │     │  │  │  │  ├─ py3-objarr.npy
│     │     │  │  │  │  ├─ py3-objarr.npz
│     │     │  │  │  │  ├─ python3.npy
│     │     │  │  │  │  └─ win64python2.npy
│     │     │  │  │  ├─ test_arraypad.py
│     │     │  │  │  ├─ test_arraysetops.py
│     │     │  │  │  ├─ test_arrayterator.py
│     │     │  │  │  ├─ test_array_utils.py
│     │     │  │  │  ├─ test_format.py
│     │     │  │  │  ├─ test_function_base.py
│     │     │  │  │  ├─ test_histograms.py
│     │     │  │  │  ├─ test_index_tricks.py
│     │     │  │  │  ├─ test_io.py
│     │     │  │  │  ├─ test_loadtxt.py
│     │     │  │  │  ├─ test_mixins.py
│     │     │  │  │  ├─ test_nanfunctions.py
│     │     │  │  │  ├─ test_packbits.py
│     │     │  │  │  ├─ test_polynomial.py
│     │     │  │  │  ├─ test_recfunctions.py
│     │     │  │  │  ├─ test_regression.py
│     │     │  │  │  ├─ test_shape_base.py
│     │     │  │  │  ├─ test_stride_tricks.py
│     │     │  │  │  ├─ test_twodim_base.py
│     │     │  │  │  ├─ test_type_check.py
│     │     │  │  │  ├─ test_ufunclike.py
│     │     │  │  │  ├─ test_utils.py
│     │     │  │  │  ├─ test__datasource.py
│     │     │  │  │  ├─ test__iotools.py
│     │     │  │  │  ├─ test__version.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ test_arraypad.cpython-313.pyc
│     │     │  │  │     ├─ test_arraysetops.cpython-313.pyc
│     │     │  │  │     ├─ test_arrayterator.cpython-313.pyc
│     │     │  │  │     ├─ test_array_utils.cpython-313.pyc
│     │     │  │  │     ├─ test_format.cpython-313.pyc
│     │     │  │  │     ├─ test_function_base.cpython-313.pyc
│     │     │  │  │     ├─ test_histograms.cpython-313.pyc
│     │     │  │  │     ├─ test_index_tricks.cpython-313.pyc
│     │     │  │  │     ├─ test_io.cpython-313.pyc
│     │     │  │  │     ├─ test_loadtxt.cpython-313.pyc
│     │     │  │  │     ├─ test_mixins.cpython-313.pyc
│     │     │  │  │     ├─ test_nanfunctions.cpython-313.pyc
│     │     │  │  │     ├─ test_packbits.cpython-313.pyc
│     │     │  │  │     ├─ test_polynomial.cpython-313.pyc
│     │     │  │  │     ├─ test_recfunctions.cpython-313.pyc
│     │     │  │  │     ├─ test_regression.cpython-313.pyc
│     │     │  │  │     ├─ test_shape_base.cpython-313.pyc
│     │     │  │  │     ├─ test_stride_tricks.cpython-313.pyc
│     │     │  │  │     ├─ test_twodim_base.cpython-313.pyc
│     │     │  │  │     ├─ test_type_check.cpython-313.pyc
│     │     │  │  │     ├─ test_ufunclike.cpython-313.pyc
│     │     │  │  │     ├─ test_utils.cpython-313.pyc
│     │     │  │  │     ├─ test__datasource.cpython-313.pyc
│     │     │  │  │     ├─ test__iotools.cpython-313.pyc
│     │     │  │  │     ├─ test__version.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ user_array.py
│     │     │  │  ├─ user_array.pyi
│     │     │  │  ├─ _arraypad_impl.py
│     │     │  │  ├─ _arraypad_impl.pyi
│     │     │  │  ├─ _arraysetops_impl.py
│     │     │  │  ├─ _arraysetops_impl.pyi
│     │     │  │  ├─ _arrayterator_impl.py
│     │     │  │  ├─ _arrayterator_impl.pyi
│     │     │  │  ├─ _array_utils_impl.py
│     │     │  │  ├─ _array_utils_impl.pyi
│     │     │  │  ├─ _datasource.py
│     │     │  │  ├─ _datasource.pyi
│     │     │  │  ├─ _format_impl.py
│     │     │  │  ├─ _format_impl.pyi
│     │     │  │  ├─ _function_base_impl.py
│     │     │  │  ├─ _function_base_impl.pyi
│     │     │  │  ├─ _histograms_impl.py
│     │     │  │  ├─ _histograms_impl.pyi
│     │     │  │  ├─ _index_tricks_impl.py
│     │     │  │  ├─ _index_tricks_impl.pyi
│     │     │  │  ├─ _iotools.py
│     │     │  │  ├─ _iotools.pyi
│     │     │  │  ├─ _nanfunctions_impl.py
│     │     │  │  ├─ _nanfunctions_impl.pyi
│     │     │  │  ├─ _npyio_impl.py
│     │     │  │  ├─ _npyio_impl.pyi
│     │     │  │  ├─ _polynomial_impl.py
│     │     │  │  ├─ _polynomial_impl.pyi
│     │     │  │  ├─ _scimath_impl.py
│     │     │  │  ├─ _scimath_impl.pyi
│     │     │  │  ├─ _shape_base_impl.py
│     │     │  │  ├─ _shape_base_impl.pyi
│     │     │  │  ├─ _stride_tricks_impl.py
│     │     │  │  ├─ _stride_tricks_impl.pyi
│     │     │  │  ├─ _twodim_base_impl.py
│     │     │  │  ├─ _twodim_base_impl.pyi
│     │     │  │  ├─ _type_check_impl.py
│     │     │  │  ├─ _type_check_impl.pyi
│     │     │  │  ├─ _ufunclike_impl.py
│     │     │  │  ├─ _ufunclike_impl.pyi
│     │     │  │  ├─ _user_array_impl.py
│     │     │  │  ├─ _user_array_impl.pyi
│     │     │  │  ├─ _utils_impl.py
│     │     │  │  ├─ _utils_impl.pyi
│     │     │  │  ├─ _version.py
│     │     │  │  ├─ _version.pyi
│     │     │  │  ├─ __init__.py
│     │     │  │  ├─ __init__.pyi
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ array_utils.cpython-313.pyc
│     │     │  │     ├─ format.cpython-313.pyc
│     │     │  │     ├─ introspect.cpython-313.pyc
│     │     │  │     ├─ mixins.cpython-313.pyc
│     │     │  │     ├─ npyio.cpython-313.pyc
│     │     │  │     ├─ recfunctions.cpython-313.pyc
│     │     │  │     ├─ scimath.cpython-313.pyc
│     │     │  │     ├─ stride_tricks.cpython-313.pyc
│     │     │  │     ├─ user_array.cpython-313.pyc
│     │     │  │     ├─ _arraypad_impl.cpython-313.pyc
│     │     │  │     ├─ _arraysetops_impl.cpython-313.pyc
│     │     │  │     ├─ _arrayterator_impl.cpython-313.pyc
│     │     │  │     ├─ _array_utils_impl.cpython-313.pyc
│     │     │  │     ├─ _datasource.cpython-313.pyc
│     │     │  │     ├─ _format_impl.cpython-313.pyc
│     │     │  │     ├─ _function_base_impl.cpython-313.pyc
│     │     │  │     ├─ _histograms_impl.cpython-313.pyc
│     │     │  │     ├─ _index_tricks_impl.cpython-313.pyc
│     │     │  │     ├─ _iotools.cpython-313.pyc
│     │     │  │     ├─ _nanfunctions_impl.cpython-313.pyc
│     │     │  │     ├─ _npyio_impl.cpython-313.pyc
│     │     │  │     ├─ _polynomial_impl.cpython-313.pyc
│     │     │  │     ├─ _scimath_impl.cpython-313.pyc
│     │     │  │     ├─ _shape_base_impl.cpython-313.pyc
│     │     │  │     ├─ _stride_tricks_impl.cpython-313.pyc
│     │     │  │     ├─ _twodim_base_impl.cpython-313.pyc
│     │     │  │     ├─ _type_check_impl.cpython-313.pyc
│     │     │  │     ├─ _ufunclike_impl.cpython-313.pyc
│     │     │  │     ├─ _user_array_impl.cpython-313.pyc
│     │     │  │     ├─ _utils_impl.cpython-313.pyc
│     │     │  │     ├─ _version.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ linalg
│     │     │  │  ├─ lapack_lite.cp313-win_amd64.lib
│     │     │  │  ├─ lapack_lite.cp313-win_amd64.pyd
│     │     │  │  ├─ lapack_lite.pyi
│     │     │  │  ├─ linalg.py
│     │     │  │  ├─ linalg.pyi
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ test_deprecations.py
│     │     │  │  │  ├─ test_linalg.py
│     │     │  │  │  ├─ test_regression.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ test_deprecations.cpython-313.pyc
│     │     │  │  │     ├─ test_linalg.cpython-313.pyc
│     │     │  │  │     ├─ test_regression.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _linalg.py
│     │     │  │  ├─ _linalg.pyi
│     │     │  │  ├─ _umath_linalg.cp313-win_amd64.lib
│     │     │  │  ├─ _umath_linalg.cp313-win_amd64.pyd
│     │     │  │  ├─ _umath_linalg.pyi
│     │     │  │  ├─ __init__.py
│     │     │  │  ├─ __init__.pyi
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ linalg.cpython-313.pyc
│     │     │  │     ├─ _linalg.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ ma
│     │     │  │  ├─ API_CHANGES.txt
│     │     │  │  ├─ core.py
│     │     │  │  ├─ core.pyi
│     │     │  │  ├─ extras.py
│     │     │  │  ├─ extras.pyi
│     │     │  │  ├─ LICENSE
│     │     │  │  ├─ mrecords.py
│     │     │  │  ├─ mrecords.pyi
│     │     │  │  ├─ README.rst
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ test_arrayobject.py
│     │     │  │  │  ├─ test_core.py
│     │     │  │  │  ├─ test_deprecations.py
│     │     │  │  │  ├─ test_extras.py
│     │     │  │  │  ├─ test_mrecords.py
│     │     │  │  │  ├─ test_old_ma.py
│     │     │  │  │  ├─ test_regression.py
│     │     │  │  │  ├─ test_subclassing.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ test_arrayobject.cpython-313.pyc
│     │     │  │  │     ├─ test_core.cpython-313.pyc
│     │     │  │  │     ├─ test_deprecations.cpython-313.pyc
│     │     │  │  │     ├─ test_extras.cpython-313.pyc
│     │     │  │  │     ├─ test_mrecords.cpython-313.pyc
│     │     │  │  │     ├─ test_old_ma.cpython-313.pyc
│     │     │  │  │     ├─ test_regression.cpython-313.pyc
│     │     │  │  │     ├─ test_subclassing.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ testutils.py
│     │     │  │  ├─ __init__.py
│     │     │  │  ├─ __init__.pyi
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ core.cpython-313.pyc
│     │     │  │     ├─ extras.cpython-313.pyc
│     │     │  │     ├─ mrecords.cpython-313.pyc
│     │     │  │     ├─ testutils.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ matlib.py
│     │     │  ├─ matlib.pyi
│     │     │  ├─ matrixlib
│     │     │  │  ├─ defmatrix.py
│     │     │  │  ├─ defmatrix.pyi
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ test_defmatrix.py
│     │     │  │  │  ├─ test_interaction.py
│     │     │  │  │  ├─ test_masked_matrix.py
│     │     │  │  │  ├─ test_matrix_linalg.py
│     │     │  │  │  ├─ test_multiarray.py
│     │     │  │  │  ├─ test_numeric.py
│     │     │  │  │  ├─ test_regression.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ test_defmatrix.cpython-313.pyc
│     │     │  │  │     ├─ test_interaction.cpython-313.pyc
│     │     │  │  │     ├─ test_masked_matrix.cpython-313.pyc
│     │     │  │  │     ├─ test_matrix_linalg.cpython-313.pyc
│     │     │  │  │     ├─ test_multiarray.cpython-313.pyc
│     │     │  │  │     ├─ test_numeric.cpython-313.pyc
│     │     │  │  │     ├─ test_regression.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ __init__.py
│     │     │  │  ├─ __init__.pyi
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ defmatrix.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ polynomial
│     │     │  │  ├─ chebyshev.py
│     │     │  │  ├─ chebyshev.pyi
│     │     │  │  ├─ hermite.py
│     │     │  │  ├─ hermite.pyi
│     │     │  │  ├─ hermite_e.py
│     │     │  │  ├─ hermite_e.pyi
│     │     │  │  ├─ laguerre.py
│     │     │  │  ├─ laguerre.pyi
│     │     │  │  ├─ legendre.py
│     │     │  │  ├─ legendre.pyi
│     │     │  │  ├─ polynomial.py
│     │     │  │  ├─ polynomial.pyi
│     │     │  │  ├─ polyutils.py
│     │     │  │  ├─ polyutils.pyi
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ test_chebyshev.py
│     │     │  │  │  ├─ test_classes.py
│     │     │  │  │  ├─ test_hermite.py
│     │     │  │  │  ├─ test_hermite_e.py
│     │     │  │  │  ├─ test_laguerre.py
│     │     │  │  │  ├─ test_legendre.py
│     │     │  │  │  ├─ test_polynomial.py
│     │     │  │  │  ├─ test_polyutils.py
│     │     │  │  │  ├─ test_printing.py
│     │     │  │  │  ├─ test_symbol.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ test_chebyshev.cpython-313.pyc
│     │     │  │  │     ├─ test_classes.cpython-313.pyc
│     │     │  │  │     ├─ test_hermite.cpython-313.pyc
│     │     │  │  │     ├─ test_hermite_e.cpython-313.pyc
│     │     │  │  │     ├─ test_laguerre.cpython-313.pyc
│     │     │  │  │     ├─ test_legendre.cpython-313.pyc
│     │     │  │  │     ├─ test_polynomial.cpython-313.pyc
│     │     │  │  │     ├─ test_polyutils.cpython-313.pyc
│     │     │  │  │     ├─ test_printing.cpython-313.pyc
│     │     │  │  │     ├─ test_symbol.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _polybase.py
│     │     │  │  ├─ _polybase.pyi
│     │     │  │  ├─ _polytypes.pyi
│     │     │  │  ├─ __init__.py
│     │     │  │  ├─ __init__.pyi
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ chebyshev.cpython-313.pyc
│     │     │  │     ├─ hermite.cpython-313.pyc
│     │     │  │     ├─ hermite_e.cpython-313.pyc
│     │     │  │     ├─ laguerre.cpython-313.pyc
│     │     │  │     ├─ legendre.cpython-313.pyc
│     │     │  │     ├─ polynomial.cpython-313.pyc
│     │     │  │     ├─ polyutils.cpython-313.pyc
│     │     │  │     ├─ _polybase.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ py.typed
│     │     │  ├─ random
│     │     │  │  ├─ bit_generator.cp313-win_amd64.lib
│     │     │  │  ├─ bit_generator.cp313-win_amd64.pyd
│     │     │  │  ├─ bit_generator.pxd
│     │     │  │  ├─ bit_generator.pyi
│     │     │  │  ├─ lib
│     │     │  │  │  └─ npyrandom.lib
│     │     │  │  ├─ LICENSE.md
│     │     │  │  ├─ mtrand.cp313-win_amd64.lib
│     │     │  │  ├─ mtrand.cp313-win_amd64.pyd
│     │     │  │  ├─ mtrand.pyi
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ data
│     │     │  │  │  │  ├─ generator_pcg64_np121.pkl.gz
│     │     │  │  │  │  ├─ generator_pcg64_np126.pkl.gz
│     │     │  │  │  │  ├─ mt19937-testset-1.csv
│     │     │  │  │  │  ├─ mt19937-testset-2.csv
│     │     │  │  │  │  ├─ pcg64-testset-1.csv
│     │     │  │  │  │  ├─ pcg64-testset-2.csv
│     │     │  │  │  │  ├─ pcg64dxsm-testset-1.csv
│     │     │  │  │  │  ├─ pcg64dxsm-testset-2.csv
│     │     │  │  │  │  ├─ philox-testset-1.csv
│     │     │  │  │  │  ├─ philox-testset-2.csv
│     │     │  │  │  │  ├─ sfc64-testset-1.csv
│     │     │  │  │  │  ├─ sfc64-testset-2.csv
│     │     │  │  │  │  ├─ sfc64_np126.pkl.gz
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ test_direct.py
│     │     │  │  │  ├─ test_extending.py
│     │     │  │  │  ├─ test_generator_mt19937.py
│     │     │  │  │  ├─ test_generator_mt19937_regressions.py
│     │     │  │  │  ├─ test_random.py
│     │     │  │  │  ├─ test_randomstate.py
│     │     │  │  │  ├─ test_randomstate_regression.py
│     │     │  │  │  ├─ test_regression.py
│     │     │  │  │  ├─ test_seed_sequence.py
│     │     │  │  │  ├─ test_smoke.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ test_direct.cpython-313.pyc
│     │     │  │  │     ├─ test_extending.cpython-313.pyc
│     │     │  │  │     ├─ test_generator_mt19937.cpython-313.pyc
│     │     │  │  │     ├─ test_generator_mt19937_regressions.cpython-313.pyc
│     │     │  │  │     ├─ test_random.cpython-313.pyc
│     │     │  │  │     ├─ test_randomstate.cpython-313.pyc
│     │     │  │  │     ├─ test_randomstate_regression.cpython-313.pyc
│     │     │  │  │     ├─ test_regression.cpython-313.pyc
│     │     │  │  │     ├─ test_seed_sequence.cpython-313.pyc
│     │     │  │  │     ├─ test_smoke.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _bounded_integers.cp313-win_amd64.lib
│     │     │  │  ├─ _bounded_integers.cp313-win_amd64.pyd
│     │     │  │  ├─ _bounded_integers.pxd
│     │     │  │  ├─ _bounded_integers.pyi
│     │     │  │  ├─ _common.cp313-win_amd64.lib
│     │     │  │  ├─ _common.cp313-win_amd64.pyd
│     │     │  │  ├─ _common.pxd
│     │     │  │  ├─ _common.pyi
│     │     │  │  ├─ _examples
│     │     │  │  │  ├─ cffi
│     │     │  │  │  │  ├─ extending.py
│     │     │  │  │  │  ├─ parse.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ extending.cpython-313.pyc
│     │     │  │  │  │     └─ parse.cpython-313.pyc
│     │     │  │  │  ├─ cython
│     │     │  │  │  │  ├─ extending.pyx
│     │     │  │  │  │  └─ meson.build
│     │     │  │  │  └─ numba
│     │     │  │  │     ├─ extending.py
│     │     │  │  │     └─ __pycache__
│     │     │  │  │        └─ extending.cpython-313.pyc
│     │     │  │  ├─ _generator.cp313-win_amd64.lib
│     │     │  │  ├─ _generator.cp313-win_amd64.pyd
│     │     │  │  ├─ _generator.pyi
│     │     │  │  ├─ _mt19937.cp313-win_amd64.lib
│     │     │  │  ├─ _mt19937.cp313-win_amd64.pyd
│     │     │  │  ├─ _mt19937.pyi
│     │     │  │  ├─ _pcg64.cp313-win_amd64.lib
│     │     │  │  ├─ _pcg64.cp313-win_amd64.pyd
│     │     │  │  ├─ _pcg64.pyi
│     │     │  │  ├─ _philox.cp313-win_amd64.lib
│     │     │  │  ├─ _philox.cp313-win_amd64.pyd
│     │     │  │  ├─ _philox.pyi
│     │     │  │  ├─ _pickle.py
│     │     │  │  ├─ _pickle.pyi
│     │     │  │  ├─ _sfc64.cp313-win_amd64.lib
│     │     │  │  ├─ _sfc64.cp313-win_amd64.pyd
│     │     │  │  ├─ _sfc64.pyi
│     │     │  │  ├─ __init__.pxd
│     │     │  │  ├─ __init__.py
│     │     │  │  ├─ __init__.pyi
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ _pickle.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ rec
│     │     │  │  ├─ __init__.py
│     │     │  │  ├─ __init__.pyi
│     │     │  │  └─ __pycache__
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ strings
│     │     │  │  ├─ __init__.py
│     │     │  │  ├─ __init__.pyi
│     │     │  │  └─ __pycache__
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ testing
│     │     │  │  ├─ overrides.py
│     │     │  │  ├─ overrides.pyi
│     │     │  │  ├─ print_coercion_tables.py
│     │     │  │  ├─ print_coercion_tables.pyi
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ test_utils.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ test_utils.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _private
│     │     │  │  │  ├─ extbuild.py
│     │     │  │  │  ├─ extbuild.pyi
│     │     │  │  │  ├─ utils.py
│     │     │  │  │  ├─ utils.pyi
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  ├─ __init__.pyi
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ extbuild.cpython-313.pyc
│     │     │  │  │     ├─ utils.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ __init__.py
│     │     │  │  ├─ __init__.pyi
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ overrides.cpython-313.pyc
│     │     │  │     ├─ print_coercion_tables.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ tests
│     │     │  │  ├─ test_configtool.py
│     │     │  │  ├─ test_ctypeslib.py
│     │     │  │  ├─ test_lazyloading.py
│     │     │  │  ├─ test_matlib.py
│     │     │  │  ├─ test_numpy_config.py
│     │     │  │  ├─ test_numpy_version.py
│     │     │  │  ├─ test_public_api.py
│     │     │  │  ├─ test_reloading.py
│     │     │  │  ├─ test_scripts.py
│     │     │  │  ├─ test_warnings.py
│     │     │  │  ├─ test__all__.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ test_configtool.cpython-313.pyc
│     │     │  │     ├─ test_ctypeslib.cpython-313.pyc
│     │     │  │     ├─ test_lazyloading.cpython-313.pyc
│     │     │  │     ├─ test_matlib.cpython-313.pyc
│     │     │  │     ├─ test_numpy_config.cpython-313.pyc
│     │     │  │     ├─ test_numpy_version.cpython-313.pyc
│     │     │  │     ├─ test_public_api.cpython-313.pyc
│     │     │  │     ├─ test_reloading.cpython-313.pyc
│     │     │  │     ├─ test_scripts.cpython-313.pyc
│     │     │  │     ├─ test_warnings.cpython-313.pyc
│     │     │  │     ├─ test__all__.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ typing
│     │     │  │  ├─ mypy_plugin.py
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ data
│     │     │  │  │  │  ├─ fail
│     │     │  │  │  │  │  ├─ arithmetic.pyi
│     │     │  │  │  │  │  ├─ arrayprint.pyi
│     │     │  │  │  │  │  ├─ arrayterator.pyi
│     │     │  │  │  │  │  ├─ array_constructors.pyi
│     │     │  │  │  │  │  ├─ array_like.pyi
│     │     │  │  │  │  │  ├─ array_pad.pyi
│     │     │  │  │  │  │  ├─ bitwise_ops.pyi
│     │     │  │  │  │  │  ├─ char.pyi
│     │     │  │  │  │  │  ├─ chararray.pyi
│     │     │  │  │  │  │  ├─ comparisons.pyi
│     │     │  │  │  │  │  ├─ constants.pyi
│     │     │  │  │  │  │  ├─ datasource.pyi
│     │     │  │  │  │  │  ├─ dtype.pyi
│     │     │  │  │  │  │  ├─ einsumfunc.pyi
│     │     │  │  │  │  │  ├─ flatiter.pyi
│     │     │  │  │  │  │  ├─ fromnumeric.pyi
│     │     │  │  │  │  │  ├─ histograms.pyi
│     │     │  │  │  │  │  ├─ index_tricks.pyi
│     │     │  │  │  │  │  ├─ lib_function_base.pyi
│     │     │  │  │  │  │  ├─ lib_polynomial.pyi
│     │     │  │  │  │  │  ├─ lib_utils.pyi
│     │     │  │  │  │  │  ├─ lib_version.pyi
│     │     │  │  │  │  │  ├─ linalg.pyi
│     │     │  │  │  │  │  ├─ ma.pyi
│     │     │  │  │  │  │  ├─ memmap.pyi
│     │     │  │  │  │  │  ├─ modules.pyi
│     │     │  │  │  │  │  ├─ multiarray.pyi
│     │     │  │  │  │  │  ├─ ndarray.pyi
│     │     │  │  │  │  │  ├─ ndarray_misc.pyi
│     │     │  │  │  │  │  ├─ nditer.pyi
│     │     │  │  │  │  │  ├─ nested_sequence.pyi
│     │     │  │  │  │  │  ├─ npyio.pyi
│     │     │  │  │  │  │  ├─ numerictypes.pyi
│     │     │  │  │  │  │  ├─ random.pyi
│     │     │  │  │  │  │  ├─ rec.pyi
│     │     │  │  │  │  │  ├─ scalars.pyi
│     │     │  │  │  │  │  ├─ shape.pyi
│     │     │  │  │  │  │  ├─ shape_base.pyi
│     │     │  │  │  │  │  ├─ stride_tricks.pyi
│     │     │  │  │  │  │  ├─ strings.pyi
│     │     │  │  │  │  │  ├─ testing.pyi
│     │     │  │  │  │  │  ├─ twodim_base.pyi
│     │     │  │  │  │  │  ├─ type_check.pyi
│     │     │  │  │  │  │  ├─ ufunclike.pyi
│     │     │  │  │  │  │  ├─ ufuncs.pyi
│     │     │  │  │  │  │  ├─ ufunc_config.pyi
│     │     │  │  │  │  │  └─ warnings_and_errors.pyi
│     │     │  │  │  │  ├─ misc
│     │     │  │  │  │  │  └─ extended_precision.pyi
│     │     │  │  │  │  ├─ mypy.ini
│     │     │  │  │  │  ├─ pass
│     │     │  │  │  │  │  ├─ arithmetic.py
│     │     │  │  │  │  │  ├─ arrayprint.py
│     │     │  │  │  │  │  ├─ arrayterator.py
│     │     │  │  │  │  │  ├─ array_constructors.py
│     │     │  │  │  │  │  ├─ array_like.py
│     │     │  │  │  │  │  ├─ bitwise_ops.py
│     │     │  │  │  │  │  ├─ comparisons.py
│     │     │  │  │  │  │  ├─ dtype.py
│     │     │  │  │  │  │  ├─ einsumfunc.py
│     │     │  │  │  │  │  ├─ flatiter.py
│     │     │  │  │  │  │  ├─ fromnumeric.py
│     │     │  │  │  │  │  ├─ index_tricks.py
│     │     │  │  │  │  │  ├─ lib_user_array.py
│     │     │  │  │  │  │  ├─ lib_utils.py
│     │     │  │  │  │  │  ├─ lib_version.py
│     │     │  │  │  │  │  ├─ literal.py
│     │     │  │  │  │  │  ├─ ma.py
│     │     │  │  │  │  │  ├─ mod.py
│     │     │  │  │  │  │  ├─ modules.py
│     │     │  │  │  │  │  ├─ multiarray.py
│     │     │  │  │  │  │  ├─ ndarray_conversion.py
│     │     │  │  │  │  │  ├─ ndarray_misc.py
│     │     │  │  │  │  │  ├─ ndarray_shape_manipulation.py
│     │     │  │  │  │  │  ├─ nditer.py
│     │     │  │  │  │  │  ├─ numeric.py
│     │     │  │  │  │  │  ├─ numerictypes.py
│     │     │  │  │  │  │  ├─ random.py
│     │     │  │  │  │  │  ├─ recfunctions.py
│     │     │  │  │  │  │  ├─ scalars.py
│     │     │  │  │  │  │  ├─ shape.py
│     │     │  │  │  │  │  ├─ simple.py
│     │     │  │  │  │  │  ├─ simple_py3.py
│     │     │  │  │  │  │  ├─ ufunclike.py
│     │     │  │  │  │  │  ├─ ufuncs.py
│     │     │  │  │  │  │  ├─ ufunc_config.py
│     │     │  │  │  │  │  ├─ warnings_and_errors.py
│     │     │  │  │  │  │  └─ __pycache__
│     │     │  │  │  │  │     ├─ arithmetic.cpython-313.pyc
│     │     │  │  │  │  │     ├─ arrayprint.cpython-313.pyc
│     │     │  │  │  │  │     ├─ arrayterator.cpython-313.pyc
│     │     │  │  │  │  │     ├─ array_constructors.cpython-313.pyc
│     │     │  │  │  │  │     ├─ array_like.cpython-313.pyc
│     │     │  │  │  │  │     ├─ bitwise_ops.cpython-313.pyc
│     │     │  │  │  │  │     ├─ comparisons.cpython-313.pyc
│     │     │  │  │  │  │     ├─ dtype.cpython-313.pyc
│     │     │  │  │  │  │     ├─ einsumfunc.cpython-313.pyc
│     │     │  │  │  │  │     ├─ flatiter.cpython-313.pyc
│     │     │  │  │  │  │     ├─ fromnumeric.cpython-313.pyc
│     │     │  │  │  │  │     ├─ index_tricks.cpython-313.pyc
│     │     │  │  │  │  │     ├─ lib_user_array.cpython-313.pyc
│     │     │  │  │  │  │     ├─ lib_utils.cpython-313.pyc
│     │     │  │  │  │  │     ├─ lib_version.cpython-313.pyc
│     │     │  │  │  │  │     ├─ literal.cpython-313.pyc
│     │     │  │  │  │  │     ├─ ma.cpython-313.pyc
│     │     │  │  │  │  │     ├─ mod.cpython-313.pyc
│     │     │  │  │  │  │     ├─ modules.cpython-313.pyc
│     │     │  │  │  │  │     ├─ multiarray.cpython-313.pyc
│     │     │  │  │  │  │     ├─ ndarray_conversion.cpython-313.pyc
│     │     │  │  │  │  │     ├─ ndarray_misc.cpython-313.pyc
│     │     │  │  │  │  │     ├─ ndarray_shape_manipulation.cpython-313.pyc
│     │     │  │  │  │  │     ├─ nditer.cpython-313.pyc
│     │     │  │  │  │  │     ├─ numeric.cpython-313.pyc
│     │     │  │  │  │  │     ├─ numerictypes.cpython-313.pyc
│     │     │  │  │  │  │     ├─ random.cpython-313.pyc
│     │     │  │  │  │  │     ├─ recfunctions.cpython-313.pyc
│     │     │  │  │  │  │     ├─ scalars.cpython-313.pyc
│     │     │  │  │  │  │     ├─ shape.cpython-313.pyc
│     │     │  │  │  │  │     ├─ simple.cpython-313.pyc
│     │     │  │  │  │  │     ├─ simple_py3.cpython-313.pyc
│     │     │  │  │  │  │     ├─ ufunclike.cpython-313.pyc
│     │     │  │  │  │  │     ├─ ufuncs.cpython-313.pyc
│     │     │  │  │  │  │     ├─ ufunc_config.cpython-313.pyc
│     │     │  │  │  │  │     └─ warnings_and_errors.cpython-313.pyc
│     │     │  │  │  │  └─ reveal
│     │     │  │  │  │     ├─ arithmetic.pyi
│     │     │  │  │  │     ├─ arraypad.pyi
│     │     │  │  │  │     ├─ arrayprint.pyi
│     │     │  │  │  │     ├─ arraysetops.pyi
│     │     │  │  │  │     ├─ arrayterator.pyi
│     │     │  │  │  │     ├─ array_api_info.pyi
│     │     │  │  │  │     ├─ array_constructors.pyi
│     │     │  │  │  │     ├─ bitwise_ops.pyi
│     │     │  │  │  │     ├─ char.pyi
│     │     │  │  │  │     ├─ chararray.pyi
│     │     │  │  │  │     ├─ comparisons.pyi
│     │     │  │  │  │     ├─ constants.pyi
│     │     │  │  │  │     ├─ ctypeslib.pyi
│     │     │  │  │  │     ├─ datasource.pyi
│     │     │  │  │  │     ├─ dtype.pyi
│     │     │  │  │  │     ├─ einsumfunc.pyi
│     │     │  │  │  │     ├─ emath.pyi
│     │     │  │  │  │     ├─ fft.pyi
│     │     │  │  │  │     ├─ flatiter.pyi
│     │     │  │  │  │     ├─ fromnumeric.pyi
│     │     │  │  │  │     ├─ getlimits.pyi
│     │     │  │  │  │     ├─ histograms.pyi
│     │     │  │  │  │     ├─ index_tricks.pyi
│     │     │  │  │  │     ├─ lib_function_base.pyi
│     │     │  │  │  │     ├─ lib_polynomial.pyi
│     │     │  │  │  │     ├─ lib_utils.pyi
│     │     │  │  │  │     ├─ lib_version.pyi
│     │     │  │  │  │     ├─ linalg.pyi
│     │     │  │  │  │     ├─ ma.pyi
│     │     │  │  │  │     ├─ matrix.pyi
│     │     │  │  │  │     ├─ memmap.pyi
│     │     │  │  │  │     ├─ mod.pyi
│     │     │  │  │  │     ├─ modules.pyi
│     │     │  │  │  │     ├─ multiarray.pyi
│     │     │  │  │  │     ├─ nbit_base_example.pyi
│     │     │  │  │  │     ├─ ndarray_assignability.pyi
│     │     │  │  │  │     ├─ ndarray_conversion.pyi
│     │     │  │  │  │     ├─ ndarray_misc.pyi
│     │     │  │  │  │     ├─ ndarray_shape_manipulation.pyi
│     │     │  │  │  │     ├─ nditer.pyi
│     │     │  │  │  │     ├─ nested_sequence.pyi
│     │     │  │  │  │     ├─ npyio.pyi
│     │     │  │  │  │     ├─ numeric.pyi
│     │     │  │  │  │     ├─ numerictypes.pyi
│     │     │  │  │  │     ├─ polynomial_polybase.pyi
│     │     │  │  │  │     ├─ polynomial_polyutils.pyi
│     │     │  │  │  │     ├─ polynomial_series.pyi
│     │     │  │  │  │     ├─ random.pyi
│     │     │  │  │  │     ├─ rec.pyi
│     │     │  │  │  │     ├─ scalars.pyi
│     │     │  │  │  │     ├─ shape.pyi
│     │     │  │  │  │     ├─ shape_base.pyi
│     │     │  │  │  │     ├─ stride_tricks.pyi
│     │     │  │  │  │     ├─ strings.pyi
│     │     │  │  │  │     ├─ testing.pyi
│     │     │  │  │  │     ├─ twodim_base.pyi
│     │     │  │  │  │     ├─ type_check.pyi
│     │     │  │  │  │     ├─ ufunclike.pyi
│     │     │  │  │  │     ├─ ufuncs.pyi
│     │     │  │  │  │     ├─ ufunc_config.pyi
│     │     │  │  │  │     └─ warnings_and_errors.pyi
│     │     │  │  │  ├─ test_isfile.py
│     │     │  │  │  ├─ test_runtime.py
│     │     │  │  │  ├─ test_typing.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ test_isfile.cpython-313.pyc
│     │     │  │  │     ├─ test_runtime.cpython-313.pyc
│     │     │  │  │     ├─ test_typing.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ mypy_plugin.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ version.py
│     │     │  ├─ version.pyi
│     │     │  ├─ _array_api_info.py
│     │     │  ├─ _array_api_info.pyi
│     │     │  ├─ _configtool.py
│     │     │  ├─ _configtool.pyi
│     │     │  ├─ _core
│     │     │  │  ├─ arrayprint.py
│     │     │  │  ├─ arrayprint.pyi
│     │     │  │  ├─ cversions.py
│     │     │  │  ├─ defchararray.py
│     │     │  │  ├─ defchararray.pyi
│     │     │  │  ├─ einsumfunc.py
│     │     │  │  ├─ einsumfunc.pyi
│     │     │  │  ├─ fromnumeric.py
│     │     │  │  ├─ fromnumeric.pyi
│     │     │  │  ├─ function_base.py
│     │     │  │  ├─ function_base.pyi
│     │     │  │  ├─ getlimits.py
│     │     │  │  ├─ getlimits.pyi
│     │     │  │  ├─ include
│     │     │  │  │  └─ numpy
│     │     │  │  │     ├─ arrayobject.h
│     │     │  │  │     ├─ arrayscalars.h
│     │     │  │  │     ├─ dtype_api.h
│     │     │  │  │     ├─ halffloat.h
│     │     │  │  │     ├─ ndarrayobject.h
│     │     │  │  │     ├─ ndarraytypes.h
│     │     │  │  │     ├─ npy_2_compat.h
│     │     │  │  │     ├─ npy_2_complexcompat.h
│     │     │  │  │     ├─ npy_3kcompat.h
│     │     │  │  │     ├─ npy_common.h
│     │     │  │  │     ├─ npy_cpu.h
│     │     │  │  │     ├─ npy_endian.h
│     │     │  │  │     ├─ npy_math.h
│     │     │  │  │     ├─ npy_no_deprecated_api.h
│     │     │  │  │     ├─ npy_os.h
│     │     │  │  │     ├─ numpyconfig.h
│     │     │  │  │     ├─ random
│     │     │  │  │     │  ├─ bitgen.h
│     │     │  │  │     │  ├─ libdivide.h
│     │     │  │  │     │  └─ LICENSE.txt
│     │     │  │  │     ├─ ufuncobject.h
│     │     │  │  │     ├─ utils.h
│     │     │  │  │     ├─ _neighborhood_iterator_imp.h
│     │     │  │  │     ├─ _numpyconfig.h
│     │     │  │  │     ├─ _public_dtype_api_table.h
│     │     │  │  │     ├─ __multiarray_api.c
│     │     │  │  │     ├─ __multiarray_api.h
│     │     │  │  │     ├─ __ufunc_api.c
│     │     │  │  │     └─ __ufunc_api.h
│     │     │  │  ├─ lib
│     │     │  │  │  ├─ npy-pkg-config
│     │     │  │  │  │  ├─ mlib.ini
│     │     │  │  │  │  └─ npymath.ini
│     │     │  │  │  ├─ npymath.lib
│     │     │  │  │  └─ pkgconfig
│     │     │  │  │     └─ numpy.pc
│     │     │  │  ├─ memmap.py
│     │     │  │  ├─ memmap.pyi
│     │     │  │  ├─ multiarray.py
│     │     │  │  ├─ multiarray.pyi
│     │     │  │  ├─ numeric.py
│     │     │  │  ├─ numeric.pyi
│     │     │  │  ├─ numerictypes.py
│     │     │  │  ├─ numerictypes.pyi
│     │     │  │  ├─ overrides.py
│     │     │  │  ├─ overrides.pyi
│     │     │  │  ├─ printoptions.py
│     │     │  │  ├─ printoptions.pyi
│     │     │  │  ├─ records.py
│     │     │  │  ├─ records.pyi
│     │     │  │  ├─ shape_base.py
│     │     │  │  ├─ shape_base.pyi
│     │     │  │  ├─ strings.py
│     │     │  │  ├─ strings.pyi
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ data
│     │     │  │  │  │  ├─ astype_copy.pkl
│     │     │  │  │  │  ├─ generate_umath_validation_data.cpp
│     │     │  │  │  │  ├─ recarray_from_file.fits
│     │     │  │  │  │  ├─ umath-validation-set-arccos.csv
│     │     │  │  │  │  ├─ umath-validation-set-arccosh.csv
│     │     │  │  │  │  ├─ umath-validation-set-arcsin.csv
│     │     │  │  │  │  ├─ umath-validation-set-arcsinh.csv
│     │     │  │  │  │  ├─ umath-validation-set-arctan.csv
│     │     │  │  │  │  ├─ umath-validation-set-arctanh.csv
│     │     │  │  │  │  ├─ umath-validation-set-cbrt.csv
│     │     │  │  │  │  ├─ umath-validation-set-cos.csv
│     │     │  │  │  │  ├─ umath-validation-set-cosh.csv
│     │     │  │  │  │  ├─ umath-validation-set-exp.csv
│     │     │  │  │  │  ├─ umath-validation-set-exp2.csv
│     │     │  │  │  │  ├─ umath-validation-set-expm1.csv
│     │     │  │  │  │  ├─ umath-validation-set-log.csv
│     │     │  │  │  │  ├─ umath-validation-set-log10.csv
│     │     │  │  │  │  ├─ umath-validation-set-log1p.csv
│     │     │  │  │  │  ├─ umath-validation-set-log2.csv
│     │     │  │  │  │  ├─ umath-validation-set-README.txt
│     │     │  │  │  │  ├─ umath-validation-set-sin.csv
│     │     │  │  │  │  ├─ umath-validation-set-sinh.csv
│     │     │  │  │  │  ├─ umath-validation-set-tan.csv
│     │     │  │  │  │  └─ umath-validation-set-tanh.csv
│     │     │  │  │  ├─ examples
│     │     │  │  │  │  ├─ cython
│     │     │  │  │  │  │  ├─ checks.pyx
│     │     │  │  │  │  │  ├─ meson.build
│     │     │  │  │  │  │  ├─ setup.py
│     │     │  │  │  │  │  └─ __pycache__
│     │     │  │  │  │  │     └─ setup.cpython-313.pyc
│     │     │  │  │  │  └─ limited_api
│     │     │  │  │  │     ├─ limited_api1.c
│     │     │  │  │  │     ├─ limited_api2.pyx
│     │     │  │  │  │     ├─ limited_api_latest.c
│     │     │  │  │  │     ├─ meson.build
│     │     │  │  │  │     ├─ setup.py
│     │     │  │  │  │     └─ __pycache__
│     │     │  │  │  │        └─ setup.cpython-313.pyc
│     │     │  │  │  ├─ test_abc.py
│     │     │  │  │  ├─ test_api.py
│     │     │  │  │  ├─ test_argparse.py
│     │     │  │  │  ├─ test_arraymethod.py
│     │     │  │  │  ├─ test_arrayobject.py
│     │     │  │  │  ├─ test_arrayprint.py
│     │     │  │  │  ├─ test_array_api_info.py
│     │     │  │  │  ├─ test_array_coercion.py
│     │     │  │  │  ├─ test_array_interface.py
│     │     │  │  │  ├─ test_casting_floatingpoint_errors.py
│     │     │  │  │  ├─ test_casting_unittests.py
│     │     │  │  │  ├─ test_conversion_utils.py
│     │     │  │  │  ├─ test_cpu_dispatcher.py
│     │     │  │  │  ├─ test_cpu_features.py
│     │     │  │  │  ├─ test_custom_dtypes.py
│     │     │  │  │  ├─ test_cython.py
│     │     │  │  │  ├─ test_datetime.py
│     │     │  │  │  ├─ test_defchararray.py
│     │     │  │  │  ├─ test_deprecations.py
│     │     │  │  │  ├─ test_dlpack.py
│     │     │  │  │  ├─ test_dtype.py
│     │     │  │  │  ├─ test_einsum.py
│     │     │  │  │  ├─ test_errstate.py
│     │     │  │  │  ├─ test_extint128.py
│     │     │  │  │  ├─ test_function_base.py
│     │     │  │  │  ├─ test_getlimits.py
│     │     │  │  │  ├─ test_half.py
│     │     │  │  │  ├─ test_hashtable.py
│     │     │  │  │  ├─ test_indexerrors.py
│     │     │  │  │  ├─ test_indexing.py
│     │     │  │  │  ├─ test_item_selection.py
│     │     │  │  │  ├─ test_limited_api.py
│     │     │  │  │  ├─ test_longdouble.py
│     │     │  │  │  ├─ test_machar.py
│     │     │  │  │  ├─ test_memmap.py
│     │     │  │  │  ├─ test_mem_overlap.py
│     │     │  │  │  ├─ test_mem_policy.py
│     │     │  │  │  ├─ test_multiarray.py
│     │     │  │  │  ├─ test_multithreading.py
│     │     │  │  │  ├─ test_nditer.py
│     │     │  │  │  ├─ test_nep50_promotions.py
│     │     │  │  │  ├─ test_numeric.py
│     │     │  │  │  ├─ test_numerictypes.py
│     │     │  │  │  ├─ test_overrides.py
│     │     │  │  │  ├─ test_print.py
│     │     │  │  │  ├─ test_protocols.py
│     │     │  │  │  ├─ test_records.py
│     │     │  │  │  ├─ test_regression.py
│     │     │  │  │  ├─ test_scalarbuffer.py
│     │     │  │  │  ├─ test_scalarinherit.py
│     │     │  │  │  ├─ test_scalarmath.py
│     │     │  │  │  ├─ test_scalarprint.py
│     │     │  │  │  ├─ test_scalar_ctors.py
│     │     │  │  │  ├─ test_scalar_methods.py
│     │     │  │  │  ├─ test_shape_base.py
│     │     │  │  │  ├─ test_simd.py
│     │     │  │  │  ├─ test_simd_module.py
│     │     │  │  │  ├─ test_stringdtype.py
│     │     │  │  │  ├─ test_strings.py
│     │     │  │  │  ├─ test_ufunc.py
│     │     │  │  │  ├─ test_umath.py
│     │     │  │  │  ├─ test_umath_accuracy.py
│     │     │  │  │  ├─ test_umath_complex.py
│     │     │  │  │  ├─ test_unicode.py
│     │     │  │  │  ├─ test__exceptions.py
│     │     │  │  │  ├─ _locales.py
│     │     │  │  │  ├─ _natype.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ test_abc.cpython-313.pyc
│     │     │  │  │     ├─ test_api.cpython-313.pyc
│     │     │  │  │     ├─ test_argparse.cpython-313.pyc
│     │     │  │  │     ├─ test_arraymethod.cpython-313.pyc
│     │     │  │  │     ├─ test_arrayobject.cpython-313.pyc
│     │     │  │  │     ├─ test_arrayprint.cpython-313.pyc
│     │     │  │  │     ├─ test_array_api_info.cpython-313.pyc
│     │     │  │  │     ├─ test_array_coercion.cpython-313.pyc
│     │     │  │  │     ├─ test_array_interface.cpython-313.pyc
│     │     │  │  │     ├─ test_casting_floatingpoint_errors.cpython-313.pyc
│     │     │  │  │     ├─ test_casting_unittests.cpython-313.pyc
│     │     │  │  │     ├─ test_conversion_utils.cpython-313.pyc
│     │     │  │  │     ├─ test_cpu_dispatcher.cpython-313.pyc
│     │     │  │  │     ├─ test_cpu_features.cpython-313.pyc
│     │     │  │  │     ├─ test_custom_dtypes.cpython-313.pyc
│     │     │  │  │     ├─ test_cython.cpython-313.pyc
│     │     │  │  │     ├─ test_datetime.cpython-313.pyc
│     │     │  │  │     ├─ test_defchararray.cpython-313.pyc
│     │     │  │  │     ├─ test_deprecations.cpython-313.pyc
│     │     │  │  │     ├─ test_dlpack.cpython-313.pyc
│     │     │  │  │     ├─ test_dtype.cpython-313.pyc
│     │     │  │  │     ├─ test_einsum.cpython-313.pyc
│     │     │  │  │     ├─ test_errstate.cpython-313.pyc
│     │     │  │  │     ├─ test_extint128.cpython-313.pyc
│     │     │  │  │     ├─ test_function_base.cpython-313.pyc
│     │     │  │  │     ├─ test_getlimits.cpython-313.pyc
│     │     │  │  │     ├─ test_half.cpython-313.pyc
│     │     │  │  │     ├─ test_hashtable.cpython-313.pyc
│     │     │  │  │     ├─ test_indexerrors.cpython-313.pyc
│     │     │  │  │     ├─ test_indexing.cpython-313.pyc
│     │     │  │  │     ├─ test_item_selection.cpython-313.pyc
│     │     │  │  │     ├─ test_limited_api.cpython-313.pyc
│     │     │  │  │     ├─ test_longdouble.cpython-313.pyc
│     │     │  │  │     ├─ test_machar.cpython-313.pyc
│     │     │  │  │     ├─ test_memmap.cpython-313.pyc
│     │     │  │  │     ├─ test_mem_overlap.cpython-313.pyc
│     │     │  │  │     ├─ test_mem_policy.cpython-313.pyc
│     │     │  │  │     ├─ test_multiarray.cpython-313.pyc
│     │     │  │  │     ├─ test_multithreading.cpython-313.pyc
│     │     │  │  │     ├─ test_nditer.cpython-313.pyc
│     │     │  │  │     ├─ test_nep50_promotions.cpython-313.pyc
│     │     │  │  │     ├─ test_numeric.cpython-313.pyc
│     │     │  │  │     ├─ test_numerictypes.cpython-313.pyc
│     │     │  │  │     ├─ test_overrides.cpython-313.pyc
│     │     │  │  │     ├─ test_print.cpython-313.pyc
│     │     │  │  │     ├─ test_protocols.cpython-313.pyc
│     │     │  │  │     ├─ test_records.cpython-313.pyc
│     │     │  │  │     ├─ test_regression.cpython-313.pyc
│     │     │  │  │     ├─ test_scalarbuffer.cpython-313.pyc
│     │     │  │  │     ├─ test_scalarinherit.cpython-313.pyc
│     │     │  │  │     ├─ test_scalarmath.cpython-313.pyc
│     │     │  │  │     ├─ test_scalarprint.cpython-313.pyc
│     │     │  │  │     ├─ test_scalar_ctors.cpython-313.pyc
│     │     │  │  │     ├─ test_scalar_methods.cpython-313.pyc
│     │     │  │  │     ├─ test_shape_base.cpython-313.pyc
│     │     │  │  │     ├─ test_simd.cpython-313.pyc
│     │     │  │  │     ├─ test_simd_module.cpython-313.pyc
│     │     │  │  │     ├─ test_stringdtype.cpython-313.pyc
│     │     │  │  │     ├─ test_strings.cpython-313.pyc
│     │     │  │  │     ├─ test_ufunc.cpython-313.pyc
│     │     │  │  │     ├─ test_umath.cpython-313.pyc
│     │     │  │  │     ├─ test_umath_accuracy.cpython-313.pyc
│     │     │  │  │     ├─ test_umath_complex.cpython-313.pyc
│     │     │  │  │     ├─ test_unicode.cpython-313.pyc
│     │     │  │  │     ├─ test__exceptions.cpython-313.pyc
│     │     │  │  │     ├─ _locales.cpython-313.pyc
│     │     │  │  │     └─ _natype.cpython-313.pyc
│     │     │  │  ├─ umath.py
│     │     │  │  ├─ umath.pyi
│     │     │  │  ├─ _add_newdocs.py
│     │     │  │  ├─ _add_newdocs.pyi
│     │     │  │  ├─ _add_newdocs_scalars.py
│     │     │  │  ├─ _add_newdocs_scalars.pyi
│     │     │  │  ├─ _asarray.py
│     │     │  │  ├─ _asarray.pyi
│     │     │  │  ├─ _dtype.py
│     │     │  │  ├─ _dtype.pyi
│     │     │  │  ├─ _dtype_ctypes.py
│     │     │  │  ├─ _dtype_ctypes.pyi
│     │     │  │  ├─ _exceptions.py
│     │     │  │  ├─ _exceptions.pyi
│     │     │  │  ├─ _internal.py
│     │     │  │  ├─ _internal.pyi
│     │     │  │  ├─ _machar.py
│     │     │  │  ├─ _machar.pyi
│     │     │  │  ├─ _methods.py
│     │     │  │  ├─ _methods.pyi
│     │     │  │  ├─ _multiarray_tests.cp313-win_amd64.lib
│     │     │  │  ├─ _multiarray_tests.cp313-win_amd64.pyd
│     │     │  │  ├─ _multiarray_umath.cp313-win_amd64.lib
│     │     │  │  ├─ _multiarray_umath.cp313-win_amd64.pyd
│     │     │  │  ├─ _operand_flag_tests.cp313-win_amd64.lib
│     │     │  │  ├─ _operand_flag_tests.cp313-win_amd64.pyd
│     │     │  │  ├─ _rational_tests.cp313-win_amd64.lib
│     │     │  │  ├─ _rational_tests.cp313-win_amd64.pyd
│     │     │  │  ├─ _simd.cp313-win_amd64.lib
│     │     │  │  ├─ _simd.cp313-win_amd64.pyd
│     │     │  │  ├─ _simd.pyi
│     │     │  │  ├─ _string_helpers.py
│     │     │  │  ├─ _string_helpers.pyi
│     │     │  │  ├─ _struct_ufunc_tests.cp313-win_amd64.lib
│     │     │  │  ├─ _struct_ufunc_tests.cp313-win_amd64.pyd
│     │     │  │  ├─ _type_aliases.py
│     │     │  │  ├─ _type_aliases.pyi
│     │     │  │  ├─ _ufunc_config.py
│     │     │  │  ├─ _ufunc_config.pyi
│     │     │  │  ├─ _umath_tests.cp313-win_amd64.lib
│     │     │  │  ├─ _umath_tests.cp313-win_amd64.pyd
│     │     │  │  ├─ __init__.py
│     │     │  │  ├─ __init__.pyi
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ arrayprint.cpython-313.pyc
│     │     │  │     ├─ cversions.cpython-313.pyc
│     │     │  │     ├─ defchararray.cpython-313.pyc
│     │     │  │     ├─ einsumfunc.cpython-313.pyc
│     │     │  │     ├─ fromnumeric.cpython-313.pyc
│     │     │  │     ├─ function_base.cpython-313.pyc
│     │     │  │     ├─ getlimits.cpython-313.pyc
│     │     │  │     ├─ memmap.cpython-313.pyc
│     │     │  │     ├─ multiarray.cpython-313.pyc
│     │     │  │     ├─ numeric.cpython-313.pyc
│     │     │  │     ├─ numerictypes.cpython-313.pyc
│     │     │  │     ├─ overrides.cpython-313.pyc
│     │     │  │     ├─ printoptions.cpython-313.pyc
│     │     │  │     ├─ records.cpython-313.pyc
│     │     │  │     ├─ shape_base.cpython-313.pyc
│     │     │  │     ├─ strings.cpython-313.pyc
│     │     │  │     ├─ umath.cpython-313.pyc
│     │     │  │     ├─ _add_newdocs.cpython-313.pyc
│     │     │  │     ├─ _add_newdocs_scalars.cpython-313.pyc
│     │     │  │     ├─ _asarray.cpython-313.pyc
│     │     │  │     ├─ _dtype.cpython-313.pyc
│     │     │  │     ├─ _dtype_ctypes.cpython-313.pyc
│     │     │  │     ├─ _exceptions.cpython-313.pyc
│     │     │  │     ├─ _internal.cpython-313.pyc
│     │     │  │     ├─ _machar.cpython-313.pyc
│     │     │  │     ├─ _methods.cpython-313.pyc
│     │     │  │     ├─ _string_helpers.cpython-313.pyc
│     │     │  │     ├─ _type_aliases.cpython-313.pyc
│     │     │  │     ├─ _ufunc_config.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ _expired_attrs_2_0.py
│     │     │  ├─ _expired_attrs_2_0.pyi
│     │     │  ├─ _globals.py
│     │     │  ├─ _globals.pyi
│     │     │  ├─ _pyinstaller
│     │     │  │  ├─ hook-numpy.py
│     │     │  │  ├─ hook-numpy.pyi
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ pyinstaller-smoke.py
│     │     │  │  │  ├─ test_pyinstaller.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ pyinstaller-smoke.cpython-313.pyc
│     │     │  │  │     ├─ test_pyinstaller.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ __init__.py
│     │     │  │  ├─ __init__.pyi
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ hook-numpy.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ _pytesttester.py
│     │     │  ├─ _pytesttester.pyi
│     │     │  ├─ _typing
│     │     │  │  ├─ _add_docstring.py
│     │     │  │  ├─ _array_like.py
│     │     │  │  ├─ _char_codes.py
│     │     │  │  ├─ _dtype_like.py
│     │     │  │  ├─ _extended_precision.py
│     │     │  │  ├─ _nbit.py
│     │     │  │  ├─ _nbit_base.py
│     │     │  │  ├─ _nbit_base.pyi
│     │     │  │  ├─ _nested_sequence.py
│     │     │  │  ├─ _scalars.py
│     │     │  │  ├─ _shape.py
│     │     │  │  ├─ _ufunc.py
│     │     │  │  ├─ _ufunc.pyi
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ _add_docstring.cpython-313.pyc
│     │     │  │     ├─ _array_like.cpython-313.pyc
│     │     │  │     ├─ _char_codes.cpython-313.pyc
│     │     │  │     ├─ _dtype_like.cpython-313.pyc
│     │     │  │     ├─ _extended_precision.cpython-313.pyc
│     │     │  │     ├─ _nbit.cpython-313.pyc
│     │     │  │     ├─ _nbit_base.cpython-313.pyc
│     │     │  │     ├─ _nested_sequence.cpython-313.pyc
│     │     │  │     ├─ _scalars.cpython-313.pyc
│     │     │  │     ├─ _shape.cpython-313.pyc
│     │     │  │     ├─ _ufunc.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ _utils
│     │     │  │  ├─ _convertions.py
│     │     │  │  ├─ _convertions.pyi
│     │     │  │  ├─ _inspect.py
│     │     │  │  ├─ _inspect.pyi
│     │     │  │  ├─ _pep440.py
│     │     │  │  ├─ _pep440.pyi
│     │     │  │  ├─ __init__.py
│     │     │  │  ├─ __init__.pyi
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ _convertions.cpython-313.pyc
│     │     │  │     ├─ _inspect.cpython-313.pyc
│     │     │  │     ├─ _pep440.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ __config__.py
│     │     │  ├─ __config__.pyi
│     │     │  ├─ __init__.cython-30.pxd
│     │     │  ├─ __init__.pxd
│     │     │  ├─ __init__.py
│     │     │  ├─ __init__.pyi
│     │     │  └─ __pycache__
│     │     │     ├─ conftest.cpython-313.pyc
│     │     │     ├─ dtypes.cpython-313.pyc
│     │     │     ├─ exceptions.cpython-313.pyc
│     │     │     ├─ matlib.cpython-313.pyc
│     │     │     ├─ version.cpython-313.pyc
│     │     │     ├─ _array_api_info.cpython-313.pyc
│     │     │     ├─ _configtool.cpython-313.pyc
│     │     │     ├─ _expired_attrs_2_0.cpython-313.pyc
│     │     │     ├─ _globals.cpython-313.pyc
│     │     │     ├─ _pytesttester.cpython-313.pyc
│     │     │     ├─ __config__.cpython-313.pyc
│     │     │     └─ __init__.cpython-313.pyc
│     │     ├─ numpy.libs
│     │     │  ├─ libscipy_openblas64_-9e3e5a4229c1ca39f10dc82bba9e2b2b.dll
│     │     │  └─ msvcp140-a4c2229bdc2a2a630acdc095b4d86008.dll
│     │     ├─ packaging
│     │     │  ├─ licenses
│     │     │  │  ├─ _spdx.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ _spdx.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ markers.py
│     │     │  ├─ metadata.py
│     │     │  ├─ py.typed
│     │     │  ├─ requirements.py
│     │     │  ├─ specifiers.py
│     │     │  ├─ tags.py
│     │     │  ├─ utils.py
│     │     │  ├─ version.py
│     │     │  ├─ _elffile.py
│     │     │  ├─ _manylinux.py
│     │     │  ├─ _musllinux.py
│     │     │  ├─ _parser.py
│     │     │  ├─ _structures.py
│     │     │  ├─ _tokenizer.py
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     ├─ markers.cpython-313.pyc
│     │     │     ├─ metadata.cpython-313.pyc
│     │     │     ├─ requirements.cpython-313.pyc
│     │     │     ├─ specifiers.cpython-313.pyc
│     │     │     ├─ tags.cpython-313.pyc
│     │     │     ├─ utils.cpython-313.pyc
│     │     │     ├─ version.cpython-313.pyc
│     │     │     ├─ _elffile.cpython-313.pyc
│     │     │     ├─ _manylinux.cpython-313.pyc
│     │     │     ├─ _musllinux.cpython-313.pyc
│     │     │     ├─ _parser.cpython-313.pyc
│     │     │     ├─ _structures.cpython-313.pyc
│     │     │     ├─ _tokenizer.cpython-313.pyc
│     │     │     └─ __init__.cpython-313.pyc
│     │     ├─ passlib
│     │     │  ├─ apache.py
│     │     │  ├─ apps.py
│     │     │  ├─ context.py
│     │     │  ├─ crypto
│     │     │  │  ├─ des.py
│     │     │  │  ├─ digest.py
│     │     │  │  ├─ scrypt
│     │     │  │  │  ├─ _builtin.py
│     │     │  │  │  ├─ _gen_files.py
│     │     │  │  │  ├─ _salsa.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ _builtin.cpython-313.pyc
│     │     │  │  │     ├─ _gen_files.cpython-313.pyc
│     │     │  │  │     ├─ _salsa.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _blowfish
│     │     │  │  │  ├─ base.py
│     │     │  │  │  ├─ unrolled.py
│     │     │  │  │  ├─ _gen_files.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ base.cpython-313.pyc
│     │     │  │  │     ├─ unrolled.cpython-313.pyc
│     │     │  │  │     ├─ _gen_files.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _md4.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ des.cpython-313.pyc
│     │     │  │     ├─ digest.cpython-313.pyc
│     │     │  │     ├─ _md4.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ exc.py
│     │     │  ├─ ext
│     │     │  │  ├─ django
│     │     │  │  │  ├─ models.py
│     │     │  │  │  ├─ utils.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ models.cpython-313.pyc
│     │     │  │  │     ├─ utils.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ handlers
│     │     │  │  ├─ argon2.py
│     │     │  │  ├─ bcrypt.py
│     │     │  │  ├─ cisco.py
│     │     │  │  ├─ des_crypt.py
│     │     │  │  ├─ digests.py
│     │     │  │  ├─ django.py
│     │     │  │  ├─ fshp.py
│     │     │  │  ├─ ldap_digests.py
│     │     │  │  ├─ md5_crypt.py
│     │     │  │  ├─ misc.py
│     │     │  │  ├─ mssql.py
│     │     │  │  ├─ mysql.py
│     │     │  │  ├─ oracle.py
│     │     │  │  ├─ pbkdf2.py
│     │     │  │  ├─ phpass.py
│     │     │  │  ├─ postgres.py
│     │     │  │  ├─ roundup.py
│     │     │  │  ├─ scram.py
│     │     │  │  ├─ scrypt.py
│     │     │  │  ├─ sha1_crypt.py
│     │     │  │  ├─ sha2_crypt.py
│     │     │  │  ├─ sun_md5_crypt.py
│     │     │  │  ├─ windows.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ argon2.cpython-313.pyc
│     │     │  │     ├─ bcrypt.cpython-313.pyc
│     │     │  │     ├─ cisco.cpython-313.pyc
│     │     │  │     ├─ des_crypt.cpython-313.pyc
│     │     │  │     ├─ digests.cpython-313.pyc
│     │     │  │     ├─ django.cpython-313.pyc
│     │     │  │     ├─ fshp.cpython-313.pyc
│     │     │  │     ├─ ldap_digests.cpython-313.pyc
│     │     │  │     ├─ md5_crypt.cpython-313.pyc
│     │     │  │     ├─ misc.cpython-313.pyc
│     │     │  │     ├─ mssql.cpython-313.pyc
│     │     │  │     ├─ mysql.cpython-313.pyc
│     │     │  │     ├─ oracle.cpython-313.pyc
│     │     │  │     ├─ pbkdf2.cpython-313.pyc
│     │     │  │     ├─ phpass.cpython-313.pyc
│     │     │  │     ├─ postgres.cpython-313.pyc
│     │     │  │     ├─ roundup.cpython-313.pyc
│     │     │  │     ├─ scram.cpython-313.pyc
│     │     │  │     ├─ scrypt.cpython-313.pyc
│     │     │  │     ├─ sha1_crypt.cpython-313.pyc
│     │     │  │     ├─ sha2_crypt.cpython-313.pyc
│     │     │  │     ├─ sun_md5_crypt.cpython-313.pyc
│     │     │  │     ├─ windows.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ hash.py
│     │     │  ├─ hosts.py
│     │     │  ├─ ifc.py
│     │     │  ├─ pwd.py
│     │     │  ├─ registry.py
│     │     │  ├─ tests
│     │     │  │  ├─ backports.py
│     │     │  │  ├─ sample1.cfg
│     │     │  │  ├─ sample1b.cfg
│     │     │  │  ├─ sample1c.cfg
│     │     │  │  ├─ sample_config_1s.cfg
│     │     │  │  ├─ test_apache.py
│     │     │  │  ├─ test_apps.py
│     │     │  │  ├─ test_context.py
│     │     │  │  ├─ test_context_deprecated.py
│     │     │  │  ├─ test_crypto_builtin_md4.py
│     │     │  │  ├─ test_crypto_des.py
│     │     │  │  ├─ test_crypto_digest.py
│     │     │  │  ├─ test_crypto_scrypt.py
│     │     │  │  ├─ test_ext_django.py
│     │     │  │  ├─ test_ext_django_source.py
│     │     │  │  ├─ test_handlers.py
│     │     │  │  ├─ test_handlers_argon2.py
│     │     │  │  ├─ test_handlers_bcrypt.py
│     │     │  │  ├─ test_handlers_cisco.py
│     │     │  │  ├─ test_handlers_django.py
│     │     │  │  ├─ test_handlers_pbkdf2.py
│     │     │  │  ├─ test_handlers_scrypt.py
│     │     │  │  ├─ test_hosts.py
│     │     │  │  ├─ test_pwd.py
│     │     │  │  ├─ test_registry.py
│     │     │  │  ├─ test_totp.py
│     │     │  │  ├─ test_utils.py
│     │     │  │  ├─ test_utils_handlers.py
│     │     │  │  ├─ test_utils_md4.py
│     │     │  │  ├─ test_utils_pbkdf2.py
│     │     │  │  ├─ test_win32.py
│     │     │  │  ├─ tox_support.py
│     │     │  │  ├─ utils.py
│     │     │  │  ├─ _test_bad_register.py
│     │     │  │  ├─ __init__.py
│     │     │  │  ├─ __main__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ backports.cpython-313.pyc
│     │     │  │     ├─ test_apache.cpython-313.pyc
│     │     │  │     ├─ test_apps.cpython-313.pyc
│     │     │  │     ├─ test_context.cpython-313.pyc
│     │     │  │     ├─ test_context_deprecated.cpython-313.pyc
│     │     │  │     ├─ test_crypto_builtin_md4.cpython-313.pyc
│     │     │  │     ├─ test_crypto_des.cpython-313.pyc
│     │     │  │     ├─ test_crypto_digest.cpython-313.pyc
│     │     │  │     ├─ test_crypto_scrypt.cpython-313.pyc
│     │     │  │     ├─ test_ext_django.cpython-313.pyc
│     │     │  │     ├─ test_ext_django_source.cpython-313.pyc
│     │     │  │     ├─ test_handlers.cpython-313.pyc
│     │     │  │     ├─ test_handlers_argon2.cpython-313.pyc
│     │     │  │     ├─ test_handlers_bcrypt.cpython-313.pyc
│     │     │  │     ├─ test_handlers_cisco.cpython-313.pyc
│     │     │  │     ├─ test_handlers_django.cpython-313.pyc
│     │     │  │     ├─ test_handlers_pbkdf2.cpython-313.pyc
│     │     │  │     ├─ test_handlers_scrypt.cpython-313.pyc
│     │     │  │     ├─ test_hosts.cpython-313.pyc
│     │     │  │     ├─ test_pwd.cpython-313.pyc
│     │     │  │     ├─ test_registry.cpython-313.pyc
│     │     │  │     ├─ test_totp.cpython-313.pyc
│     │     │  │     ├─ test_utils.cpython-313.pyc
│     │     │  │     ├─ test_utils_handlers.cpython-313.pyc
│     │     │  │     ├─ test_utils_md4.cpython-313.pyc
│     │     │  │     ├─ test_utils_pbkdf2.cpython-313.pyc
│     │     │  │     ├─ test_win32.cpython-313.pyc
│     │     │  │     ├─ tox_support.cpython-313.pyc
│     │     │  │     ├─ utils.cpython-313.pyc
│     │     │  │     ├─ _test_bad_register.cpython-313.pyc
│     │     │  │     ├─ __init__.cpython-313.pyc
│     │     │  │     └─ __main__.cpython-313.pyc
│     │     │  ├─ totp.py
│     │     │  ├─ utils
│     │     │  │  ├─ binary.py
│     │     │  │  ├─ compat
│     │     │  │  │  ├─ _ordered_dict.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ _ordered_dict.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ decor.py
│     │     │  │  ├─ des.py
│     │     │  │  ├─ handlers.py
│     │     │  │  ├─ md4.py
│     │     │  │  ├─ pbkdf2.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ binary.cpython-313.pyc
│     │     │  │     ├─ decor.cpython-313.pyc
│     │     │  │     ├─ des.cpython-313.pyc
│     │     │  │     ├─ handlers.cpython-313.pyc
│     │     │  │     ├─ md4.cpython-313.pyc
│     │     │  │     ├─ pbkdf2.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ win32.py
│     │     │  ├─ _data
│     │     │  │  └─ wordsets
│     │     │  │     ├─ bip39.txt
│     │     │  │     ├─ eff_long.txt
│     │     │  │     ├─ eff_prefixed.txt
│     │     │  │     └─ eff_short.txt
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     ├─ apache.cpython-313.pyc
│     │     │     ├─ apps.cpython-313.pyc
│     │     │     ├─ context.cpython-313.pyc
│     │     │     ├─ exc.cpython-313.pyc
│     │     │     ├─ hash.cpython-313.pyc
│     │     │     ├─ hosts.cpython-313.pyc
│     │     │     ├─ ifc.cpython-313.pyc
│     │     │     ├─ pwd.cpython-313.pyc
│     │     │     ├─ registry.cpython-313.pyc
│     │     │     ├─ totp.cpython-313.pyc
│     │     │     ├─ win32.cpython-313.pyc
│     │     │     └─ __init__.cpython-313.pyc
│     │     ├─ pip
│     │     │  ├─ py.typed
│     │     │  ├─ _internal
│     │     │  │  ├─ build_env.py
│     │     │  │  ├─ cache.py
│     │     │  │  ├─ cli
│     │     │  │  │  ├─ autocompletion.py
│     │     │  │  │  ├─ base_command.py
│     │     │  │  │  ├─ cmdoptions.py
│     │     │  │  │  ├─ command_context.py
│     │     │  │  │  ├─ index_command.py
│     │     │  │  │  ├─ main.py
│     │     │  │  │  ├─ main_parser.py
│     │     │  │  │  ├─ parser.py
│     │     │  │  │  ├─ progress_bars.py
│     │     │  │  │  ├─ req_command.py
│     │     │  │  │  ├─ spinners.py
│     │     │  │  │  ├─ status_codes.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ autocompletion.cpython-313.pyc
│     │     │  │  │     ├─ base_command.cpython-313.pyc
│     │     │  │  │     ├─ cmdoptions.cpython-313.pyc
│     │     │  │  │     ├─ command_context.cpython-313.pyc
│     │     │  │  │     ├─ index_command.cpython-313.pyc
│     │     │  │  │     ├─ main.cpython-313.pyc
│     │     │  │  │     ├─ main_parser.cpython-313.pyc
│     │     │  │  │     ├─ parser.cpython-313.pyc
│     │     │  │  │     ├─ progress_bars.cpython-313.pyc
│     │     │  │  │     ├─ req_command.cpython-313.pyc
│     │     │  │  │     ├─ spinners.cpython-313.pyc
│     │     │  │  │     ├─ status_codes.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ commands
│     │     │  │  │  ├─ cache.py
│     │     │  │  │  ├─ check.py
│     │     │  │  │  ├─ completion.py
│     │     │  │  │  ├─ configuration.py
│     │     │  │  │  ├─ debug.py
│     │     │  │  │  ├─ download.py
│     │     │  │  │  ├─ freeze.py
│     │     │  │  │  ├─ hash.py
│     │     │  │  │  ├─ help.py
│     │     │  │  │  ├─ index.py
│     │     │  │  │  ├─ inspect.py
│     │     │  │  │  ├─ install.py
│     │     │  │  │  ├─ list.py
│     │     │  │  │  ├─ lock.py
│     │     │  │  │  ├─ search.py
│     │     │  │  │  ├─ show.py
│     │     │  │  │  ├─ uninstall.py
│     │     │  │  │  ├─ wheel.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ cache.cpython-313.pyc
│     │     │  │  │     ├─ check.cpython-313.pyc
│     │     │  │  │     ├─ completion.cpython-313.pyc
│     │     │  │  │     ├─ configuration.cpython-313.pyc
│     │     │  │  │     ├─ debug.cpython-313.pyc
│     │     │  │  │     ├─ download.cpython-313.pyc
│     │     │  │  │     ├─ freeze.cpython-313.pyc
│     │     │  │  │     ├─ hash.cpython-313.pyc
│     │     │  │  │     ├─ help.cpython-313.pyc
│     │     │  │  │     ├─ index.cpython-313.pyc
│     │     │  │  │     ├─ inspect.cpython-313.pyc
│     │     │  │  │     ├─ install.cpython-313.pyc
│     │     │  │  │     ├─ list.cpython-313.pyc
│     │     │  │  │     ├─ lock.cpython-313.pyc
│     │     │  │  │     ├─ search.cpython-313.pyc
│     │     │  │  │     ├─ show.cpython-313.pyc
│     │     │  │  │     ├─ uninstall.cpython-313.pyc
│     │     │  │  │     ├─ wheel.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ configuration.py
│     │     │  │  ├─ exceptions.py
│     │     │  │  ├─ index
│     │     │  │  │  ├─ collector.py
│     │     │  │  │  ├─ package_finder.py
│     │     │  │  │  ├─ sources.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ collector.cpython-313.pyc
│     │     │  │  │     ├─ package_finder.cpython-313.pyc
│     │     │  │  │     ├─ sources.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ locations
│     │     │  │  │  ├─ base.py
│     │     │  │  │  ├─ _sysconfig.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ base.cpython-313.pyc
│     │     │  │  │     ├─ _sysconfig.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ main.py
│     │     │  │  ├─ metadata
│     │     │  │  │  ├─ base.py
│     │     │  │  │  ├─ importlib
│     │     │  │  │  │  ├─ _compat.py
│     │     │  │  │  │  ├─ _envs.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ _compat.cpython-313.pyc
│     │     │  │  │  │     ├─ _envs.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ pkg_resources.py
│     │     │  │  │  ├─ _json.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ base.cpython-313.pyc
│     │     │  │  │     ├─ pkg_resources.cpython-313.pyc
│     │     │  │  │     ├─ _json.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ models
│     │     │  │  │  ├─ candidate.py
│     │     │  │  │  ├─ direct_url.py
│     │     │  │  │  ├─ format_control.py
│     │     │  │  │  ├─ index.py
│     │     │  │  │  ├─ installation_report.py
│     │     │  │  │  ├─ link.py
│     │     │  │  │  ├─ pylock.py
│     │     │  │  │  ├─ scheme.py
│     │     │  │  │  ├─ search_scope.py
│     │     │  │  │  ├─ selection_prefs.py
│     │     │  │  │  ├─ target_python.py
│     │     │  │  │  ├─ wheel.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ candidate.cpython-313.pyc
│     │     │  │  │     ├─ direct_url.cpython-313.pyc
│     │     │  │  │     ├─ format_control.cpython-313.pyc
│     │     │  │  │     ├─ index.cpython-313.pyc
│     │     │  │  │     ├─ installation_report.cpython-313.pyc
│     │     │  │  │     ├─ link.cpython-313.pyc
│     │     │  │  │     ├─ pylock.cpython-313.pyc
│     │     │  │  │     ├─ scheme.cpython-313.pyc
│     │     │  │  │     ├─ search_scope.cpython-313.pyc
│     │     │  │  │     ├─ selection_prefs.cpython-313.pyc
│     │     │  │  │     ├─ target_python.cpython-313.pyc
│     │     │  │  │     ├─ wheel.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ network
│     │     │  │  │  ├─ auth.py
│     │     │  │  │  ├─ cache.py
│     │     │  │  │  ├─ download.py
│     │     │  │  │  ├─ lazy_wheel.py
│     │     │  │  │  ├─ session.py
│     │     │  │  │  ├─ utils.py
│     │     │  │  │  ├─ xmlrpc.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ auth.cpython-313.pyc
│     │     │  │  │     ├─ cache.cpython-313.pyc
│     │     │  │  │     ├─ download.cpython-313.pyc
│     │     │  │  │     ├─ lazy_wheel.cpython-313.pyc
│     │     │  │  │     ├─ session.cpython-313.pyc
│     │     │  │  │     ├─ utils.cpython-313.pyc
│     │     │  │  │     ├─ xmlrpc.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ operations
│     │     │  │  │  ├─ build
│     │     │  │  │  │  ├─ build_tracker.py
│     │     │  │  │  │  ├─ metadata.py
│     │     │  │  │  │  ├─ metadata_editable.py
│     │     │  │  │  │  ├─ metadata_legacy.py
│     │     │  │  │  │  ├─ wheel.py
│     │     │  │  │  │  ├─ wheel_editable.py
│     │     │  │  │  │  ├─ wheel_legacy.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ build_tracker.cpython-313.pyc
│     │     │  │  │  │     ├─ metadata.cpython-313.pyc
│     │     │  │  │  │     ├─ metadata_editable.cpython-313.pyc
│     │     │  │  │  │     ├─ metadata_legacy.cpython-313.pyc
│     │     │  │  │  │     ├─ wheel.cpython-313.pyc
│     │     │  │  │  │     ├─ wheel_editable.cpython-313.pyc
│     │     │  │  │  │     ├─ wheel_legacy.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ check.py
│     │     │  │  │  ├─ freeze.py
│     │     │  │  │  ├─ install
│     │     │  │  │  │  ├─ editable_legacy.py
│     │     │  │  │  │  ├─ wheel.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ editable_legacy.cpython-313.pyc
│     │     │  │  │  │     ├─ wheel.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ prepare.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ check.cpython-313.pyc
│     │     │  │  │     ├─ freeze.cpython-313.pyc
│     │     │  │  │     ├─ prepare.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ pyproject.py
│     │     │  │  ├─ req
│     │     │  │  │  ├─ constructors.py
│     │     │  │  │  ├─ req_dependency_group.py
│     │     │  │  │  ├─ req_file.py
│     │     │  │  │  ├─ req_install.py
│     │     │  │  │  ├─ req_set.py
│     │     │  │  │  ├─ req_uninstall.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ constructors.cpython-313.pyc
│     │     │  │  │     ├─ req_dependency_group.cpython-313.pyc
│     │     │  │  │     ├─ req_file.cpython-313.pyc
│     │     │  │  │     ├─ req_install.cpython-313.pyc
│     │     │  │  │     ├─ req_set.cpython-313.pyc
│     │     │  │  │     ├─ req_uninstall.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ resolution
│     │     │  │  │  ├─ base.py
│     │     │  │  │  ├─ legacy
│     │     │  │  │  │  ├─ resolver.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ resolver.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ resolvelib
│     │     │  │  │  │  ├─ base.py
│     │     │  │  │  │  ├─ candidates.py
│     │     │  │  │  │  ├─ factory.py
│     │     │  │  │  │  ├─ found_candidates.py
│     │     │  │  │  │  ├─ provider.py
│     │     │  │  │  │  ├─ reporter.py
│     │     │  │  │  │  ├─ requirements.py
│     │     │  │  │  │  ├─ resolver.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ base.cpython-313.pyc
│     │     │  │  │  │     ├─ candidates.cpython-313.pyc
│     │     │  │  │  │     ├─ factory.cpython-313.pyc
│     │     │  │  │  │     ├─ found_candidates.cpython-313.pyc
│     │     │  │  │  │     ├─ provider.cpython-313.pyc
│     │     │  │  │  │     ├─ reporter.cpython-313.pyc
│     │     │  │  │  │     ├─ requirements.cpython-313.pyc
│     │     │  │  │  │     ├─ resolver.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ base.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ self_outdated_check.py
│     │     │  │  ├─ utils
│     │     │  │  │  ├─ appdirs.py
│     │     │  │  │  ├─ compat.py
│     │     │  │  │  ├─ compatibility_tags.py
│     │     │  │  │  ├─ datetime.py
│     │     │  │  │  ├─ deprecation.py
│     │     │  │  │  ├─ direct_url_helpers.py
│     │     │  │  │  ├─ egg_link.py
│     │     │  │  │  ├─ entrypoints.py
│     │     │  │  │  ├─ filesystem.py
│     │     │  │  │  ├─ filetypes.py
│     │     │  │  │  ├─ glibc.py
│     │     │  │  │  ├─ hashes.py
│     │     │  │  │  ├─ logging.py
│     │     │  │  │  ├─ misc.py
│     │     │  │  │  ├─ packaging.py
│     │     │  │  │  ├─ retry.py
│     │     │  │  │  ├─ setuptools_build.py
│     │     │  │  │  ├─ subprocess.py
│     │     │  │  │  ├─ temp_dir.py
│     │     │  │  │  ├─ unpacking.py
│     │     │  │  │  ├─ urls.py
│     │     │  │  │  ├─ virtualenv.py
│     │     │  │  │  ├─ wheel.py
│     │     │  │  │  ├─ _jaraco_text.py
│     │     │  │  │  ├─ _log.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ appdirs.cpython-313.pyc
│     │     │  │  │     ├─ compat.cpython-313.pyc
│     │     │  │  │     ├─ compatibility_tags.cpython-313.pyc
│     │     │  │  │     ├─ datetime.cpython-313.pyc
│     │     │  │  │     ├─ deprecation.cpython-313.pyc
│     │     │  │  │     ├─ direct_url_helpers.cpython-313.pyc
│     │     │  │  │     ├─ egg_link.cpython-313.pyc
│     │     │  │  │     ├─ entrypoints.cpython-313.pyc
│     │     │  │  │     ├─ filesystem.cpython-313.pyc
│     │     │  │  │     ├─ filetypes.cpython-313.pyc
│     │     │  │  │     ├─ glibc.cpython-313.pyc
│     │     │  │  │     ├─ hashes.cpython-313.pyc
│     │     │  │  │     ├─ logging.cpython-313.pyc
│     │     │  │  │     ├─ misc.cpython-313.pyc
│     │     │  │  │     ├─ packaging.cpython-313.pyc
│     │     │  │  │     ├─ retry.cpython-313.pyc
│     │     │  │  │     ├─ setuptools_build.cpython-313.pyc
│     │     │  │  │     ├─ subprocess.cpython-313.pyc
│     │     │  │  │     ├─ temp_dir.cpython-313.pyc
│     │     │  │  │     ├─ unpacking.cpython-313.pyc
│     │     │  │  │     ├─ urls.cpython-313.pyc
│     │     │  │  │     ├─ virtualenv.cpython-313.pyc
│     │     │  │  │     ├─ wheel.cpython-313.pyc
│     │     │  │  │     ├─ _jaraco_text.cpython-313.pyc
│     │     │  │  │     ├─ _log.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ vcs
│     │     │  │  │  ├─ bazaar.py
│     │     │  │  │  ├─ git.py
│     │     │  │  │  ├─ mercurial.py
│     │     │  │  │  ├─ subversion.py
│     │     │  │  │  ├─ versioncontrol.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ bazaar.cpython-313.pyc
│     │     │  │  │     ├─ git.cpython-313.pyc
│     │     │  │  │     ├─ mercurial.cpython-313.pyc
│     │     │  │  │     ├─ subversion.cpython-313.pyc
│     │     │  │  │     ├─ versioncontrol.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ wheel_builder.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ build_env.cpython-313.pyc
│     │     │  │     ├─ cache.cpython-313.pyc
│     │     │  │     ├─ configuration.cpython-313.pyc
│     │     │  │     ├─ exceptions.cpython-313.pyc
│     │     │  │     ├─ main.cpython-313.pyc
│     │     │  │     ├─ pyproject.cpython-313.pyc
│     │     │  │     ├─ self_outdated_check.cpython-313.pyc
│     │     │  │     ├─ wheel_builder.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ _vendor
│     │     │  │  ├─ cachecontrol
│     │     │  │  │  ├─ adapter.py
│     │     │  │  │  ├─ cache.py
│     │     │  │  │  ├─ caches
│     │     │  │  │  │  ├─ file_cache.py
│     │     │  │  │  │  ├─ redis_cache.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ file_cache.cpython-313.pyc
│     │     │  │  │  │     ├─ redis_cache.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ controller.py
│     │     │  │  │  ├─ filewrapper.py
│     │     │  │  │  ├─ heuristics.py
│     │     │  │  │  ├─ py.typed
│     │     │  │  │  ├─ serialize.py
│     │     │  │  │  ├─ wrapper.py
│     │     │  │  │  ├─ _cmd.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ adapter.cpython-313.pyc
│     │     │  │  │     ├─ cache.cpython-313.pyc
│     │     │  │  │     ├─ controller.cpython-313.pyc
│     │     │  │  │     ├─ filewrapper.cpython-313.pyc
│     │     │  │  │     ├─ heuristics.cpython-313.pyc
│     │     │  │  │     ├─ serialize.cpython-313.pyc
│     │     │  │  │     ├─ wrapper.cpython-313.pyc
│     │     │  │  │     ├─ _cmd.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ certifi
│     │     │  │  │  ├─ cacert.pem
│     │     │  │  │  ├─ core.py
│     │     │  │  │  ├─ py.typed
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  ├─ __main__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ core.cpython-313.pyc
│     │     │  │  │     ├─ __init__.cpython-313.pyc
│     │     │  │  │     └─ __main__.cpython-313.pyc
│     │     │  │  ├─ dependency_groups
│     │     │  │  │  ├─ py.typed
│     │     │  │  │  ├─ _implementation.py
│     │     │  │  │  ├─ _lint_dependency_groups.py
│     │     │  │  │  ├─ _pip_wrapper.py
│     │     │  │  │  ├─ _toml_compat.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  ├─ __main__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ _implementation.cpython-313.pyc
│     │     │  │  │     ├─ _lint_dependency_groups.cpython-313.pyc
│     │     │  │  │     ├─ _pip_wrapper.cpython-313.pyc
│     │     │  │  │     ├─ _toml_compat.cpython-313.pyc
│     │     │  │  │     ├─ __init__.cpython-313.pyc
│     │     │  │  │     └─ __main__.cpython-313.pyc
│     │     │  │  ├─ idna
│     │     │  │  │  ├─ codec.py
│     │     │  │  │  ├─ compat.py
│     │     │  │  │  ├─ core.py
│     │     │  │  │  ├─ idnadata.py
│     │     │  │  │  ├─ intranges.py
│     │     │  │  │  ├─ package_data.py
│     │     │  │  │  ├─ py.typed
│     │     │  │  │  ├─ uts46data.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ codec.cpython-313.pyc
│     │     │  │  │     ├─ compat.cpython-313.pyc
│     │     │  │  │     ├─ core.cpython-313.pyc
│     │     │  │  │     ├─ idnadata.cpython-313.pyc
│     │     │  │  │     ├─ intranges.cpython-313.pyc
│     │     │  │  │     ├─ package_data.cpython-313.pyc
│     │     │  │  │     ├─ uts46data.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ msgpack
│     │     │  │  │  ├─ exceptions.py
│     │     │  │  │  ├─ ext.py
│     │     │  │  │  ├─ fallback.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ exceptions.cpython-313.pyc
│     │     │  │  │     ├─ ext.cpython-313.pyc
│     │     │  │  │     ├─ fallback.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ packaging
│     │     │  │  │  ├─ licenses
│     │     │  │  │  │  ├─ _spdx.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ _spdx.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ markers.py
│     │     │  │  │  ├─ metadata.py
│     │     │  │  │  ├─ py.typed
│     │     │  │  │  ├─ requirements.py
│     │     │  │  │  ├─ specifiers.py
│     │     │  │  │  ├─ tags.py
│     │     │  │  │  ├─ utils.py
│     │     │  │  │  ├─ version.py
│     │     │  │  │  ├─ _elffile.py
│     │     │  │  │  ├─ _manylinux.py
│     │     │  │  │  ├─ _musllinux.py
│     │     │  │  │  ├─ _parser.py
│     │     │  │  │  ├─ _structures.py
│     │     │  │  │  ├─ _tokenizer.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ markers.cpython-313.pyc
│     │     │  │  │     ├─ metadata.cpython-313.pyc
│     │     │  │  │     ├─ requirements.cpython-313.pyc
│     │     │  │  │     ├─ specifiers.cpython-313.pyc
│     │     │  │  │     ├─ tags.cpython-313.pyc
│     │     │  │  │     ├─ utils.cpython-313.pyc
│     │     │  │  │     ├─ version.cpython-313.pyc
│     │     │  │  │     ├─ _elffile.cpython-313.pyc
│     │     │  │  │     ├─ _manylinux.cpython-313.pyc
│     │     │  │  │     ├─ _musllinux.cpython-313.pyc
│     │     │  │  │     ├─ _parser.cpython-313.pyc
│     │     │  │  │     ├─ _structures.cpython-313.pyc
│     │     │  │  │     ├─ _tokenizer.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ pkg_resources
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ platformdirs
│     │     │  │  │  ├─ android.py
│     │     │  │  │  ├─ api.py
│     │     │  │  │  ├─ macos.py
│     │     │  │  │  ├─ py.typed
│     │     │  │  │  ├─ unix.py
│     │     │  │  │  ├─ version.py
│     │     │  │  │  ├─ windows.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  ├─ __main__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ android.cpython-313.pyc
│     │     │  │  │     ├─ api.cpython-313.pyc
│     │     │  │  │     ├─ macos.cpython-313.pyc
│     │     │  │  │     ├─ unix.cpython-313.pyc
│     │     │  │  │     ├─ version.cpython-313.pyc
│     │     │  │  │     ├─ windows.cpython-313.pyc
│     │     │  │  │     ├─ __init__.cpython-313.pyc
│     │     │  │  │     └─ __main__.cpython-313.pyc
│     │     │  │  ├─ pygments
│     │     │  │  │  ├─ console.py
│     │     │  │  │  ├─ filter.py
│     │     │  │  │  ├─ filters
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ formatter.py
│     │     │  │  │  ├─ formatters
│     │     │  │  │  │  ├─ _mapping.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ _mapping.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ lexer.py
│     │     │  │  │  ├─ lexers
│     │     │  │  │  │  ├─ python.py
│     │     │  │  │  │  ├─ _mapping.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ python.cpython-313.pyc
│     │     │  │  │  │     ├─ _mapping.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ modeline.py
│     │     │  │  │  ├─ plugin.py
│     │     │  │  │  ├─ regexopt.py
│     │     │  │  │  ├─ scanner.py
│     │     │  │  │  ├─ sphinxext.py
│     │     │  │  │  ├─ style.py
│     │     │  │  │  ├─ styles
│     │     │  │  │  │  ├─ _mapping.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ _mapping.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ token.py
│     │     │  │  │  ├─ unistring.py
│     │     │  │  │  ├─ util.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  ├─ __main__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ console.cpython-313.pyc
│     │     │  │  │     ├─ filter.cpython-313.pyc
│     │     │  │  │     ├─ formatter.cpython-313.pyc
│     │     │  │  │     ├─ lexer.cpython-313.pyc
│     │     │  │  │     ├─ modeline.cpython-313.pyc
│     │     │  │  │     ├─ plugin.cpython-313.pyc
│     │     │  │  │     ├─ regexopt.cpython-313.pyc
│     │     │  │  │     ├─ scanner.cpython-313.pyc
│     │     │  │  │     ├─ sphinxext.cpython-313.pyc
│     │     │  │  │     ├─ style.cpython-313.pyc
│     │     │  │  │     ├─ token.cpython-313.pyc
│     │     │  │  │     ├─ unistring.cpython-313.pyc
│     │     │  │  │     ├─ util.cpython-313.pyc
│     │     │  │  │     ├─ __init__.cpython-313.pyc
│     │     │  │  │     └─ __main__.cpython-313.pyc
│     │     │  │  ├─ pyproject_hooks
│     │     │  │  │  ├─ py.typed
│     │     │  │  │  ├─ _impl.py
│     │     │  │  │  ├─ _in_process
│     │     │  │  │  │  ├─ _in_process.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ _in_process.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ _impl.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ requests
│     │     │  │  │  ├─ adapters.py
│     │     │  │  │  ├─ api.py
│     │     │  │  │  ├─ auth.py
│     │     │  │  │  ├─ certs.py
│     │     │  │  │  ├─ compat.py
│     │     │  │  │  ├─ cookies.py
│     │     │  │  │  ├─ exceptions.py
│     │     │  │  │  ├─ help.py
│     │     │  │  │  ├─ hooks.py
│     │     │  │  │  ├─ models.py
│     │     │  │  │  ├─ packages.py
│     │     │  │  │  ├─ sessions.py
│     │     │  │  │  ├─ status_codes.py
│     │     │  │  │  ├─ structures.py
│     │     │  │  │  ├─ utils.py
│     │     │  │  │  ├─ _internal_utils.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  ├─ __pycache__
│     │     │  │  │  │  ├─ adapters.cpython-313.pyc
│     │     │  │  │  │  ├─ api.cpython-313.pyc
│     │     │  │  │  │  ├─ auth.cpython-313.pyc
│     │     │  │  │  │  ├─ certs.cpython-313.pyc
│     │     │  │  │  │  ├─ compat.cpython-313.pyc
│     │     │  │  │  │  ├─ cookies.cpython-313.pyc
│     │     │  │  │  │  ├─ exceptions.cpython-313.pyc
│     │     │  │  │  │  ├─ help.cpython-313.pyc
│     │     │  │  │  │  ├─ hooks.cpython-313.pyc
│     │     │  │  │  │  ├─ models.cpython-313.pyc
│     │     │  │  │  │  ├─ packages.cpython-313.pyc
│     │     │  │  │  │  ├─ sessions.cpython-313.pyc
│     │     │  │  │  │  ├─ status_codes.cpython-313.pyc
│     │     │  │  │  │  ├─ structures.cpython-313.pyc
│     │     │  │  │  │  ├─ utils.cpython-313.pyc
│     │     │  │  │  │  ├─ _internal_utils.cpython-313.pyc
│     │     │  │  │  │  ├─ __init__.cpython-313.pyc
│     │     │  │  │  │  └─ __version__.cpython-313.pyc
│     │     │  │  │  └─ __version__.py
│     │     │  │  ├─ resolvelib
│     │     │  │  │  ├─ providers.py
│     │     │  │  │  ├─ py.typed
│     │     │  │  │  ├─ reporters.py
│     │     │  │  │  ├─ resolvers
│     │     │  │  │  │  ├─ abstract.py
│     │     │  │  │  │  ├─ criterion.py
│     │     │  │  │  │  ├─ exceptions.py
│     │     │  │  │  │  ├─ resolution.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ abstract.cpython-313.pyc
│     │     │  │  │  │     ├─ criterion.cpython-313.pyc
│     │     │  │  │  │     ├─ exceptions.cpython-313.pyc
│     │     │  │  │  │     ├─ resolution.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ structs.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ providers.cpython-313.pyc
│     │     │  │  │     ├─ reporters.cpython-313.pyc
│     │     │  │  │     ├─ structs.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ rich
│     │     │  │  │  ├─ abc.py
│     │     │  │  │  ├─ align.py
│     │     │  │  │  ├─ ansi.py
│     │     │  │  │  ├─ bar.py
│     │     │  │  │  ├─ box.py
│     │     │  │  │  ├─ cells.py
│     │     │  │  │  ├─ color.py
│     │     │  │  │  ├─ color_triplet.py
│     │     │  │  │  ├─ columns.py
│     │     │  │  │  ├─ console.py
│     │     │  │  │  ├─ constrain.py
│     │     │  │  │  ├─ containers.py
│     │     │  │  │  ├─ control.py
│     │     │  │  │  ├─ default_styles.py
│     │     │  │  │  ├─ diagnose.py
│     │     │  │  │  ├─ emoji.py
│     │     │  │  │  ├─ errors.py
│     │     │  │  │  ├─ filesize.py
│     │     │  │  │  ├─ file_proxy.py
│     │     │  │  │  ├─ highlighter.py
│     │     │  │  │  ├─ json.py
│     │     │  │  │  ├─ jupyter.py
│     │     │  │  │  ├─ layout.py
│     │     │  │  │  ├─ live.py
│     │     │  │  │  ├─ live_render.py
│     │     │  │  │  ├─ logging.py
│     │     │  │  │  ├─ markup.py
│     │     │  │  │  ├─ measure.py
│     │     │  │  │  ├─ padding.py
│     │     │  │  │  ├─ pager.py
│     │     │  │  │  ├─ palette.py
│     │     │  │  │  ├─ panel.py
│     │     │  │  │  ├─ pretty.py
│     │     │  │  │  ├─ progress.py
│     │     │  │  │  ├─ progress_bar.py
│     │     │  │  │  ├─ prompt.py
│     │     │  │  │  ├─ protocol.py
│     │     │  │  │  ├─ py.typed
│     │     │  │  │  ├─ region.py
│     │     │  │  │  ├─ repr.py
│     │     │  │  │  ├─ rule.py
│     │     │  │  │  ├─ scope.py
│     │     │  │  │  ├─ screen.py
│     │     │  │  │  ├─ segment.py
│     │     │  │  │  ├─ spinner.py
│     │     │  │  │  ├─ status.py
│     │     │  │  │  ├─ style.py
│     │     │  │  │  ├─ styled.py
│     │     │  │  │  ├─ syntax.py
│     │     │  │  │  ├─ table.py
│     │     │  │  │  ├─ terminal_theme.py
│     │     │  │  │  ├─ text.py
│     │     │  │  │  ├─ theme.py
│     │     │  │  │  ├─ themes.py
│     │     │  │  │  ├─ traceback.py
│     │     │  │  │  ├─ tree.py
│     │     │  │  │  ├─ _cell_widths.py
│     │     │  │  │  ├─ _emoji_codes.py
│     │     │  │  │  ├─ _emoji_replace.py
│     │     │  │  │  ├─ _export_format.py
│     │     │  │  │  ├─ _extension.py
│     │     │  │  │  ├─ _fileno.py
│     │     │  │  │  ├─ _inspect.py
│     │     │  │  │  ├─ _log_render.py
│     │     │  │  │  ├─ _loop.py
│     │     │  │  │  ├─ _null_file.py
│     │     │  │  │  ├─ _palettes.py
│     │     │  │  │  ├─ _pick.py
│     │     │  │  │  ├─ _ratio.py
│     │     │  │  │  ├─ _spinners.py
│     │     │  │  │  ├─ _stack.py
│     │     │  │  │  ├─ _timer.py
│     │     │  │  │  ├─ _win32_console.py
│     │     │  │  │  ├─ _windows.py
│     │     │  │  │  ├─ _windows_renderer.py
│     │     │  │  │  ├─ _wrap.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  ├─ __main__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ abc.cpython-313.pyc
│     │     │  │  │     ├─ align.cpython-313.pyc
│     │     │  │  │     ├─ ansi.cpython-313.pyc
│     │     │  │  │     ├─ bar.cpython-313.pyc
│     │     │  │  │     ├─ box.cpython-313.pyc
│     │     │  │  │     ├─ cells.cpython-313.pyc
│     │     │  │  │     ├─ color.cpython-313.pyc
│     │     │  │  │     ├─ color_triplet.cpython-313.pyc
│     │     │  │  │     ├─ columns.cpython-313.pyc
│     │     │  │  │     ├─ console.cpython-313.pyc
│     │     │  │  │     ├─ constrain.cpython-313.pyc
│     │     │  │  │     ├─ containers.cpython-313.pyc
│     │     │  │  │     ├─ control.cpython-313.pyc
│     │     │  │  │     ├─ default_styles.cpython-313.pyc
│     │     │  │  │     ├─ diagnose.cpython-313.pyc
│     │     │  │  │     ├─ emoji.cpython-313.pyc
│     │     │  │  │     ├─ errors.cpython-313.pyc
│     │     │  │  │     ├─ filesize.cpython-313.pyc
│     │     │  │  │     ├─ file_proxy.cpython-313.pyc
│     │     │  │  │     ├─ highlighter.cpython-313.pyc
│     │     │  │  │     ├─ json.cpython-313.pyc
│     │     │  │  │     ├─ jupyter.cpython-313.pyc
│     │     │  │  │     ├─ layout.cpython-313.pyc
│     │     │  │  │     ├─ live.cpython-313.pyc
│     │     │  │  │     ├─ live_render.cpython-313.pyc
│     │     │  │  │     ├─ logging.cpython-313.pyc
│     │     │  │  │     ├─ markup.cpython-313.pyc
│     │     │  │  │     ├─ measure.cpython-313.pyc
│     │     │  │  │     ├─ padding.cpython-313.pyc
│     │     │  │  │     ├─ pager.cpython-313.pyc
│     │     │  │  │     ├─ palette.cpython-313.pyc
│     │     │  │  │     ├─ panel.cpython-313.pyc
│     │     │  │  │     ├─ pretty.cpython-313.pyc
│     │     │  │  │     ├─ progress.cpython-313.pyc
│     │     │  │  │     ├─ progress_bar.cpython-313.pyc
│     │     │  │  │     ├─ prompt.cpython-313.pyc
│     │     │  │  │     ├─ protocol.cpython-313.pyc
│     │     │  │  │     ├─ region.cpython-313.pyc
│     │     │  │  │     ├─ repr.cpython-313.pyc
│     │     │  │  │     ├─ rule.cpython-313.pyc
│     │     │  │  │     ├─ scope.cpython-313.pyc
│     │     │  │  │     ├─ screen.cpython-313.pyc
│     │     │  │  │     ├─ segment.cpython-313.pyc
│     │     │  │  │     ├─ spinner.cpython-313.pyc
│     │     │  │  │     ├─ status.cpython-313.pyc
│     │     │  │  │     ├─ style.cpython-313.pyc
│     │     │  │  │     ├─ styled.cpython-313.pyc
│     │     │  │  │     ├─ syntax.cpython-313.pyc
│     │     │  │  │     ├─ table.cpython-313.pyc
│     │     │  │  │     ├─ terminal_theme.cpython-313.pyc
│     │     │  │  │     ├─ text.cpython-313.pyc
│     │     │  │  │     ├─ theme.cpython-313.pyc
│     │     │  │  │     ├─ themes.cpython-313.pyc
│     │     │  │  │     ├─ traceback.cpython-313.pyc
│     │     │  │  │     ├─ tree.cpython-313.pyc
│     │     │  │  │     ├─ _cell_widths.cpython-313.pyc
│     │     │  │  │     ├─ _emoji_codes.cpython-313.pyc
│     │     │  │  │     ├─ _emoji_replace.cpython-313.pyc
│     │     │  │  │     ├─ _export_format.cpython-313.pyc
│     │     │  │  │     ├─ _extension.cpython-313.pyc
│     │     │  │  │     ├─ _fileno.cpython-313.pyc
│     │     │  │  │     ├─ _inspect.cpython-313.pyc
│     │     │  │  │     ├─ _log_render.cpython-313.pyc
│     │     │  │  │     ├─ _loop.cpython-313.pyc
│     │     │  │  │     ├─ _null_file.cpython-313.pyc
│     │     │  │  │     ├─ _palettes.cpython-313.pyc
│     │     │  │  │     ├─ _pick.cpython-313.pyc
│     │     │  │  │     ├─ _ratio.cpython-313.pyc
│     │     │  │  │     ├─ _spinners.cpython-313.pyc
│     │     │  │  │     ├─ _stack.cpython-313.pyc
│     │     │  │  │     ├─ _timer.cpython-313.pyc
│     │     │  │  │     ├─ _win32_console.cpython-313.pyc
│     │     │  │  │     ├─ _windows.cpython-313.pyc
│     │     │  │  │     ├─ _windows_renderer.cpython-313.pyc
│     │     │  │  │     ├─ _wrap.cpython-313.pyc
│     │     │  │  │     ├─ __init__.cpython-313.pyc
│     │     │  │  │     └─ __main__.cpython-313.pyc
│     │     │  │  ├─ tomli
│     │     │  │  │  ├─ py.typed
│     │     │  │  │  ├─ _parser.py
│     │     │  │  │  ├─ _re.py
│     │     │  │  │  ├─ _types.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ _parser.cpython-313.pyc
│     │     │  │  │     ├─ _re.cpython-313.pyc
│     │     │  │  │     ├─ _types.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ tomli_w
│     │     │  │  │  ├─ py.typed
│     │     │  │  │  ├─ _writer.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ _writer.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ truststore
│     │     │  │  │  ├─ py.typed
│     │     │  │  │  ├─ _api.py
│     │     │  │  │  ├─ _macos.py
│     │     │  │  │  ├─ _openssl.py
│     │     │  │  │  ├─ _ssl_constants.py
│     │     │  │  │  ├─ _windows.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ _api.cpython-313.pyc
│     │     │  │  │     ├─ _macos.cpython-313.pyc
│     │     │  │  │     ├─ _openssl.cpython-313.pyc
│     │     │  │  │     ├─ _ssl_constants.cpython-313.pyc
│     │     │  │  │     ├─ _windows.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ urllib3
│     │     │  │  │  ├─ connection.py
│     │     │  │  │  ├─ connectionpool.py
│     │     │  │  │  ├─ contrib
│     │     │  │  │  │  ├─ appengine.py
│     │     │  │  │  │  ├─ ntlmpool.py
│     │     │  │  │  │  ├─ pyopenssl.py
│     │     │  │  │  │  ├─ securetransport.py
│     │     │  │  │  │  ├─ socks.py
│     │     │  │  │  │  ├─ _appengine_environ.py
│     │     │  │  │  │  ├─ _securetransport
│     │     │  │  │  │  │  ├─ bindings.py
│     │     │  │  │  │  │  ├─ low_level.py
│     │     │  │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  │  └─ __pycache__
│     │     │  │  │  │  │     ├─ bindings.cpython-313.pyc
│     │     │  │  │  │  │     ├─ low_level.cpython-313.pyc
│     │     │  │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ appengine.cpython-313.pyc
│     │     │  │  │  │     ├─ ntlmpool.cpython-313.pyc
│     │     │  │  │  │     ├─ pyopenssl.cpython-313.pyc
│     │     │  │  │  │     ├─ securetransport.cpython-313.pyc
│     │     │  │  │  │     ├─ socks.cpython-313.pyc
│     │     │  │  │  │     ├─ _appengine_environ.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ exceptions.py
│     │     │  │  │  ├─ fields.py
│     │     │  │  │  ├─ filepost.py
│     │     │  │  │  ├─ packages
│     │     │  │  │  │  ├─ backports
│     │     │  │  │  │  │  ├─ makefile.py
│     │     │  │  │  │  │  ├─ weakref_finalize.py
│     │     │  │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  │  └─ __pycache__
│     │     │  │  │  │  │     ├─ makefile.cpython-313.pyc
│     │     │  │  │  │  │     ├─ weakref_finalize.cpython-313.pyc
│     │     │  │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  │  ├─ six.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ six.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ poolmanager.py
│     │     │  │  │  ├─ request.py
│     │     │  │  │  ├─ response.py
│     │     │  │  │  ├─ util
│     │     │  │  │  │  ├─ connection.py
│     │     │  │  │  │  ├─ proxy.py
│     │     │  │  │  │  ├─ queue.py
│     │     │  │  │  │  ├─ request.py
│     │     │  │  │  │  ├─ response.py
│     │     │  │  │  │  ├─ retry.py
│     │     │  │  │  │  ├─ ssltransport.py
│     │     │  │  │  │  ├─ ssl_.py
│     │     │  │  │  │  ├─ ssl_match_hostname.py
│     │     │  │  │  │  ├─ timeout.py
│     │     │  │  │  │  ├─ url.py
│     │     │  │  │  │  ├─ wait.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ connection.cpython-313.pyc
│     │     │  │  │  │     ├─ proxy.cpython-313.pyc
│     │     │  │  │  │     ├─ queue.cpython-313.pyc
│     │     │  │  │  │     ├─ request.cpython-313.pyc
│     │     │  │  │  │     ├─ response.cpython-313.pyc
│     │     │  │  │  │     ├─ retry.cpython-313.pyc
│     │     │  │  │  │     ├─ ssltransport.cpython-313.pyc
│     │     │  │  │  │     ├─ ssl_.cpython-313.pyc
│     │     │  │  │  │     ├─ ssl_match_hostname.cpython-313.pyc
│     │     │  │  │  │     ├─ timeout.cpython-313.pyc
│     │     │  │  │  │     ├─ url.cpython-313.pyc
│     │     │  │  │  │     ├─ wait.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ _collections.py
│     │     │  │  │  ├─ _version.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ connection.cpython-313.pyc
│     │     │  │  │     ├─ connectionpool.cpython-313.pyc
│     │     │  │  │     ├─ exceptions.cpython-313.pyc
│     │     │  │  │     ├─ fields.cpython-313.pyc
│     │     │  │  │     ├─ filepost.cpython-313.pyc
│     │     │  │  │     ├─ poolmanager.cpython-313.pyc
│     │     │  │  │     ├─ request.cpython-313.pyc
│     │     │  │  │     ├─ response.cpython-313.pyc
│     │     │  │  │     ├─ _collections.cpython-313.pyc
│     │     │  │  │     ├─ _version.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ vendor.txt
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ __init__.py
│     │     │  ├─ __main__.py
│     │     │  ├─ __pip-runner__.py
│     │     │  └─ __pycache__
│     │     │     ├─ __init__.cpython-313.pyc
│     │     │     ├─ __main__.cpython-313.pyc
│     │     │     └─ __pip-runner__.cpython-313.pyc
│     │     ├─ platformdirs
│     │     │  ├─ android.py
│     │     │  ├─ api.py
│     │     │  ├─ macos.py
│     │     │  ├─ py.typed
│     │     │  ├─ unix.py
│     │     │  ├─ version.py
│     │     │  ├─ windows.py
│     │     │  ├─ __init__.py
│     │     │  ├─ __main__.py
│     │     │  └─ __pycache__
│     │     │     ├─ android.cpython-313.pyc
│     │     │     ├─ api.cpython-313.pyc
│     │     │     ├─ macos.cpython-313.pyc
│     │     │     ├─ unix.cpython-313.pyc
│     │     │     ├─ version.cpython-313.pyc
│     │     │     ├─ windows.cpython-313.pyc
│     │     │     ├─ __init__.cpython-313.pyc
│     │     │     └─ __main__.cpython-313.pyc
│     │     ├─ pooch
│     │     │  ├─ core.py
│     │     │  ├─ downloaders.py
│     │     │  ├─ hashes.py
│     │     │  ├─ processors.py
│     │     │  ├─ tests
│     │     │  │  ├─ data
│     │     │  │  │  ├─ large-data.txt
│     │     │  │  │  ├─ registry-custom-url.txt
│     │     │  │  │  ├─ registry-invalid.txt
│     │     │  │  │  ├─ registry-spaces.txt
│     │     │  │  │  ├─ registry.txt
│     │     │  │  │  ├─ registry_comments.txt
│     │     │  │  │  ├─ store
│     │     │  │  │  │  ├─ subdir
│     │     │  │  │  │  │  └─ tiny-data.txt
│     │     │  │  │  │  └─ tiny-data.txt
│     │     │  │  │  ├─ store.tar.gz
│     │     │  │  │  ├─ store.zip
│     │     │  │  │  ├─ tiny-data.tar.gz
│     │     │  │  │  ├─ tiny-data.txt
│     │     │  │  │  ├─ tiny-data.txt.bz2
│     │     │  │  │  ├─ tiny-data.txt.gz
│     │     │  │  │  ├─ tiny-data.txt.xz
│     │     │  │  │  └─ tiny-data.zip
│     │     │  │  ├─ test_core.py
│     │     │  │  ├─ test_downloaders.py
│     │     │  │  ├─ test_hashes.py
│     │     │  │  ├─ test_integration.py
│     │     │  │  ├─ test_processors.py
│     │     │  │  ├─ test_utils.py
│     │     │  │  ├─ test_version.py
│     │     │  │  ├─ utils.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ test_core.cpython-313.pyc
│     │     │  │     ├─ test_downloaders.cpython-313.pyc
│     │     │  │     ├─ test_hashes.cpython-313.pyc
│     │     │  │     ├─ test_integration.cpython-313.pyc
│     │     │  │     ├─ test_processors.cpython-313.pyc
│     │     │  │     ├─ test_utils.cpython-313.pyc
│     │     │  │     ├─ test_version.cpython-313.pyc
│     │     │  │     ├─ utils.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ utils.py
│     │     │  ├─ _version.py
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     ├─ core.cpython-313.pyc
│     │     │     ├─ downloaders.cpython-313.pyc
│     │     │     ├─ hashes.cpython-313.pyc
│     │     │     ├─ processors.cpython-313.pyc
│     │     │     ├─ utils.cpython-313.pyc
│     │     │     ├─ _version.cpython-313.pyc
│     │     │     └─ __init__.cpython-313.pyc
│     │     ├─ pyasn1
│     │     │  ├─ codec
│     │     │  │  ├─ ber
│     │     │  │  │  ├─ decoder.py
│     │     │  │  │  ├─ encoder.py
│     │     │  │  │  ├─ eoo.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ decoder.cpython-313.pyc
│     │     │  │  │     ├─ encoder.cpython-313.pyc
│     │     │  │  │     ├─ eoo.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ cer
│     │     │  │  │  ├─ decoder.py
│     │     │  │  │  ├─ encoder.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ decoder.cpython-313.pyc
│     │     │  │  │     ├─ encoder.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ der
│     │     │  │  │  ├─ decoder.py
│     │     │  │  │  ├─ encoder.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ decoder.cpython-313.pyc
│     │     │  │  │     ├─ encoder.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ native
│     │     │  │  │  ├─ decoder.py
│     │     │  │  │  ├─ encoder.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ decoder.cpython-313.pyc
│     │     │  │  │     ├─ encoder.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ streaming.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ streaming.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ compat
│     │     │  │  ├─ integer.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ integer.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ debug.py
│     │     │  ├─ error.py
│     │     │  ├─ type
│     │     │  │  ├─ base.py
│     │     │  │  ├─ char.py
│     │     │  │  ├─ constraint.py
│     │     │  │  ├─ error.py
│     │     │  │  ├─ namedtype.py
│     │     │  │  ├─ namedval.py
│     │     │  │  ├─ opentype.py
│     │     │  │  ├─ tag.py
│     │     │  │  ├─ tagmap.py
│     │     │  │  ├─ univ.py
│     │     │  │  ├─ useful.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ base.cpython-313.pyc
│     │     │  │     ├─ char.cpython-313.pyc
│     │     │  │     ├─ constraint.cpython-313.pyc
│     │     │  │     ├─ error.cpython-313.pyc
│     │     │  │     ├─ namedtype.cpython-313.pyc
│     │     │  │     ├─ namedval.cpython-313.pyc
│     │     │  │     ├─ opentype.cpython-313.pyc
│     │     │  │     ├─ tag.cpython-313.pyc
│     │     │  │     ├─ tagmap.cpython-313.pyc
│     │     │  │     ├─ univ.cpython-313.pyc
│     │     │  │     ├─ useful.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     ├─ debug.cpython-313.pyc
│     │     │     ├─ error.cpython-313.pyc
│     │     │     └─ __init__.cpython-313.pyc
│     │     ├─ pycparser
│     │     │  ├─ ast_transforms.py
│     │     │  ├─ c_ast.py
│     │     │  ├─ c_generator.py
│     │     │  ├─ c_lexer.py
│     │     │  ├─ c_parser.py
│     │     │  ├─ lextab.py
│     │     │  ├─ ply
│     │     │  │  ├─ cpp.py
│     │     │  │  ├─ ctokens.py
│     │     │  │  ├─ lex.py
│     │     │  │  ├─ yacc.py
│     │     │  │  ├─ ygen.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ cpp.cpython-313.pyc
│     │     │  │     ├─ ctokens.cpython-313.pyc
│     │     │  │     ├─ lex.cpython-313.pyc
│     │     │  │     ├─ yacc.cpython-313.pyc
│     │     │  │     ├─ ygen.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ plyparser.py
│     │     │  ├─ yacctab.py
│     │     │  ├─ _ast_gen.py
│     │     │  ├─ _build_tables.py
│     │     │  ├─ _c_ast.cfg
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     ├─ ast_transforms.cpython-313.pyc
│     │     │     ├─ c_ast.cpython-313.pyc
│     │     │     ├─ c_generator.cpython-313.pyc
│     │     │     ├─ c_lexer.cpython-313.pyc
│     │     │     ├─ c_parser.cpython-313.pyc
│     │     │     ├─ lextab.cpython-313.pyc
│     │     │     ├─ plyparser.cpython-313.pyc
│     │     │     ├─ yacctab.cpython-313.pyc
│     │     │     ├─ _ast_gen.cpython-313.pyc
│     │     │     ├─ _build_tables.cpython-313.pyc
│     │     │     └─ __init__.cpython-313.pyc
│     │     ├─ pydantic
│     │     │  ├─ aliases.py
│     │     │  ├─ alias_generators.py
│     │     │  ├─ annotated_handlers.py
│     │     │  ├─ class_validators.py
│     │     │  ├─ color.py
│     │     │  ├─ config.py
│     │     │  ├─ dataclasses.py
│     │     │  ├─ datetime_parse.py
│     │     │  ├─ decorator.py
│     │     │  ├─ deprecated
│     │     │  │  ├─ class_validators.py
│     │     │  │  ├─ config.py
│     │     │  │  ├─ copy_internals.py
│     │     │  │  ├─ decorator.py
│     │     │  │  ├─ json.py
│     │     │  │  ├─ parse.py
│     │     │  │  ├─ tools.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ class_validators.cpython-313.pyc
│     │     │  │     ├─ config.cpython-313.pyc
│     │     │  │     ├─ copy_internals.cpython-313.pyc
│     │     │  │     ├─ decorator.cpython-313.pyc
│     │     │  │     ├─ json.cpython-313.pyc
│     │     │  │     ├─ parse.cpython-313.pyc
│     │     │  │     ├─ tools.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ env_settings.py
│     │     │  ├─ errors.py
│     │     │  ├─ error_wrappers.py
│     │     │  ├─ experimental
│     │     │  │  ├─ arguments_schema.py
│     │     │  │  ├─ missing_sentinel.py
│     │     │  │  ├─ pipeline.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ arguments_schema.cpython-313.pyc
│     │     │  │     ├─ missing_sentinel.cpython-313.pyc
│     │     │  │     ├─ pipeline.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ fields.py
│     │     │  ├─ functional_serializers.py
│     │     │  ├─ functional_validators.py
│     │     │  ├─ generics.py
│     │     │  ├─ json.py
│     │     │  ├─ json_schema.py
│     │     │  ├─ main.py
│     │     │  ├─ mypy.py
│     │     │  ├─ networks.py
│     │     │  ├─ parse.py
│     │     │  ├─ plugin
│     │     │  │  ├─ _loader.py
│     │     │  │  ├─ _schema_validator.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ _loader.cpython-313.pyc
│     │     │  │     ├─ _schema_validator.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ py.typed
│     │     │  ├─ root_model.py
│     │     │  ├─ schema.py
│     │     │  ├─ tools.py
│     │     │  ├─ types.py
│     │     │  ├─ type_adapter.py
│     │     │  ├─ typing.py
│     │     │  ├─ utils.py
│     │     │  ├─ v1
│     │     │  │  ├─ annotated_types.py
│     │     │  │  ├─ class_validators.py
│     │     │  │  ├─ color.py
│     │     │  │  ├─ config.py
│     │     │  │  ├─ dataclasses.py
│     │     │  │  ├─ datetime_parse.py
│     │     │  │  ├─ decorator.py
│     │     │  │  ├─ env_settings.py
│     │     │  │  ├─ errors.py
│     │     │  │  ├─ error_wrappers.py
│     │     │  │  ├─ fields.py
│     │     │  │  ├─ generics.py
│     │     │  │  ├─ json.py
│     │     │  │  ├─ main.py
│     │     │  │  ├─ mypy.py
│     │     │  │  ├─ networks.py
│     │     │  │  ├─ parse.py
│     │     │  │  ├─ py.typed
│     │     │  │  ├─ schema.py
│     │     │  │  ├─ tools.py
│     │     │  │  ├─ types.py
│     │     │  │  ├─ typing.py
│     │     │  │  ├─ utils.py
│     │     │  │  ├─ validators.py
│     │     │  │  ├─ version.py
│     │     │  │  ├─ _hypothesis_plugin.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ annotated_types.cpython-313.pyc
│     │     │  │     ├─ class_validators.cpython-313.pyc
│     │     │  │     ├─ color.cpython-313.pyc
│     │     │  │     ├─ config.cpython-313.pyc
│     │     │  │     ├─ dataclasses.cpython-313.pyc
│     │     │  │     ├─ datetime_parse.cpython-313.pyc
│     │     │  │     ├─ decorator.cpython-313.pyc
│     │     │  │     ├─ env_settings.cpython-313.pyc
│     │     │  │     ├─ errors.cpython-313.pyc
│     │     │  │     ├─ error_wrappers.cpython-313.pyc
│     │     │  │     ├─ fields.cpython-313.pyc
│     │     │  │     ├─ generics.cpython-313.pyc
│     │     │  │     ├─ json.cpython-313.pyc
│     │     │  │     ├─ main.cpython-313.pyc
│     │     │  │     ├─ mypy.cpython-313.pyc
│     │     │  │     ├─ networks.cpython-313.pyc
│     │     │  │     ├─ parse.cpython-313.pyc
│     │     │  │     ├─ schema.cpython-313.pyc
│     │     │  │     ├─ tools.cpython-313.pyc
│     │     │  │     ├─ types.cpython-313.pyc
│     │     │  │     ├─ typing.cpython-313.pyc
│     │     │  │     ├─ utils.cpython-313.pyc
│     │     │  │     ├─ validators.cpython-313.pyc
│     │     │  │     ├─ version.cpython-313.pyc
│     │     │  │     ├─ _hypothesis_plugin.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ validate_call_decorator.py
│     │     │  ├─ validators.py
│     │     │  ├─ version.py
│     │     │  ├─ warnings.py
│     │     │  ├─ _internal
│     │     │  │  ├─ _config.py
│     │     │  │  ├─ _core_metadata.py
│     │     │  │  ├─ _core_utils.py
│     │     │  │  ├─ _dataclasses.py
│     │     │  │  ├─ _decorators.py
│     │     │  │  ├─ _decorators_v1.py
│     │     │  │  ├─ _discriminated_union.py
│     │     │  │  ├─ _docs_extraction.py
│     │     │  │  ├─ _fields.py
│     │     │  │  ├─ _forward_ref.py
│     │     │  │  ├─ _generate_schema.py
│     │     │  │  ├─ _generics.py
│     │     │  │  ├─ _git.py
│     │     │  │  ├─ _import_utils.py
│     │     │  │  ├─ _internal_dataclass.py
│     │     │  │  ├─ _known_annotated_metadata.py
│     │     │  │  ├─ _mock_val_ser.py
│     │     │  │  ├─ _model_construction.py
│     │     │  │  ├─ _namespace_utils.py
│     │     │  │  ├─ _repr.py
│     │     │  │  ├─ _schema_gather.py
│     │     │  │  ├─ _schema_generation_shared.py
│     │     │  │  ├─ _serializers.py
│     │     │  │  ├─ _signature.py
│     │     │  │  ├─ _typing_extra.py
│     │     │  │  ├─ _utils.py
│     │     │  │  ├─ _validate_call.py
│     │     │  │  ├─ _validators.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ _config.cpython-313.pyc
│     │     │  │     ├─ _core_metadata.cpython-313.pyc
│     │     │  │     ├─ _core_utils.cpython-313.pyc
│     │     │  │     ├─ _dataclasses.cpython-313.pyc
│     │     │  │     ├─ _decorators.cpython-313.pyc
│     │     │  │     ├─ _decorators_v1.cpython-313.pyc
│     │     │  │     ├─ _discriminated_union.cpython-313.pyc
│     │     │  │     ├─ _docs_extraction.cpython-313.pyc
│     │     │  │     ├─ _fields.cpython-313.pyc
│     │     │  │     ├─ _forward_ref.cpython-313.pyc
│     │     │  │     ├─ _generate_schema.cpython-313.pyc
│     │     │  │     ├─ _generics.cpython-313.pyc
│     │     │  │     ├─ _git.cpython-313.pyc
│     │     │  │     ├─ _import_utils.cpython-313.pyc
│     │     │  │     ├─ _internal_dataclass.cpython-313.pyc
│     │     │  │     ├─ _known_annotated_metadata.cpython-313.pyc
│     │     │  │     ├─ _mock_val_ser.cpython-313.pyc
│     │     │  │     ├─ _model_construction.cpython-313.pyc
│     │     │  │     ├─ _namespace_utils.cpython-313.pyc
│     │     │  │     ├─ _repr.cpython-313.pyc
│     │     │  │     ├─ _schema_gather.cpython-313.pyc
│     │     │  │     ├─ _schema_generation_shared.cpython-313.pyc
│     │     │  │     ├─ _serializers.cpython-313.pyc
│     │     │  │     ├─ _signature.cpython-313.pyc
│     │     │  │     ├─ _typing_extra.cpython-313.pyc
│     │     │  │     ├─ _utils.cpython-313.pyc
│     │     │  │     ├─ _validate_call.cpython-313.pyc
│     │     │  │     ├─ _validators.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ _migration.py
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     ├─ aliases.cpython-313.pyc
│     │     │     ├─ alias_generators.cpython-313.pyc
│     │     │     ├─ annotated_handlers.cpython-313.pyc
│     │     │     ├─ class_validators.cpython-313.pyc
│     │     │     ├─ color.cpython-313.pyc
│     │     │     ├─ config.cpython-313.pyc
│     │     │     ├─ dataclasses.cpython-313.pyc
│     │     │     ├─ datetime_parse.cpython-313.pyc
│     │     │     ├─ decorator.cpython-313.pyc
│     │     │     ├─ env_settings.cpython-313.pyc
│     │     │     ├─ errors.cpython-313.pyc
│     │     │     ├─ error_wrappers.cpython-313.pyc
│     │     │     ├─ fields.cpython-313.pyc
│     │     │     ├─ functional_serializers.cpython-313.pyc
│     │     │     ├─ functional_validators.cpython-313.pyc
│     │     │     ├─ generics.cpython-313.pyc
│     │     │     ├─ json.cpython-313.pyc
│     │     │     ├─ json_schema.cpython-313.pyc
│     │     │     ├─ main.cpython-313.pyc
│     │     │     ├─ mypy.cpython-313.pyc
│     │     │     ├─ networks.cpython-313.pyc
│     │     │     ├─ parse.cpython-313.pyc
│     │     │     ├─ root_model.cpython-313.pyc
│     │     │     ├─ schema.cpython-313.pyc
│     │     │     ├─ tools.cpython-313.pyc
│     │     │     ├─ types.cpython-313.pyc
│     │     │     ├─ type_adapter.cpython-313.pyc
│     │     │     ├─ typing.cpython-313.pyc
│     │     │     ├─ utils.cpython-313.pyc
│     │     │     ├─ validate_call_decorator.cpython-313.pyc
│     │     │     ├─ validators.cpython-313.pyc
│     │     │     ├─ version.cpython-313.pyc
│     │     │     ├─ warnings.cpython-313.pyc
│     │     │     ├─ _migration.cpython-313.pyc
│     │     │     └─ __init__.cpython-313.pyc
│     │     ├─ pydantic_core
│     │     │  ├─ core_schema.py
│     │     │  ├─ py.typed
│     │     │  ├─ _pydantic_core.cp313-win_amd64.pyd
│     │     │  ├─ _pydantic_core.pyi
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     ├─ core_schema.cpython-313.pyc
│     │     │     └─ __init__.cpython-313.pyc
│     │     ├─ pymongo
│     │     │  ├─ asynchronous
│     │     │  │  ├─ aggregation.py
│     │     │  │  ├─ auth.py
│     │     │  │  ├─ auth_aws.py
│     │     │  │  ├─ auth_oidc.py
│     │     │  │  ├─ bulk.py
│     │     │  │  ├─ change_stream.py
│     │     │  │  ├─ client_bulk.py
│     │     │  │  ├─ client_session.py
│     │     │  │  ├─ collection.py
│     │     │  │  ├─ command_cursor.py
│     │     │  │  ├─ cursor.py
│     │     │  │  ├─ database.py
│     │     │  │  ├─ encryption.py
│     │     │  │  ├─ helpers.py
│     │     │  │  ├─ mongo_client.py
│     │     │  │  ├─ monitor.py
│     │     │  │  ├─ network.py
│     │     │  │  ├─ pool.py
│     │     │  │  ├─ server.py
│     │     │  │  ├─ settings.py
│     │     │  │  ├─ srv_resolver.py
│     │     │  │  ├─ topology.py
│     │     │  │  ├─ uri_parser.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ aggregation.cpython-313.pyc
│     │     │  │     ├─ auth.cpython-313.pyc
│     │     │  │     ├─ auth_aws.cpython-313.pyc
│     │     │  │     ├─ auth_oidc.cpython-313.pyc
│     │     │  │     ├─ bulk.cpython-313.pyc
│     │     │  │     ├─ change_stream.cpython-313.pyc
│     │     │  │     ├─ client_bulk.cpython-313.pyc
│     │     │  │     ├─ client_session.cpython-313.pyc
│     │     │  │     ├─ collection.cpython-313.pyc
│     │     │  │     ├─ command_cursor.cpython-313.pyc
│     │     │  │     ├─ cursor.cpython-313.pyc
│     │     │  │     ├─ database.cpython-313.pyc
│     │     │  │     ├─ encryption.cpython-313.pyc
│     │     │  │     ├─ helpers.cpython-313.pyc
│     │     │  │     ├─ mongo_client.cpython-313.pyc
│     │     │  │     ├─ monitor.cpython-313.pyc
│     │     │  │     ├─ network.cpython-313.pyc
│     │     │  │     ├─ pool.cpython-313.pyc
│     │     │  │     ├─ server.cpython-313.pyc
│     │     │  │     ├─ settings.cpython-313.pyc
│     │     │  │     ├─ srv_resolver.cpython-313.pyc
│     │     │  │     ├─ topology.cpython-313.pyc
│     │     │  │     ├─ uri_parser.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ auth.py
│     │     │  ├─ auth_oidc.py
│     │     │  ├─ auth_oidc_shared.py
│     │     │  ├─ auth_shared.py
│     │     │  ├─ bulk_shared.py
│     │     │  ├─ change_stream.py
│     │     │  ├─ client_options.py
│     │     │  ├─ client_session.py
│     │     │  ├─ collation.py
│     │     │  ├─ collection.py
│     │     │  ├─ command_cursor.py
│     │     │  ├─ common.py
│     │     │  ├─ compression_support.py
│     │     │  ├─ cursor.py
│     │     │  ├─ cursor_shared.py
│     │     │  ├─ daemon.py
│     │     │  ├─ database.py
│     │     │  ├─ database_shared.py
│     │     │  ├─ driver_info.py
│     │     │  ├─ encryption.py
│     │     │  ├─ encryption_options.py
│     │     │  ├─ errors.py
│     │     │  ├─ event_loggers.py
│     │     │  ├─ hello.py
│     │     │  ├─ helpers_shared.py
│     │     │  ├─ lock.py
│     │     │  ├─ logger.py
│     │     │  ├─ max_staleness_selectors.py
│     │     │  ├─ message.py
│     │     │  ├─ mongo_client.py
│     │     │  ├─ monitoring.py
│     │     │  ├─ network_layer.py
│     │     │  ├─ ocsp_cache.py
│     │     │  ├─ ocsp_support.py
│     │     │  ├─ operations.py
│     │     │  ├─ periodic_executor.py
│     │     │  ├─ pool.py
│     │     │  ├─ pool_options.py
│     │     │  ├─ pool_shared.py
│     │     │  ├─ py.typed
│     │     │  ├─ pyopenssl_context.py
│     │     │  ├─ read_concern.py
│     │     │  ├─ read_preferences.py
│     │     │  ├─ response.py
│     │     │  ├─ results.py
│     │     │  ├─ saslprep.py
│     │     │  ├─ server_api.py
│     │     │  ├─ server_description.py
│     │     │  ├─ server_selectors.py
│     │     │  ├─ server_type.py
│     │     │  ├─ socket_checker.py
│     │     │  ├─ ssl_context.py
│     │     │  ├─ ssl_support.py
│     │     │  ├─ synchronous
│     │     │  │  ├─ aggregation.py
│     │     │  │  ├─ auth.py
│     │     │  │  ├─ auth_aws.py
│     │     │  │  ├─ auth_oidc.py
│     │     │  │  ├─ bulk.py
│     │     │  │  ├─ change_stream.py
│     │     │  │  ├─ client_bulk.py
│     │     │  │  ├─ client_session.py
│     │     │  │  ├─ collection.py
│     │     │  │  ├─ command_cursor.py
│     │     │  │  ├─ cursor.py
│     │     │  │  ├─ database.py
│     │     │  │  ├─ encryption.py
│     │     │  │  ├─ helpers.py
│     │     │  │  ├─ mongo_client.py
│     │     │  │  ├─ monitor.py
│     │     │  │  ├─ network.py
│     │     │  │  ├─ pool.py
│     │     │  │  ├─ server.py
│     │     │  │  ├─ settings.py
│     │     │  │  ├─ srv_resolver.py
│     │     │  │  ├─ topology.py
│     │     │  │  ├─ uri_parser.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ aggregation.cpython-313.pyc
│     │     │  │     ├─ auth.cpython-313.pyc
│     │     │  │     ├─ auth_aws.cpython-313.pyc
│     │     │  │     ├─ auth_oidc.cpython-313.pyc
│     │     │  │     ├─ bulk.cpython-313.pyc
│     │     │  │     ├─ change_stream.cpython-313.pyc
│     │     │  │     ├─ client_bulk.cpython-313.pyc
│     │     │  │     ├─ client_session.cpython-313.pyc
│     │     │  │     ├─ collection.cpython-313.pyc
│     │     │  │     ├─ command_cursor.cpython-313.pyc
│     │     │  │     ├─ cursor.cpython-313.pyc
│     │     │  │     ├─ database.cpython-313.pyc
│     │     │  │     ├─ encryption.cpython-313.pyc
│     │     │  │     ├─ helpers.cpython-313.pyc
│     │     │  │     ├─ mongo_client.cpython-313.pyc
│     │     │  │     ├─ monitor.cpython-313.pyc
│     │     │  │     ├─ network.cpython-313.pyc
│     │     │  │     ├─ pool.cpython-313.pyc
│     │     │  │     ├─ server.cpython-313.pyc
│     │     │  │     ├─ settings.cpython-313.pyc
│     │     │  │     ├─ srv_resolver.cpython-313.pyc
│     │     │  │     ├─ topology.cpython-313.pyc
│     │     │  │     ├─ uri_parser.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ topology_description.py
│     │     │  ├─ typings.py
│     │     │  ├─ uri_parser.py
│     │     │  ├─ uri_parser_shared.py
│     │     │  ├─ write_concern.py
│     │     │  ├─ _asyncio_lock.py
│     │     │  ├─ _asyncio_task.py
│     │     │  ├─ _azure_helpers.py
│     │     │  ├─ _client_bulk_shared.py
│     │     │  ├─ _cmessage.cp310-win_amd64.pyd
│     │     │  ├─ _cmessage.cp311-win_amd64.pyd
│     │     │  ├─ _cmessage.cp312-win_amd64.pyd
│     │     │  ├─ _cmessage.cp313-win_amd64.pyd
│     │     │  ├─ _cmessage.cp39-win_amd64.pyd
│     │     │  ├─ _cmessagemodule.c
│     │     │  ├─ _csot.py
│     │     │  ├─ _gcp_helpers.py
│     │     │  ├─ _version.py
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     ├─ auth.cpython-313.pyc
│     │     │     ├─ auth_oidc.cpython-313.pyc
│     │     │     ├─ auth_oidc_shared.cpython-313.pyc
│     │     │     ├─ auth_shared.cpython-313.pyc
│     │     │     ├─ bulk_shared.cpython-313.pyc
│     │     │     ├─ change_stream.cpython-313.pyc
│     │     │     ├─ client_options.cpython-313.pyc
│     │     │     ├─ client_session.cpython-313.pyc
│     │     │     ├─ collation.cpython-313.pyc
│     │     │     ├─ collection.cpython-313.pyc
│     │     │     ├─ command_cursor.cpython-313.pyc
│     │     │     ├─ common.cpython-313.pyc
│     │     │     ├─ compression_support.cpython-313.pyc
│     │     │     ├─ cursor.cpython-313.pyc
│     │     │     ├─ cursor_shared.cpython-313.pyc
│     │     │     ├─ daemon.cpython-313.pyc
│     │     │     ├─ database.cpython-313.pyc
│     │     │     ├─ database_shared.cpython-313.pyc
│     │     │     ├─ driver_info.cpython-313.pyc
│     │     │     ├─ encryption.cpython-313.pyc
│     │     │     ├─ encryption_options.cpython-313.pyc
│     │     │     ├─ errors.cpython-313.pyc
│     │     │     ├─ event_loggers.cpython-313.pyc
│     │     │     ├─ hello.cpython-313.pyc
│     │     │     ├─ helpers_shared.cpython-313.pyc
│     │     │     ├─ lock.cpython-313.pyc
│     │     │     ├─ logger.cpython-313.pyc
│     │     │     ├─ max_staleness_selectors.cpython-313.pyc
│     │     │     ├─ message.cpython-313.pyc
│     │     │     ├─ mongo_client.cpython-313.pyc
│     │     │     ├─ monitoring.cpython-313.pyc
│     │     │     ├─ network_layer.cpython-313.pyc
│     │     │     ├─ ocsp_cache.cpython-313.pyc
│     │     │     ├─ ocsp_support.cpython-313.pyc
│     │     │     ├─ operations.cpython-313.pyc
│     │     │     ├─ periodic_executor.cpython-313.pyc
│     │     │     ├─ pool.cpython-313.pyc
│     │     │     ├─ pool_options.cpython-313.pyc
│     │     │     ├─ pool_shared.cpython-313.pyc
│     │     │     ├─ pyopenssl_context.cpython-313.pyc
│     │     │     ├─ read_concern.cpython-313.pyc
│     │     │     ├─ read_preferences.cpython-313.pyc
│     │     │     ├─ response.cpython-313.pyc
│     │     │     ├─ results.cpython-313.pyc
│     │     │     ├─ saslprep.cpython-313.pyc
│     │     │     ├─ server_api.cpython-313.pyc
│     │     │     ├─ server_description.cpython-313.pyc
│     │     │     ├─ server_selectors.cpython-313.pyc
│     │     │     ├─ server_type.cpython-313.pyc
│     │     │     ├─ socket_checker.cpython-313.pyc
│     │     │     ├─ ssl_context.cpython-313.pyc
│     │     │     ├─ ssl_support.cpython-313.pyc
│     │     │     ├─ topology_description.cpython-313.pyc
│     │     │     ├─ typings.cpython-313.pyc
│     │     │     ├─ uri_parser.cpython-313.pyc
│     │     │     ├─ uri_parser_shared.cpython-313.pyc
│     │     │     ├─ write_concern.cpython-313.pyc
│     │     │     ├─ _asyncio_lock.cpython-313.pyc
│     │     │     ├─ _asyncio_task.cpython-313.pyc
│     │     │     ├─ _azure_helpers.cpython-313.pyc
│     │     │     ├─ _client_bulk_shared.cpython-313.pyc
│     │     │     ├─ _csot.cpython-313.pyc
│     │     │     ├─ _gcp_helpers.cpython-313.pyc
│     │     │     ├─ _version.cpython-313.pyc
│     │     │     └─ __init__.cpython-313.pyc
│     │     ├─ python_multipart
│     │     │  ├─ decoders.py
│     │     │  ├─ exceptions.py
│     │     │  ├─ multipart.py
│     │     │  ├─ py.typed
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     ├─ decoders.cpython-313.pyc
│     │     │     ├─ exceptions.cpython-313.pyc
│     │     │     ├─ multipart.cpython-313.pyc
│     │     │     └─ __init__.cpython-313.pyc
│     │     ├─ requests
│     │     │  ├─ adapters.py
│     │     │  ├─ api.py
│     │     │  ├─ auth.py
│     │     │  ├─ certs.py
│     │     │  ├─ compat.py
│     │     │  ├─ cookies.py
│     │     │  ├─ exceptions.py
│     │     │  ├─ help.py
│     │     │  ├─ hooks.py
│     │     │  ├─ models.py
│     │     │  ├─ packages.py
│     │     │  ├─ sessions.py
│     │     │  ├─ status_codes.py
│     │     │  ├─ structures.py
│     │     │  ├─ utils.py
│     │     │  ├─ _internal_utils.py
│     │     │  ├─ __init__.py
│     │     │  ├─ __pycache__
│     │     │  │  ├─ adapters.cpython-313.pyc
│     │     │  │  ├─ api.cpython-313.pyc
│     │     │  │  ├─ auth.cpython-313.pyc
│     │     │  │  ├─ certs.cpython-313.pyc
│     │     │  │  ├─ compat.cpython-313.pyc
│     │     │  │  ├─ cookies.cpython-313.pyc
│     │     │  │  ├─ exceptions.cpython-313.pyc
│     │     │  │  ├─ help.cpython-313.pyc
│     │     │  │  ├─ hooks.cpython-313.pyc
│     │     │  │  ├─ models.cpython-313.pyc
│     │     │  │  ├─ packages.cpython-313.pyc
│     │     │  │  ├─ sessions.cpython-313.pyc
│     │     │  │  ├─ status_codes.cpython-313.pyc
│     │     │  │  ├─ structures.cpython-313.pyc
│     │     │  │  ├─ utils.cpython-313.pyc
│     │     │  │  ├─ _internal_utils.cpython-313.pyc
│     │     │  │  ├─ __init__.cpython-313.pyc
│     │     │  │  └─ __version__.cpython-313.pyc
│     │     │  └─ __version__.py
│     │     ├─ rsa
│     │     │  ├─ asn1.py
│     │     │  ├─ cli.py
│     │     │  ├─ common.py
│     │     │  ├─ core.py
│     │     │  ├─ key.py
│     │     │  ├─ parallel.py
│     │     │  ├─ pem.py
│     │     │  ├─ pkcs1.py
│     │     │  ├─ pkcs1_v2.py
│     │     │  ├─ prime.py
│     │     │  ├─ py.typed
│     │     │  ├─ randnum.py
│     │     │  ├─ transform.py
│     │     │  ├─ util.py
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     ├─ asn1.cpython-313.pyc
│     │     │     ├─ cli.cpython-313.pyc
│     │     │     ├─ common.cpython-313.pyc
│     │     │     ├─ core.cpython-313.pyc
│     │     │     ├─ key.cpython-313.pyc
│     │     │     ├─ parallel.cpython-313.pyc
│     │     │     ├─ pem.cpython-313.pyc
│     │     │     ├─ pkcs1.cpython-313.pyc
│     │     │     ├─ pkcs1_v2.cpython-313.pyc
│     │     │     ├─ prime.cpython-313.pyc
│     │     │     ├─ randnum.cpython-313.pyc
│     │     │     ├─ transform.cpython-313.pyc
│     │     │     ├─ util.cpython-313.pyc
│     │     │     └─ __init__.cpython-313.pyc
│     │     ├─ scipy
│     │     │  ├─ cluster
│     │     │  │  ├─ hierarchy.py
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ hierarchy_test_data.py
│     │     │  │  │  ├─ test_disjoint_set.py
│     │     │  │  │  ├─ test_hierarchy.py
│     │     │  │  │  ├─ test_vq.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ hierarchy_test_data.cpython-313.pyc
│     │     │  │  │     ├─ test_disjoint_set.cpython-313.pyc
│     │     │  │  │     ├─ test_hierarchy.cpython-313.pyc
│     │     │  │  │     ├─ test_vq.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ vq.py
│     │     │  │  ├─ _hierarchy.cp313-win_amd64.dll.a
│     │     │  │  ├─ _hierarchy.cp313-win_amd64.pyd
│     │     │  │  ├─ _optimal_leaf_ordering.cp313-win_amd64.dll.a
│     │     │  │  ├─ _optimal_leaf_ordering.cp313-win_amd64.pyd
│     │     │  │  ├─ _vq.cp313-win_amd64.dll.a
│     │     │  │  ├─ _vq.cp313-win_amd64.pyd
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ hierarchy.cpython-313.pyc
│     │     │  │     ├─ vq.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ conftest.py
│     │     │  ├─ constants
│     │     │  │  ├─ codata.py
│     │     │  │  ├─ constants.py
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ test_codata.py
│     │     │  │  │  ├─ test_constants.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ test_codata.cpython-313.pyc
│     │     │  │  │     ├─ test_constants.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _codata.py
│     │     │  │  ├─ _constants.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ codata.cpython-313.pyc
│     │     │  │     ├─ constants.cpython-313.pyc
│     │     │  │     ├─ _codata.cpython-313.pyc
│     │     │  │     ├─ _constants.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ datasets
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ test_data.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ test_data.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _download_all.py
│     │     │  │  ├─ _fetchers.py
│     │     │  │  ├─ _registry.py
│     │     │  │  ├─ _utils.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ _download_all.cpython-313.pyc
│     │     │  │     ├─ _fetchers.cpython-313.pyc
│     │     │  │     ├─ _registry.cpython-313.pyc
│     │     │  │     ├─ _utils.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ differentiate
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ test_differentiate.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ test_differentiate.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _differentiate.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ _differentiate.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ fft
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ mock_backend.py
│     │     │  │  │  ├─ test_backend.py
│     │     │  │  │  ├─ test_basic.py
│     │     │  │  │  ├─ test_fftlog.py
│     │     │  │  │  ├─ test_helper.py
│     │     │  │  │  ├─ test_multithreading.py
│     │     │  │  │  ├─ test_real_transforms.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ mock_backend.cpython-313.pyc
│     │     │  │  │     ├─ test_backend.cpython-313.pyc
│     │     │  │  │     ├─ test_basic.cpython-313.pyc
│     │     │  │  │     ├─ test_fftlog.cpython-313.pyc
│     │     │  │  │     ├─ test_helper.cpython-313.pyc
│     │     │  │  │     ├─ test_multithreading.cpython-313.pyc
│     │     │  │  │     ├─ test_real_transforms.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _backend.py
│     │     │  │  ├─ _basic.py
│     │     │  │  ├─ _basic_backend.py
│     │     │  │  ├─ _debug_backends.py
│     │     │  │  ├─ _fftlog.py
│     │     │  │  ├─ _fftlog_backend.py
│     │     │  │  ├─ _helper.py
│     │     │  │  ├─ _pocketfft
│     │     │  │  │  ├─ basic.py
│     │     │  │  │  ├─ helper.py
│     │     │  │  │  ├─ LICENSE.md
│     │     │  │  │  ├─ pypocketfft.cp313-win_amd64.dll.a
│     │     │  │  │  ├─ pypocketfft.cp313-win_amd64.pyd
│     │     │  │  │  ├─ realtransforms.py
│     │     │  │  │  ├─ tests
│     │     │  │  │  │  ├─ test_basic.py
│     │     │  │  │  │  ├─ test_real_transforms.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ test_basic.cpython-313.pyc
│     │     │  │  │  │     ├─ test_real_transforms.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ basic.cpython-313.pyc
│     │     │  │  │     ├─ helper.cpython-313.pyc
│     │     │  │  │     ├─ realtransforms.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _realtransforms.py
│     │     │  │  ├─ _realtransforms_backend.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ _backend.cpython-313.pyc
│     │     │  │     ├─ _basic.cpython-313.pyc
│     │     │  │     ├─ _basic_backend.cpython-313.pyc
│     │     │  │     ├─ _debug_backends.cpython-313.pyc
│     │     │  │     ├─ _fftlog.cpython-313.pyc
│     │     │  │     ├─ _fftlog_backend.cpython-313.pyc
│     │     │  │     ├─ _helper.cpython-313.pyc
│     │     │  │     ├─ _realtransforms.cpython-313.pyc
│     │     │  │     ├─ _realtransforms_backend.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ fftpack
│     │     │  │  ├─ basic.py
│     │     │  │  ├─ convolve.cp313-win_amd64.dll.a
│     │     │  │  ├─ convolve.cp313-win_amd64.pyd
│     │     │  │  ├─ helper.py
│     │     │  │  ├─ pseudo_diffs.py
│     │     │  │  ├─ realtransforms.py
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ fftw_double_ref.npz
│     │     │  │  │  ├─ fftw_longdouble_ref.npz
│     │     │  │  │  ├─ fftw_single_ref.npz
│     │     │  │  │  ├─ test.npz
│     │     │  │  │  ├─ test_basic.py
│     │     │  │  │  ├─ test_helper.py
│     │     │  │  │  ├─ test_import.py
│     │     │  │  │  ├─ test_pseudo_diffs.py
│     │     │  │  │  ├─ test_real_transforms.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ test_basic.cpython-313.pyc
│     │     │  │  │     ├─ test_helper.cpython-313.pyc
│     │     │  │  │     ├─ test_import.cpython-313.pyc
│     │     │  │  │     ├─ test_pseudo_diffs.cpython-313.pyc
│     │     │  │  │     ├─ test_real_transforms.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _basic.py
│     │     │  │  ├─ _helper.py
│     │     │  │  ├─ _pseudo_diffs.py
│     │     │  │  ├─ _realtransforms.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ basic.cpython-313.pyc
│     │     │  │     ├─ helper.cpython-313.pyc
│     │     │  │     ├─ pseudo_diffs.cpython-313.pyc
│     │     │  │     ├─ realtransforms.cpython-313.pyc
│     │     │  │     ├─ _basic.cpython-313.pyc
│     │     │  │     ├─ _helper.cpython-313.pyc
│     │     │  │     ├─ _pseudo_diffs.cpython-313.pyc
│     │     │  │     ├─ _realtransforms.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ integrate
│     │     │  │  ├─ dop.py
│     │     │  │  ├─ lsoda.py
│     │     │  │  ├─ odepack.py
│     │     │  │  ├─ quadpack.py
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ test_banded_ode_solvers.py
│     │     │  │  │  ├─ test_bvp.py
│     │     │  │  │  ├─ test_cubature.py
│     │     │  │  │  ├─ test_integrate.py
│     │     │  │  │  ├─ test_odeint_jac.py
│     │     │  │  │  ├─ test_quadpack.py
│     │     │  │  │  ├─ test_quadrature.py
│     │     │  │  │  ├─ test_tanhsinh.py
│     │     │  │  │  ├─ test__quad_vec.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ test_banded_ode_solvers.cpython-313.pyc
│     │     │  │  │     ├─ test_bvp.cpython-313.pyc
│     │     │  │  │     ├─ test_cubature.cpython-313.pyc
│     │     │  │  │     ├─ test_integrate.cpython-313.pyc
│     │     │  │  │     ├─ test_odeint_jac.cpython-313.pyc
│     │     │  │  │     ├─ test_quadpack.cpython-313.pyc
│     │     │  │  │     ├─ test_quadrature.cpython-313.pyc
│     │     │  │  │     ├─ test_tanhsinh.cpython-313.pyc
│     │     │  │  │     ├─ test__quad_vec.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ vode.py
│     │     │  │  ├─ _bvp.py
│     │     │  │  ├─ _cubature.py
│     │     │  │  ├─ _dop.cp313-win_amd64.dll.a
│     │     │  │  ├─ _dop.cp313-win_amd64.pyd
│     │     │  │  ├─ _ivp
│     │     │  │  │  ├─ base.py
│     │     │  │  │  ├─ bdf.py
│     │     │  │  │  ├─ common.py
│     │     │  │  │  ├─ dop853_coefficients.py
│     │     │  │  │  ├─ ivp.py
│     │     │  │  │  ├─ lsoda.py
│     │     │  │  │  ├─ radau.py
│     │     │  │  │  ├─ rk.py
│     │     │  │  │  ├─ tests
│     │     │  │  │  │  ├─ test_ivp.py
│     │     │  │  │  │  ├─ test_rk.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ test_ivp.cpython-313.pyc
│     │     │  │  │  │     ├─ test_rk.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ base.cpython-313.pyc
│     │     │  │  │     ├─ bdf.cpython-313.pyc
│     │     │  │  │     ├─ common.cpython-313.pyc
│     │     │  │  │     ├─ dop853_coefficients.cpython-313.pyc
│     │     │  │  │     ├─ ivp.cpython-313.pyc
│     │     │  │  │     ├─ lsoda.cpython-313.pyc
│     │     │  │  │     ├─ radau.cpython-313.pyc
│     │     │  │  │     ├─ rk.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _lebedev.py
│     │     │  │  ├─ _lsoda.cp313-win_amd64.dll.a
│     │     │  │  ├─ _lsoda.cp313-win_amd64.pyd
│     │     │  │  ├─ _ode.py
│     │     │  │  ├─ _odepack.cp313-win_amd64.dll.a
│     │     │  │  ├─ _odepack.cp313-win_amd64.pyd
│     │     │  │  ├─ _odepack_py.py
│     │     │  │  ├─ _quadpack.cp313-win_amd64.dll.a
│     │     │  │  ├─ _quadpack.cp313-win_amd64.pyd
│     │     │  │  ├─ _quadpack_py.py
│     │     │  │  ├─ _quadrature.py
│     │     │  │  ├─ _quad_vec.py
│     │     │  │  ├─ _rules
│     │     │  │  │  ├─ _base.py
│     │     │  │  │  ├─ _gauss_kronrod.py
│     │     │  │  │  ├─ _gauss_legendre.py
│     │     │  │  │  ├─ _genz_malik.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ _base.cpython-313.pyc
│     │     │  │  │     ├─ _gauss_kronrod.cpython-313.pyc
│     │     │  │  │     ├─ _gauss_legendre.cpython-313.pyc
│     │     │  │  │     ├─ _genz_malik.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _tanhsinh.py
│     │     │  │  ├─ _test_multivariate.cp313-win_amd64.dll.a
│     │     │  │  ├─ _test_multivariate.cp313-win_amd64.pyd
│     │     │  │  ├─ _test_odeint_banded.cp313-win_amd64.dll.a
│     │     │  │  ├─ _test_odeint_banded.cp313-win_amd64.pyd
│     │     │  │  ├─ _vode.cp313-win_amd64.dll.a
│     │     │  │  ├─ _vode.cp313-win_amd64.pyd
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ dop.cpython-313.pyc
│     │     │  │     ├─ lsoda.cpython-313.pyc
│     │     │  │     ├─ odepack.cpython-313.pyc
│     │     │  │     ├─ quadpack.cpython-313.pyc
│     │     │  │     ├─ vode.cpython-313.pyc
│     │     │  │     ├─ _bvp.cpython-313.pyc
│     │     │  │     ├─ _cubature.cpython-313.pyc
│     │     │  │     ├─ _lebedev.cpython-313.pyc
│     │     │  │     ├─ _ode.cpython-313.pyc
│     │     │  │     ├─ _odepack_py.cpython-313.pyc
│     │     │  │     ├─ _quadpack_py.cpython-313.pyc
│     │     │  │     ├─ _quadrature.cpython-313.pyc
│     │     │  │     ├─ _quad_vec.cpython-313.pyc
│     │     │  │     ├─ _tanhsinh.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ interpolate
│     │     │  │  ├─ dfitpack.py
│     │     │  │  ├─ fitpack.py
│     │     │  │  ├─ fitpack2.py
│     │     │  │  ├─ interpnd.py
│     │     │  │  ├─ interpolate.py
│     │     │  │  ├─ ndgriddata.py
│     │     │  │  ├─ polyint.py
│     │     │  │  ├─ rbf.py
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ data
│     │     │  │  │  │  ├─ bug-1310.npz
│     │     │  │  │  │  ├─ estimate_gradients_hang.npy
│     │     │  │  │  │  └─ gcvspl.npz
│     │     │  │  │  ├─ test_bary_rational.py
│     │     │  │  │  ├─ test_bsplines.py
│     │     │  │  │  ├─ test_fitpack.py
│     │     │  │  │  ├─ test_fitpack2.py
│     │     │  │  │  ├─ test_gil.py
│     │     │  │  │  ├─ test_interpnd.py
│     │     │  │  │  ├─ test_interpolate.py
│     │     │  │  │  ├─ test_ndgriddata.py
│     │     │  │  │  ├─ test_pade.py
│     │     │  │  │  ├─ test_polyint.py
│     │     │  │  │  ├─ test_rbf.py
│     │     │  │  │  ├─ test_rbfinterp.py
│     │     │  │  │  ├─ test_rgi.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ test_bary_rational.cpython-313.pyc
│     │     │  │  │     ├─ test_bsplines.cpython-313.pyc
│     │     │  │  │     ├─ test_fitpack.cpython-313.pyc
│     │     │  │  │     ├─ test_fitpack2.cpython-313.pyc
│     │     │  │  │     ├─ test_gil.cpython-313.pyc
│     │     │  │  │     ├─ test_interpnd.cpython-313.pyc
│     │     │  │  │     ├─ test_interpolate.cpython-313.pyc
│     │     │  │  │     ├─ test_ndgriddata.cpython-313.pyc
│     │     │  │  │     ├─ test_pade.cpython-313.pyc
│     │     │  │  │     ├─ test_polyint.cpython-313.pyc
│     │     │  │  │     ├─ test_rbf.cpython-313.pyc
│     │     │  │  │     ├─ test_rbfinterp.cpython-313.pyc
│     │     │  │  │     ├─ test_rgi.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _bary_rational.py
│     │     │  │  ├─ _bsplines.py
│     │     │  │  ├─ _cubic.py
│     │     │  │  ├─ _dfitpack.cp313-win_amd64.dll.a
│     │     │  │  ├─ _dfitpack.cp313-win_amd64.pyd
│     │     │  │  ├─ _dierckx.cp313-win_amd64.dll.a
│     │     │  │  ├─ _dierckx.cp313-win_amd64.pyd
│     │     │  │  ├─ _fitpack.cp313-win_amd64.dll.a
│     │     │  │  ├─ _fitpack.cp313-win_amd64.pyd
│     │     │  │  ├─ _fitpack2.py
│     │     │  │  ├─ _fitpack_impl.py
│     │     │  │  ├─ _fitpack_py.py
│     │     │  │  ├─ _fitpack_repro.py
│     │     │  │  ├─ _interpnd.cp313-win_amd64.dll.a
│     │     │  │  ├─ _interpnd.cp313-win_amd64.pyd
│     │     │  │  ├─ _interpolate.py
│     │     │  │  ├─ _ndbspline.py
│     │     │  │  ├─ _ndgriddata.py
│     │     │  │  ├─ _pade.py
│     │     │  │  ├─ _polyint.py
│     │     │  │  ├─ _ppoly.cp313-win_amd64.dll.a
│     │     │  │  ├─ _ppoly.cp313-win_amd64.pyd
│     │     │  │  ├─ _rbf.py
│     │     │  │  ├─ _rbfinterp.py
│     │     │  │  ├─ _rbfinterp_pythran.cp313-win_amd64.dll.a
│     │     │  │  ├─ _rbfinterp_pythran.cp313-win_amd64.pyd
│     │     │  │  ├─ _rgi.py
│     │     │  │  ├─ _rgi_cython.cp313-win_amd64.dll.a
│     │     │  │  ├─ _rgi_cython.cp313-win_amd64.pyd
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ dfitpack.cpython-313.pyc
│     │     │  │     ├─ fitpack.cpython-313.pyc
│     │     │  │     ├─ fitpack2.cpython-313.pyc
│     │     │  │     ├─ interpnd.cpython-313.pyc
│     │     │  │     ├─ interpolate.cpython-313.pyc
│     │     │  │     ├─ ndgriddata.cpython-313.pyc
│     │     │  │     ├─ polyint.cpython-313.pyc
│     │     │  │     ├─ rbf.cpython-313.pyc
│     │     │  │     ├─ _bary_rational.cpython-313.pyc
│     │     │  │     ├─ _bsplines.cpython-313.pyc
│     │     │  │     ├─ _cubic.cpython-313.pyc
│     │     │  │     ├─ _fitpack2.cpython-313.pyc
│     │     │  │     ├─ _fitpack_impl.cpython-313.pyc
│     │     │  │     ├─ _fitpack_py.cpython-313.pyc
│     │     │  │     ├─ _fitpack_repro.cpython-313.pyc
│     │     │  │     ├─ _interpolate.cpython-313.pyc
│     │     │  │     ├─ _ndbspline.cpython-313.pyc
│     │     │  │     ├─ _ndgriddata.cpython-313.pyc
│     │     │  │     ├─ _pade.cpython-313.pyc
│     │     │  │     ├─ _polyint.cpython-313.pyc
│     │     │  │     ├─ _rbf.cpython-313.pyc
│     │     │  │     ├─ _rbfinterp.cpython-313.pyc
│     │     │  │     ├─ _rgi.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ io
│     │     │  │  ├─ arff
│     │     │  │  │  ├─ arffread.py
│     │     │  │  │  ├─ tests
│     │     │  │  │  │  ├─ data
│     │     │  │  │  │  │  ├─ iris.arff
│     │     │  │  │  │  │  ├─ missing.arff
│     │     │  │  │  │  │  ├─ nodata.arff
│     │     │  │  │  │  │  ├─ quoted_nominal.arff
│     │     │  │  │  │  │  ├─ quoted_nominal_spaces.arff
│     │     │  │  │  │  │  ├─ test1.arff
│     │     │  │  │  │  │  ├─ test10.arff
│     │     │  │  │  │  │  ├─ test11.arff
│     │     │  │  │  │  │  ├─ test2.arff
│     │     │  │  │  │  │  ├─ test3.arff
│     │     │  │  │  │  │  ├─ test4.arff
│     │     │  │  │  │  │  ├─ test5.arff
│     │     │  │  │  │  │  ├─ test6.arff
│     │     │  │  │  │  │  ├─ test7.arff
│     │     │  │  │  │  │  ├─ test8.arff
│     │     │  │  │  │  │  └─ test9.arff
│     │     │  │  │  │  ├─ test_arffread.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ test_arffread.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ _arffread.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ arffread.cpython-313.pyc
│     │     │  │  │     ├─ _arffread.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ harwell_boeing.py
│     │     │  │  ├─ idl.py
│     │     │  │  ├─ matlab
│     │     │  │  │  ├─ byteordercodes.py
│     │     │  │  │  ├─ mio.py
│     │     │  │  │  ├─ mio4.py
│     │     │  │  │  ├─ mio5.py
│     │     │  │  │  ├─ mio5_params.py
│     │     │  │  │  ├─ mio5_utils.py
│     │     │  │  │  ├─ miobase.py
│     │     │  │  │  ├─ mio_utils.py
│     │     │  │  │  ├─ streams.py
│     │     │  │  │  ├─ tests
│     │     │  │  │  │  ├─ data
│     │     │  │  │  │  │  ├─ bad_miuint32.mat
│     │     │  │  │  │  │  ├─ bad_miutf8_array_name.mat
│     │     │  │  │  │  │  ├─ big_endian.mat
│     │     │  │  │  │  │  ├─ broken_utf8.mat
│     │     │  │  │  │  │  ├─ corrupted_zlib_checksum.mat
│     │     │  │  │  │  │  ├─ corrupted_zlib_data.mat
│     │     │  │  │  │  │  ├─ debigged_m4.mat
│     │     │  │  │  │  │  ├─ japanese_utf8.txt
│     │     │  │  │  │  │  ├─ little_endian.mat
│     │     │  │  │  │  │  ├─ logical_sparse.mat
│     │     │  │  │  │  │  ├─ malformed1.mat
│     │     │  │  │  │  │  ├─ miuint32_for_miint32.mat
│     │     │  │  │  │  │  ├─ miutf8_array_name.mat
│     │     │  │  │  │  │  ├─ nasty_duplicate_fieldnames.mat
│     │     │  │  │  │  │  ├─ one_by_zero_char.mat
│     │     │  │  │  │  │  ├─ parabola.mat
│     │     │  │  │  │  │  ├─ single_empty_string.mat
│     │     │  │  │  │  │  ├─ some_functions.mat
│     │     │  │  │  │  │  ├─ sqr.mat
│     │     │  │  │  │  │  ├─ test3dmatrix_6.1_SOL2.mat
│     │     │  │  │  │  │  ├─ test3dmatrix_6.5.1_GLNX86.mat
│     │     │  │  │  │  │  ├─ test3dmatrix_7.1_GLNX86.mat
│     │     │  │  │  │  │  ├─ test3dmatrix_7.4_GLNX86.mat
│     │     │  │  │  │  │  ├─ testbool_8_WIN64.mat
│     │     │  │  │  │  │  ├─ testcellnest_6.1_SOL2.mat
│     │     │  │  │  │  │  ├─ testcellnest_6.5.1_GLNX86.mat
│     │     │  │  │  │  │  ├─ testcellnest_7.1_GLNX86.mat
│     │     │  │  │  │  │  ├─ testcellnest_7.4_GLNX86.mat
│     │     │  │  │  │  │  ├─ testcell_6.1_SOL2.mat
│     │     │  │  │  │  │  ├─ testcell_6.5.1_GLNX86.mat
│     │     │  │  │  │  │  ├─ testcell_7.1_GLNX86.mat
│     │     │  │  │  │  │  ├─ testcell_7.4_GLNX86.mat
│     │     │  │  │  │  │  ├─ testcomplex_4.2c_SOL2.mat
│     │     │  │  │  │  │  ├─ testcomplex_6.1_SOL2.mat
│     │     │  │  │  │  │  ├─ testcomplex_6.5.1_GLNX86.mat
│     │     │  │  │  │  │  ├─ testcomplex_7.1_GLNX86.mat
│     │     │  │  │  │  │  ├─ testcomplex_7.4_GLNX86.mat
│     │     │  │  │  │  │  ├─ testdouble_4.2c_SOL2.mat
│     │     │  │  │  │  │  ├─ testdouble_6.1_SOL2.mat
│     │     │  │  │  │  │  ├─ testdouble_6.5.1_GLNX86.mat
│     │     │  │  │  │  │  ├─ testdouble_7.1_GLNX86.mat
│     │     │  │  │  │  │  ├─ testdouble_7.4_GLNX86.mat
│     │     │  │  │  │  │  ├─ testemptycell_5.3_SOL2.mat
│     │     │  │  │  │  │  ├─ testemptycell_6.5.1_GLNX86.mat
│     │     │  │  │  │  │  ├─ testemptycell_7.1_GLNX86.mat
│     │     │  │  │  │  │  ├─ testemptycell_7.4_GLNX86.mat
│     │     │  │  │  │  │  ├─ testfunc_7.4_GLNX86.mat
│     │     │  │  │  │  │  ├─ testhdf5_7.4_GLNX86.mat
│     │     │  │  │  │  │  ├─ testmatrix_4.2c_SOL2.mat
│     │     │  │  │  │  │  ├─ testmatrix_6.1_SOL2.mat
│     │     │  │  │  │  │  ├─ testmatrix_6.5.1_GLNX86.mat
│     │     │  │  │  │  │  ├─ testmatrix_7.1_GLNX86.mat
│     │     │  │  │  │  │  ├─ testmatrix_7.4_GLNX86.mat
│     │     │  │  │  │  │  ├─ testminus_4.2c_SOL2.mat
│     │     │  │  │  │  │  ├─ testminus_6.1_SOL2.mat
│     │     │  │  │  │  │  ├─ testminus_6.5.1_GLNX86.mat
│     │     │  │  │  │  │  ├─ testminus_7.1_GLNX86.mat
│     │     │  │  │  │  │  ├─ testminus_7.4_GLNX86.mat
│     │     │  │  │  │  │  ├─ testmulti_4.2c_SOL2.mat
│     │     │  │  │  │  │  ├─ testmulti_7.1_GLNX86.mat
│     │     │  │  │  │  │  ├─ testmulti_7.4_GLNX86.mat
│     │     │  │  │  │  │  ├─ testobject_6.1_SOL2.mat
│     │     │  │  │  │  │  ├─ testobject_6.5.1_GLNX86.mat
│     │     │  │  │  │  │  ├─ testobject_7.1_GLNX86.mat
│     │     │  │  │  │  │  ├─ testobject_7.4_GLNX86.mat
│     │     │  │  │  │  │  ├─ testonechar_4.2c_SOL2.mat
│     │     │  │  │  │  │  ├─ testonechar_6.1_SOL2.mat
│     │     │  │  │  │  │  ├─ testonechar_6.5.1_GLNX86.mat
│     │     │  │  │  │  │  ├─ testonechar_7.1_GLNX86.mat
│     │     │  │  │  │  │  ├─ testonechar_7.4_GLNX86.mat
│     │     │  │  │  │  │  ├─ testscalarcell_7.4_GLNX86.mat
│     │     │  │  │  │  │  ├─ testsimplecell.mat
│     │     │  │  │  │  │  ├─ testsparsecomplex_4.2c_SOL2.mat
│     │     │  │  │  │  │  ├─ testsparsecomplex_6.1_SOL2.mat
│     │     │  │  │  │  │  ├─ testsparsecomplex_6.5.1_GLNX86.mat
│     │     │  │  │  │  │  ├─ testsparsecomplex_7.1_GLNX86.mat
│     │     │  │  │  │  │  ├─ testsparsecomplex_7.4_GLNX86.mat
│     │     │  │  │  │  │  ├─ testsparsefloat_7.4_GLNX86.mat
│     │     │  │  │  │  │  ├─ testsparse_4.2c_SOL2.mat
│     │     │  │  │  │  │  ├─ testsparse_6.1_SOL2.mat
│     │     │  │  │  │  │  ├─ testsparse_6.5.1_GLNX86.mat
│     │     │  │  │  │  │  ├─ testsparse_7.1_GLNX86.mat
│     │     │  │  │  │  │  ├─ testsparse_7.4_GLNX86.mat
│     │     │  │  │  │  │  ├─ teststringarray_4.2c_SOL2.mat
│     │     │  │  │  │  │  ├─ teststringarray_6.1_SOL2.mat
│     │     │  │  │  │  │  ├─ teststringarray_6.5.1_GLNX86.mat
│     │     │  │  │  │  │  ├─ teststringarray_7.1_GLNX86.mat
│     │     │  │  │  │  │  ├─ teststringarray_7.4_GLNX86.mat
│     │     │  │  │  │  │  ├─ teststring_4.2c_SOL2.mat
│     │     │  │  │  │  │  ├─ teststring_6.1_SOL2.mat
│     │     │  │  │  │  │  ├─ teststring_6.5.1_GLNX86.mat
│     │     │  │  │  │  │  ├─ teststring_7.1_GLNX86.mat
│     │     │  │  │  │  │  ├─ teststring_7.4_GLNX86.mat
│     │     │  │  │  │  │  ├─ teststructarr_6.1_SOL2.mat
│     │     │  │  │  │  │  ├─ teststructarr_6.5.1_GLNX86.mat
│     │     │  │  │  │  │  ├─ teststructarr_7.1_GLNX86.mat
│     │     │  │  │  │  │  ├─ teststructarr_7.4_GLNX86.mat
│     │     │  │  │  │  │  ├─ teststructnest_6.1_SOL2.mat
│     │     │  │  │  │  │  ├─ teststructnest_6.5.1_GLNX86.mat
│     │     │  │  │  │  │  ├─ teststructnest_7.1_GLNX86.mat
│     │     │  │  │  │  │  ├─ teststructnest_7.4_GLNX86.mat
│     │     │  │  │  │  │  ├─ teststruct_6.1_SOL2.mat
│     │     │  │  │  │  │  ├─ teststruct_6.5.1_GLNX86.mat
│     │     │  │  │  │  │  ├─ teststruct_7.1_GLNX86.mat
│     │     │  │  │  │  │  ├─ teststruct_7.4_GLNX86.mat
│     │     │  │  │  │  │  ├─ testunicode_7.1_GLNX86.mat
│     │     │  │  │  │  │  ├─ testunicode_7.4_GLNX86.mat
│     │     │  │  │  │  │  ├─ testvec_4_GLNX86.mat
│     │     │  │  │  │  │  ├─ test_empty_struct.mat
│     │     │  │  │  │  │  ├─ test_mat4_le_floats.mat
│     │     │  │  │  │  │  └─ test_skip_variable.mat
│     │     │  │  │  │  ├─ test_byteordercodes.py
│     │     │  │  │  │  ├─ test_mio.py
│     │     │  │  │  │  ├─ test_mio5_utils.py
│     │     │  │  │  │  ├─ test_miobase.py
│     │     │  │  │  │  ├─ test_mio_funcs.py
│     │     │  │  │  │  ├─ test_mio_utils.py
│     │     │  │  │  │  ├─ test_pathological.py
│     │     │  │  │  │  ├─ test_streams.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ test_byteordercodes.cpython-313.pyc
│     │     │  │  │  │     ├─ test_mio.cpython-313.pyc
│     │     │  │  │  │     ├─ test_mio5_utils.cpython-313.pyc
│     │     │  │  │  │     ├─ test_miobase.cpython-313.pyc
│     │     │  │  │  │     ├─ test_mio_funcs.cpython-313.pyc
│     │     │  │  │  │     ├─ test_mio_utils.cpython-313.pyc
│     │     │  │  │  │     ├─ test_pathological.cpython-313.pyc
│     │     │  │  │  │     ├─ test_streams.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ _byteordercodes.py
│     │     │  │  │  ├─ _mio.py
│     │     │  │  │  ├─ _mio4.py
│     │     │  │  │  ├─ _mio5.py
│     │     │  │  │  ├─ _mio5_params.py
│     │     │  │  │  ├─ _mio5_utils.cp313-win_amd64.dll.a
│     │     │  │  │  ├─ _mio5_utils.cp313-win_amd64.pyd
│     │     │  │  │  ├─ _miobase.py
│     │     │  │  │  ├─ _mio_utils.cp313-win_amd64.dll.a
│     │     │  │  │  ├─ _mio_utils.cp313-win_amd64.pyd
│     │     │  │  │  ├─ _streams.cp313-win_amd64.dll.a
│     │     │  │  │  ├─ _streams.cp313-win_amd64.pyd
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ byteordercodes.cpython-313.pyc
│     │     │  │  │     ├─ mio.cpython-313.pyc
│     │     │  │  │     ├─ mio4.cpython-313.pyc
│     │     │  │  │     ├─ mio5.cpython-313.pyc
│     │     │  │  │     ├─ mio5_params.cpython-313.pyc
│     │     │  │  │     ├─ mio5_utils.cpython-313.pyc
│     │     │  │  │     ├─ miobase.cpython-313.pyc
│     │     │  │  │     ├─ mio_utils.cpython-313.pyc
│     │     │  │  │     ├─ streams.cpython-313.pyc
│     │     │  │  │     ├─ _byteordercodes.cpython-313.pyc
│     │     │  │  │     ├─ _mio.cpython-313.pyc
│     │     │  │  │     ├─ _mio4.cpython-313.pyc
│     │     │  │  │     ├─ _mio5.cpython-313.pyc
│     │     │  │  │     ├─ _mio5_params.cpython-313.pyc
│     │     │  │  │     ├─ _miobase.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ mmio.py
│     │     │  │  ├─ netcdf.py
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ data
│     │     │  │  │  │  ├─ array_float32_1d.sav
│     │     │  │  │  │  ├─ array_float32_2d.sav
│     │     │  │  │  │  ├─ array_float32_3d.sav
│     │     │  │  │  │  ├─ array_float32_4d.sav
│     │     │  │  │  │  ├─ array_float32_5d.sav
│     │     │  │  │  │  ├─ array_float32_6d.sav
│     │     │  │  │  │  ├─ array_float32_7d.sav
│     │     │  │  │  │  ├─ array_float32_8d.sav
│     │     │  │  │  │  ├─ array_float32_pointer_1d.sav
│     │     │  │  │  │  ├─ array_float32_pointer_2d.sav
│     │     │  │  │  │  ├─ array_float32_pointer_3d.sav
│     │     │  │  │  │  ├─ array_float32_pointer_4d.sav
│     │     │  │  │  │  ├─ array_float32_pointer_5d.sav
│     │     │  │  │  │  ├─ array_float32_pointer_6d.sav
│     │     │  │  │  │  ├─ array_float32_pointer_7d.sav
│     │     │  │  │  │  ├─ array_float32_pointer_8d.sav
│     │     │  │  │  │  ├─ example_1.nc
│     │     │  │  │  │  ├─ example_2.nc
│     │     │  │  │  │  ├─ example_3_maskedvals.nc
│     │     │  │  │  │  ├─ fortran-3x3d-2i.dat
│     │     │  │  │  │  ├─ fortran-mixed.dat
│     │     │  │  │  │  ├─ fortran-sf8-11x1x10.dat
│     │     │  │  │  │  ├─ fortran-sf8-15x10x22.dat
│     │     │  │  │  │  ├─ fortran-sf8-1x1x1.dat
│     │     │  │  │  │  ├─ fortran-sf8-1x1x5.dat
│     │     │  │  │  │  ├─ fortran-sf8-1x1x7.dat
│     │     │  │  │  │  ├─ fortran-sf8-1x3x5.dat
│     │     │  │  │  │  ├─ fortran-si4-11x1x10.dat
│     │     │  │  │  │  ├─ fortran-si4-15x10x22.dat
│     │     │  │  │  │  ├─ fortran-si4-1x1x1.dat
│     │     │  │  │  │  ├─ fortran-si4-1x1x5.dat
│     │     │  │  │  │  ├─ fortran-si4-1x1x7.dat
│     │     │  │  │  │  ├─ fortran-si4-1x3x5.dat
│     │     │  │  │  │  ├─ invalid_pointer.sav
│     │     │  │  │  │  ├─ null_pointer.sav
│     │     │  │  │  │  ├─ scalar_byte.sav
│     │     │  │  │  │  ├─ scalar_byte_descr.sav
│     │     │  │  │  │  ├─ scalar_complex32.sav
│     │     │  │  │  │  ├─ scalar_complex64.sav
│     │     │  │  │  │  ├─ scalar_float32.sav
│     │     │  │  │  │  ├─ scalar_float64.sav
│     │     │  │  │  │  ├─ scalar_heap_pointer.sav
│     │     │  │  │  │  ├─ scalar_int16.sav
│     │     │  │  │  │  ├─ scalar_int32.sav
│     │     │  │  │  │  ├─ scalar_int64.sav
│     │     │  │  │  │  ├─ scalar_string.sav
│     │     │  │  │  │  ├─ scalar_uint16.sav
│     │     │  │  │  │  ├─ scalar_uint32.sav
│     │     │  │  │  │  ├─ scalar_uint64.sav
│     │     │  │  │  │  ├─ struct_arrays.sav
│     │     │  │  │  │  ├─ struct_arrays_byte_idl80.sav
│     │     │  │  │  │  ├─ struct_arrays_replicated.sav
│     │     │  │  │  │  ├─ struct_arrays_replicated_3d.sav
│     │     │  │  │  │  ├─ struct_inherit.sav
│     │     │  │  │  │  ├─ struct_pointers.sav
│     │     │  │  │  │  ├─ struct_pointers_replicated.sav
│     │     │  │  │  │  ├─ struct_pointers_replicated_3d.sav
│     │     │  │  │  │  ├─ struct_pointer_arrays.sav
│     │     │  │  │  │  ├─ struct_pointer_arrays_replicated.sav
│     │     │  │  │  │  ├─ struct_pointer_arrays_replicated_3d.sav
│     │     │  │  │  │  ├─ struct_scalars.sav
│     │     │  │  │  │  ├─ struct_scalars_replicated.sav
│     │     │  │  │  │  ├─ struct_scalars_replicated_3d.sav
│     │     │  │  │  │  ├─ test-1234Hz-le-1ch-10S-20bit-extra.wav
│     │     │  │  │  │  ├─ test-44100Hz-2ch-32bit-float-be.wav
│     │     │  │  │  │  ├─ test-44100Hz-2ch-32bit-float-le.wav
│     │     │  │  │  │  ├─ test-44100Hz-be-1ch-4bytes.wav
│     │     │  │  │  │  ├─ test-44100Hz-le-1ch-4bytes-early-eof-no-data.wav
│     │     │  │  │  │  ├─ test-44100Hz-le-1ch-4bytes-early-eof.wav
│     │     │  │  │  │  ├─ test-44100Hz-le-1ch-4bytes-incomplete-chunk.wav
│     │     │  │  │  │  ├─ test-44100Hz-le-1ch-4bytes-rf64.wav
│     │     │  │  │  │  ├─ test-44100Hz-le-1ch-4bytes.wav
│     │     │  │  │  │  ├─ test-48000Hz-2ch-64bit-float-le-wavex.wav
│     │     │  │  │  │  ├─ test-8000Hz-be-3ch-5S-24bit.wav
│     │     │  │  │  │  ├─ test-8000Hz-le-1ch-1byte-ulaw.wav
│     │     │  │  │  │  ├─ test-8000Hz-le-2ch-1byteu.wav
│     │     │  │  │  │  ├─ test-8000Hz-le-3ch-5S-24bit-inconsistent.wav
│     │     │  │  │  │  ├─ test-8000Hz-le-3ch-5S-24bit-rf64.wav
│     │     │  │  │  │  ├─ test-8000Hz-le-3ch-5S-24bit.wav
│     │     │  │  │  │  ├─ test-8000Hz-le-3ch-5S-36bit.wav
│     │     │  │  │  │  ├─ test-8000Hz-le-3ch-5S-45bit.wav
│     │     │  │  │  │  ├─ test-8000Hz-le-3ch-5S-53bit.wav
│     │     │  │  │  │  ├─ test-8000Hz-le-3ch-5S-64bit.wav
│     │     │  │  │  │  ├─ test-8000Hz-le-4ch-9S-12bit.wav
│     │     │  │  │  │  ├─ test-8000Hz-le-5ch-9S-5bit.wav
│     │     │  │  │  │  ├─ Transparent Busy.ani
│     │     │  │  │  │  └─ various_compressed.sav
│     │     │  │  │  ├─ test_fortran.py
│     │     │  │  │  ├─ test_idl.py
│     │     │  │  │  ├─ test_mmio.py
│     │     │  │  │  ├─ test_netcdf.py
│     │     │  │  │  ├─ test_paths.py
│     │     │  │  │  ├─ test_wavfile.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ test_fortran.cpython-313.pyc
│     │     │  │  │     ├─ test_idl.cpython-313.pyc
│     │     │  │  │     ├─ test_mmio.cpython-313.pyc
│     │     │  │  │     ├─ test_netcdf.cpython-313.pyc
│     │     │  │  │     ├─ test_paths.cpython-313.pyc
│     │     │  │  │     ├─ test_wavfile.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ wavfile.py
│     │     │  │  ├─ _fast_matrix_market
│     │     │  │  │  ├─ _fmm_core.cp313-win_amd64.dll.a
│     │     │  │  │  ├─ _fmm_core.cp313-win_amd64.pyd
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _fortran.py
│     │     │  │  ├─ _harwell_boeing
│     │     │  │  │  ├─ hb.py
│     │     │  │  │  ├─ tests
│     │     │  │  │  │  ├─ test_fortran_format.py
│     │     │  │  │  │  ├─ test_hb.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ test_fortran_format.cpython-313.pyc
│     │     │  │  │  │     ├─ test_hb.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ _fortran_format_parser.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ hb.cpython-313.pyc
│     │     │  │  │     ├─ _fortran_format_parser.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _idl.py
│     │     │  │  ├─ _mmio.py
│     │     │  │  ├─ _netcdf.py
│     │     │  │  ├─ _test_fortran.cp313-win_amd64.dll.a
│     │     │  │  ├─ _test_fortran.cp313-win_amd64.pyd
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ harwell_boeing.cpython-313.pyc
│     │     │  │     ├─ idl.cpython-313.pyc
│     │     │  │     ├─ mmio.cpython-313.pyc
│     │     │  │     ├─ netcdf.cpython-313.pyc
│     │     │  │     ├─ wavfile.cpython-313.pyc
│     │     │  │     ├─ _fortran.cpython-313.pyc
│     │     │  │     ├─ _idl.cpython-313.pyc
│     │     │  │     ├─ _mmio.cpython-313.pyc
│     │     │  │     ├─ _netcdf.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ linalg
│     │     │  │  ├─ basic.py
│     │     │  │  ├─ blas.py
│     │     │  │  ├─ cython_blas.cp313-win_amd64.dll.a
│     │     │  │  ├─ cython_blas.cp313-win_amd64.pyd
│     │     │  │  ├─ cython_blas.pxd
│     │     │  │  ├─ cython_blas.pyx
│     │     │  │  ├─ cython_lapack.cp313-win_amd64.dll.a
│     │     │  │  ├─ cython_lapack.cp313-win_amd64.pyd
│     │     │  │  ├─ cython_lapack.pxd
│     │     │  │  ├─ cython_lapack.pyx
│     │     │  │  ├─ decomp.py
│     │     │  │  ├─ decomp_cholesky.py
│     │     │  │  ├─ decomp_lu.py
│     │     │  │  ├─ decomp_qr.py
│     │     │  │  ├─ decomp_schur.py
│     │     │  │  ├─ decomp_svd.py
│     │     │  │  ├─ interpolative.py
│     │     │  │  ├─ lapack.py
│     │     │  │  ├─ matfuncs.py
│     │     │  │  ├─ misc.py
│     │     │  │  ├─ special_matrices.py
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ data
│     │     │  │  │  │  ├─ carex_15_data.npz
│     │     │  │  │  │  ├─ carex_18_data.npz
│     │     │  │  │  │  ├─ carex_19_data.npz
│     │     │  │  │  │  ├─ carex_20_data.npz
│     │     │  │  │  │  ├─ carex_6_data.npz
│     │     │  │  │  │  └─ gendare_20170120_data.npz
│     │     │  │  │  ├─ test_basic.py
│     │     │  │  │  ├─ test_batch.py
│     │     │  │  │  ├─ test_blas.py
│     │     │  │  │  ├─ test_cythonized_array_utils.py
│     │     │  │  │  ├─ test_cython_blas.py
│     │     │  │  │  ├─ test_cython_lapack.py
│     │     │  │  │  ├─ test_decomp.py
│     │     │  │  │  ├─ test_decomp_cholesky.py
│     │     │  │  │  ├─ test_decomp_cossin.py
│     │     │  │  │  ├─ test_decomp_ldl.py
│     │     │  │  │  ├─ test_decomp_lu.py
│     │     │  │  │  ├─ test_decomp_polar.py
│     │     │  │  │  ├─ test_decomp_update.py
│     │     │  │  │  ├─ test_extending.py
│     │     │  │  │  ├─ test_fblas.py
│     │     │  │  │  ├─ test_interpolative.py
│     │     │  │  │  ├─ test_lapack.py
│     │     │  │  │  ├─ test_matfuncs.py
│     │     │  │  │  ├─ test_matmul_toeplitz.py
│     │     │  │  │  ├─ test_procrustes.py
│     │     │  │  │  ├─ test_sketches.py
│     │     │  │  │  ├─ test_solvers.py
│     │     │  │  │  ├─ test_solve_toeplitz.py
│     │     │  │  │  ├─ test_special_matrices.py
│     │     │  │  │  ├─ _cython_examples
│     │     │  │  │  │  ├─ extending.pyx
│     │     │  │  │  │  └─ meson.build
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ test_basic.cpython-313.pyc
│     │     │  │  │     ├─ test_batch.cpython-313.pyc
│     │     │  │  │     ├─ test_blas.cpython-313.pyc
│     │     │  │  │     ├─ test_cythonized_array_utils.cpython-313.pyc
│     │     │  │  │     ├─ test_cython_blas.cpython-313.pyc
│     │     │  │  │     ├─ test_cython_lapack.cpython-313.pyc
│     │     │  │  │     ├─ test_decomp.cpython-313.pyc
│     │     │  │  │     ├─ test_decomp_cholesky.cpython-313.pyc
│     │     │  │  │     ├─ test_decomp_cossin.cpython-313.pyc
│     │     │  │  │     ├─ test_decomp_ldl.cpython-313.pyc
│     │     │  │  │     ├─ test_decomp_lu.cpython-313.pyc
│     │     │  │  │     ├─ test_decomp_polar.cpython-313.pyc
│     │     │  │  │     ├─ test_decomp_update.cpython-313.pyc
│     │     │  │  │     ├─ test_extending.cpython-313.pyc
│     │     │  │  │     ├─ test_fblas.cpython-313.pyc
│     │     │  │  │     ├─ test_interpolative.cpython-313.pyc
│     │     │  │  │     ├─ test_lapack.cpython-313.pyc
│     │     │  │  │     ├─ test_matfuncs.cpython-313.pyc
│     │     │  │  │     ├─ test_matmul_toeplitz.cpython-313.pyc
│     │     │  │  │     ├─ test_procrustes.cpython-313.pyc
│     │     │  │  │     ├─ test_sketches.cpython-313.pyc
│     │     │  │  │     ├─ test_solvers.cpython-313.pyc
│     │     │  │  │     ├─ test_solve_toeplitz.cpython-313.pyc
│     │     │  │  │     ├─ test_special_matrices.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _basic.py
│     │     │  │  ├─ _blas_subroutines.h
│     │     │  │  ├─ _cythonized_array_utils.cp313-win_amd64.dll.a
│     │     │  │  ├─ _cythonized_array_utils.cp313-win_amd64.pyd
│     │     │  │  ├─ _cythonized_array_utils.pxd
│     │     │  │  ├─ _cythonized_array_utils.pyi
│     │     │  │  ├─ _decomp.py
│     │     │  │  ├─ _decomp_cholesky.py
│     │     │  │  ├─ _decomp_cossin.py
│     │     │  │  ├─ _decomp_interpolative.cp313-win_amd64.dll.a
│     │     │  │  ├─ _decomp_interpolative.cp313-win_amd64.pyd
│     │     │  │  ├─ _decomp_ldl.py
│     │     │  │  ├─ _decomp_lu.py
│     │     │  │  ├─ _decomp_lu_cython.cp313-win_amd64.dll.a
│     │     │  │  ├─ _decomp_lu_cython.cp313-win_amd64.pyd
│     │     │  │  ├─ _decomp_lu_cython.pyi
│     │     │  │  ├─ _decomp_polar.py
│     │     │  │  ├─ _decomp_qr.py
│     │     │  │  ├─ _decomp_qz.py
│     │     │  │  ├─ _decomp_schur.py
│     │     │  │  ├─ _decomp_svd.py
│     │     │  │  ├─ _decomp_update.cp313-win_amd64.dll.a
│     │     │  │  ├─ _decomp_update.cp313-win_amd64.pyd
│     │     │  │  ├─ _expm_frechet.py
│     │     │  │  ├─ _fblas.cp313-win_amd64.dll.a
│     │     │  │  ├─ _fblas.cp313-win_amd64.pyd
│     │     │  │  ├─ _flapack.cp313-win_amd64.dll.a
│     │     │  │  ├─ _flapack.cp313-win_amd64.pyd
│     │     │  │  ├─ _lapack_subroutines.h
│     │     │  │  ├─ _linalg_pythran.cp313-win_amd64.dll.a
│     │     │  │  ├─ _linalg_pythran.cp313-win_amd64.pyd
│     │     │  │  ├─ _matfuncs.py
│     │     │  │  ├─ _matfuncs_expm.cp313-win_amd64.dll.a
│     │     │  │  ├─ _matfuncs_expm.cp313-win_amd64.pyd
│     │     │  │  ├─ _matfuncs_expm.pyi
│     │     │  │  ├─ _matfuncs_inv_ssq.py
│     │     │  │  ├─ _matfuncs_schur_sqrtm.cp313-win_amd64.dll.a
│     │     │  │  ├─ _matfuncs_schur_sqrtm.cp313-win_amd64.pyd
│     │     │  │  ├─ _matfuncs_sqrtm.py
│     │     │  │  ├─ _matfuncs_sqrtm_triu.cp313-win_amd64.dll.a
│     │     │  │  ├─ _matfuncs_sqrtm_triu.cp313-win_amd64.pyd
│     │     │  │  ├─ _misc.py
│     │     │  │  ├─ _procrustes.py
│     │     │  │  ├─ _sketches.py
│     │     │  │  ├─ _solvers.py
│     │     │  │  ├─ _solve_toeplitz.cp313-win_amd64.dll.a
│     │     │  │  ├─ _solve_toeplitz.cp313-win_amd64.pyd
│     │     │  │  ├─ _special_matrices.py
│     │     │  │  ├─ _testutils.py
│     │     │  │  ├─ __init__.pxd
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ basic.cpython-313.pyc
│     │     │  │     ├─ blas.cpython-313.pyc
│     │     │  │     ├─ decomp.cpython-313.pyc
│     │     │  │     ├─ decomp_cholesky.cpython-313.pyc
│     │     │  │     ├─ decomp_lu.cpython-313.pyc
│     │     │  │     ├─ decomp_qr.cpython-313.pyc
│     │     │  │     ├─ decomp_schur.cpython-313.pyc
│     │     │  │     ├─ decomp_svd.cpython-313.pyc
│     │     │  │     ├─ interpolative.cpython-313.pyc
│     │     │  │     ├─ lapack.cpython-313.pyc
│     │     │  │     ├─ matfuncs.cpython-313.pyc
│     │     │  │     ├─ misc.cpython-313.pyc
│     │     │  │     ├─ special_matrices.cpython-313.pyc
│     │     │  │     ├─ _basic.cpython-313.pyc
│     │     │  │     ├─ _decomp.cpython-313.pyc
│     │     │  │     ├─ _decomp_cholesky.cpython-313.pyc
│     │     │  │     ├─ _decomp_cossin.cpython-313.pyc
│     │     │  │     ├─ _decomp_ldl.cpython-313.pyc
│     │     │  │     ├─ _decomp_lu.cpython-313.pyc
│     │     │  │     ├─ _decomp_polar.cpython-313.pyc
│     │     │  │     ├─ _decomp_qr.cpython-313.pyc
│     │     │  │     ├─ _decomp_qz.cpython-313.pyc
│     │     │  │     ├─ _decomp_schur.cpython-313.pyc
│     │     │  │     ├─ _decomp_svd.cpython-313.pyc
│     │     │  │     ├─ _expm_frechet.cpython-313.pyc
│     │     │  │     ├─ _matfuncs.cpython-313.pyc
│     │     │  │     ├─ _matfuncs_inv_ssq.cpython-313.pyc
│     │     │  │     ├─ _matfuncs_sqrtm.cpython-313.pyc
│     │     │  │     ├─ _misc.cpython-313.pyc
│     │     │  │     ├─ _procrustes.cpython-313.pyc
│     │     │  │     ├─ _sketches.cpython-313.pyc
│     │     │  │     ├─ _solvers.cpython-313.pyc
│     │     │  │     ├─ _special_matrices.cpython-313.pyc
│     │     │  │     ├─ _testutils.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ misc
│     │     │  │  ├─ common.py
│     │     │  │  ├─ doccer.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ common.cpython-313.pyc
│     │     │  │     ├─ doccer.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ ndimage
│     │     │  │  ├─ filters.py
│     │     │  │  ├─ fourier.py
│     │     │  │  ├─ interpolation.py
│     │     │  │  ├─ measurements.py
│     │     │  │  ├─ morphology.py
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ data
│     │     │  │  │  │  ├─ label_inputs.txt
│     │     │  │  │  │  ├─ label_results.txt
│     │     │  │  │  │  └─ label_strels.txt
│     │     │  │  │  ├─ dots.png
│     │     │  │  │  ├─ test_c_api.py
│     │     │  │  │  ├─ test_datatypes.py
│     │     │  │  │  ├─ test_filters.py
│     │     │  │  │  ├─ test_fourier.py
│     │     │  │  │  ├─ test_interpolation.py
│     │     │  │  │  ├─ test_measurements.py
│     │     │  │  │  ├─ test_morphology.py
│     │     │  │  │  ├─ test_ni_support.py
│     │     │  │  │  ├─ test_splines.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ test_c_api.cpython-313.pyc
│     │     │  │  │     ├─ test_datatypes.cpython-313.pyc
│     │     │  │  │     ├─ test_filters.cpython-313.pyc
│     │     │  │  │     ├─ test_fourier.cpython-313.pyc
│     │     │  │  │     ├─ test_interpolation.cpython-313.pyc
│     │     │  │  │     ├─ test_measurements.cpython-313.pyc
│     │     │  │  │     ├─ test_morphology.cpython-313.pyc
│     │     │  │  │     ├─ test_ni_support.cpython-313.pyc
│     │     │  │  │     ├─ test_splines.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _ctest.cp313-win_amd64.dll.a
│     │     │  │  ├─ _ctest.cp313-win_amd64.pyd
│     │     │  │  ├─ _cytest.cp313-win_amd64.dll.a
│     │     │  │  ├─ _cytest.cp313-win_amd64.pyd
│     │     │  │  ├─ _delegators.py
│     │     │  │  ├─ _filters.py
│     │     │  │  ├─ _fourier.py
│     │     │  │  ├─ _interpolation.py
│     │     │  │  ├─ _measurements.py
│     │     │  │  ├─ _morphology.py
│     │     │  │  ├─ _ndimage_api.py
│     │     │  │  ├─ _nd_image.cp313-win_amd64.dll.a
│     │     │  │  ├─ _nd_image.cp313-win_amd64.pyd
│     │     │  │  ├─ _ni_docstrings.py
│     │     │  │  ├─ _ni_label.cp313-win_amd64.dll.a
│     │     │  │  ├─ _ni_label.cp313-win_amd64.pyd
│     │     │  │  ├─ _ni_support.py
│     │     │  │  ├─ _rank_filter_1d.cp313-win_amd64.dll.a
│     │     │  │  ├─ _rank_filter_1d.cp313-win_amd64.pyd
│     │     │  │  ├─ _support_alternative_backends.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ filters.cpython-313.pyc
│     │     │  │     ├─ fourier.cpython-313.pyc
│     │     │  │     ├─ interpolation.cpython-313.pyc
│     │     │  │     ├─ measurements.cpython-313.pyc
│     │     │  │     ├─ morphology.cpython-313.pyc
│     │     │  │     ├─ _delegators.cpython-313.pyc
│     │     │  │     ├─ _filters.cpython-313.pyc
│     │     │  │     ├─ _fourier.cpython-313.pyc
│     │     │  │     ├─ _interpolation.cpython-313.pyc
│     │     │  │     ├─ _measurements.cpython-313.pyc
│     │     │  │     ├─ _morphology.cpython-313.pyc
│     │     │  │     ├─ _ndimage_api.cpython-313.pyc
│     │     │  │     ├─ _ni_docstrings.cpython-313.pyc
│     │     │  │     ├─ _ni_support.cpython-313.pyc
│     │     │  │     ├─ _support_alternative_backends.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ odr
│     │     │  │  ├─ models.py
│     │     │  │  ├─ odrpack.py
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ test_odr.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ test_odr.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _add_newdocs.py
│     │     │  │  ├─ _models.py
│     │     │  │  ├─ _odrpack.py
│     │     │  │  ├─ __init__.py
│     │     │  │  ├─ __odrpack.cp313-win_amd64.dll.a
│     │     │  │  ├─ __odrpack.cp313-win_amd64.pyd
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ models.cpython-313.pyc
│     │     │  │     ├─ odrpack.cpython-313.pyc
│     │     │  │     ├─ _add_newdocs.cpython-313.pyc
│     │     │  │     ├─ _models.cpython-313.pyc
│     │     │  │     ├─ _odrpack.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ optimize
│     │     │  │  ├─ cobyla.py
│     │     │  │  ├─ cython_optimize
│     │     │  │  │  ├─ c_zeros.pxd
│     │     │  │  │  ├─ _zeros.cp313-win_amd64.dll.a
│     │     │  │  │  ├─ _zeros.cp313-win_amd64.pyd
│     │     │  │  │  ├─ _zeros.pxd
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ cython_optimize.pxd
│     │     │  │  ├─ elementwise.py
│     │     │  │  ├─ lbfgsb.py
│     │     │  │  ├─ linesearch.py
│     │     │  │  ├─ minpack.py
│     │     │  │  ├─ minpack2.py
│     │     │  │  ├─ moduleTNC.py
│     │     │  │  ├─ nonlin.py
│     │     │  │  ├─ optimize.py
│     │     │  │  ├─ slsqp.py
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ test_bracket.py
│     │     │  │  │  ├─ test_chandrupatla.py
│     │     │  │  │  ├─ test_cobyla.py
│     │     │  │  │  ├─ test_cobyqa.py
│     │     │  │  │  ├─ test_constraints.py
│     │     │  │  │  ├─ test_constraint_conversion.py
│     │     │  │  │  ├─ test_cython_optimize.py
│     │     │  │  │  ├─ test_differentiable_functions.py
│     │     │  │  │  ├─ test_direct.py
│     │     │  │  │  ├─ test_extending.py
│     │     │  │  │  ├─ test_hessian_update_strategy.py
│     │     │  │  │  ├─ test_isotonic_regression.py
│     │     │  │  │  ├─ test_lbfgsb_hessinv.py
│     │     │  │  │  ├─ test_lbfgsb_setulb.py
│     │     │  │  │  ├─ test_least_squares.py
│     │     │  │  │  ├─ test_linear_assignment.py
│     │     │  │  │  ├─ test_linesearch.py
│     │     │  │  │  ├─ test_linprog.py
│     │     │  │  │  ├─ test_lsq_common.py
│     │     │  │  │  ├─ test_lsq_linear.py
│     │     │  │  │  ├─ test_milp.py
│     │     │  │  │  ├─ test_minimize_constrained.py
│     │     │  │  │  ├─ test_minpack.py
│     │     │  │  │  ├─ test_nnls.py
│     │     │  │  │  ├─ test_nonlin.py
│     │     │  │  │  ├─ test_optimize.py
│     │     │  │  │  ├─ test_quadratic_assignment.py
│     │     │  │  │  ├─ test_regression.py
│     │     │  │  │  ├─ test_slsqp.py
│     │     │  │  │  ├─ test_tnc.py
│     │     │  │  │  ├─ test_trustregion.py
│     │     │  │  │  ├─ test_trustregion_exact.py
│     │     │  │  │  ├─ test_trustregion_krylov.py
│     │     │  │  │  ├─ test_zeros.py
│     │     │  │  │  ├─ test__basinhopping.py
│     │     │  │  │  ├─ test__differential_evolution.py
│     │     │  │  │  ├─ test__dual_annealing.py
│     │     │  │  │  ├─ test__linprog_clean_inputs.py
│     │     │  │  │  ├─ test__numdiff.py
│     │     │  │  │  ├─ test__remove_redundancy.py
│     │     │  │  │  ├─ test__root.py
│     │     │  │  │  ├─ test__shgo.py
│     │     │  │  │  ├─ test__spectral.py
│     │     │  │  │  ├─ _cython_examples
│     │     │  │  │  │  ├─ extending.pyx
│     │     │  │  │  │  └─ meson.build
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ test_bracket.cpython-313.pyc
│     │     │  │  │     ├─ test_chandrupatla.cpython-313.pyc
│     │     │  │  │     ├─ test_cobyla.cpython-313.pyc
│     │     │  │  │     ├─ test_cobyqa.cpython-313.pyc
│     │     │  │  │     ├─ test_constraints.cpython-313.pyc
│     │     │  │  │     ├─ test_constraint_conversion.cpython-313.pyc
│     │     │  │  │     ├─ test_cython_optimize.cpython-313.pyc
│     │     │  │  │     ├─ test_differentiable_functions.cpython-313.pyc
│     │     │  │  │     ├─ test_direct.cpython-313.pyc
│     │     │  │  │     ├─ test_extending.cpython-313.pyc
│     │     │  │  │     ├─ test_hessian_update_strategy.cpython-313.pyc
│     │     │  │  │     ├─ test_isotonic_regression.cpython-313.pyc
│     │     │  │  │     ├─ test_lbfgsb_hessinv.cpython-313.pyc
│     │     │  │  │     ├─ test_lbfgsb_setulb.cpython-313.pyc
│     │     │  │  │     ├─ test_least_squares.cpython-313.pyc
│     │     │  │  │     ├─ test_linear_assignment.cpython-313.pyc
│     │     │  │  │     ├─ test_linesearch.cpython-313.pyc
│     │     │  │  │     ├─ test_linprog.cpython-313.pyc
│     │     │  │  │     ├─ test_lsq_common.cpython-313.pyc
│     │     │  │  │     ├─ test_lsq_linear.cpython-313.pyc
│     │     │  │  │     ├─ test_milp.cpython-313.pyc
│     │     │  │  │     ├─ test_minimize_constrained.cpython-313.pyc
│     │     │  │  │     ├─ test_minpack.cpython-313.pyc
│     │     │  │  │     ├─ test_nnls.cpython-313.pyc
│     │     │  │  │     ├─ test_nonlin.cpython-313.pyc
│     │     │  │  │     ├─ test_optimize.cpython-313.pyc
│     │     │  │  │     ├─ test_quadratic_assignment.cpython-313.pyc
│     │     │  │  │     ├─ test_regression.cpython-313.pyc
│     │     │  │  │     ├─ test_slsqp.cpython-313.pyc
│     │     │  │  │     ├─ test_tnc.cpython-313.pyc
│     │     │  │  │     ├─ test_trustregion.cpython-313.pyc
│     │     │  │  │     ├─ test_trustregion_exact.cpython-313.pyc
│     │     │  │  │     ├─ test_trustregion_krylov.cpython-313.pyc
│     │     │  │  │     ├─ test_zeros.cpython-313.pyc
│     │     │  │  │     ├─ test__basinhopping.cpython-313.pyc
│     │     │  │  │     ├─ test__differential_evolution.cpython-313.pyc
│     │     │  │  │     ├─ test__dual_annealing.cpython-313.pyc
│     │     │  │  │     ├─ test__linprog_clean_inputs.cpython-313.pyc
│     │     │  │  │     ├─ test__numdiff.cpython-313.pyc
│     │     │  │  │     ├─ test__remove_redundancy.cpython-313.pyc
│     │     │  │  │     ├─ test__root.cpython-313.pyc
│     │     │  │  │     ├─ test__shgo.cpython-313.pyc
│     │     │  │  │     ├─ test__spectral.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ tnc.py
│     │     │  │  ├─ zeros.py
│     │     │  │  ├─ _basinhopping.py
│     │     │  │  ├─ _bglu_dense.cp313-win_amd64.dll.a
│     │     │  │  ├─ _bglu_dense.cp313-win_amd64.pyd
│     │     │  │  ├─ _bracket.py
│     │     │  │  ├─ _chandrupatla.py
│     │     │  │  ├─ _cobyla_py.py
│     │     │  │  ├─ _cobyqa_py.py
│     │     │  │  ├─ _constraints.py
│     │     │  │  ├─ _dcsrch.py
│     │     │  │  ├─ _differentiable_functions.py
│     │     │  │  ├─ _differentialevolution.py
│     │     │  │  ├─ _direct.cp313-win_amd64.dll.a
│     │     │  │  ├─ _direct.cp313-win_amd64.pyd
│     │     │  │  ├─ _direct_py.py
│     │     │  │  ├─ _dual_annealing.py
│     │     │  │  ├─ _elementwise.py
│     │     │  │  ├─ _group_columns.cp313-win_amd64.dll.a
│     │     │  │  ├─ _group_columns.cp313-win_amd64.pyd
│     │     │  │  ├─ _hessian_update_strategy.py
│     │     │  │  ├─ _highspy
│     │     │  │  │  ├─ _core.cp313-win_amd64.dll.a
│     │     │  │  │  ├─ _core.cp313-win_amd64.pyd
│     │     │  │  │  ├─ _highs_options.cp313-win_amd64.dll.a
│     │     │  │  │  ├─ _highs_options.cp313-win_amd64.pyd
│     │     │  │  │  ├─ _highs_wrapper.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ _highs_wrapper.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _isotonic.py
│     │     │  │  ├─ _lbfgsb.cp313-win_amd64.dll.a
│     │     │  │  ├─ _lbfgsb.cp313-win_amd64.pyd
│     │     │  │  ├─ _lbfgsb_py.py
│     │     │  │  ├─ _linesearch.py
│     │     │  │  ├─ _linprog.py
│     │     │  │  ├─ _linprog_doc.py
│     │     │  │  ├─ _linprog_highs.py
│     │     │  │  ├─ _linprog_ip.py
│     │     │  │  ├─ _linprog_rs.py
│     │     │  │  ├─ _linprog_simplex.py
│     │     │  │  ├─ _linprog_util.py
│     │     │  │  ├─ _lsap.cp313-win_amd64.dll.a
│     │     │  │  ├─ _lsap.cp313-win_amd64.pyd
│     │     │  │  ├─ _lsq
│     │     │  │  │  ├─ bvls.py
│     │     │  │  │  ├─ common.py
│     │     │  │  │  ├─ dogbox.py
│     │     │  │  │  ├─ givens_elimination.cp313-win_amd64.dll.a
│     │     │  │  │  ├─ givens_elimination.cp313-win_amd64.pyd
│     │     │  │  │  ├─ least_squares.py
│     │     │  │  │  ├─ lsq_linear.py
│     │     │  │  │  ├─ trf.py
│     │     │  │  │  ├─ trf_linear.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ bvls.cpython-313.pyc
│     │     │  │  │     ├─ common.cpython-313.pyc
│     │     │  │  │     ├─ dogbox.cpython-313.pyc
│     │     │  │  │     ├─ least_squares.cpython-313.pyc
│     │     │  │  │     ├─ lsq_linear.cpython-313.pyc
│     │     │  │  │     ├─ trf.cpython-313.pyc
│     │     │  │  │     ├─ trf_linear.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _milp.py
│     │     │  │  ├─ _minimize.py
│     │     │  │  ├─ _minpack.cp313-win_amd64.dll.a
│     │     │  │  ├─ _minpack.cp313-win_amd64.pyd
│     │     │  │  ├─ _minpack_py.py
│     │     │  │  ├─ _moduleTNC.cp313-win_amd64.dll.a
│     │     │  │  ├─ _moduleTNC.cp313-win_amd64.pyd
│     │     │  │  ├─ _nnls.py
│     │     │  │  ├─ _nonlin.py
│     │     │  │  ├─ _numdiff.py
│     │     │  │  ├─ _optimize.py
│     │     │  │  ├─ _pava_pybind.cp313-win_amd64.dll.a
│     │     │  │  ├─ _pava_pybind.cp313-win_amd64.pyd
│     │     │  │  ├─ _qap.py
│     │     │  │  ├─ _remove_redundancy.py
│     │     │  │  ├─ _root.py
│     │     │  │  ├─ _root_scalar.py
│     │     │  │  ├─ _shgo.py
│     │     │  │  ├─ _shgo_lib
│     │     │  │  │  ├─ _complex.py
│     │     │  │  │  ├─ _vertex.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ _complex.cpython-313.pyc
│     │     │  │  │     ├─ _vertex.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _slsqplib.cp313-win_amd64.dll.a
│     │     │  │  ├─ _slsqplib.cp313-win_amd64.pyd
│     │     │  │  ├─ _slsqp_py.py
│     │     │  │  ├─ _spectral.py
│     │     │  │  ├─ _tnc.py
│     │     │  │  ├─ _trlib
│     │     │  │  │  ├─ _trlib.cp313-win_amd64.dll.a
│     │     │  │  │  ├─ _trlib.cp313-win_amd64.pyd
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _trustregion.py
│     │     │  │  ├─ _trustregion_constr
│     │     │  │  │  ├─ canonical_constraint.py
│     │     │  │  │  ├─ equality_constrained_sqp.py
│     │     │  │  │  ├─ minimize_trustregion_constr.py
│     │     │  │  │  ├─ projections.py
│     │     │  │  │  ├─ qp_subproblem.py
│     │     │  │  │  ├─ report.py
│     │     │  │  │  ├─ tests
│     │     │  │  │  │  ├─ test_canonical_constraint.py
│     │     │  │  │  │  ├─ test_nested_minimize.py
│     │     │  │  │  │  ├─ test_projections.py
│     │     │  │  │  │  ├─ test_qp_subproblem.py
│     │     │  │  │  │  ├─ test_report.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ test_canonical_constraint.cpython-313.pyc
│     │     │  │  │  │     ├─ test_nested_minimize.cpython-313.pyc
│     │     │  │  │  │     ├─ test_projections.cpython-313.pyc
│     │     │  │  │  │     ├─ test_qp_subproblem.cpython-313.pyc
│     │     │  │  │  │     ├─ test_report.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ tr_interior_point.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ canonical_constraint.cpython-313.pyc
│     │     │  │  │     ├─ equality_constrained_sqp.cpython-313.pyc
│     │     │  │  │     ├─ minimize_trustregion_constr.cpython-313.pyc
│     │     │  │  │     ├─ projections.cpython-313.pyc
│     │     │  │  │     ├─ qp_subproblem.cpython-313.pyc
│     │     │  │  │     ├─ report.cpython-313.pyc
│     │     │  │  │     ├─ tr_interior_point.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _trustregion_dogleg.py
│     │     │  │  ├─ _trustregion_exact.py
│     │     │  │  ├─ _trustregion_krylov.py
│     │     │  │  ├─ _trustregion_ncg.py
│     │     │  │  ├─ _tstutils.py
│     │     │  │  ├─ _zeros.cp313-win_amd64.dll.a
│     │     │  │  ├─ _zeros.cp313-win_amd64.pyd
│     │     │  │  ├─ _zeros_py.py
│     │     │  │  ├─ __init__.pxd
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ cobyla.cpython-313.pyc
│     │     │  │     ├─ elementwise.cpython-313.pyc
│     │     │  │     ├─ lbfgsb.cpython-313.pyc
│     │     │  │     ├─ linesearch.cpython-313.pyc
│     │     │  │     ├─ minpack.cpython-313.pyc
│     │     │  │     ├─ minpack2.cpython-313.pyc
│     │     │  │     ├─ moduleTNC.cpython-313.pyc
│     │     │  │     ├─ nonlin.cpython-313.pyc
│     │     │  │     ├─ optimize.cpython-313.pyc
│     │     │  │     ├─ slsqp.cpython-313.pyc
│     │     │  │     ├─ tnc.cpython-313.pyc
│     │     │  │     ├─ zeros.cpython-313.pyc
│     │     │  │     ├─ _basinhopping.cpython-313.pyc
│     │     │  │     ├─ _bracket.cpython-313.pyc
│     │     │  │     ├─ _chandrupatla.cpython-313.pyc
│     │     │  │     ├─ _cobyla_py.cpython-313.pyc
│     │     │  │     ├─ _cobyqa_py.cpython-313.pyc
│     │     │  │     ├─ _constraints.cpython-313.pyc
│     │     │  │     ├─ _dcsrch.cpython-313.pyc
│     │     │  │     ├─ _differentiable_functions.cpython-313.pyc
│     │     │  │     ├─ _differentialevolution.cpython-313.pyc
│     │     │  │     ├─ _direct_py.cpython-313.pyc
│     │     │  │     ├─ _dual_annealing.cpython-313.pyc
│     │     │  │     ├─ _elementwise.cpython-313.pyc
│     │     │  │     ├─ _hessian_update_strategy.cpython-313.pyc
│     │     │  │     ├─ _isotonic.cpython-313.pyc
│     │     │  │     ├─ _lbfgsb_py.cpython-313.pyc
│     │     │  │     ├─ _linesearch.cpython-313.pyc
│     │     │  │     ├─ _linprog.cpython-313.pyc
│     │     │  │     ├─ _linprog_doc.cpython-313.pyc
│     │     │  │     ├─ _linprog_highs.cpython-313.pyc
│     │     │  │     ├─ _linprog_ip.cpython-313.pyc
│     │     │  │     ├─ _linprog_rs.cpython-313.pyc
│     │     │  │     ├─ _linprog_simplex.cpython-313.pyc
│     │     │  │     ├─ _linprog_util.cpython-313.pyc
│     │     │  │     ├─ _milp.cpython-313.pyc
│     │     │  │     ├─ _minimize.cpython-313.pyc
│     │     │  │     ├─ _minpack_py.cpython-313.pyc
│     │     │  │     ├─ _nnls.cpython-313.pyc
│     │     │  │     ├─ _nonlin.cpython-313.pyc
│     │     │  │     ├─ _numdiff.cpython-313.pyc
│     │     │  │     ├─ _optimize.cpython-313.pyc
│     │     │  │     ├─ _qap.cpython-313.pyc
│     │     │  │     ├─ _remove_redundancy.cpython-313.pyc
│     │     │  │     ├─ _root.cpython-313.pyc
│     │     │  │     ├─ _root_scalar.cpython-313.pyc
│     │     │  │     ├─ _shgo.cpython-313.pyc
│     │     │  │     ├─ _slsqp_py.cpython-313.pyc
│     │     │  │     ├─ _spectral.cpython-313.pyc
│     │     │  │     ├─ _tnc.cpython-313.pyc
│     │     │  │     ├─ _trustregion.cpython-313.pyc
│     │     │  │     ├─ _trustregion_dogleg.cpython-313.pyc
│     │     │  │     ├─ _trustregion_exact.cpython-313.pyc
│     │     │  │     ├─ _trustregion_krylov.cpython-313.pyc
│     │     │  │     ├─ _trustregion_ncg.cpython-313.pyc
│     │     │  │     ├─ _tstutils.cpython-313.pyc
│     │     │  │     ├─ _zeros_py.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ signal
│     │     │  │  ├─ bsplines.py
│     │     │  │  ├─ filter_design.py
│     │     │  │  ├─ fir_filter_design.py
│     │     │  │  ├─ ltisys.py
│     │     │  │  ├─ lti_conversion.py
│     │     │  │  ├─ signaltools.py
│     │     │  │  ├─ spectral.py
│     │     │  │  ├─ spline.py
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ mpsig.py
│     │     │  │  │  ├─ test_array_tools.py
│     │     │  │  │  ├─ test_bsplines.py
│     │     │  │  │  ├─ test_cont2discrete.py
│     │     │  │  │  ├─ test_czt.py
│     │     │  │  │  ├─ test_dltisys.py
│     │     │  │  │  ├─ test_filter_design.py
│     │     │  │  │  ├─ test_fir_filter_design.py
│     │     │  │  │  ├─ test_ltisys.py
│     │     │  │  │  ├─ test_max_len_seq.py
│     │     │  │  │  ├─ test_peak_finding.py
│     │     │  │  │  ├─ test_result_type.py
│     │     │  │  │  ├─ test_savitzky_golay.py
│     │     │  │  │  ├─ test_short_time_fft.py
│     │     │  │  │  ├─ test_signaltools.py
│     │     │  │  │  ├─ test_spectral.py
│     │     │  │  │  ├─ test_splines.py
│     │     │  │  │  ├─ test_upfirdn.py
│     │     │  │  │  ├─ test_waveforms.py
│     │     │  │  │  ├─ test_wavelets.py
│     │     │  │  │  ├─ test_windows.py
│     │     │  │  │  ├─ _scipy_spectral_test_shim.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ mpsig.cpython-313.pyc
│     │     │  │  │     ├─ test_array_tools.cpython-313.pyc
│     │     │  │  │     ├─ test_bsplines.cpython-313.pyc
│     │     │  │  │     ├─ test_cont2discrete.cpython-313.pyc
│     │     │  │  │     ├─ test_czt.cpython-313.pyc
│     │     │  │  │     ├─ test_dltisys.cpython-313.pyc
│     │     │  │  │     ├─ test_filter_design.cpython-313.pyc
│     │     │  │  │     ├─ test_fir_filter_design.cpython-313.pyc
│     │     │  │  │     ├─ test_ltisys.cpython-313.pyc
│     │     │  │  │     ├─ test_max_len_seq.cpython-313.pyc
│     │     │  │  │     ├─ test_peak_finding.cpython-313.pyc
│     │     │  │  │     ├─ test_result_type.cpython-313.pyc
│     │     │  │  │     ├─ test_savitzky_golay.cpython-313.pyc
│     │     │  │  │     ├─ test_short_time_fft.cpython-313.pyc
│     │     │  │  │     ├─ test_signaltools.cpython-313.pyc
│     │     │  │  │     ├─ test_spectral.cpython-313.pyc
│     │     │  │  │     ├─ test_splines.cpython-313.pyc
│     │     │  │  │     ├─ test_upfirdn.cpython-313.pyc
│     │     │  │  │     ├─ test_waveforms.cpython-313.pyc
│     │     │  │  │     ├─ test_wavelets.cpython-313.pyc
│     │     │  │  │     ├─ test_windows.cpython-313.pyc
│     │     │  │  │     ├─ _scipy_spectral_test_shim.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ waveforms.py
│     │     │  │  ├─ wavelets.py
│     │     │  │  ├─ windows
│     │     │  │  │  ├─ windows.py
│     │     │  │  │  ├─ _windows.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ windows.cpython-313.pyc
│     │     │  │  │     ├─ _windows.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _arraytools.py
│     │     │  │  ├─ _czt.py
│     │     │  │  ├─ _delegators.py
│     │     │  │  ├─ _filter_design.py
│     │     │  │  ├─ _fir_filter_design.py
│     │     │  │  ├─ _ltisys.py
│     │     │  │  ├─ _lti_conversion.py
│     │     │  │  ├─ _max_len_seq.py
│     │     │  │  ├─ _max_len_seq_inner.cp313-win_amd64.dll.a
│     │     │  │  ├─ _max_len_seq_inner.cp313-win_amd64.pyd
│     │     │  │  ├─ _peak_finding.py
│     │     │  │  ├─ _peak_finding_utils.cp313-win_amd64.dll.a
│     │     │  │  ├─ _peak_finding_utils.cp313-win_amd64.pyd
│     │     │  │  ├─ _polyutils.py
│     │     │  │  ├─ _savitzky_golay.py
│     │     │  │  ├─ _short_time_fft.py
│     │     │  │  ├─ _signaltools.py
│     │     │  │  ├─ _signal_api.py
│     │     │  │  ├─ _sigtools.cp313-win_amd64.dll.a
│     │     │  │  ├─ _sigtools.cp313-win_amd64.pyd
│     │     │  │  ├─ _sosfilt.cp313-win_amd64.dll.a
│     │     │  │  ├─ _sosfilt.cp313-win_amd64.pyd
│     │     │  │  ├─ _spectral_py.py
│     │     │  │  ├─ _spline.cp313-win_amd64.dll.a
│     │     │  │  ├─ _spline.cp313-win_amd64.pyd
│     │     │  │  ├─ _spline.pyi
│     │     │  │  ├─ _spline_filters.py
│     │     │  │  ├─ _support_alternative_backends.py
│     │     │  │  ├─ _upfirdn.py
│     │     │  │  ├─ _upfirdn_apply.cp313-win_amd64.dll.a
│     │     │  │  ├─ _upfirdn_apply.cp313-win_amd64.pyd
│     │     │  │  ├─ _waveforms.py
│     │     │  │  ├─ _wavelets.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ bsplines.cpython-313.pyc
│     │     │  │     ├─ filter_design.cpython-313.pyc
│     │     │  │     ├─ fir_filter_design.cpython-313.pyc
│     │     │  │     ├─ ltisys.cpython-313.pyc
│     │     │  │     ├─ lti_conversion.cpython-313.pyc
│     │     │  │     ├─ signaltools.cpython-313.pyc
│     │     │  │     ├─ spectral.cpython-313.pyc
│     │     │  │     ├─ spline.cpython-313.pyc
│     │     │  │     ├─ waveforms.cpython-313.pyc
│     │     │  │     ├─ wavelets.cpython-313.pyc
│     │     │  │     ├─ _arraytools.cpython-313.pyc
│     │     │  │     ├─ _czt.cpython-313.pyc
│     │     │  │     ├─ _delegators.cpython-313.pyc
│     │     │  │     ├─ _filter_design.cpython-313.pyc
│     │     │  │     ├─ _fir_filter_design.cpython-313.pyc
│     │     │  │     ├─ _ltisys.cpython-313.pyc
│     │     │  │     ├─ _lti_conversion.cpython-313.pyc
│     │     │  │     ├─ _max_len_seq.cpython-313.pyc
│     │     │  │     ├─ _peak_finding.cpython-313.pyc
│     │     │  │     ├─ _polyutils.cpython-313.pyc
│     │     │  │     ├─ _savitzky_golay.cpython-313.pyc
│     │     │  │     ├─ _short_time_fft.cpython-313.pyc
│     │     │  │     ├─ _signaltools.cpython-313.pyc
│     │     │  │     ├─ _signal_api.cpython-313.pyc
│     │     │  │     ├─ _spectral_py.cpython-313.pyc
│     │     │  │     ├─ _spline_filters.cpython-313.pyc
│     │     │  │     ├─ _support_alternative_backends.cpython-313.pyc
│     │     │  │     ├─ _upfirdn.cpython-313.pyc
│     │     │  │     ├─ _waveforms.cpython-313.pyc
│     │     │  │     ├─ _wavelets.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ sparse
│     │     │  │  ├─ base.py
│     │     │  │  ├─ bsr.py
│     │     │  │  ├─ compressed.py
│     │     │  │  ├─ construct.py
│     │     │  │  ├─ coo.py
│     │     │  │  ├─ csc.py
│     │     │  │  ├─ csgraph
│     │     │  │  │  ├─ tests
│     │     │  │  │  │  ├─ test_connected_components.py
│     │     │  │  │  │  ├─ test_conversions.py
│     │     │  │  │  │  ├─ test_flow.py
│     │     │  │  │  │  ├─ test_graph_laplacian.py
│     │     │  │  │  │  ├─ test_matching.py
│     │     │  │  │  │  ├─ test_pydata_sparse.py
│     │     │  │  │  │  ├─ test_reordering.py
│     │     │  │  │  │  ├─ test_shortest_path.py
│     │     │  │  │  │  ├─ test_spanning_tree.py
│     │     │  │  │  │  ├─ test_traversal.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ test_connected_components.cpython-313.pyc
│     │     │  │  │  │     ├─ test_conversions.cpython-313.pyc
│     │     │  │  │  │     ├─ test_flow.cpython-313.pyc
│     │     │  │  │  │     ├─ test_graph_laplacian.cpython-313.pyc
│     │     │  │  │  │     ├─ test_matching.cpython-313.pyc
│     │     │  │  │  │     ├─ test_pydata_sparse.cpython-313.pyc
│     │     │  │  │  │     ├─ test_reordering.cpython-313.pyc
│     │     │  │  │  │     ├─ test_shortest_path.cpython-313.pyc
│     │     │  │  │  │     ├─ test_spanning_tree.cpython-313.pyc
│     │     │  │  │  │     ├─ test_traversal.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ _flow.cp313-win_amd64.dll.a
│     │     │  │  │  ├─ _flow.cp313-win_amd64.pyd
│     │     │  │  │  ├─ _laplacian.py
│     │     │  │  │  ├─ _matching.cp313-win_amd64.dll.a
│     │     │  │  │  ├─ _matching.cp313-win_amd64.pyd
│     │     │  │  │  ├─ _min_spanning_tree.cp313-win_amd64.dll.a
│     │     │  │  │  ├─ _min_spanning_tree.cp313-win_amd64.pyd
│     │     │  │  │  ├─ _reordering.cp313-win_amd64.dll.a
│     │     │  │  │  ├─ _reordering.cp313-win_amd64.pyd
│     │     │  │  │  ├─ _shortest_path.cp313-win_amd64.dll.a
│     │     │  │  │  ├─ _shortest_path.cp313-win_amd64.pyd
│     │     │  │  │  ├─ _tools.cp313-win_amd64.dll.a
│     │     │  │  │  ├─ _tools.cp313-win_amd64.pyd
│     │     │  │  │  ├─ _traversal.cp313-win_amd64.dll.a
│     │     │  │  │  ├─ _traversal.cp313-win_amd64.pyd
│     │     │  │  │  ├─ _validation.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ _laplacian.cpython-313.pyc
│     │     │  │  │     ├─ _validation.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ csr.py
│     │     │  │  ├─ data.py
│     │     │  │  ├─ dia.py
│     │     │  │  ├─ dok.py
│     │     │  │  ├─ extract.py
│     │     │  │  ├─ lil.py
│     │     │  │  ├─ linalg
│     │     │  │  │  ├─ dsolve.py
│     │     │  │  │  ├─ eigen.py
│     │     │  │  │  ├─ interface.py
│     │     │  │  │  ├─ isolve.py
│     │     │  │  │  ├─ matfuncs.py
│     │     │  │  │  ├─ tests
│     │     │  │  │  │  ├─ propack_test_data.npz
│     │     │  │  │  │  ├─ test_expm_multiply.py
│     │     │  │  │  │  ├─ test_interface.py
│     │     │  │  │  │  ├─ test_matfuncs.py
│     │     │  │  │  │  ├─ test_norm.py
│     │     │  │  │  │  ├─ test_onenormest.py
│     │     │  │  │  │  ├─ test_propack.py
│     │     │  │  │  │  ├─ test_pydata_sparse.py
│     │     │  │  │  │  ├─ test_special_sparse_arrays.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ test_expm_multiply.cpython-313.pyc
│     │     │  │  │  │     ├─ test_interface.cpython-313.pyc
│     │     │  │  │  │     ├─ test_matfuncs.cpython-313.pyc
│     │     │  │  │  │     ├─ test_norm.cpython-313.pyc
│     │     │  │  │  │     ├─ test_onenormest.cpython-313.pyc
│     │     │  │  │  │     ├─ test_propack.cpython-313.pyc
│     │     │  │  │  │     ├─ test_pydata_sparse.cpython-313.pyc
│     │     │  │  │  │     ├─ test_special_sparse_arrays.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ _dsolve
│     │     │  │  │  │  ├─ linsolve.py
│     │     │  │  │  │  ├─ tests
│     │     │  │  │  │  │  ├─ test_linsolve.py
│     │     │  │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  │  └─ __pycache__
│     │     │  │  │  │  │     ├─ test_linsolve.cpython-313.pyc
│     │     │  │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  │  ├─ _add_newdocs.py
│     │     │  │  │  │  ├─ _superlu.cp313-win_amd64.dll.a
│     │     │  │  │  │  ├─ _superlu.cp313-win_amd64.pyd
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ linsolve.cpython-313.pyc
│     │     │  │  │  │     ├─ _add_newdocs.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ _eigen
│     │     │  │  │  │  ├─ arpack
│     │     │  │  │  │  │  ├─ arpack.py
│     │     │  │  │  │  │  ├─ COPYING
│     │     │  │  │  │  │  ├─ tests
│     │     │  │  │  │  │  │  ├─ test_arpack.py
│     │     │  │  │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  │  │  └─ __pycache__
│     │     │  │  │  │  │  │     ├─ test_arpack.cpython-313.pyc
│     │     │  │  │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  │  │  ├─ _arpack.cp313-win_amd64.dll.a
│     │     │  │  │  │  │  ├─ _arpack.cp313-win_amd64.pyd
│     │     │  │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  │  └─ __pycache__
│     │     │  │  │  │  │     ├─ arpack.cpython-313.pyc
│     │     │  │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  │  ├─ lobpcg
│     │     │  │  │  │  │  ├─ lobpcg.py
│     │     │  │  │  │  │  ├─ tests
│     │     │  │  │  │  │  │  ├─ test_lobpcg.py
│     │     │  │  │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  │  │  └─ __pycache__
│     │     │  │  │  │  │  │     ├─ test_lobpcg.cpython-313.pyc
│     │     │  │  │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  │  └─ __pycache__
│     │     │  │  │  │  │     ├─ lobpcg.cpython-313.pyc
│     │     │  │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  │  ├─ tests
│     │     │  │  │  │  │  ├─ test_svds.py
│     │     │  │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  │  └─ __pycache__
│     │     │  │  │  │  │     ├─ test_svds.cpython-313.pyc
│     │     │  │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  │  ├─ _svds.py
│     │     │  │  │  │  ├─ _svds_doc.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ _svds.cpython-313.pyc
│     │     │  │  │  │     ├─ _svds_doc.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ _expm_multiply.py
│     │     │  │  │  ├─ _interface.py
│     │     │  │  │  ├─ _isolve
│     │     │  │  │  │  ├─ iterative.py
│     │     │  │  │  │  ├─ lgmres.py
│     │     │  │  │  │  ├─ lsmr.py
│     │     │  │  │  │  ├─ lsqr.py
│     │     │  │  │  │  ├─ minres.py
│     │     │  │  │  │  ├─ tests
│     │     │  │  │  │  │  ├─ test_gcrotmk.py
│     │     │  │  │  │  │  ├─ test_iterative.py
│     │     │  │  │  │  │  ├─ test_lgmres.py
│     │     │  │  │  │  │  ├─ test_lsmr.py
│     │     │  │  │  │  │  ├─ test_lsqr.py
│     │     │  │  │  │  │  ├─ test_minres.py
│     │     │  │  │  │  │  ├─ test_utils.py
│     │     │  │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  │  └─ __pycache__
│     │     │  │  │  │  │     ├─ test_gcrotmk.cpython-313.pyc
│     │     │  │  │  │  │     ├─ test_iterative.cpython-313.pyc
│     │     │  │  │  │  │     ├─ test_lgmres.cpython-313.pyc
│     │     │  │  │  │  │     ├─ test_lsmr.cpython-313.pyc
│     │     │  │  │  │  │     ├─ test_lsqr.cpython-313.pyc
│     │     │  │  │  │  │     ├─ test_minres.cpython-313.pyc
│     │     │  │  │  │  │     ├─ test_utils.cpython-313.pyc
│     │     │  │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  │  ├─ tfqmr.py
│     │     │  │  │  │  ├─ utils.py
│     │     │  │  │  │  ├─ _gcrotmk.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ iterative.cpython-313.pyc
│     │     │  │  │  │     ├─ lgmres.cpython-313.pyc
│     │     │  │  │  │     ├─ lsmr.cpython-313.pyc
│     │     │  │  │  │     ├─ lsqr.cpython-313.pyc
│     │     │  │  │  │     ├─ minres.cpython-313.pyc
│     │     │  │  │  │     ├─ tfqmr.cpython-313.pyc
│     │     │  │  │  │     ├─ utils.cpython-313.pyc
│     │     │  │  │  │     ├─ _gcrotmk.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ _matfuncs.py
│     │     │  │  │  ├─ _norm.py
│     │     │  │  │  ├─ _onenormest.py
│     │     │  │  │  ├─ _propack
│     │     │  │  │  │  ├─ _cpropack.cp313-win_amd64.dll.a
│     │     │  │  │  │  ├─ _cpropack.cp313-win_amd64.pyd
│     │     │  │  │  │  ├─ _dpropack.cp313-win_amd64.dll.a
│     │     │  │  │  │  ├─ _dpropack.cp313-win_amd64.pyd
│     │     │  │  │  │  ├─ _spropack.cp313-win_amd64.dll.a
│     │     │  │  │  │  ├─ _spropack.cp313-win_amd64.pyd
│     │     │  │  │  │  ├─ _zpropack.cp313-win_amd64.dll.a
│     │     │  │  │  │  └─ _zpropack.cp313-win_amd64.pyd
│     │     │  │  │  ├─ _special_sparse_arrays.py
│     │     │  │  │  ├─ _svdp.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ dsolve.cpython-313.pyc
│     │     │  │  │     ├─ eigen.cpython-313.pyc
│     │     │  │  │     ├─ interface.cpython-313.pyc
│     │     │  │  │     ├─ isolve.cpython-313.pyc
│     │     │  │  │     ├─ matfuncs.cpython-313.pyc
│     │     │  │  │     ├─ _expm_multiply.cpython-313.pyc
│     │     │  │  │     ├─ _interface.cpython-313.pyc
│     │     │  │  │     ├─ _matfuncs.cpython-313.pyc
│     │     │  │  │     ├─ _norm.cpython-313.pyc
│     │     │  │  │     ├─ _onenormest.cpython-313.pyc
│     │     │  │  │     ├─ _special_sparse_arrays.cpython-313.pyc
│     │     │  │  │     ├─ _svdp.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ sparsetools.py
│     │     │  │  ├─ spfuncs.py
│     │     │  │  ├─ sputils.py
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ data
│     │     │  │  │  │  ├─ csc_py2.npz
│     │     │  │  │  │  └─ csc_py3.npz
│     │     │  │  │  ├─ test_arithmetic1d.py
│     │     │  │  │  ├─ test_array_api.py
│     │     │  │  │  ├─ test_base.py
│     │     │  │  │  ├─ test_common1d.py
│     │     │  │  │  ├─ test_construct.py
│     │     │  │  │  ├─ test_coo.py
│     │     │  │  │  ├─ test_csc.py
│     │     │  │  │  ├─ test_csr.py
│     │     │  │  │  ├─ test_dok.py
│     │     │  │  │  ├─ test_extract.py
│     │     │  │  │  ├─ test_indexing1d.py
│     │     │  │  │  ├─ test_matrix_io.py
│     │     │  │  │  ├─ test_minmax1d.py
│     │     │  │  │  ├─ test_sparsetools.py
│     │     │  │  │  ├─ test_spfuncs.py
│     │     │  │  │  ├─ test_sputils.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ test_arithmetic1d.cpython-313.pyc
│     │     │  │  │     ├─ test_array_api.cpython-313.pyc
│     │     │  │  │     ├─ test_base.cpython-313.pyc
│     │     │  │  │     ├─ test_common1d.cpython-313.pyc
│     │     │  │  │     ├─ test_construct.cpython-313.pyc
│     │     │  │  │     ├─ test_coo.cpython-313.pyc
│     │     │  │  │     ├─ test_csc.cpython-313.pyc
│     │     │  │  │     ├─ test_csr.cpython-313.pyc
│     │     │  │  │     ├─ test_dok.cpython-313.pyc
│     │     │  │  │     ├─ test_extract.cpython-313.pyc
│     │     │  │  │     ├─ test_indexing1d.cpython-313.pyc
│     │     │  │  │     ├─ test_matrix_io.cpython-313.pyc
│     │     │  │  │     ├─ test_minmax1d.cpython-313.pyc
│     │     │  │  │     ├─ test_sparsetools.cpython-313.pyc
│     │     │  │  │     ├─ test_spfuncs.cpython-313.pyc
│     │     │  │  │     ├─ test_sputils.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _base.py
│     │     │  │  ├─ _bsr.py
│     │     │  │  ├─ _compressed.py
│     │     │  │  ├─ _construct.py
│     │     │  │  ├─ _coo.py
│     │     │  │  ├─ _csc.py
│     │     │  │  ├─ _csparsetools.cp313-win_amd64.dll.a
│     │     │  │  ├─ _csparsetools.cp313-win_amd64.pyd
│     │     │  │  ├─ _csr.py
│     │     │  │  ├─ _data.py
│     │     │  │  ├─ _dia.py
│     │     │  │  ├─ _dok.py
│     │     │  │  ├─ _extract.py
│     │     │  │  ├─ _index.py
│     │     │  │  ├─ _lil.py
│     │     │  │  ├─ _matrix.py
│     │     │  │  ├─ _matrix_io.py
│     │     │  │  ├─ _sparsetools.cp313-win_amd64.dll.a
│     │     │  │  ├─ _sparsetools.cp313-win_amd64.pyd
│     │     │  │  ├─ _spfuncs.py
│     │     │  │  ├─ _sputils.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ base.cpython-313.pyc
│     │     │  │     ├─ bsr.cpython-313.pyc
│     │     │  │     ├─ compressed.cpython-313.pyc
│     │     │  │     ├─ construct.cpython-313.pyc
│     │     │  │     ├─ coo.cpython-313.pyc
│     │     │  │     ├─ csc.cpython-313.pyc
│     │     │  │     ├─ csr.cpython-313.pyc
│     │     │  │     ├─ data.cpython-313.pyc
│     │     │  │     ├─ dia.cpython-313.pyc
│     │     │  │     ├─ dok.cpython-313.pyc
│     │     │  │     ├─ extract.cpython-313.pyc
│     │     │  │     ├─ lil.cpython-313.pyc
│     │     │  │     ├─ sparsetools.cpython-313.pyc
│     │     │  │     ├─ spfuncs.cpython-313.pyc
│     │     │  │     ├─ sputils.cpython-313.pyc
│     │     │  │     ├─ _base.cpython-313.pyc
│     │     │  │     ├─ _bsr.cpython-313.pyc
│     │     │  │     ├─ _compressed.cpython-313.pyc
│     │     │  │     ├─ _construct.cpython-313.pyc
│     │     │  │     ├─ _coo.cpython-313.pyc
│     │     │  │     ├─ _csc.cpython-313.pyc
│     │     │  │     ├─ _csr.cpython-313.pyc
│     │     │  │     ├─ _data.cpython-313.pyc
│     │     │  │     ├─ _dia.cpython-313.pyc
│     │     │  │     ├─ _dok.cpython-313.pyc
│     │     │  │     ├─ _extract.cpython-313.pyc
│     │     │  │     ├─ _index.cpython-313.pyc
│     │     │  │     ├─ _lil.cpython-313.pyc
│     │     │  │     ├─ _matrix.cpython-313.pyc
│     │     │  │     ├─ _matrix_io.cpython-313.pyc
│     │     │  │     ├─ _spfuncs.cpython-313.pyc
│     │     │  │     ├─ _sputils.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ spatial
│     │     │  │  ├─ ckdtree.py
│     │     │  │  ├─ kdtree.py
│     │     │  │  ├─ qhull.py
│     │     │  │  ├─ qhull_src
│     │     │  │  │  └─ COPYING_QHULL.txt
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ data
│     │     │  │  │  │  ├─ degenerate_pointset.npz
│     │     │  │  │  │  ├─ iris.txt
│     │     │  │  │  │  ├─ random-bool-data.txt
│     │     │  │  │  │  ├─ random-double-data.txt
│     │     │  │  │  │  ├─ random-int-data.txt
│     │     │  │  │  │  ├─ random-uint-data.txt
│     │     │  │  │  │  └─ selfdual-4d-polytope.txt
│     │     │  │  │  ├─ test_hausdorff.py
│     │     │  │  │  ├─ test_kdtree.py
│     │     │  │  │  ├─ test_qhull.py
│     │     │  │  │  ├─ test_slerp.py
│     │     │  │  │  ├─ test_spherical_voronoi.py
│     │     │  │  │  ├─ test__plotutils.py
│     │     │  │  │  ├─ test__procrustes.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ test_hausdorff.cpython-313.pyc
│     │     │  │  │     ├─ test_kdtree.cpython-313.pyc
│     │     │  │  │     ├─ test_qhull.cpython-313.pyc
│     │     │  │  │     ├─ test_slerp.cpython-313.pyc
│     │     │  │  │     ├─ test_spherical_voronoi.cpython-313.pyc
│     │     │  │  │     ├─ test__plotutils.cpython-313.pyc
│     │     │  │  │     ├─ test__procrustes.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ transform
│     │     │  │  │  ├─ rotation.py
│     │     │  │  │  ├─ tests
│     │     │  │  │  │  ├─ test_rigid_transform.py
│     │     │  │  │  │  ├─ test_rotation.py
│     │     │  │  │  │  ├─ test_rotation_groups.py
│     │     │  │  │  │  ├─ test_rotation_spline.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ test_rigid_transform.cpython-313.pyc
│     │     │  │  │  │     ├─ test_rotation.cpython-313.pyc
│     │     │  │  │  │     ├─ test_rotation_groups.cpython-313.pyc
│     │     │  │  │  │     ├─ test_rotation_spline.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ _rigid_transform.cp313-win_amd64.dll.a
│     │     │  │  │  ├─ _rigid_transform.cp313-win_amd64.pyd
│     │     │  │  │  ├─ _rotation.cp313-win_amd64.dll.a
│     │     │  │  │  ├─ _rotation.cp313-win_amd64.pyd
│     │     │  │  │  ├─ _rotation_groups.py
│     │     │  │  │  ├─ _rotation_spline.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ rotation.cpython-313.pyc
│     │     │  │  │     ├─ _rotation_groups.cpython-313.pyc
│     │     │  │  │     ├─ _rotation_spline.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _ckdtree.cp313-win_amd64.dll.a
│     │     │  │  ├─ _ckdtree.cp313-win_amd64.pyd
│     │     │  │  ├─ _geometric_slerp.py
│     │     │  │  ├─ _hausdorff.cp313-win_amd64.dll.a
│     │     │  │  ├─ _hausdorff.cp313-win_amd64.pyd
│     │     │  │  ├─ _kdtree.py
│     │     │  │  ├─ _plotutils.py
│     │     │  │  ├─ _procrustes.py
│     │     │  │  ├─ _qhull.cp313-win_amd64.dll.a
│     │     │  │  ├─ _qhull.cp313-win_amd64.pyd
│     │     │  │  ├─ _qhull.pyi
│     │     │  │  ├─ _spherical_voronoi.py
│     │     │  │  ├─ _voronoi.cp313-win_amd64.dll.a
│     │     │  │  ├─ _voronoi.cp313-win_amd64.pyd
│     │     │  │  ├─ _voronoi.pyi
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ ckdtree.cpython-313.pyc
│     │     │  │     ├─ kdtree.cpython-313.pyc
│     │     │  │     ├─ qhull.cpython-313.pyc
│     │     │  │     ├─ _geometric_slerp.cpython-313.pyc
│     │     │  │     ├─ _kdtree.cpython-313.pyc
│     │     │  │     ├─ _plotutils.cpython-313.pyc
│     │     │  │     ├─ _procrustes.cpython-313.pyc
│     │     │  │     ├─ _spherical_voronoi.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ special
│     │     │  │  ├─ add_newdocs.py
│     │     │  │  ├─ basic.py
│     │     │  │  ├─ cython_special.cp313-win_amd64.dll.a
│     │     │  │  ├─ cython_special.cp313-win_amd64.pyd
│     │     │  │  ├─ cython_special.pxd
│     │     │  │  ├─ cython_special.pyi
│     │     │  │  ├─ orthogonal.py
│     │     │  │  ├─ sf_error.py
│     │     │  │  ├─ specfun.py
│     │     │  │  ├─ spfun_stats.py
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ data
│     │     │  │  │  │  ├─ boost.npz
│     │     │  │  │  │  ├─ gsl.npz
│     │     │  │  │  │  ├─ local.npz
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ test_basic.py
│     │     │  │  │  ├─ test_bdtr.py
│     │     │  │  │  ├─ test_boost_ufuncs.py
│     │     │  │  │  ├─ test_boxcox.py
│     │     │  │  │  ├─ test_cdflib.py
│     │     │  │  │  ├─ test_cdft_asymptotic.py
│     │     │  │  │  ├─ test_cephes_intp_cast.py
│     │     │  │  │  ├─ test_cython_special.py
│     │     │  │  │  ├─ test_data.py
│     │     │  │  │  ├─ test_dd.py
│     │     │  │  │  ├─ test_digamma.py
│     │     │  │  │  ├─ test_ellip_harm.py
│     │     │  │  │  ├─ test_erfinv.py
│     │     │  │  │  ├─ test_exponential_integrals.py
│     │     │  │  │  ├─ test_extending.py
│     │     │  │  │  ├─ test_faddeeva.py
│     │     │  │  │  ├─ test_gamma.py
│     │     │  │  │  ├─ test_gammainc.py
│     │     │  │  │  ├─ test_hyp2f1.py
│     │     │  │  │  ├─ test_hypergeometric.py
│     │     │  │  │  ├─ test_iv_ratio.py
│     │     │  │  │  ├─ test_kolmogorov.py
│     │     │  │  │  ├─ test_lambertw.py
│     │     │  │  │  ├─ test_legendre.py
│     │     │  │  │  ├─ test_log1mexp.py
│     │     │  │  │  ├─ test_loggamma.py
│     │     │  │  │  ├─ test_logit.py
│     │     │  │  │  ├─ test_mpmath.py
│     │     │  │  │  ├─ test_nan_inputs.py
│     │     │  │  │  ├─ test_ndtr.py
│     │     │  │  │  ├─ test_ndtri_exp.py
│     │     │  │  │  ├─ test_orthogonal.py
│     │     │  │  │  ├─ test_orthogonal_eval.py
│     │     │  │  │  ├─ test_owens_t.py
│     │     │  │  │  ├─ test_pcf.py
│     │     │  │  │  ├─ test_pdtr.py
│     │     │  │  │  ├─ test_powm1.py
│     │     │  │  │  ├─ test_precompute_expn_asy.py
│     │     │  │  │  ├─ test_precompute_gammainc.py
│     │     │  │  │  ├─ test_precompute_utils.py
│     │     │  │  │  ├─ test_round.py
│     │     │  │  │  ├─ test_sf_error.py
│     │     │  │  │  ├─ test_sici.py
│     │     │  │  │  ├─ test_specfun.py
│     │     │  │  │  ├─ test_spence.py
│     │     │  │  │  ├─ test_spfun_stats.py
│     │     │  │  │  ├─ test_spherical_bessel.py
│     │     │  │  │  ├─ test_sph_harm.py
│     │     │  │  │  ├─ test_support_alternative_backends.py
│     │     │  │  │  ├─ test_trig.py
│     │     │  │  │  ├─ test_ufunc_signatures.py
│     │     │  │  │  ├─ test_wrightomega.py
│     │     │  │  │  ├─ test_wright_bessel.py
│     │     │  │  │  ├─ test_zeta.py
│     │     │  │  │  ├─ _cython_examples
│     │     │  │  │  │  ├─ extending.pyx
│     │     │  │  │  │  └─ meson.build
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ test_basic.cpython-313.pyc
│     │     │  │  │     ├─ test_bdtr.cpython-313.pyc
│     │     │  │  │     ├─ test_boost_ufuncs.cpython-313.pyc
│     │     │  │  │     ├─ test_boxcox.cpython-313.pyc
│     │     │  │  │     ├─ test_cdflib.cpython-313.pyc
│     │     │  │  │     ├─ test_cdft_asymptotic.cpython-313.pyc
│     │     │  │  │     ├─ test_cephes_intp_cast.cpython-313.pyc
│     │     │  │  │     ├─ test_cython_special.cpython-313.pyc
│     │     │  │  │     ├─ test_data.cpython-313.pyc
│     │     │  │  │     ├─ test_dd.cpython-313.pyc
│     │     │  │  │     ├─ test_digamma.cpython-313.pyc
│     │     │  │  │     ├─ test_ellip_harm.cpython-313.pyc
│     │     │  │  │     ├─ test_erfinv.cpython-313.pyc
│     │     │  │  │     ├─ test_exponential_integrals.cpython-313.pyc
│     │     │  │  │     ├─ test_extending.cpython-313.pyc
│     │     │  │  │     ├─ test_faddeeva.cpython-313.pyc
│     │     │  │  │     ├─ test_gamma.cpython-313.pyc
│     │     │  │  │     ├─ test_gammainc.cpython-313.pyc
│     │     │  │  │     ├─ test_hyp2f1.cpython-313.pyc
│     │     │  │  │     ├─ test_hypergeometric.cpython-313.pyc
│     │     │  │  │     ├─ test_iv_ratio.cpython-313.pyc
│     │     │  │  │     ├─ test_kolmogorov.cpython-313.pyc
│     │     │  │  │     ├─ test_lambertw.cpython-313.pyc
│     │     │  │  │     ├─ test_legendre.cpython-313.pyc
│     │     │  │  │     ├─ test_log1mexp.cpython-313.pyc
│     │     │  │  │     ├─ test_loggamma.cpython-313.pyc
│     │     │  │  │     ├─ test_logit.cpython-313.pyc
│     │     │  │  │     ├─ test_mpmath.cpython-313.pyc
│     │     │  │  │     ├─ test_nan_inputs.cpython-313.pyc
│     │     │  │  │     ├─ test_ndtr.cpython-313.pyc
│     │     │  │  │     ├─ test_ndtri_exp.cpython-313.pyc
│     │     │  │  │     ├─ test_orthogonal.cpython-313.pyc
│     │     │  │  │     ├─ test_orthogonal_eval.cpython-313.pyc
│     │     │  │  │     ├─ test_owens_t.cpython-313.pyc
│     │     │  │  │     ├─ test_pcf.cpython-313.pyc
│     │     │  │  │     ├─ test_pdtr.cpython-313.pyc
│     │     │  │  │     ├─ test_powm1.cpython-313.pyc
│     │     │  │  │     ├─ test_precompute_expn_asy.cpython-313.pyc
│     │     │  │  │     ├─ test_precompute_gammainc.cpython-313.pyc
│     │     │  │  │     ├─ test_precompute_utils.cpython-313.pyc
│     │     │  │  │     ├─ test_round.cpython-313.pyc
│     │     │  │  │     ├─ test_sf_error.cpython-313.pyc
│     │     │  │  │     ├─ test_sici.cpython-313.pyc
│     │     │  │  │     ├─ test_specfun.cpython-313.pyc
│     │     │  │  │     ├─ test_spence.cpython-313.pyc
│     │     │  │  │     ├─ test_spfun_stats.cpython-313.pyc
│     │     │  │  │     ├─ test_spherical_bessel.cpython-313.pyc
│     │     │  │  │     ├─ test_sph_harm.cpython-313.pyc
│     │     │  │  │     ├─ test_support_alternative_backends.cpython-313.pyc
│     │     │  │  │     ├─ test_trig.cpython-313.pyc
│     │     │  │  │     ├─ test_ufunc_signatures.cpython-313.pyc
│     │     │  │  │     ├─ test_wrightomega.cpython-313.pyc
│     │     │  │  │     ├─ test_wright_bessel.cpython-313.pyc
│     │     │  │  │     ├─ test_zeta.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _add_newdocs.py
│     │     │  │  ├─ _basic.py
│     │     │  │  ├─ _comb.cp313-win_amd64.dll.a
│     │     │  │  ├─ _comb.cp313-win_amd64.pyd
│     │     │  │  ├─ _ellip_harm.py
│     │     │  │  ├─ _ellip_harm_2.cp313-win_amd64.dll.a
│     │     │  │  ├─ _ellip_harm_2.cp313-win_amd64.pyd
│     │     │  │  ├─ _gufuncs.cp313-win_amd64.dll.a
│     │     │  │  ├─ _gufuncs.cp313-win_amd64.pyd
│     │     │  │  ├─ _input_validation.py
│     │     │  │  ├─ _lambertw.py
│     │     │  │  ├─ _mptestutils.py
│     │     │  │  ├─ _multiufuncs.py
│     │     │  │  ├─ _orthogonal.py
│     │     │  │  ├─ _orthogonal.pyi
│     │     │  │  ├─ _precompute
│     │     │  │  │  ├─ cosine_cdf.py
│     │     │  │  │  ├─ expn_asy.py
│     │     │  │  │  ├─ gammainc_asy.py
│     │     │  │  │  ├─ gammainc_data.py
│     │     │  │  │  ├─ hyp2f1_data.py
│     │     │  │  │  ├─ lambertw.py
│     │     │  │  │  ├─ loggamma.py
│     │     │  │  │  ├─ struve_convergence.py
│     │     │  │  │  ├─ utils.py
│     │     │  │  │  ├─ wrightomega.py
│     │     │  │  │  ├─ wright_bessel.py
│     │     │  │  │  ├─ wright_bessel_data.py
│     │     │  │  │  ├─ zetac.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ cosine_cdf.cpython-313.pyc
│     │     │  │  │     ├─ expn_asy.cpython-313.pyc
│     │     │  │  │     ├─ gammainc_asy.cpython-313.pyc
│     │     │  │  │     ├─ gammainc_data.cpython-313.pyc
│     │     │  │  │     ├─ hyp2f1_data.cpython-313.pyc
│     │     │  │  │     ├─ lambertw.cpython-313.pyc
│     │     │  │  │     ├─ loggamma.cpython-313.pyc
│     │     │  │  │     ├─ struve_convergence.cpython-313.pyc
│     │     │  │  │     ├─ utils.cpython-313.pyc
│     │     │  │  │     ├─ wrightomega.cpython-313.pyc
│     │     │  │  │     ├─ wright_bessel.cpython-313.pyc
│     │     │  │  │     ├─ wright_bessel_data.cpython-313.pyc
│     │     │  │  │     ├─ zetac.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _sf_error.py
│     │     │  │  ├─ _specfun.cp313-win_amd64.dll.a
│     │     │  │  ├─ _specfun.cp313-win_amd64.pyd
│     │     │  │  ├─ _special_ufuncs.cp313-win_amd64.dll.a
│     │     │  │  ├─ _special_ufuncs.cp313-win_amd64.pyd
│     │     │  │  ├─ _spfun_stats.py
│     │     │  │  ├─ _spherical_bessel.py
│     │     │  │  ├─ _support_alternative_backends.py
│     │     │  │  ├─ _testutils.py
│     │     │  │  ├─ _test_internal.cp313-win_amd64.dll.a
│     │     │  │  ├─ _test_internal.cp313-win_amd64.pyd
│     │     │  │  ├─ _test_internal.pyi
│     │     │  │  ├─ _ufuncs.cp313-win_amd64.dll.a
│     │     │  │  ├─ _ufuncs.cp313-win_amd64.pyd
│     │     │  │  ├─ _ufuncs.pyi
│     │     │  │  ├─ _ufuncs.pyx
│     │     │  │  ├─ _ufuncs_cxx.cp313-win_amd64.dll.a
│     │     │  │  ├─ _ufuncs_cxx.cp313-win_amd64.pyd
│     │     │  │  ├─ _ufuncs_cxx.pxd
│     │     │  │  ├─ _ufuncs_cxx.pyx
│     │     │  │  ├─ _ufuncs_cxx_defs.h
│     │     │  │  ├─ _ufuncs_defs.h
│     │     │  │  ├─ __init__.pxd
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ add_newdocs.cpython-313.pyc
│     │     │  │     ├─ basic.cpython-313.pyc
│     │     │  │     ├─ orthogonal.cpython-313.pyc
│     │     │  │     ├─ sf_error.cpython-313.pyc
│     │     │  │     ├─ specfun.cpython-313.pyc
│     │     │  │     ├─ spfun_stats.cpython-313.pyc
│     │     │  │     ├─ _add_newdocs.cpython-313.pyc
│     │     │  │     ├─ _basic.cpython-313.pyc
│     │     │  │     ├─ _ellip_harm.cpython-313.pyc
│     │     │  │     ├─ _input_validation.cpython-313.pyc
│     │     │  │     ├─ _lambertw.cpython-313.pyc
│     │     │  │     ├─ _mptestutils.cpython-313.pyc
│     │     │  │     ├─ _multiufuncs.cpython-313.pyc
│     │     │  │     ├─ _orthogonal.cpython-313.pyc
│     │     │  │     ├─ _sf_error.cpython-313.pyc
│     │     │  │     ├─ _spfun_stats.cpython-313.pyc
│     │     │  │     ├─ _spherical_bessel.cpython-313.pyc
│     │     │  │     ├─ _support_alternative_backends.cpython-313.pyc
│     │     │  │     ├─ _testutils.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ stats
│     │     │  │  ├─ biasedurn.py
│     │     │  │  ├─ contingency.py
│     │     │  │  ├─ kde.py
│     │     │  │  ├─ morestats.py
│     │     │  │  ├─ mstats.py
│     │     │  │  ├─ mstats_basic.py
│     │     │  │  ├─ mstats_extras.py
│     │     │  │  ├─ mvn.py
│     │     │  │  ├─ qmc.py
│     │     │  │  ├─ sampling.py
│     │     │  │  ├─ stats.py
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ common_tests.py
│     │     │  │  │  ├─ data
│     │     │  │  │  │  ├─ fisher_exact_results_from_r.py
│     │     │  │  │  │  ├─ jf_skew_t_gamlss_pdf_data.npy
│     │     │  │  │  │  ├─ levy_stable
│     │     │  │  │  │  │  ├─ stable-loc-scale-sample-data.npy
│     │     │  │  │  │  │  ├─ stable-Z1-cdf-sample-data.npy
│     │     │  │  │  │  │  └─ stable-Z1-pdf-sample-data.npy
│     │     │  │  │  │  ├─ nist_anova
│     │     │  │  │  │  │  ├─ AtmWtAg.dat
│     │     │  │  │  │  │  ├─ SiRstv.dat
│     │     │  │  │  │  │  ├─ SmLs01.dat
│     │     │  │  │  │  │  ├─ SmLs02.dat
│     │     │  │  │  │  │  ├─ SmLs03.dat
│     │     │  │  │  │  │  ├─ SmLs04.dat
│     │     │  │  │  │  │  ├─ SmLs05.dat
│     │     │  │  │  │  │  ├─ SmLs06.dat
│     │     │  │  │  │  │  ├─ SmLs07.dat
│     │     │  │  │  │  │  ├─ SmLs08.dat
│     │     │  │  │  │  │  └─ SmLs09.dat
│     │     │  │  │  │  ├─ nist_linregress
│     │     │  │  │  │  │  └─ Norris.dat
│     │     │  │  │  │  ├─ rel_breitwigner_pdf_sample_data_ROOT.npy
│     │     │  │  │  │  ├─ studentized_range_mpmath_ref.json
│     │     │  │  │  │  ├─ _mvt.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ fisher_exact_results_from_r.cpython-313.pyc
│     │     │  │  │  │     └─ _mvt.cpython-313.pyc
│     │     │  │  │  ├─ test_axis_nan_policy.py
│     │     │  │  │  ├─ test_binned_statistic.py
│     │     │  │  │  ├─ test_censored_data.py
│     │     │  │  │  ├─ test_contingency.py
│     │     │  │  │  ├─ test_continued_fraction.py
│     │     │  │  │  ├─ test_continuous.py
│     │     │  │  │  ├─ test_continuous_basic.py
│     │     │  │  │  ├─ test_continuous_fit_censored.py
│     │     │  │  │  ├─ test_correlation.py
│     │     │  │  │  ├─ test_crosstab.py
│     │     │  │  │  ├─ test_discrete_basic.py
│     │     │  │  │  ├─ test_entropy.py
│     │     │  │  │  ├─ test_fast_gen_inversion.py
│     │     │  │  │  ├─ test_fit.py
│     │     │  │  │  ├─ test_hypotests.py
│     │     │  │  │  ├─ test_kdeoth.py
│     │     │  │  │  ├─ test_marray.py
│     │     │  │  │  ├─ test_mgc.py
│     │     │  │  │  ├─ test_morestats.py
│     │     │  │  │  ├─ test_mstats_basic.py
│     │     │  │  │  ├─ test_mstats_extras.py
│     │     │  │  │  ├─ test_multicomp.py
│     │     │  │  │  ├─ test_multivariate.py
│     │     │  │  │  ├─ test_odds_ratio.py
│     │     │  │  │  ├─ test_qmc.py
│     │     │  │  │  ├─ test_quantile.py
│     │     │  │  │  ├─ test_rank.py
│     │     │  │  │  ├─ test_relative_risk.py
│     │     │  │  │  ├─ test_resampling.py
│     │     │  │  │  ├─ test_sampling.py
│     │     │  │  │  ├─ test_sensitivity_analysis.py
│     │     │  │  │  ├─ test_stats.py
│     │     │  │  │  ├─ test_survival.py
│     │     │  │  │  ├─ test_tukeylambda_stats.py
│     │     │  │  │  ├─ test_variation.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ common_tests.cpython-313.pyc
│     │     │  │  │     ├─ test_axis_nan_policy.cpython-313.pyc
│     │     │  │  │     ├─ test_binned_statistic.cpython-313.pyc
│     │     │  │  │     ├─ test_censored_data.cpython-313.pyc
│     │     │  │  │     ├─ test_contingency.cpython-313.pyc
│     │     │  │  │     ├─ test_continued_fraction.cpython-313.pyc
│     │     │  │  │     ├─ test_continuous.cpython-313.pyc
│     │     │  │  │     ├─ test_continuous_basic.cpython-313.pyc
│     │     │  │  │     ├─ test_continuous_fit_censored.cpython-313.pyc
│     │     │  │  │     ├─ test_correlation.cpython-313.pyc
│     │     │  │  │     ├─ test_crosstab.cpython-313.pyc
│     │     │  │  │     ├─ test_discrete_basic.cpython-313.pyc
│     │     │  │  │     ├─ test_entropy.cpython-313.pyc
│     │     │  │  │     ├─ test_fast_gen_inversion.cpython-313.pyc
│     │     │  │  │     ├─ test_fit.cpython-313.pyc
│     │     │  │  │     ├─ test_hypotests.cpython-313.pyc
│     │     │  │  │     ├─ test_kdeoth.cpython-313.pyc
│     │     │  │  │     ├─ test_marray.cpython-313.pyc
│     │     │  │  │     ├─ test_mgc.cpython-313.pyc
│     │     │  │  │     ├─ test_morestats.cpython-313.pyc
│     │     │  │  │     ├─ test_mstats_basic.cpython-313.pyc
│     │     │  │  │     ├─ test_mstats_extras.cpython-313.pyc
│     │     │  │  │     ├─ test_multicomp.cpython-313.pyc
│     │     │  │  │     ├─ test_multivariate.cpython-313.pyc
│     │     │  │  │     ├─ test_odds_ratio.cpython-313.pyc
│     │     │  │  │     ├─ test_qmc.cpython-313.pyc
│     │     │  │  │     ├─ test_quantile.cpython-313.pyc
│     │     │  │  │     ├─ test_rank.cpython-313.pyc
│     │     │  │  │     ├─ test_relative_risk.cpython-313.pyc
│     │     │  │  │     ├─ test_resampling.cpython-313.pyc
│     │     │  │  │     ├─ test_sampling.cpython-313.pyc
│     │     │  │  │     ├─ test_sensitivity_analysis.cpython-313.pyc
│     │     │  │  │     ├─ test_stats.cpython-313.pyc
│     │     │  │  │     ├─ test_survival.cpython-313.pyc
│     │     │  │  │     ├─ test_tukeylambda_stats.cpython-313.pyc
│     │     │  │  │     ├─ test_variation.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _ansari_swilk_statistics.cp313-win_amd64.dll.a
│     │     │  │  ├─ _ansari_swilk_statistics.cp313-win_amd64.pyd
│     │     │  │  ├─ _axis_nan_policy.py
│     │     │  │  ├─ _biasedurn.cp313-win_amd64.dll.a
│     │     │  │  ├─ _biasedurn.cp313-win_amd64.pyd
│     │     │  │  ├─ _biasedurn.pxd
│     │     │  │  ├─ _binned_statistic.py
│     │     │  │  ├─ _binomtest.py
│     │     │  │  ├─ _bws_test.py
│     │     │  │  ├─ _censored_data.py
│     │     │  │  ├─ _common.py
│     │     │  │  ├─ _constants.py
│     │     │  │  ├─ _continued_fraction.py
│     │     │  │  ├─ _correlation.py
│     │     │  │  ├─ _covariance.py
│     │     │  │  ├─ _crosstab.py
│     │     │  │  ├─ _entropy.py
│     │     │  │  ├─ _finite_differences.py
│     │     │  │  ├─ _fit.py
│     │     │  │  ├─ _hypotests.py
│     │     │  │  ├─ _kde.py
│     │     │  │  ├─ _ksstats.py
│     │     │  │  ├─ _levy_stable
│     │     │  │  │  ├─ levyst.cp313-win_amd64.dll.a
│     │     │  │  │  ├─ levyst.cp313-win_amd64.pyd
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _mannwhitneyu.py
│     │     │  │  ├─ _mgc.py
│     │     │  │  ├─ _morestats.py
│     │     │  │  ├─ _mstats_basic.py
│     │     │  │  ├─ _mstats_extras.py
│     │     │  │  ├─ _multicomp.py
│     │     │  │  ├─ _multivariate.py
│     │     │  │  ├─ _odds_ratio.py
│     │     │  │  ├─ _page_trend_test.py
│     │     │  │  ├─ _qmc.py
│     │     │  │  ├─ _qmc_cy.cp313-win_amd64.dll.a
│     │     │  │  ├─ _qmc_cy.cp313-win_amd64.pyd
│     │     │  │  ├─ _qmc_cy.pyi
│     │     │  │  ├─ _qmvnt.py
│     │     │  │  ├─ _qmvnt_cy.cp313-win_amd64.dll.a
│     │     │  │  ├─ _qmvnt_cy.cp313-win_amd64.pyd
│     │     │  │  ├─ _quantile.py
│     │     │  │  ├─ _rcont
│     │     │  │  │  ├─ rcont.cp313-win_amd64.dll.a
│     │     │  │  │  ├─ rcont.cp313-win_amd64.pyd
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _relative_risk.py
│     │     │  │  ├─ _resampling.py
│     │     │  │  ├─ _result_classes.py
│     │     │  │  ├─ _sampling.py
│     │     │  │  ├─ _sensitivity_analysis.py
│     │     │  │  ├─ _sobol.cp313-win_amd64.dll.a
│     │     │  │  ├─ _sobol.cp313-win_amd64.pyd
│     │     │  │  ├─ _sobol.pyi
│     │     │  │  ├─ _sobol_direction_numbers.npz
│     │     │  │  ├─ _stats.cp313-win_amd64.dll.a
│     │     │  │  ├─ _stats.cp313-win_amd64.pyd
│     │     │  │  ├─ _stats.pxd
│     │     │  │  ├─ _stats_mstats_common.py
│     │     │  │  ├─ _stats_py.py
│     │     │  │  ├─ _stats_pythran.cp313-win_amd64.dll.a
│     │     │  │  ├─ _stats_pythran.cp313-win_amd64.pyd
│     │     │  │  ├─ _survival.py
│     │     │  │  ├─ _tukeylambda_stats.py
│     │     │  │  ├─ _unuran
│     │     │  │  │  ├─ unuran_wrapper.cp313-win_amd64.dll.a
│     │     │  │  │  ├─ unuran_wrapper.cp313-win_amd64.pyd
│     │     │  │  │  ├─ unuran_wrapper.pyi
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _variation.py
│     │     │  │  ├─ _warnings_errors.py
│     │     │  │  ├─ _wilcoxon.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ biasedurn.cpython-313.pyc
│     │     │  │     ├─ contingency.cpython-313.pyc
│     │     │  │     ├─ kde.cpython-313.pyc
│     │     │  │     ├─ morestats.cpython-313.pyc
│     │     │  │     ├─ mstats.cpython-313.pyc
│     │     │  │     ├─ mstats_basic.cpython-313.pyc
│     │     │  │     ├─ mstats_extras.cpython-313.pyc
│     │     │  │     ├─ mvn.cpython-313.pyc
│     │     │  │     ├─ qmc.cpython-313.pyc
│     │     │  │     ├─ sampling.cpython-313.pyc
│     │     │  │     ├─ stats.cpython-313.pyc
│     │     │  │     ├─ _axis_nan_policy.cpython-313.pyc
│     │     │  │     ├─ _binned_statistic.cpython-313.pyc
│     │     │  │     ├─ _binomtest.cpython-313.pyc
│     │     │  │     ├─ _bws_test.cpython-313.pyc
│     │     │  │     ├─ _censored_data.cpython-313.pyc
│     │     │  │     ├─ _common.cpython-313.pyc
│     │     │  │     ├─ _constants.cpython-313.pyc
│     │     │  │     ├─ _continued_fraction.cpython-313.pyc
│     │     │  │     ├─ _correlation.cpython-313.pyc
│     │     │  │     ├─ _covariance.cpython-313.pyc
│     │     │  │     ├─ _crosstab.cpython-313.pyc
│     │     │  │     ├─ _entropy.cpython-313.pyc
│     │     │  │     ├─ _finite_differences.cpython-313.pyc
│     │     │  │     ├─ _fit.cpython-313.pyc
│     │     │  │     ├─ _hypotests.cpython-313.pyc
│     │     │  │     ├─ _kde.cpython-313.pyc
│     │     │  │     ├─ _ksstats.cpython-313.pyc
│     │     │  │     ├─ _mannwhitneyu.cpython-313.pyc
│     │     │  │     ├─ _mgc.cpython-313.pyc
│     │     │  │     ├─ _morestats.cpython-313.pyc
│     │     │  │     ├─ _mstats_basic.cpython-313.pyc
│     │     │  │     ├─ _mstats_extras.cpython-313.pyc
│     │     │  │     ├─ _multicomp.cpython-313.pyc
│     │     │  │     ├─ _multivariate.cpython-313.pyc
│     │     │  │     ├─ _odds_ratio.cpython-313.pyc
│     │     │  │     ├─ _page_trend_test.cpython-313.pyc
│     │     │  │     ├─ _qmc.cpython-313.pyc
│     │     │  │     ├─ _qmvnt.cpython-313.pyc
│     │     │  │     ├─ _quantile.cpython-313.pyc
│     │     │  │     ├─ _relative_risk.cpython-313.pyc
│     │     │  │     ├─ _resampling.cpython-313.pyc
│     │     │  │     ├─ _result_classes.cpython-313.pyc
│     │     │  │     ├─ _sampling.cpython-313.pyc
│     │     │  │     ├─ _sensitivity_analysis.cpython-313.pyc
│     │     │  │     ├─ _stats_mstats_common.cpython-313.pyc
│     │     │  │     ├─ _stats_py.cpython-313.pyc
│     │     │  │     ├─ _survival.cpython-313.pyc
│     │     │  │     ├─ _tukeylambda_stats.cpython-313.pyc
│     │     │  │     ├─ _variation.cpython-313.pyc
│     │     │  │     ├─ _warnings_errors.cpython-313.pyc
│     │     │  │     ├─ _wilcoxon.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ version.py
│     │     │  ├─ _cyutility.cp313-win_amd64.dll.a
│     │     │  ├─ _cyutility.cp313-win_amd64.pyd
│     │     │  ├─ _lib
│     │     │  │  ├─ array_api_compat
│     │     │  │  │  ├─ common
│     │     │  │  │  │  ├─ _aliases.py
│     │     │  │  │  │  ├─ _fft.py
│     │     │  │  │  │  ├─ _helpers.py
│     │     │  │  │  │  ├─ _linalg.py
│     │     │  │  │  │  ├─ _typing.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ _aliases.cpython-313.pyc
│     │     │  │  │  │     ├─ _fft.cpython-313.pyc
│     │     │  │  │  │     ├─ _helpers.cpython-313.pyc
│     │     │  │  │  │     ├─ _linalg.cpython-313.pyc
│     │     │  │  │  │     ├─ _typing.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ cupy
│     │     │  │  │  │  ├─ fft.py
│     │     │  │  │  │  ├─ linalg.py
│     │     │  │  │  │  ├─ _aliases.py
│     │     │  │  │  │  ├─ _info.py
│     │     │  │  │  │  ├─ _typing.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ fft.cpython-313.pyc
│     │     │  │  │  │     ├─ linalg.cpython-313.pyc
│     │     │  │  │  │     ├─ _aliases.cpython-313.pyc
│     │     │  │  │  │     ├─ _info.cpython-313.pyc
│     │     │  │  │  │     ├─ _typing.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ dask
│     │     │  │  │  │  ├─ array
│     │     │  │  │  │  │  ├─ fft.py
│     │     │  │  │  │  │  ├─ linalg.py
│     │     │  │  │  │  │  ├─ _aliases.py
│     │     │  │  │  │  │  ├─ _info.py
│     │     │  │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  │  └─ __pycache__
│     │     │  │  │  │  │     ├─ fft.cpython-313.pyc
│     │     │  │  │  │  │     ├─ linalg.cpython-313.pyc
│     │     │  │  │  │  │     ├─ _aliases.cpython-313.pyc
│     │     │  │  │  │  │     ├─ _info.cpython-313.pyc
│     │     │  │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ numpy
│     │     │  │  │  │  ├─ fft.py
│     │     │  │  │  │  ├─ linalg.py
│     │     │  │  │  │  ├─ _aliases.py
│     │     │  │  │  │  ├─ _info.py
│     │     │  │  │  │  ├─ _typing.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ fft.cpython-313.pyc
│     │     │  │  │  │     ├─ linalg.cpython-313.pyc
│     │     │  │  │  │     ├─ _aliases.cpython-313.pyc
│     │     │  │  │  │     ├─ _info.cpython-313.pyc
│     │     │  │  │  │     ├─ _typing.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ torch
│     │     │  │  │  │  ├─ fft.py
│     │     │  │  │  │  ├─ linalg.py
│     │     │  │  │  │  ├─ _aliases.py
│     │     │  │  │  │  ├─ _info.py
│     │     │  │  │  │  ├─ _typing.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ fft.cpython-313.pyc
│     │     │  │  │  │     ├─ linalg.cpython-313.pyc
│     │     │  │  │  │     ├─ _aliases.cpython-313.pyc
│     │     │  │  │  │     ├─ _info.cpython-313.pyc
│     │     │  │  │  │     ├─ _typing.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ _internal.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ _internal.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ array_api_extra
│     │     │  │  │  ├─ testing.py
│     │     │  │  │  ├─ _delegation.py
│     │     │  │  │  ├─ _lib
│     │     │  │  │  │  ├─ _at.py
│     │     │  │  │  │  ├─ _backends.py
│     │     │  │  │  │  ├─ _funcs.py
│     │     │  │  │  │  ├─ _lazy.py
│     │     │  │  │  │  ├─ _testing.py
│     │     │  │  │  │  ├─ _utils
│     │     │  │  │  │  │  ├─ _compat.py
│     │     │  │  │  │  │  ├─ _compat.pyi
│     │     │  │  │  │  │  ├─ _helpers.py
│     │     │  │  │  │  │  ├─ _typing.py
│     │     │  │  │  │  │  ├─ _typing.pyi
│     │     │  │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  │  └─ __pycache__
│     │     │  │  │  │  │     ├─ _compat.cpython-313.pyc
│     │     │  │  │  │  │     ├─ _helpers.cpython-313.pyc
│     │     │  │  │  │  │     ├─ _typing.cpython-313.pyc
│     │     │  │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ _at.cpython-313.pyc
│     │     │  │  │  │     ├─ _backends.cpython-313.pyc
│     │     │  │  │  │     ├─ _funcs.cpython-313.pyc
│     │     │  │  │  │     ├─ _lazy.cpython-313.pyc
│     │     │  │  │  │     ├─ _testing.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ testing.cpython-313.pyc
│     │     │  │  │     ├─ _delegation.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ cobyqa
│     │     │  │  │  ├─ framework.py
│     │     │  │  │  ├─ main.py
│     │     │  │  │  ├─ models.py
│     │     │  │  │  ├─ problem.py
│     │     │  │  │  ├─ settings.py
│     │     │  │  │  ├─ subsolvers
│     │     │  │  │  │  ├─ geometry.py
│     │     │  │  │  │  ├─ optim.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ geometry.cpython-313.pyc
│     │     │  │  │  │     ├─ optim.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ utils
│     │     │  │  │  │  ├─ exceptions.py
│     │     │  │  │  │  ├─ math.py
│     │     │  │  │  │  ├─ versions.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ exceptions.cpython-313.pyc
│     │     │  │  │  │     ├─ math.cpython-313.pyc
│     │     │  │  │  │     ├─ versions.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ framework.cpython-313.pyc
│     │     │  │  │     ├─ main.cpython-313.pyc
│     │     │  │  │     ├─ models.cpython-313.pyc
│     │     │  │  │     ├─ problem.cpython-313.pyc
│     │     │  │  │     ├─ settings.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ decorator.py
│     │     │  │  ├─ deprecation.py
│     │     │  │  ├─ doccer.py
│     │     │  │  ├─ messagestream.cp313-win_amd64.dll.a
│     │     │  │  ├─ messagestream.cp313-win_amd64.pyd
│     │     │  │  ├─ pyprima
│     │     │  │  │  ├─ cobyla
│     │     │  │  │  │  ├─ cobyla.py
│     │     │  │  │  │  ├─ cobylb.py
│     │     │  │  │  │  ├─ geometry.py
│     │     │  │  │  │  ├─ initialize.py
│     │     │  │  │  │  ├─ trustregion.py
│     │     │  │  │  │  ├─ update.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ cobyla.cpython-313.pyc
│     │     │  │  │  │     ├─ cobylb.cpython-313.pyc
│     │     │  │  │  │     ├─ geometry.cpython-313.pyc
│     │     │  │  │  │     ├─ initialize.cpython-313.pyc
│     │     │  │  │  │     ├─ trustregion.cpython-313.pyc
│     │     │  │  │  │     ├─ update.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ common
│     │     │  │  │  │  ├─ checkbreak.py
│     │     │  │  │  │  ├─ consts.py
│     │     │  │  │  │  ├─ evaluate.py
│     │     │  │  │  │  ├─ history.py
│     │     │  │  │  │  ├─ infos.py
│     │     │  │  │  │  ├─ linalg.py
│     │     │  │  │  │  ├─ message.py
│     │     │  │  │  │  ├─ powalg.py
│     │     │  │  │  │  ├─ preproc.py
│     │     │  │  │  │  ├─ present.py
│     │     │  │  │  │  ├─ ratio.py
│     │     │  │  │  │  ├─ redrho.py
│     │     │  │  │  │  ├─ selectx.py
│     │     │  │  │  │  ├─ _bounds.py
│     │     │  │  │  │  ├─ _linear_constraints.py
│     │     │  │  │  │  ├─ _nonlinear_constraints.py
│     │     │  │  │  │  ├─ _project.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ checkbreak.cpython-313.pyc
│     │     │  │  │  │     ├─ consts.cpython-313.pyc
│     │     │  │  │  │     ├─ evaluate.cpython-313.pyc
│     │     │  │  │  │     ├─ history.cpython-313.pyc
│     │     │  │  │  │     ├─ infos.cpython-313.pyc
│     │     │  │  │  │     ├─ linalg.cpython-313.pyc
│     │     │  │  │  │     ├─ message.cpython-313.pyc
│     │     │  │  │  │     ├─ powalg.cpython-313.pyc
│     │     │  │  │  │     ├─ preproc.cpython-313.pyc
│     │     │  │  │  │     ├─ present.cpython-313.pyc
│     │     │  │  │  │     ├─ ratio.cpython-313.pyc
│     │     │  │  │  │     ├─ redrho.cpython-313.pyc
│     │     │  │  │  │     ├─ selectx.cpython-313.pyc
│     │     │  │  │  │     ├─ _bounds.cpython-313.pyc
│     │     │  │  │  │     ├─ _linear_constraints.cpython-313.pyc
│     │     │  │  │  │     ├─ _nonlinear_constraints.cpython-313.pyc
│     │     │  │  │  │     ├─ _project.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ test_array_api.py
│     │     │  │  │  ├─ test_bunch.py
│     │     │  │  │  ├─ test_ccallback.py
│     │     │  │  │  ├─ test_config.py
│     │     │  │  │  ├─ test_deprecation.py
│     │     │  │  │  ├─ test_doccer.py
│     │     │  │  │  ├─ test_import_cycles.py
│     │     │  │  │  ├─ test_public_api.py
│     │     │  │  │  ├─ test_scipy_version.py
│     │     │  │  │  ├─ test_tmpdirs.py
│     │     │  │  │  ├─ test_warnings.py
│     │     │  │  │  ├─ test__gcutils.py
│     │     │  │  │  ├─ test__pep440.py
│     │     │  │  │  ├─ test__testutils.py
│     │     │  │  │  ├─ test__threadsafety.py
│     │     │  │  │  ├─ test__util.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ test_array_api.cpython-313.pyc
│     │     │  │  │     ├─ test_bunch.cpython-313.pyc
│     │     │  │  │     ├─ test_ccallback.cpython-313.pyc
│     │     │  │  │     ├─ test_config.cpython-313.pyc
│     │     │  │  │     ├─ test_deprecation.cpython-313.pyc
│     │     │  │  │     ├─ test_doccer.cpython-313.pyc
│     │     │  │  │     ├─ test_import_cycles.cpython-313.pyc
│     │     │  │  │     ├─ test_public_api.cpython-313.pyc
│     │     │  │  │     ├─ test_scipy_version.cpython-313.pyc
│     │     │  │  │     ├─ test_tmpdirs.cpython-313.pyc
│     │     │  │  │     ├─ test_warnings.cpython-313.pyc
│     │     │  │  │     ├─ test__gcutils.cpython-313.pyc
│     │     │  │  │     ├─ test__pep440.cpython-313.pyc
│     │     │  │  │     ├─ test__testutils.cpython-313.pyc
│     │     │  │  │     ├─ test__threadsafety.cpython-313.pyc
│     │     │  │  │     ├─ test__util.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ uarray.py
│     │     │  │  ├─ _array_api.py
│     │     │  │  ├─ _array_api_compat_vendor.py
│     │     │  │  ├─ _array_api_no_0d.py
│     │     │  │  ├─ _bunch.py
│     │     │  │  ├─ _ccallback.py
│     │     │  │  ├─ _ccallback_c.cp313-win_amd64.dll.a
│     │     │  │  ├─ _ccallback_c.cp313-win_amd64.pyd
│     │     │  │  ├─ _disjoint_set.py
│     │     │  │  ├─ _docscrape.py
│     │     │  │  ├─ _elementwise_iterative_method.py
│     │     │  │  ├─ _fpumode.cp313-win_amd64.dll.a
│     │     │  │  ├─ _fpumode.cp313-win_amd64.pyd
│     │     │  │  ├─ _gcutils.py
│     │     │  │  ├─ _pep440.py
│     │     │  │  ├─ _sparse.py
│     │     │  │  ├─ _testutils.py
│     │     │  │  ├─ _test_ccallback.cp313-win_amd64.dll.a
│     │     │  │  ├─ _test_ccallback.cp313-win_amd64.pyd
│     │     │  │  ├─ _test_deprecation_call.cp313-win_amd64.dll.a
│     │     │  │  ├─ _test_deprecation_call.cp313-win_amd64.pyd
│     │     │  │  ├─ _test_deprecation_def.cp313-win_amd64.dll.a
│     │     │  │  ├─ _test_deprecation_def.cp313-win_amd64.pyd
│     │     │  │  ├─ _threadsafety.py
│     │     │  │  ├─ _tmpdirs.py
│     │     │  │  ├─ _uarray
│     │     │  │  │  ├─ LICENSE
│     │     │  │  │  ├─ _backend.py
│     │     │  │  │  ├─ _uarray.cp313-win_amd64.dll.a
│     │     │  │  │  ├─ _uarray.cp313-win_amd64.pyd
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ _backend.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _util.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ decorator.cpython-313.pyc
│     │     │  │     ├─ deprecation.cpython-313.pyc
│     │     │  │     ├─ doccer.cpython-313.pyc
│     │     │  │     ├─ uarray.cpython-313.pyc
│     │     │  │     ├─ _array_api.cpython-313.pyc
│     │     │  │     ├─ _array_api_compat_vendor.cpython-313.pyc
│     │     │  │     ├─ _array_api_no_0d.cpython-313.pyc
│     │     │  │     ├─ _bunch.cpython-313.pyc
│     │     │  │     ├─ _ccallback.cpython-313.pyc
│     │     │  │     ├─ _disjoint_set.cpython-313.pyc
│     │     │  │     ├─ _docscrape.cpython-313.pyc
│     │     │  │     ├─ _elementwise_iterative_method.cpython-313.pyc
│     │     │  │     ├─ _gcutils.cpython-313.pyc
│     │     │  │     ├─ _pep440.cpython-313.pyc
│     │     │  │     ├─ _sparse.cpython-313.pyc
│     │     │  │     ├─ _testutils.cpython-313.pyc
│     │     │  │     ├─ _threadsafety.cpython-313.pyc
│     │     │  │     ├─ _tmpdirs.cpython-313.pyc
│     │     │  │     ├─ _util.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ __config__.py
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     ├─ conftest.cpython-313.pyc
│     │     │     ├─ version.cpython-313.pyc
│     │     │     ├─ __config__.cpython-313.pyc
│     │     │     └─ __init__.cpython-313.pyc
│     │     ├─ scipy-1.16.3-cp313-cp313-win_amd64.whl
│     │     ├─ scipy.libs
│     │     │  └─ libscipy_openblas-48c358d105077551cc9cc3ba79387ed5.dll
│     │     ├─ six.py
│     │     ├─ sklearn
│     │     │  ├─ .libs
│     │     │  │  ├─ msvcp140.dll
│     │     │  │  └─ vcomp140.dll
│     │     │  ├─ base.py
│     │     │  ├─ calibration.py
│     │     │  ├─ cluster
│     │     │  │  ├─ meson.build
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ common.py
│     │     │  │  │  ├─ test_affinity_propagation.py
│     │     │  │  │  ├─ test_bicluster.py
│     │     │  │  │  ├─ test_birch.py
│     │     │  │  │  ├─ test_bisect_k_means.py
│     │     │  │  │  ├─ test_dbscan.py
│     │     │  │  │  ├─ test_feature_agglomeration.py
│     │     │  │  │  ├─ test_hdbscan.py
│     │     │  │  │  ├─ test_hierarchical.py
│     │     │  │  │  ├─ test_k_means.py
│     │     │  │  │  ├─ test_mean_shift.py
│     │     │  │  │  ├─ test_optics.py
│     │     │  │  │  ├─ test_spectral.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ common.cpython-313.pyc
│     │     │  │  │     ├─ test_affinity_propagation.cpython-313.pyc
│     │     │  │  │     ├─ test_bicluster.cpython-313.pyc
│     │     │  │  │     ├─ test_birch.cpython-313.pyc
│     │     │  │  │     ├─ test_bisect_k_means.cpython-313.pyc
│     │     │  │  │     ├─ test_dbscan.cpython-313.pyc
│     │     │  │  │     ├─ test_feature_agglomeration.cpython-313.pyc
│     │     │  │  │     ├─ test_hdbscan.cpython-313.pyc
│     │     │  │  │     ├─ test_hierarchical.cpython-313.pyc
│     │     │  │  │     ├─ test_k_means.cpython-313.pyc
│     │     │  │  │     ├─ test_mean_shift.cpython-313.pyc
│     │     │  │  │     ├─ test_optics.cpython-313.pyc
│     │     │  │  │     ├─ test_spectral.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _affinity_propagation.py
│     │     │  │  ├─ _agglomerative.py
│     │     │  │  ├─ _bicluster.py
│     │     │  │  ├─ _birch.py
│     │     │  │  ├─ _bisect_k_means.py
│     │     │  │  ├─ _dbscan.py
│     │     │  │  ├─ _dbscan_inner.cp313-win_amd64.lib
│     │     │  │  ├─ _dbscan_inner.cp313-win_amd64.pyd
│     │     │  │  ├─ _dbscan_inner.pyx
│     │     │  │  ├─ _feature_agglomeration.py
│     │     │  │  ├─ _hdbscan
│     │     │  │  │  ├─ hdbscan.py
│     │     │  │  │  ├─ meson.build
│     │     │  │  │  ├─ tests
│     │     │  │  │  │  ├─ test_reachibility.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ test_reachibility.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ _linkage.cp313-win_amd64.lib
│     │     │  │  │  ├─ _linkage.cp313-win_amd64.pyd
│     │     │  │  │  ├─ _linkage.pyx
│     │     │  │  │  ├─ _reachability.cp313-win_amd64.lib
│     │     │  │  │  ├─ _reachability.cp313-win_amd64.pyd
│     │     │  │  │  ├─ _reachability.pyx
│     │     │  │  │  ├─ _tree.cp313-win_amd64.lib
│     │     │  │  │  ├─ _tree.cp313-win_amd64.pyd
│     │     │  │  │  ├─ _tree.pxd
│     │     │  │  │  ├─ _tree.pyx
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ hdbscan.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _hierarchical_fast.cp313-win_amd64.lib
│     │     │  │  ├─ _hierarchical_fast.cp313-win_amd64.pyd
│     │     │  │  ├─ _hierarchical_fast.pxd
│     │     │  │  ├─ _hierarchical_fast.pyx
│     │     │  │  ├─ _kmeans.py
│     │     │  │  ├─ _k_means_common.cp313-win_amd64.lib
│     │     │  │  ├─ _k_means_common.cp313-win_amd64.pyd
│     │     │  │  ├─ _k_means_common.pxd
│     │     │  │  ├─ _k_means_common.pyx
│     │     │  │  ├─ _k_means_elkan.cp313-win_amd64.lib
│     │     │  │  ├─ _k_means_elkan.cp313-win_amd64.pyd
│     │     │  │  ├─ _k_means_elkan.pyx
│     │     │  │  ├─ _k_means_lloyd.cp313-win_amd64.lib
│     │     │  │  ├─ _k_means_lloyd.cp313-win_amd64.pyd
│     │     │  │  ├─ _k_means_lloyd.pyx
│     │     │  │  ├─ _k_means_minibatch.cp313-win_amd64.lib
│     │     │  │  ├─ _k_means_minibatch.cp313-win_amd64.pyd
│     │     │  │  ├─ _k_means_minibatch.pyx
│     │     │  │  ├─ _mean_shift.py
│     │     │  │  ├─ _optics.py
│     │     │  │  ├─ _spectral.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ _affinity_propagation.cpython-313.pyc
│     │     │  │     ├─ _agglomerative.cpython-313.pyc
│     │     │  │     ├─ _bicluster.cpython-313.pyc
│     │     │  │     ├─ _birch.cpython-313.pyc
│     │     │  │     ├─ _bisect_k_means.cpython-313.pyc
│     │     │  │     ├─ _dbscan.cpython-313.pyc
│     │     │  │     ├─ _feature_agglomeration.cpython-313.pyc
│     │     │  │     ├─ _kmeans.cpython-313.pyc
│     │     │  │     ├─ _mean_shift.cpython-313.pyc
│     │     │  │     ├─ _optics.cpython-313.pyc
│     │     │  │     ├─ _spectral.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ compose
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ test_column_transformer.py
│     │     │  │  │  ├─ test_target.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ test_column_transformer.cpython-313.pyc
│     │     │  │  │     ├─ test_target.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _column_transformer.py
│     │     │  │  ├─ _target.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ _column_transformer.cpython-313.pyc
│     │     │  │     ├─ _target.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ conftest.py
│     │     │  ├─ covariance
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ test_covariance.py
│     │     │  │  │  ├─ test_elliptic_envelope.py
│     │     │  │  │  ├─ test_graphical_lasso.py
│     │     │  │  │  ├─ test_robust_covariance.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ test_covariance.cpython-313.pyc
│     │     │  │  │     ├─ test_elliptic_envelope.cpython-313.pyc
│     │     │  │  │     ├─ test_graphical_lasso.cpython-313.pyc
│     │     │  │  │     ├─ test_robust_covariance.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _elliptic_envelope.py
│     │     │  │  ├─ _empirical_covariance.py
│     │     │  │  ├─ _graph_lasso.py
│     │     │  │  ├─ _robust_covariance.py
│     │     │  │  ├─ _shrunk_covariance.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ _elliptic_envelope.cpython-313.pyc
│     │     │  │     ├─ _empirical_covariance.cpython-313.pyc
│     │     │  │     ├─ _graph_lasso.cpython-313.pyc
│     │     │  │     ├─ _robust_covariance.cpython-313.pyc
│     │     │  │     ├─ _shrunk_covariance.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ cross_decomposition
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ test_pls.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ test_pls.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _pls.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ _pls.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ datasets
│     │     │  │  ├─ data
│     │     │  │  │  ├─ breast_cancer.csv
│     │     │  │  │  ├─ diabetes_data_raw.csv.gz
│     │     │  │  │  ├─ diabetes_target.csv.gz
│     │     │  │  │  ├─ digits.csv.gz
│     │     │  │  │  ├─ iris.csv
│     │     │  │  │  ├─ linnerud_exercise.csv
│     │     │  │  │  ├─ linnerud_physiological.csv
│     │     │  │  │  ├─ wine_data.csv
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ descr
│     │     │  │  │  ├─ breast_cancer.rst
│     │     │  │  │  ├─ california_housing.rst
│     │     │  │  │  ├─ covtype.rst
│     │     │  │  │  ├─ diabetes.rst
│     │     │  │  │  ├─ digits.rst
│     │     │  │  │  ├─ iris.rst
│     │     │  │  │  ├─ kddcup99.rst
│     │     │  │  │  ├─ lfw.rst
│     │     │  │  │  ├─ linnerud.rst
│     │     │  │  │  ├─ olivetti_faces.rst
│     │     │  │  │  ├─ rcv1.rst
│     │     │  │  │  ├─ twenty_newsgroups.rst
│     │     │  │  │  ├─ wine_data.rst
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ images
│     │     │  │  │  ├─ china.jpg
│     │     │  │  │  ├─ flower.jpg
│     │     │  │  │  ├─ README.txt
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ meson.build
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ data
│     │     │  │  │  │  ├─ openml
│     │     │  │  │  │  │  ├─ id_1
│     │     │  │  │  │  │  │  ├─ api-v1-jd-1.json.gz
│     │     │  │  │  │  │  │  ├─ api-v1-jdf-1.json.gz
│     │     │  │  │  │  │  │  ├─ api-v1-jdq-1.json.gz
│     │     │  │  │  │  │  │  ├─ data-v1-dl-1.arff.gz
│     │     │  │  │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  │  │  └─ __pycache__
│     │     │  │  │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  │  │  ├─ id_1119
│     │     │  │  │  │  │  │  ├─ api-v1-jd-1119.json.gz
│     │     │  │  │  │  │  │  ├─ api-v1-jdf-1119.json.gz
│     │     │  │  │  │  │  │  ├─ api-v1-jdl-dn-adult-census-l-2-dv-1.json.gz
│     │     │  │  │  │  │  │  ├─ api-v1-jdl-dn-adult-census-l-2-s-act-.json.gz
│     │     │  │  │  │  │  │  ├─ api-v1-jdq-1119.json.gz
│     │     │  │  │  │  │  │  ├─ data-v1-dl-54002.arff.gz
│     │     │  │  │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  │  │  └─ __pycache__
│     │     │  │  │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  │  │  ├─ id_1590
│     │     │  │  │  │  │  │  ├─ api-v1-jd-1590.json.gz
│     │     │  │  │  │  │  │  ├─ api-v1-jdf-1590.json.gz
│     │     │  │  │  │  │  │  ├─ api-v1-jdq-1590.json.gz
│     │     │  │  │  │  │  │  ├─ data-v1-dl-1595261.arff.gz
│     │     │  │  │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  │  │  └─ __pycache__
│     │     │  │  │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  │  │  ├─ id_2
│     │     │  │  │  │  │  │  ├─ api-v1-jd-2.json.gz
│     │     │  │  │  │  │  │  ├─ api-v1-jdf-2.json.gz
│     │     │  │  │  │  │  │  ├─ api-v1-jdl-dn-anneal-l-2-dv-1.json.gz
│     │     │  │  │  │  │  │  ├─ api-v1-jdl-dn-anneal-l-2-s-act-.json.gz
│     │     │  │  │  │  │  │  ├─ api-v1-jdq-2.json.gz
│     │     │  │  │  │  │  │  ├─ data-v1-dl-1666876.arff.gz
│     │     │  │  │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  │  │  └─ __pycache__
│     │     │  │  │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  │  │  ├─ id_292
│     │     │  │  │  │  │  │  ├─ api-v1-jd-292.json.gz
│     │     │  │  │  │  │  │  ├─ api-v1-jd-40981.json.gz
│     │     │  │  │  │  │  │  ├─ api-v1-jdf-292.json.gz
│     │     │  │  │  │  │  │  ├─ api-v1-jdf-40981.json.gz
│     │     │  │  │  │  │  │  ├─ api-v1-jdl-dn-australian-l-2-dv-1-s-dact.json.gz
│     │     │  │  │  │  │  │  ├─ api-v1-jdl-dn-australian-l-2-dv-1.json.gz
│     │     │  │  │  │  │  │  ├─ api-v1-jdl-dn-australian-l-2-s-act-.json.gz
│     │     │  │  │  │  │  │  ├─ data-v1-dl-49822.arff.gz
│     │     │  │  │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  │  │  └─ __pycache__
│     │     │  │  │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  │  │  ├─ id_3
│     │     │  │  │  │  │  │  ├─ api-v1-jd-3.json.gz
│     │     │  │  │  │  │  │  ├─ api-v1-jdf-3.json.gz
│     │     │  │  │  │  │  │  ├─ api-v1-jdq-3.json.gz
│     │     │  │  │  │  │  │  ├─ data-v1-dl-3.arff.gz
│     │     │  │  │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  │  │  └─ __pycache__
│     │     │  │  │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  │  │  ├─ id_40589
│     │     │  │  │  │  │  │  ├─ api-v1-jd-40589.json.gz
│     │     │  │  │  │  │  │  ├─ api-v1-jdf-40589.json.gz
│     │     │  │  │  │  │  │  ├─ api-v1-jdl-dn-emotions-l-2-dv-3.json.gz
│     │     │  │  │  │  │  │  ├─ api-v1-jdl-dn-emotions-l-2-s-act-.json.gz
│     │     │  │  │  │  │  │  ├─ api-v1-jdq-40589.json.gz
│     │     │  │  │  │  │  │  ├─ data-v1-dl-4644182.arff.gz
│     │     │  │  │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  │  │  └─ __pycache__
│     │     │  │  │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  │  │  ├─ id_40675
│     │     │  │  │  │  │  │  ├─ api-v1-jd-40675.json.gz
│     │     │  │  │  │  │  │  ├─ api-v1-jdf-40675.json.gz
│     │     │  │  │  │  │  │  ├─ api-v1-jdl-dn-glass2-l-2-dv-1-s-dact.json.gz
│     │     │  │  │  │  │  │  ├─ api-v1-jdl-dn-glass2-l-2-dv-1.json.gz
│     │     │  │  │  │  │  │  ├─ api-v1-jdl-dn-glass2-l-2-s-act-.json.gz
│     │     │  │  │  │  │  │  ├─ api-v1-jdq-40675.json.gz
│     │     │  │  │  │  │  │  ├─ data-v1-dl-4965250.arff.gz
│     │     │  │  │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  │  │  └─ __pycache__
│     │     │  │  │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  │  │  ├─ id_40945
│     │     │  │  │  │  │  │  ├─ api-v1-jd-40945.json.gz
│     │     │  │  │  │  │  │  ├─ api-v1-jdf-40945.json.gz
│     │     │  │  │  │  │  │  ├─ api-v1-jdq-40945.json.gz
│     │     │  │  │  │  │  │  ├─ data-v1-dl-16826755.arff.gz
│     │     │  │  │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  │  │  └─ __pycache__
│     │     │  │  │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  │  │  ├─ id_40966
│     │     │  │  │  │  │  │  ├─ api-v1-jd-40966.json.gz
│     │     │  │  │  │  │  │  ├─ api-v1-jdf-40966.json.gz
│     │     │  │  │  │  │  │  ├─ api-v1-jdl-dn-miceprotein-l-2-dv-4.json.gz
│     │     │  │  │  │  │  │  ├─ api-v1-jdl-dn-miceprotein-l-2-s-act-.json.gz
│     │     │  │  │  │  │  │  ├─ api-v1-jdq-40966.json.gz
│     │     │  │  │  │  │  │  ├─ data-v1-dl-17928620.arff.gz
│     │     │  │  │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  │  │  └─ __pycache__
│     │     │  │  │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  │  │  ├─ id_42074
│     │     │  │  │  │  │  │  ├─ api-v1-jd-42074.json.gz
│     │     │  │  │  │  │  │  ├─ api-v1-jdf-42074.json.gz
│     │     │  │  │  │  │  │  ├─ api-v1-jdq-42074.json.gz
│     │     │  │  │  │  │  │  ├─ data-v1-dl-21552912.arff.gz
│     │     │  │  │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  │  │  └─ __pycache__
│     │     │  │  │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  │  │  ├─ id_42585
│     │     │  │  │  │  │  │  ├─ api-v1-jd-42585.json.gz
│     │     │  │  │  │  │  │  ├─ api-v1-jdf-42585.json.gz
│     │     │  │  │  │  │  │  ├─ api-v1-jdq-42585.json.gz
│     │     │  │  │  │  │  │  ├─ data-v1-dl-21854866.arff.gz
│     │     │  │  │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  │  │  └─ __pycache__
│     │     │  │  │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  │  │  ├─ id_561
│     │     │  │  │  │  │  │  ├─ api-v1-jd-561.json.gz
│     │     │  │  │  │  │  │  ├─ api-v1-jdf-561.json.gz
│     │     │  │  │  │  │  │  ├─ api-v1-jdl-dn-cpu-l-2-dv-1.json.gz
│     │     │  │  │  │  │  │  ├─ api-v1-jdl-dn-cpu-l-2-s-act-.json.gz
│     │     │  │  │  │  │  │  ├─ api-v1-jdq-561.json.gz
│     │     │  │  │  │  │  │  ├─ data-v1-dl-52739.arff.gz
│     │     │  │  │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  │  │  └─ __pycache__
│     │     │  │  │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  │  │  ├─ id_61
│     │     │  │  │  │  │  │  ├─ api-v1-jd-61.json.gz
│     │     │  │  │  │  │  │  ├─ api-v1-jdf-61.json.gz
│     │     │  │  │  │  │  │  ├─ api-v1-jdl-dn-iris-l-2-dv-1.json.gz
│     │     │  │  │  │  │  │  ├─ api-v1-jdl-dn-iris-l-2-s-act-.json.gz
│     │     │  │  │  │  │  │  ├─ api-v1-jdq-61.json.gz
│     │     │  │  │  │  │  │  ├─ data-v1-dl-61.arff.gz
│     │     │  │  │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  │  │  └─ __pycache__
│     │     │  │  │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  │  │  ├─ id_62
│     │     │  │  │  │  │  │  ├─ api-v1-jd-62.json.gz
│     │     │  │  │  │  │  │  ├─ api-v1-jdf-62.json.gz
│     │     │  │  │  │  │  │  ├─ api-v1-jdq-62.json.gz
│     │     │  │  │  │  │  │  ├─ data-v1-dl-52352.arff.gz
│     │     │  │  │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  │  │  └─ __pycache__
│     │     │  │  │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  │  └─ __pycache__
│     │     │  │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  │  ├─ svmlight_classification.txt
│     │     │  │  │  │  ├─ svmlight_invalid.txt
│     │     │  │  │  │  ├─ svmlight_invalid_order.txt
│     │     │  │  │  │  ├─ svmlight_multilabel.txt
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ test_20news.py
│     │     │  │  │  ├─ test_arff_parser.py
│     │     │  │  │  ├─ test_base.py
│     │     │  │  │  ├─ test_california_housing.py
│     │     │  │  │  ├─ test_common.py
│     │     │  │  │  ├─ test_covtype.py
│     │     │  │  │  ├─ test_kddcup99.py
│     │     │  │  │  ├─ test_lfw.py
│     │     │  │  │  ├─ test_olivetti_faces.py
│     │     │  │  │  ├─ test_openml.py
│     │     │  │  │  ├─ test_rcv1.py
│     │     │  │  │  ├─ test_samples_generator.py
│     │     │  │  │  ├─ test_svmlight_format.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ test_20news.cpython-313.pyc
│     │     │  │  │     ├─ test_arff_parser.cpython-313.pyc
│     │     │  │  │     ├─ test_base.cpython-313.pyc
│     │     │  │  │     ├─ test_california_housing.cpython-313.pyc
│     │     │  │  │     ├─ test_common.cpython-313.pyc
│     │     │  │  │     ├─ test_covtype.cpython-313.pyc
│     │     │  │  │     ├─ test_kddcup99.cpython-313.pyc
│     │     │  │  │     ├─ test_lfw.cpython-313.pyc
│     │     │  │  │     ├─ test_olivetti_faces.cpython-313.pyc
│     │     │  │  │     ├─ test_openml.cpython-313.pyc
│     │     │  │  │     ├─ test_rcv1.cpython-313.pyc
│     │     │  │  │     ├─ test_samples_generator.cpython-313.pyc
│     │     │  │  │     ├─ test_svmlight_format.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _arff_parser.py
│     │     │  │  ├─ _base.py
│     │     │  │  ├─ _california_housing.py
│     │     │  │  ├─ _covtype.py
│     │     │  │  ├─ _kddcup99.py
│     │     │  │  ├─ _lfw.py
│     │     │  │  ├─ _olivetti_faces.py
│     │     │  │  ├─ _openml.py
│     │     │  │  ├─ _rcv1.py
│     │     │  │  ├─ _samples_generator.py
│     │     │  │  ├─ _svmlight_format_fast.cp313-win_amd64.lib
│     │     │  │  ├─ _svmlight_format_fast.cp313-win_amd64.pyd
│     │     │  │  ├─ _svmlight_format_fast.pyx
│     │     │  │  ├─ _svmlight_format_io.py
│     │     │  │  ├─ _twenty_newsgroups.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ _arff_parser.cpython-313.pyc
│     │     │  │     ├─ _base.cpython-313.pyc
│     │     │  │     ├─ _california_housing.cpython-313.pyc
│     │     │  │     ├─ _covtype.cpython-313.pyc
│     │     │  │     ├─ _kddcup99.cpython-313.pyc
│     │     │  │     ├─ _lfw.cpython-313.pyc
│     │     │  │     ├─ _olivetti_faces.cpython-313.pyc
│     │     │  │     ├─ _openml.cpython-313.pyc
│     │     │  │     ├─ _rcv1.cpython-313.pyc
│     │     │  │     ├─ _samples_generator.cpython-313.pyc
│     │     │  │     ├─ _svmlight_format_io.cpython-313.pyc
│     │     │  │     ├─ _twenty_newsgroups.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ decomposition
│     │     │  │  ├─ meson.build
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ test_dict_learning.py
│     │     │  │  │  ├─ test_factor_analysis.py
│     │     │  │  │  ├─ test_fastica.py
│     │     │  │  │  ├─ test_incremental_pca.py
│     │     │  │  │  ├─ test_kernel_pca.py
│     │     │  │  │  ├─ test_nmf.py
│     │     │  │  │  ├─ test_online_lda.py
│     │     │  │  │  ├─ test_pca.py
│     │     │  │  │  ├─ test_sparse_pca.py
│     │     │  │  │  ├─ test_truncated_svd.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ test_dict_learning.cpython-313.pyc
│     │     │  │  │     ├─ test_factor_analysis.cpython-313.pyc
│     │     │  │  │     ├─ test_fastica.cpython-313.pyc
│     │     │  │  │     ├─ test_incremental_pca.cpython-313.pyc
│     │     │  │  │     ├─ test_kernel_pca.cpython-313.pyc
│     │     │  │  │     ├─ test_nmf.cpython-313.pyc
│     │     │  │  │     ├─ test_online_lda.cpython-313.pyc
│     │     │  │  │     ├─ test_pca.cpython-313.pyc
│     │     │  │  │     ├─ test_sparse_pca.cpython-313.pyc
│     │     │  │  │     ├─ test_truncated_svd.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _base.py
│     │     │  │  ├─ _cdnmf_fast.cp313-win_amd64.lib
│     │     │  │  ├─ _cdnmf_fast.cp313-win_amd64.pyd
│     │     │  │  ├─ _cdnmf_fast.pyx
│     │     │  │  ├─ _dict_learning.py
│     │     │  │  ├─ _factor_analysis.py
│     │     │  │  ├─ _fastica.py
│     │     │  │  ├─ _incremental_pca.py
│     │     │  │  ├─ _kernel_pca.py
│     │     │  │  ├─ _lda.py
│     │     │  │  ├─ _nmf.py
│     │     │  │  ├─ _online_lda_fast.cp313-win_amd64.lib
│     │     │  │  ├─ _online_lda_fast.cp313-win_amd64.pyd
│     │     │  │  ├─ _online_lda_fast.pyx
│     │     │  │  ├─ _pca.py
│     │     │  │  ├─ _sparse_pca.py
│     │     │  │  ├─ _truncated_svd.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ _base.cpython-313.pyc
│     │     │  │     ├─ _dict_learning.cpython-313.pyc
│     │     │  │     ├─ _factor_analysis.cpython-313.pyc
│     │     │  │     ├─ _fastica.cpython-313.pyc
│     │     │  │     ├─ _incremental_pca.cpython-313.pyc
│     │     │  │     ├─ _kernel_pca.cpython-313.pyc
│     │     │  │     ├─ _lda.cpython-313.pyc
│     │     │  │     ├─ _nmf.cpython-313.pyc
│     │     │  │     ├─ _pca.cpython-313.pyc
│     │     │  │     ├─ _sparse_pca.cpython-313.pyc
│     │     │  │     ├─ _truncated_svd.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ discriminant_analysis.py
│     │     │  ├─ dummy.py
│     │     │  ├─ ensemble
│     │     │  │  ├─ meson.build
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ test_bagging.py
│     │     │  │  │  ├─ test_base.py
│     │     │  │  │  ├─ test_common.py
│     │     │  │  │  ├─ test_forest.py
│     │     │  │  │  ├─ test_gradient_boosting.py
│     │     │  │  │  ├─ test_iforest.py
│     │     │  │  │  ├─ test_stacking.py
│     │     │  │  │  ├─ test_voting.py
│     │     │  │  │  ├─ test_weight_boosting.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ test_bagging.cpython-313.pyc
│     │     │  │  │     ├─ test_base.cpython-313.pyc
│     │     │  │  │     ├─ test_common.cpython-313.pyc
│     │     │  │  │     ├─ test_forest.cpython-313.pyc
│     │     │  │  │     ├─ test_gradient_boosting.cpython-313.pyc
│     │     │  │  │     ├─ test_iforest.cpython-313.pyc
│     │     │  │  │     ├─ test_stacking.cpython-313.pyc
│     │     │  │  │     ├─ test_voting.cpython-313.pyc
│     │     │  │  │     ├─ test_weight_boosting.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _bagging.py
│     │     │  │  ├─ _base.py
│     │     │  │  ├─ _forest.py
│     │     │  │  ├─ _gb.py
│     │     │  │  ├─ _gradient_boosting.cp313-win_amd64.lib
│     │     │  │  ├─ _gradient_boosting.cp313-win_amd64.pyd
│     │     │  │  ├─ _gradient_boosting.pyx
│     │     │  │  ├─ _hist_gradient_boosting
│     │     │  │  │  ├─ binning.py
│     │     │  │  │  ├─ common.cp313-win_amd64.lib
│     │     │  │  │  ├─ common.cp313-win_amd64.pyd
│     │     │  │  │  ├─ common.pxd
│     │     │  │  │  ├─ common.pyx
│     │     │  │  │  ├─ gradient_boosting.py
│     │     │  │  │  ├─ grower.py
│     │     │  │  │  ├─ histogram.cp313-win_amd64.lib
│     │     │  │  │  ├─ histogram.cp313-win_amd64.pyd
│     │     │  │  │  ├─ histogram.pyx
│     │     │  │  │  ├─ meson.build
│     │     │  │  │  ├─ predictor.py
│     │     │  │  │  ├─ splitting.cp313-win_amd64.lib
│     │     │  │  │  ├─ splitting.cp313-win_amd64.pyd
│     │     │  │  │  ├─ splitting.pyx
│     │     │  │  │  ├─ tests
│     │     │  │  │  │  ├─ test_binning.py
│     │     │  │  │  │  ├─ test_bitset.py
│     │     │  │  │  │  ├─ test_compare_lightgbm.py
│     │     │  │  │  │  ├─ test_gradient_boosting.py
│     │     │  │  │  │  ├─ test_grower.py
│     │     │  │  │  │  ├─ test_histogram.py
│     │     │  │  │  │  ├─ test_monotonic_constraints.py
│     │     │  │  │  │  ├─ test_predictor.py
│     │     │  │  │  │  ├─ test_splitting.py
│     │     │  │  │  │  ├─ test_warm_start.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ test_binning.cpython-313.pyc
│     │     │  │  │  │     ├─ test_bitset.cpython-313.pyc
│     │     │  │  │  │     ├─ test_compare_lightgbm.cpython-313.pyc
│     │     │  │  │  │     ├─ test_gradient_boosting.cpython-313.pyc
│     │     │  │  │  │     ├─ test_grower.cpython-313.pyc
│     │     │  │  │  │     ├─ test_histogram.cpython-313.pyc
│     │     │  │  │  │     ├─ test_monotonic_constraints.cpython-313.pyc
│     │     │  │  │  │     ├─ test_predictor.cpython-313.pyc
│     │     │  │  │  │     ├─ test_splitting.cpython-313.pyc
│     │     │  │  │  │     ├─ test_warm_start.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ utils.py
│     │     │  │  │  ├─ _binning.cp313-win_amd64.lib
│     │     │  │  │  ├─ _binning.cp313-win_amd64.pyd
│     │     │  │  │  ├─ _binning.pyx
│     │     │  │  │  ├─ _bitset.cp313-win_amd64.lib
│     │     │  │  │  ├─ _bitset.cp313-win_amd64.pyd
│     │     │  │  │  ├─ _bitset.pxd
│     │     │  │  │  ├─ _bitset.pyx
│     │     │  │  │  ├─ _gradient_boosting.cp313-win_amd64.lib
│     │     │  │  │  ├─ _gradient_boosting.cp313-win_amd64.pyd
│     │     │  │  │  ├─ _gradient_boosting.pyx
│     │     │  │  │  ├─ _predictor.cp313-win_amd64.lib
│     │     │  │  │  ├─ _predictor.cp313-win_amd64.pyd
│     │     │  │  │  ├─ _predictor.pyx
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ binning.cpython-313.pyc
│     │     │  │  │     ├─ gradient_boosting.cpython-313.pyc
│     │     │  │  │     ├─ grower.cpython-313.pyc
│     │     │  │  │     ├─ predictor.cpython-313.pyc
│     │     │  │  │     ├─ utils.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _iforest.py
│     │     │  │  ├─ _stacking.py
│     │     │  │  ├─ _voting.py
│     │     │  │  ├─ _weight_boosting.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ _bagging.cpython-313.pyc
│     │     │  │     ├─ _base.cpython-313.pyc
│     │     │  │     ├─ _forest.cpython-313.pyc
│     │     │  │     ├─ _gb.cpython-313.pyc
│     │     │  │     ├─ _iforest.cpython-313.pyc
│     │     │  │     ├─ _stacking.cpython-313.pyc
│     │     │  │     ├─ _voting.cpython-313.pyc
│     │     │  │     ├─ _weight_boosting.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ exceptions.py
│     │     │  ├─ experimental
│     │     │  │  ├─ enable_halving_search_cv.py
│     │     │  │  ├─ enable_hist_gradient_boosting.py
│     │     │  │  ├─ enable_iterative_imputer.py
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ test_enable_hist_gradient_boosting.py
│     │     │  │  │  ├─ test_enable_iterative_imputer.py
│     │     │  │  │  ├─ test_enable_successive_halving.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ test_enable_hist_gradient_boosting.cpython-313.pyc
│     │     │  │  │     ├─ test_enable_iterative_imputer.cpython-313.pyc
│     │     │  │  │     ├─ test_enable_successive_halving.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ enable_halving_search_cv.cpython-313.pyc
│     │     │  │     ├─ enable_hist_gradient_boosting.cpython-313.pyc
│     │     │  │     ├─ enable_iterative_imputer.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ externals
│     │     │  │  ├─ array_api_compat
│     │     │  │  │  ├─ common
│     │     │  │  │  │  ├─ _aliases.py
│     │     │  │  │  │  ├─ _fft.py
│     │     │  │  │  │  ├─ _helpers.py
│     │     │  │  │  │  ├─ _linalg.py
│     │     │  │  │  │  ├─ _typing.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ _aliases.cpython-313.pyc
│     │     │  │  │  │     ├─ _fft.cpython-313.pyc
│     │     │  │  │  │     ├─ _helpers.cpython-313.pyc
│     │     │  │  │  │     ├─ _linalg.cpython-313.pyc
│     │     │  │  │  │     ├─ _typing.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ cupy
│     │     │  │  │  │  ├─ fft.py
│     │     │  │  │  │  ├─ linalg.py
│     │     │  │  │  │  ├─ _aliases.py
│     │     │  │  │  │  ├─ _info.py
│     │     │  │  │  │  ├─ _typing.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ fft.cpython-313.pyc
│     │     │  │  │  │     ├─ linalg.cpython-313.pyc
│     │     │  │  │  │     ├─ _aliases.cpython-313.pyc
│     │     │  │  │  │     ├─ _info.cpython-313.pyc
│     │     │  │  │  │     ├─ _typing.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ dask
│     │     │  │  │  │  ├─ array
│     │     │  │  │  │  │  ├─ fft.py
│     │     │  │  │  │  │  ├─ linalg.py
│     │     │  │  │  │  │  ├─ _aliases.py
│     │     │  │  │  │  │  ├─ _info.py
│     │     │  │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  │  └─ __pycache__
│     │     │  │  │  │  │     ├─ fft.cpython-313.pyc
│     │     │  │  │  │  │     ├─ linalg.cpython-313.pyc
│     │     │  │  │  │  │     ├─ _aliases.cpython-313.pyc
│     │     │  │  │  │  │     ├─ _info.cpython-313.pyc
│     │     │  │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ LICENSE
│     │     │  │  │  ├─ numpy
│     │     │  │  │  │  ├─ fft.py
│     │     │  │  │  │  ├─ linalg.py
│     │     │  │  │  │  ├─ _aliases.py
│     │     │  │  │  │  ├─ _info.py
│     │     │  │  │  │  ├─ _typing.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ fft.cpython-313.pyc
│     │     │  │  │  │     ├─ linalg.cpython-313.pyc
│     │     │  │  │  │     ├─ _aliases.cpython-313.pyc
│     │     │  │  │  │     ├─ _info.cpython-313.pyc
│     │     │  │  │  │     ├─ _typing.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ py.typed
│     │     │  │  │  ├─ README.md
│     │     │  │  │  ├─ torch
│     │     │  │  │  │  ├─ fft.py
│     │     │  │  │  │  ├─ linalg.py
│     │     │  │  │  │  ├─ _aliases.py
│     │     │  │  │  │  ├─ _info.py
│     │     │  │  │  │  ├─ _typing.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ fft.cpython-313.pyc
│     │     │  │  │  │     ├─ linalg.cpython-313.pyc
│     │     │  │  │  │     ├─ _aliases.cpython-313.pyc
│     │     │  │  │  │     ├─ _info.cpython-313.pyc
│     │     │  │  │  │     ├─ _typing.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ _internal.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ _internal.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ array_api_extra
│     │     │  │  │  ├─ LICENSE
│     │     │  │  │  ├─ py.typed
│     │     │  │  │  ├─ README.md
│     │     │  │  │  ├─ testing.py
│     │     │  │  │  ├─ _delegation.py
│     │     │  │  │  ├─ _lib
│     │     │  │  │  │  ├─ _at.py
│     │     │  │  │  │  ├─ _backends.py
│     │     │  │  │  │  ├─ _funcs.py
│     │     │  │  │  │  ├─ _lazy.py
│     │     │  │  │  │  ├─ _testing.py
│     │     │  │  │  │  ├─ _utils
│     │     │  │  │  │  │  ├─ _compat.py
│     │     │  │  │  │  │  ├─ _compat.pyi
│     │     │  │  │  │  │  ├─ _helpers.py
│     │     │  │  │  │  │  ├─ _typing.py
│     │     │  │  │  │  │  ├─ _typing.pyi
│     │     │  │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  │  └─ __pycache__
│     │     │  │  │  │  │     ├─ _compat.cpython-313.pyc
│     │     │  │  │  │  │     ├─ _helpers.cpython-313.pyc
│     │     │  │  │  │  │     ├─ _typing.cpython-313.pyc
│     │     │  │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ _at.cpython-313.pyc
│     │     │  │  │  │     ├─ _backends.cpython-313.pyc
│     │     │  │  │  │     ├─ _funcs.cpython-313.pyc
│     │     │  │  │  │     ├─ _lazy.cpython-313.pyc
│     │     │  │  │  │     ├─ _testing.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ testing.cpython-313.pyc
│     │     │  │  │     ├─ _delegation.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ conftest.py
│     │     │  │  ├─ README
│     │     │  │  ├─ _arff.py
│     │     │  │  ├─ _array_api_compat_vendor.py
│     │     │  │  ├─ _numpydoc
│     │     │  │  │  ├─ docscrape.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     └─ docscrape.cpython-313.pyc
│     │     │  │  ├─ _packaging
│     │     │  │  │  ├─ version.py
│     │     │  │  │  ├─ _structures.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ version.cpython-313.pyc
│     │     │  │  │     ├─ _structures.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _scipy
│     │     │  │  │  ├─ sparse
│     │     │  │  │  │  ├─ csgraph
│     │     │  │  │  │  │  ├─ _laplacian.py
│     │     │  │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  │  └─ __pycache__
│     │     │  │  │  │  │     ├─ _laplacian.cpython-313.pyc
│     │     │  │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ conftest.cpython-313.pyc
│     │     │  │     ├─ _arff.cpython-313.pyc
│     │     │  │     ├─ _array_api_compat_vendor.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ feature_extraction
│     │     │  │  ├─ image.py
│     │     │  │  ├─ meson.build
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ test_dict_vectorizer.py
│     │     │  │  │  ├─ test_feature_hasher.py
│     │     │  │  │  ├─ test_image.py
│     │     │  │  │  ├─ test_text.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ test_dict_vectorizer.cpython-313.pyc
│     │     │  │  │     ├─ test_feature_hasher.cpython-313.pyc
│     │     │  │  │     ├─ test_image.cpython-313.pyc
│     │     │  │  │     ├─ test_text.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ text.py
│     │     │  │  ├─ _dict_vectorizer.py
│     │     │  │  ├─ _hash.py
│     │     │  │  ├─ _hashing_fast.cp313-win_amd64.lib
│     │     │  │  ├─ _hashing_fast.cp313-win_amd64.pyd
│     │     │  │  ├─ _hashing_fast.pyx
│     │     │  │  ├─ _stop_words.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ image.cpython-313.pyc
│     │     │  │     ├─ text.cpython-313.pyc
│     │     │  │     ├─ _dict_vectorizer.cpython-313.pyc
│     │     │  │     ├─ _hash.cpython-313.pyc
│     │     │  │     ├─ _stop_words.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ feature_selection
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ test_base.py
│     │     │  │  │  ├─ test_chi2.py
│     │     │  │  │  ├─ test_feature_select.py
│     │     │  │  │  ├─ test_from_model.py
│     │     │  │  │  ├─ test_mutual_info.py
│     │     │  │  │  ├─ test_rfe.py
│     │     │  │  │  ├─ test_sequential.py
│     │     │  │  │  ├─ test_variance_threshold.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ test_base.cpython-313.pyc
│     │     │  │  │     ├─ test_chi2.cpython-313.pyc
│     │     │  │  │     ├─ test_feature_select.cpython-313.pyc
│     │     │  │  │     ├─ test_from_model.cpython-313.pyc
│     │     │  │  │     ├─ test_mutual_info.cpython-313.pyc
│     │     │  │  │     ├─ test_rfe.cpython-313.pyc
│     │     │  │  │     ├─ test_sequential.cpython-313.pyc
│     │     │  │  │     ├─ test_variance_threshold.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _base.py
│     │     │  │  ├─ _from_model.py
│     │     │  │  ├─ _mutual_info.py
│     │     │  │  ├─ _rfe.py
│     │     │  │  ├─ _sequential.py
│     │     │  │  ├─ _univariate_selection.py
│     │     │  │  ├─ _variance_threshold.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ _base.cpython-313.pyc
│     │     │  │     ├─ _from_model.cpython-313.pyc
│     │     │  │     ├─ _mutual_info.cpython-313.pyc
│     │     │  │     ├─ _rfe.cpython-313.pyc
│     │     │  │     ├─ _sequential.cpython-313.pyc
│     │     │  │     ├─ _univariate_selection.cpython-313.pyc
│     │     │  │     ├─ _variance_threshold.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ frozen
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ test_frozen.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ test_frozen.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _frozen.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ _frozen.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ gaussian_process
│     │     │  │  ├─ kernels.py
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ test_gpc.py
│     │     │  │  │  ├─ test_gpr.py
│     │     │  │  │  ├─ test_kernels.py
│     │     │  │  │  ├─ _mini_sequence_kernel.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ test_gpc.cpython-313.pyc
│     │     │  │  │     ├─ test_gpr.cpython-313.pyc
│     │     │  │  │     ├─ test_kernels.cpython-313.pyc
│     │     │  │  │     ├─ _mini_sequence_kernel.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _gpc.py
│     │     │  │  ├─ _gpr.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ kernels.cpython-313.pyc
│     │     │  │     ├─ _gpc.cpython-313.pyc
│     │     │  │     ├─ _gpr.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ impute
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ test_base.py
│     │     │  │  │  ├─ test_common.py
│     │     │  │  │  ├─ test_impute.py
│     │     │  │  │  ├─ test_knn.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ test_base.cpython-313.pyc
│     │     │  │  │     ├─ test_common.cpython-313.pyc
│     │     │  │  │     ├─ test_impute.cpython-313.pyc
│     │     │  │  │     ├─ test_knn.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _base.py
│     │     │  │  ├─ _iterative.py
│     │     │  │  ├─ _knn.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ _base.cpython-313.pyc
│     │     │  │     ├─ _iterative.cpython-313.pyc
│     │     │  │     ├─ _knn.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ inspection
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ test_partial_dependence.py
│     │     │  │  │  ├─ test_pd_utils.py
│     │     │  │  │  ├─ test_permutation_importance.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ test_partial_dependence.cpython-313.pyc
│     │     │  │  │     ├─ test_pd_utils.cpython-313.pyc
│     │     │  │  │     ├─ test_permutation_importance.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _partial_dependence.py
│     │     │  │  ├─ _pd_utils.py
│     │     │  │  ├─ _permutation_importance.py
│     │     │  │  ├─ _plot
│     │     │  │  │  ├─ decision_boundary.py
│     │     │  │  │  ├─ partial_dependence.py
│     │     │  │  │  ├─ tests
│     │     │  │  │  │  ├─ test_boundary_decision_display.py
│     │     │  │  │  │  ├─ test_plot_partial_dependence.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ test_boundary_decision_display.cpython-313.pyc
│     │     │  │  │  │     ├─ test_plot_partial_dependence.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ decision_boundary.cpython-313.pyc
│     │     │  │  │     ├─ partial_dependence.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ _partial_dependence.cpython-313.pyc
│     │     │  │     ├─ _pd_utils.cpython-313.pyc
│     │     │  │     ├─ _permutation_importance.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ isotonic.py
│     │     │  ├─ kernel_approximation.py
│     │     │  ├─ kernel_ridge.py
│     │     │  ├─ linear_model
│     │     │  │  ├─ meson.build
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ test_base.py
│     │     │  │  │  ├─ test_bayes.py
│     │     │  │  │  ├─ test_common.py
│     │     │  │  │  ├─ test_coordinate_descent.py
│     │     │  │  │  ├─ test_huber.py
│     │     │  │  │  ├─ test_least_angle.py
│     │     │  │  │  ├─ test_linear_loss.py
│     │     │  │  │  ├─ test_logistic.py
│     │     │  │  │  ├─ test_omp.py
│     │     │  │  │  ├─ test_passive_aggressive.py
│     │     │  │  │  ├─ test_perceptron.py
│     │     │  │  │  ├─ test_quantile.py
│     │     │  │  │  ├─ test_ransac.py
│     │     │  │  │  ├─ test_ridge.py
│     │     │  │  │  ├─ test_sag.py
│     │     │  │  │  ├─ test_sgd.py
│     │     │  │  │  ├─ test_sparse_coordinate_descent.py
│     │     │  │  │  ├─ test_theil_sen.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ test_base.cpython-313.pyc
│     │     │  │  │     ├─ test_bayes.cpython-313.pyc
│     │     │  │  │     ├─ test_common.cpython-313.pyc
│     │     │  │  │     ├─ test_coordinate_descent.cpython-313.pyc
│     │     │  │  │     ├─ test_huber.cpython-313.pyc
│     │     │  │  │     ├─ test_least_angle.cpython-313.pyc
│     │     │  │  │     ├─ test_linear_loss.cpython-313.pyc
│     │     │  │  │     ├─ test_logistic.cpython-313.pyc
│     │     │  │  │     ├─ test_omp.cpython-313.pyc
│     │     │  │  │     ├─ test_passive_aggressive.cpython-313.pyc
│     │     │  │  │     ├─ test_perceptron.cpython-313.pyc
│     │     │  │  │     ├─ test_quantile.cpython-313.pyc
│     │     │  │  │     ├─ test_ransac.cpython-313.pyc
│     │     │  │  │     ├─ test_ridge.cpython-313.pyc
│     │     │  │  │     ├─ test_sag.cpython-313.pyc
│     │     │  │  │     ├─ test_sgd.cpython-313.pyc
│     │     │  │  │     ├─ test_sparse_coordinate_descent.cpython-313.pyc
│     │     │  │  │     ├─ test_theil_sen.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _base.py
│     │     │  │  ├─ _bayes.py
│     │     │  │  ├─ _cd_fast.cp313-win_amd64.lib
│     │     │  │  ├─ _cd_fast.cp313-win_amd64.pyd
│     │     │  │  ├─ _cd_fast.pyx
│     │     │  │  ├─ _coordinate_descent.py
│     │     │  │  ├─ _glm
│     │     │  │  │  ├─ glm.py
│     │     │  │  │  ├─ tests
│     │     │  │  │  │  ├─ test_glm.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ test_glm.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ _newton_solver.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ glm.cpython-313.pyc
│     │     │  │  │     ├─ _newton_solver.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _huber.py
│     │     │  │  ├─ _least_angle.py
│     │     │  │  ├─ _linear_loss.py
│     │     │  │  ├─ _logistic.py
│     │     │  │  ├─ _omp.py
│     │     │  │  ├─ _passive_aggressive.py
│     │     │  │  ├─ _perceptron.py
│     │     │  │  ├─ _quantile.py
│     │     │  │  ├─ _ransac.py
│     │     │  │  ├─ _ridge.py
│     │     │  │  ├─ _sag.py
│     │     │  │  ├─ _sag_fast.cp313-win_amd64.lib
│     │     │  │  ├─ _sag_fast.cp313-win_amd64.pyd
│     │     │  │  ├─ _sag_fast.pyx.tp
│     │     │  │  ├─ _sgd_fast.cp313-win_amd64.lib
│     │     │  │  ├─ _sgd_fast.cp313-win_amd64.pyd
│     │     │  │  ├─ _sgd_fast.pyx.tp
│     │     │  │  ├─ _stochastic_gradient.py
│     │     │  │  ├─ _theil_sen.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ _base.cpython-313.pyc
│     │     │  │     ├─ _bayes.cpython-313.pyc
│     │     │  │     ├─ _coordinate_descent.cpython-313.pyc
│     │     │  │     ├─ _huber.cpython-313.pyc
│     │     │  │     ├─ _least_angle.cpython-313.pyc
│     │     │  │     ├─ _linear_loss.cpython-313.pyc
│     │     │  │     ├─ _logistic.cpython-313.pyc
│     │     │  │     ├─ _omp.cpython-313.pyc
│     │     │  │     ├─ _passive_aggressive.cpython-313.pyc
│     │     │  │     ├─ _perceptron.cpython-313.pyc
│     │     │  │     ├─ _quantile.cpython-313.pyc
│     │     │  │     ├─ _ransac.cpython-313.pyc
│     │     │  │     ├─ _ridge.cpython-313.pyc
│     │     │  │     ├─ _sag.cpython-313.pyc
│     │     │  │     ├─ _stochastic_gradient.cpython-313.pyc
│     │     │  │     ├─ _theil_sen.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ manifold
│     │     │  │  ├─ meson.build
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ test_classical_mds.py
│     │     │  │  │  ├─ test_isomap.py
│     │     │  │  │  ├─ test_locally_linear.py
│     │     │  │  │  ├─ test_mds.py
│     │     │  │  │  ├─ test_spectral_embedding.py
│     │     │  │  │  ├─ test_t_sne.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ test_classical_mds.cpython-313.pyc
│     │     │  │  │     ├─ test_isomap.cpython-313.pyc
│     │     │  │  │     ├─ test_locally_linear.cpython-313.pyc
│     │     │  │  │     ├─ test_mds.cpython-313.pyc
│     │     │  │  │     ├─ test_spectral_embedding.cpython-313.pyc
│     │     │  │  │     ├─ test_t_sne.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _barnes_hut_tsne.cp313-win_amd64.lib
│     │     │  │  ├─ _barnes_hut_tsne.cp313-win_amd64.pyd
│     │     │  │  ├─ _barnes_hut_tsne.pyx
│     │     │  │  ├─ _classical_mds.py
│     │     │  │  ├─ _isomap.py
│     │     │  │  ├─ _locally_linear.py
│     │     │  │  ├─ _mds.py
│     │     │  │  ├─ _spectral_embedding.py
│     │     │  │  ├─ _t_sne.py
│     │     │  │  ├─ _utils.cp313-win_amd64.lib
│     │     │  │  ├─ _utils.cp313-win_amd64.pyd
│     │     │  │  ├─ _utils.pyx
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ _classical_mds.cpython-313.pyc
│     │     │  │     ├─ _isomap.cpython-313.pyc
│     │     │  │     ├─ _locally_linear.cpython-313.pyc
│     │     │  │     ├─ _mds.cpython-313.pyc
│     │     │  │     ├─ _spectral_embedding.cpython-313.pyc
│     │     │  │     ├─ _t_sne.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ meson.build
│     │     │  ├─ metrics
│     │     │  │  ├─ cluster
│     │     │  │  │  ├─ meson.build
│     │     │  │  │  ├─ tests
│     │     │  │  │  │  ├─ test_bicluster.py
│     │     │  │  │  │  ├─ test_common.py
│     │     │  │  │  │  ├─ test_supervised.py
│     │     │  │  │  │  ├─ test_unsupervised.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ test_bicluster.cpython-313.pyc
│     │     │  │  │  │     ├─ test_common.cpython-313.pyc
│     │     │  │  │  │     ├─ test_supervised.cpython-313.pyc
│     │     │  │  │  │     ├─ test_unsupervised.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ _bicluster.py
│     │     │  │  │  ├─ _expected_mutual_info_fast.cp313-win_amd64.lib
│     │     │  │  │  ├─ _expected_mutual_info_fast.cp313-win_amd64.pyd
│     │     │  │  │  ├─ _expected_mutual_info_fast.pyx
│     │     │  │  │  ├─ _supervised.py
│     │     │  │  │  ├─ _unsupervised.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ _bicluster.cpython-313.pyc
│     │     │  │  │     ├─ _supervised.cpython-313.pyc
│     │     │  │  │     ├─ _unsupervised.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ meson.build
│     │     │  │  ├─ pairwise.py
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ test_classification.py
│     │     │  │  │  ├─ test_common.py
│     │     │  │  │  ├─ test_pairwise.py
│     │     │  │  │  ├─ test_ranking.py
│     │     │  │  │  ├─ test_regression.py
│     │     │  │  │  ├─ test_score_objects.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ test_classification.cpython-313.pyc
│     │     │  │  │     ├─ test_common.cpython-313.pyc
│     │     │  │  │     ├─ test_pairwise.cpython-313.pyc
│     │     │  │  │     ├─ test_ranking.cpython-313.pyc
│     │     │  │  │     ├─ test_regression.cpython-313.pyc
│     │     │  │  │     ├─ test_score_objects.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _base.py
│     │     │  │  ├─ _classification.py
│     │     │  │  ├─ _pairwise_fast.cp313-win_amd64.lib
│     │     │  │  ├─ _pairwise_fast.cp313-win_amd64.pyd
│     │     │  │  ├─ _pairwise_fast.pyx
│     │     │  │  ├─ _plot
│     │     │  │  │  ├─ confusion_matrix.py
│     │     │  │  │  ├─ det_curve.py
│     │     │  │  │  ├─ precision_recall_curve.py
│     │     │  │  │  ├─ regression.py
│     │     │  │  │  ├─ roc_curve.py
│     │     │  │  │  ├─ tests
│     │     │  │  │  │  ├─ test_common_curve_display.py
│     │     │  │  │  │  ├─ test_confusion_matrix_display.py
│     │     │  │  │  │  ├─ test_det_curve_display.py
│     │     │  │  │  │  ├─ test_precision_recall_display.py
│     │     │  │  │  │  ├─ test_predict_error_display.py
│     │     │  │  │  │  ├─ test_roc_curve_display.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ test_common_curve_display.cpython-313.pyc
│     │     │  │  │  │     ├─ test_confusion_matrix_display.cpython-313.pyc
│     │     │  │  │  │     ├─ test_det_curve_display.cpython-313.pyc
│     │     │  │  │  │     ├─ test_precision_recall_display.cpython-313.pyc
│     │     │  │  │  │     ├─ test_predict_error_display.cpython-313.pyc
│     │     │  │  │  │     ├─ test_roc_curve_display.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ confusion_matrix.cpython-313.pyc
│     │     │  │  │     ├─ det_curve.cpython-313.pyc
│     │     │  │  │     ├─ precision_recall_curve.cpython-313.pyc
│     │     │  │  │     ├─ regression.cpython-313.pyc
│     │     │  │  │     ├─ roc_curve.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _ranking.py
│     │     │  │  ├─ _regression.py
│     │     │  │  ├─ _scorer.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ pairwise.cpython-313.pyc
│     │     │  │     ├─ _base.cpython-313.pyc
│     │     │  │     ├─ _classification.cpython-313.pyc
│     │     │  │     ├─ _ranking.cpython-313.pyc
│     │     │  │     ├─ _regression.cpython-313.pyc
│     │     │  │     ├─ _scorer.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ mixture
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ test_bayesian_mixture.py
│     │     │  │  │  ├─ test_gaussian_mixture.py
│     │     │  │  │  ├─ test_mixture.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ test_bayesian_mixture.cpython-313.pyc
│     │     │  │  │     ├─ test_gaussian_mixture.cpython-313.pyc
│     │     │  │  │     ├─ test_mixture.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _base.py
│     │     │  │  ├─ _bayesian_mixture.py
│     │     │  │  ├─ _gaussian_mixture.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ _base.cpython-313.pyc
│     │     │  │     ├─ _bayesian_mixture.cpython-313.pyc
│     │     │  │     ├─ _gaussian_mixture.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ model_selection
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ common.py
│     │     │  │  │  ├─ test_classification_threshold.py
│     │     │  │  │  ├─ test_plot.py
│     │     │  │  │  ├─ test_search.py
│     │     │  │  │  ├─ test_split.py
│     │     │  │  │  ├─ test_successive_halving.py
│     │     │  │  │  ├─ test_validation.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ common.cpython-313.pyc
│     │     │  │  │     ├─ test_classification_threshold.cpython-313.pyc
│     │     │  │  │     ├─ test_plot.cpython-313.pyc
│     │     │  │  │     ├─ test_search.cpython-313.pyc
│     │     │  │  │     ├─ test_split.cpython-313.pyc
│     │     │  │  │     ├─ test_successive_halving.cpython-313.pyc
│     │     │  │  │     ├─ test_validation.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _classification_threshold.py
│     │     │  │  ├─ _plot.py
│     │     │  │  ├─ _search.py
│     │     │  │  ├─ _search_successive_halving.py
│     │     │  │  ├─ _split.py
│     │     │  │  ├─ _validation.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ _classification_threshold.cpython-313.pyc
│     │     │  │     ├─ _plot.cpython-313.pyc
│     │     │  │     ├─ _search.cpython-313.pyc
│     │     │  │     ├─ _search_successive_halving.cpython-313.pyc
│     │     │  │     ├─ _split.cpython-313.pyc
│     │     │  │     ├─ _validation.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ multiclass.py
│     │     │  ├─ multioutput.py
│     │     │  ├─ naive_bayes.py
│     │     │  ├─ neighbors
│     │     │  │  ├─ meson.build
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ test_ball_tree.py
│     │     │  │  │  ├─ test_graph.py
│     │     │  │  │  ├─ test_kde.py
│     │     │  │  │  ├─ test_kd_tree.py
│     │     │  │  │  ├─ test_lof.py
│     │     │  │  │  ├─ test_nca.py
│     │     │  │  │  ├─ test_nearest_centroid.py
│     │     │  │  │  ├─ test_neighbors.py
│     │     │  │  │  ├─ test_neighbors_pipeline.py
│     │     │  │  │  ├─ test_neighbors_tree.py
│     │     │  │  │  ├─ test_quad_tree.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ test_ball_tree.cpython-313.pyc
│     │     │  │  │     ├─ test_graph.cpython-313.pyc
│     │     │  │  │     ├─ test_kde.cpython-313.pyc
│     │     │  │  │     ├─ test_kd_tree.cpython-313.pyc
│     │     │  │  │     ├─ test_lof.cpython-313.pyc
│     │     │  │  │     ├─ test_nca.cpython-313.pyc
│     │     │  │  │     ├─ test_nearest_centroid.cpython-313.pyc
│     │     │  │  │     ├─ test_neighbors.cpython-313.pyc
│     │     │  │  │     ├─ test_neighbors_pipeline.cpython-313.pyc
│     │     │  │  │     ├─ test_neighbors_tree.cpython-313.pyc
│     │     │  │  │     ├─ test_quad_tree.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _ball_tree.cp313-win_amd64.lib
│     │     │  │  ├─ _ball_tree.cp313-win_amd64.pyd
│     │     │  │  ├─ _ball_tree.pyx.tp
│     │     │  │  ├─ _base.py
│     │     │  │  ├─ _binary_tree.pxi.tp
│     │     │  │  ├─ _classification.py
│     │     │  │  ├─ _graph.py
│     │     │  │  ├─ _kde.py
│     │     │  │  ├─ _kd_tree.cp313-win_amd64.lib
│     │     │  │  ├─ _kd_tree.cp313-win_amd64.pyd
│     │     │  │  ├─ _kd_tree.pyx.tp
│     │     │  │  ├─ _lof.py
│     │     │  │  ├─ _nca.py
│     │     │  │  ├─ _nearest_centroid.py
│     │     │  │  ├─ _partition_nodes.cp313-win_amd64.lib
│     │     │  │  ├─ _partition_nodes.cp313-win_amd64.pyd
│     │     │  │  ├─ _partition_nodes.pxd
│     │     │  │  ├─ _partition_nodes.pyx
│     │     │  │  ├─ _quad_tree.cp313-win_amd64.lib
│     │     │  │  ├─ _quad_tree.cp313-win_amd64.pyd
│     │     │  │  ├─ _quad_tree.pxd
│     │     │  │  ├─ _quad_tree.pyx
│     │     │  │  ├─ _regression.py
│     │     │  │  ├─ _unsupervised.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ _base.cpython-313.pyc
│     │     │  │     ├─ _classification.cpython-313.pyc
│     │     │  │     ├─ _graph.cpython-313.pyc
│     │     │  │     ├─ _kde.cpython-313.pyc
│     │     │  │     ├─ _lof.cpython-313.pyc
│     │     │  │     ├─ _nca.cpython-313.pyc
│     │     │  │     ├─ _nearest_centroid.cpython-313.pyc
│     │     │  │     ├─ _regression.cpython-313.pyc
│     │     │  │     ├─ _unsupervised.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ neural_network
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ test_base.py
│     │     │  │  │  ├─ test_mlp.py
│     │     │  │  │  ├─ test_rbm.py
│     │     │  │  │  ├─ test_stochastic_optimizers.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ test_base.cpython-313.pyc
│     │     │  │  │     ├─ test_mlp.cpython-313.pyc
│     │     │  │  │     ├─ test_rbm.cpython-313.pyc
│     │     │  │  │     ├─ test_stochastic_optimizers.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _base.py
│     │     │  │  ├─ _multilayer_perceptron.py
│     │     │  │  ├─ _rbm.py
│     │     │  │  ├─ _stochastic_optimizers.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ _base.cpython-313.pyc
│     │     │  │     ├─ _multilayer_perceptron.cpython-313.pyc
│     │     │  │     ├─ _rbm.cpython-313.pyc
│     │     │  │     ├─ _stochastic_optimizers.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ pipeline.py
│     │     │  ├─ preprocessing
│     │     │  │  ├─ meson.build
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ test_common.py
│     │     │  │  │  ├─ test_data.py
│     │     │  │  │  ├─ test_discretization.py
│     │     │  │  │  ├─ test_encoders.py
│     │     │  │  │  ├─ test_function_transformer.py
│     │     │  │  │  ├─ test_label.py
│     │     │  │  │  ├─ test_polynomial.py
│     │     │  │  │  ├─ test_target_encoder.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ test_common.cpython-313.pyc
│     │     │  │  │     ├─ test_data.cpython-313.pyc
│     │     │  │  │     ├─ test_discretization.cpython-313.pyc
│     │     │  │  │     ├─ test_encoders.cpython-313.pyc
│     │     │  │  │     ├─ test_function_transformer.cpython-313.pyc
│     │     │  │  │     ├─ test_label.cpython-313.pyc
│     │     │  │  │     ├─ test_polynomial.cpython-313.pyc
│     │     │  │  │     ├─ test_target_encoder.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _csr_polynomial_expansion.cp313-win_amd64.lib
│     │     │  │  ├─ _csr_polynomial_expansion.cp313-win_amd64.pyd
│     │     │  │  ├─ _csr_polynomial_expansion.pyx
│     │     │  │  ├─ _data.py
│     │     │  │  ├─ _discretization.py
│     │     │  │  ├─ _encoders.py
│     │     │  │  ├─ _function_transformer.py
│     │     │  │  ├─ _label.py
│     │     │  │  ├─ _polynomial.py
│     │     │  │  ├─ _target_encoder.py
│     │     │  │  ├─ _target_encoder_fast.cp313-win_amd64.lib
│     │     │  │  ├─ _target_encoder_fast.cp313-win_amd64.pyd
│     │     │  │  ├─ _target_encoder_fast.pyx
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ _data.cpython-313.pyc
│     │     │  │     ├─ _discretization.cpython-313.pyc
│     │     │  │     ├─ _encoders.cpython-313.pyc
│     │     │  │     ├─ _function_transformer.cpython-313.pyc
│     │     │  │     ├─ _label.cpython-313.pyc
│     │     │  │     ├─ _polynomial.cpython-313.pyc
│     │     │  │     ├─ _target_encoder.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ random_projection.py
│     │     │  ├─ semi_supervised
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ test_label_propagation.py
│     │     │  │  │  ├─ test_self_training.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ test_label_propagation.cpython-313.pyc
│     │     │  │  │     ├─ test_self_training.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _label_propagation.py
│     │     │  │  ├─ _self_training.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ _label_propagation.cpython-313.pyc
│     │     │  │     ├─ _self_training.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ svm
│     │     │  │  ├─ meson.build
│     │     │  │  ├─ src
│     │     │  │  │  ├─ liblinear
│     │     │  │  │  │  ├─ COPYRIGHT
│     │     │  │  │  │  ├─ liblinear_helper.c
│     │     │  │  │  │  ├─ linear.cpp
│     │     │  │  │  │  ├─ linear.h
│     │     │  │  │  │  ├─ tron.cpp
│     │     │  │  │  │  ├─ tron.h
│     │     │  │  │  │  └─ _cython_blas_helpers.h
│     │     │  │  │  ├─ libsvm
│     │     │  │  │  │  ├─ LIBSVM_CHANGES
│     │     │  │  │  │  ├─ libsvm_helper.c
│     │     │  │  │  │  ├─ libsvm_sparse_helper.c
│     │     │  │  │  │  ├─ libsvm_template.cpp
│     │     │  │  │  │  ├─ svm.cpp
│     │     │  │  │  │  ├─ svm.h
│     │     │  │  │  │  └─ _svm_cython_blas_helpers.h
│     │     │  │  │  └─ newrand
│     │     │  │  │     └─ newrand.h
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ test_bounds.py
│     │     │  │  │  ├─ test_sparse.py
│     │     │  │  │  ├─ test_svm.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ test_bounds.cpython-313.pyc
│     │     │  │  │     ├─ test_sparse.cpython-313.pyc
│     │     │  │  │     ├─ test_svm.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _base.py
│     │     │  │  ├─ _bounds.py
│     │     │  │  ├─ _classes.py
│     │     │  │  ├─ _liblinear.cp313-win_amd64.lib
│     │     │  │  ├─ _liblinear.cp313-win_amd64.pyd
│     │     │  │  ├─ _liblinear.pxi
│     │     │  │  ├─ _liblinear.pyx
│     │     │  │  ├─ _libsvm.cp313-win_amd64.lib
│     │     │  │  ├─ _libsvm.cp313-win_amd64.pyd
│     │     │  │  ├─ _libsvm.pxi
│     │     │  │  ├─ _libsvm.pyx
│     │     │  │  ├─ _libsvm_sparse.cp313-win_amd64.lib
│     │     │  │  ├─ _libsvm_sparse.cp313-win_amd64.pyd
│     │     │  │  ├─ _libsvm_sparse.pyx
│     │     │  │  ├─ _newrand.cp313-win_amd64.lib
│     │     │  │  ├─ _newrand.cp313-win_amd64.pyd
│     │     │  │  ├─ _newrand.pyx
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ _base.cpython-313.pyc
│     │     │  │     ├─ _bounds.cpython-313.pyc
│     │     │  │     ├─ _classes.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ tests
│     │     │  │  ├─ metadata_routing_common.py
│     │     │  │  ├─ test_base.py
│     │     │  │  ├─ test_build.py
│     │     │  │  ├─ test_calibration.py
│     │     │  │  ├─ test_check_build.py
│     │     │  │  ├─ test_common.py
│     │     │  │  ├─ test_config.py
│     │     │  │  ├─ test_discriminant_analysis.py
│     │     │  │  ├─ test_docstrings.py
│     │     │  │  ├─ test_docstring_parameters.py
│     │     │  │  ├─ test_docstring_parameters_consistency.py
│     │     │  │  ├─ test_dummy.py
│     │     │  │  ├─ test_init.py
│     │     │  │  ├─ test_isotonic.py
│     │     │  │  ├─ test_kernel_approximation.py
│     │     │  │  ├─ test_kernel_ridge.py
│     │     │  │  ├─ test_metadata_routing.py
│     │     │  │  ├─ test_metaestimators.py
│     │     │  │  ├─ test_metaestimators_metadata_routing.py
│     │     │  │  ├─ test_min_dependencies_readme.py
│     │     │  │  ├─ test_multiclass.py
│     │     │  │  ├─ test_multioutput.py
│     │     │  │  ├─ test_naive_bayes.py
│     │     │  │  ├─ test_pipeline.py
│     │     │  │  ├─ test_public_functions.py
│     │     │  │  ├─ test_random_projection.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ metadata_routing_common.cpython-313.pyc
│     │     │  │     ├─ test_base.cpython-313.pyc
│     │     │  │     ├─ test_build.cpython-313.pyc
│     │     │  │     ├─ test_calibration.cpython-313.pyc
│     │     │  │     ├─ test_check_build.cpython-313.pyc
│     │     │  │     ├─ test_common.cpython-313.pyc
│     │     │  │     ├─ test_config.cpython-313.pyc
│     │     │  │     ├─ test_discriminant_analysis.cpython-313.pyc
│     │     │  │     ├─ test_docstrings.cpython-313.pyc
│     │     │  │     ├─ test_docstring_parameters.cpython-313.pyc
│     │     │  │     ├─ test_docstring_parameters_consistency.cpython-313.pyc
│     │     │  │     ├─ test_dummy.cpython-313.pyc
│     │     │  │     ├─ test_init.cpython-313.pyc
│     │     │  │     ├─ test_isotonic.cpython-313.pyc
│     │     │  │     ├─ test_kernel_approximation.cpython-313.pyc
│     │     │  │     ├─ test_kernel_ridge.cpython-313.pyc
│     │     │  │     ├─ test_metadata_routing.cpython-313.pyc
│     │     │  │     ├─ test_metaestimators.cpython-313.pyc
│     │     │  │     ├─ test_metaestimators_metadata_routing.cpython-313.pyc
│     │     │  │     ├─ test_min_dependencies_readme.cpython-313.pyc
│     │     │  │     ├─ test_multiclass.cpython-313.pyc
│     │     │  │     ├─ test_multioutput.cpython-313.pyc
│     │     │  │     ├─ test_naive_bayes.cpython-313.pyc
│     │     │  │     ├─ test_pipeline.cpython-313.pyc
│     │     │  │     ├─ test_public_functions.cpython-313.pyc
│     │     │  │     ├─ test_random_projection.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ tree
│     │     │  │  ├─ meson.build
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ test_export.py
│     │     │  │  │  ├─ test_fenwick.py
│     │     │  │  │  ├─ test_monotonic_tree.py
│     │     │  │  │  ├─ test_reingold_tilford.py
│     │     │  │  │  ├─ test_tree.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ test_export.cpython-313.pyc
│     │     │  │  │     ├─ test_fenwick.cpython-313.pyc
│     │     │  │  │     ├─ test_monotonic_tree.cpython-313.pyc
│     │     │  │  │     ├─ test_reingold_tilford.cpython-313.pyc
│     │     │  │  │     ├─ test_tree.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _classes.py
│     │     │  │  ├─ _criterion.cp313-win_amd64.lib
│     │     │  │  ├─ _criterion.cp313-win_amd64.pyd
│     │     │  │  ├─ _criterion.pxd
│     │     │  │  ├─ _criterion.pyx
│     │     │  │  ├─ _export.py
│     │     │  │  ├─ _partitioner.cp313-win_amd64.lib
│     │     │  │  ├─ _partitioner.cp313-win_amd64.pyd
│     │     │  │  ├─ _partitioner.pxd
│     │     │  │  ├─ _partitioner.pyx
│     │     │  │  ├─ _reingold_tilford.py
│     │     │  │  ├─ _splitter.cp313-win_amd64.lib
│     │     │  │  ├─ _splitter.cp313-win_amd64.pyd
│     │     │  │  ├─ _splitter.pxd
│     │     │  │  ├─ _splitter.pyx
│     │     │  │  ├─ _tree.cp313-win_amd64.lib
│     │     │  │  ├─ _tree.cp313-win_amd64.pyd
│     │     │  │  ├─ _tree.pxd
│     │     │  │  ├─ _tree.pyx
│     │     │  │  ├─ _utils.cp313-win_amd64.lib
│     │     │  │  ├─ _utils.cp313-win_amd64.pyd
│     │     │  │  ├─ _utils.pxd
│     │     │  │  ├─ _utils.pyx
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ _classes.cpython-313.pyc
│     │     │  │     ├─ _export.cpython-313.pyc
│     │     │  │     ├─ _reingold_tilford.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ utils
│     │     │  │  ├─ arrayfuncs.cp313-win_amd64.lib
│     │     │  │  ├─ arrayfuncs.cp313-win_amd64.pyd
│     │     │  │  ├─ arrayfuncs.pyx
│     │     │  │  ├─ class_weight.py
│     │     │  │  ├─ deprecation.py
│     │     │  │  ├─ discovery.py
│     │     │  │  ├─ estimator_checks.py
│     │     │  │  ├─ extmath.py
│     │     │  │  ├─ fixes.py
│     │     │  │  ├─ graph.py
│     │     │  │  ├─ meson.build
│     │     │  │  ├─ metadata_routing.py
│     │     │  │  ├─ metaestimators.py
│     │     │  │  ├─ multiclass.py
│     │     │  │  ├─ murmurhash.cp313-win_amd64.lib
│     │     │  │  ├─ murmurhash.cp313-win_amd64.pyd
│     │     │  │  ├─ murmurhash.pxd
│     │     │  │  ├─ murmurhash.pyx
│     │     │  │  ├─ optimize.py
│     │     │  │  ├─ parallel.py
│     │     │  │  ├─ random.py
│     │     │  │  ├─ sparsefuncs.py
│     │     │  │  ├─ sparsefuncs_fast.cp313-win_amd64.lib
│     │     │  │  ├─ sparsefuncs_fast.cp313-win_amd64.pyd
│     │     │  │  ├─ sparsefuncs_fast.pyx
│     │     │  │  ├─ src
│     │     │  │  │  ├─ MurmurHash3.cpp
│     │     │  │  │  └─ MurmurHash3.h
│     │     │  │  ├─ stats.py
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ test_arpack.py
│     │     │  │  │  ├─ test_arrayfuncs.py
│     │     │  │  │  ├─ test_array_api.py
│     │     │  │  │  ├─ test_bunch.py
│     │     │  │  │  ├─ test_chunking.py
│     │     │  │  │  ├─ test_class_weight.py
│     │     │  │  │  ├─ test_cython_blas.py
│     │     │  │  │  ├─ test_dataframe.py
│     │     │  │  │  ├─ test_deprecation.py
│     │     │  │  │  ├─ test_encode.py
│     │     │  │  │  ├─ test_estimator_checks.py
│     │     │  │  │  ├─ test_extmath.py
│     │     │  │  │  ├─ test_fast_dict.py
│     │     │  │  │  ├─ test_fixes.py
│     │     │  │  │  ├─ test_graph.py
│     │     │  │  │  ├─ test_indexing.py
│     │     │  │  │  ├─ test_mask.py
│     │     │  │  │  ├─ test_metaestimators.py
│     │     │  │  │  ├─ test_missing.py
│     │     │  │  │  ├─ test_mocking.py
│     │     │  │  │  ├─ test_multiclass.py
│     │     │  │  │  ├─ test_murmurhash.py
│     │     │  │  │  ├─ test_optimize.py
│     │     │  │  │  ├─ test_parallel.py
│     │     │  │  │  ├─ test_param_validation.py
│     │     │  │  │  ├─ test_plotting.py
│     │     │  │  │  ├─ test_pprint.py
│     │     │  │  │  ├─ test_random.py
│     │     │  │  │  ├─ test_response.py
│     │     │  │  │  ├─ test_seq_dataset.py
│     │     │  │  │  ├─ test_set_output.py
│     │     │  │  │  ├─ test_shortest_path.py
│     │     │  │  │  ├─ test_show_versions.py
│     │     │  │  │  ├─ test_sparsefuncs.py
│     │     │  │  │  ├─ test_stats.py
│     │     │  │  │  ├─ test_tags.py
│     │     │  │  │  ├─ test_testing.py
│     │     │  │  │  ├─ test_typedefs.py
│     │     │  │  │  ├─ test_unique.py
│     │     │  │  │  ├─ test_user_interface.py
│     │     │  │  │  ├─ test_validation.py
│     │     │  │  │  ├─ test_weight_vector.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ test_arpack.cpython-313.pyc
│     │     │  │  │     ├─ test_arrayfuncs.cpython-313.pyc
│     │     │  │  │     ├─ test_array_api.cpython-313.pyc
│     │     │  │  │     ├─ test_bunch.cpython-313.pyc
│     │     │  │  │     ├─ test_chunking.cpython-313.pyc
│     │     │  │  │     ├─ test_class_weight.cpython-313.pyc
│     │     │  │  │     ├─ test_cython_blas.cpython-313.pyc
│     │     │  │  │     ├─ test_dataframe.cpython-313.pyc
│     │     │  │  │     ├─ test_deprecation.cpython-313.pyc
│     │     │  │  │     ├─ test_encode.cpython-313.pyc
│     │     │  │  │     ├─ test_estimator_checks.cpython-313.pyc
│     │     │  │  │     ├─ test_extmath.cpython-313.pyc
│     │     │  │  │     ├─ test_fast_dict.cpython-313.pyc
│     │     │  │  │     ├─ test_fixes.cpython-313.pyc
│     │     │  │  │     ├─ test_graph.cpython-313.pyc
│     │     │  │  │     ├─ test_indexing.cpython-313.pyc
│     │     │  │  │     ├─ test_mask.cpython-313.pyc
│     │     │  │  │     ├─ test_metaestimators.cpython-313.pyc
│     │     │  │  │     ├─ test_missing.cpython-313.pyc
│     │     │  │  │     ├─ test_mocking.cpython-313.pyc
│     │     │  │  │     ├─ test_multiclass.cpython-313.pyc
│     │     │  │  │     ├─ test_murmurhash.cpython-313.pyc
│     │     │  │  │     ├─ test_optimize.cpython-313.pyc
│     │     │  │  │     ├─ test_parallel.cpython-313.pyc
│     │     │  │  │     ├─ test_param_validation.cpython-313.pyc
│     │     │  │  │     ├─ test_plotting.cpython-313.pyc
│     │     │  │  │     ├─ test_pprint.cpython-313.pyc
│     │     │  │  │     ├─ test_random.cpython-313.pyc
│     │     │  │  │     ├─ test_response.cpython-313.pyc
│     │     │  │  │     ├─ test_seq_dataset.cpython-313.pyc
│     │     │  │  │     ├─ test_set_output.cpython-313.pyc
│     │     │  │  │     ├─ test_shortest_path.cpython-313.pyc
│     │     │  │  │     ├─ test_show_versions.cpython-313.pyc
│     │     │  │  │     ├─ test_sparsefuncs.cpython-313.pyc
│     │     │  │  │     ├─ test_stats.cpython-313.pyc
│     │     │  │  │     ├─ test_tags.cpython-313.pyc
│     │     │  │  │     ├─ test_testing.cpython-313.pyc
│     │     │  │  │     ├─ test_typedefs.cpython-313.pyc
│     │     │  │  │     ├─ test_unique.cpython-313.pyc
│     │     │  │  │     ├─ test_user_interface.cpython-313.pyc
│     │     │  │  │     ├─ test_validation.cpython-313.pyc
│     │     │  │  │     ├─ test_weight_vector.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ validation.py
│     │     │  │  ├─ _arpack.py
│     │     │  │  ├─ _array_api.py
│     │     │  │  ├─ _available_if.py
│     │     │  │  ├─ _bunch.py
│     │     │  │  ├─ _chunking.py
│     │     │  │  ├─ _cython_blas.cp313-win_amd64.lib
│     │     │  │  ├─ _cython_blas.cp313-win_amd64.pyd
│     │     │  │  ├─ _cython_blas.pxd
│     │     │  │  ├─ _cython_blas.pyx
│     │     │  │  ├─ _dataframe.py
│     │     │  │  ├─ _encode.py
│     │     │  │  ├─ _fast_dict.cp313-win_amd64.lib
│     │     │  │  ├─ _fast_dict.cp313-win_amd64.pyd
│     │     │  │  ├─ _fast_dict.pxd
│     │     │  │  ├─ _fast_dict.pyx
│     │     │  │  ├─ _heap.cp313-win_amd64.lib
│     │     │  │  ├─ _heap.cp313-win_amd64.pyd
│     │     │  │  ├─ _heap.pxd
│     │     │  │  ├─ _heap.pyx
│     │     │  │  ├─ _indexing.py
│     │     │  │  ├─ _isfinite.cp313-win_amd64.lib
│     │     │  │  ├─ _isfinite.cp313-win_amd64.pyd
│     │     │  │  ├─ _isfinite.pyx
│     │     │  │  ├─ _mask.py
│     │     │  │  ├─ _metadata_requests.py
│     │     │  │  ├─ _missing.py
│     │     │  │  ├─ _mocking.py
│     │     │  │  ├─ _openmp_helpers.cp313-win_amd64.lib
│     │     │  │  ├─ _openmp_helpers.cp313-win_amd64.pyd
│     │     │  │  ├─ _openmp_helpers.pxd
│     │     │  │  ├─ _openmp_helpers.pyx
│     │     │  │  ├─ _optional_dependencies.py
│     │     │  │  ├─ _param_validation.py
│     │     │  │  ├─ _plotting.py
│     │     │  │  ├─ _pprint.py
│     │     │  │  ├─ _random.cp313-win_amd64.lib
│     │     │  │  ├─ _random.cp313-win_amd64.pyd
│     │     │  │  ├─ _random.pxd
│     │     │  │  ├─ _random.pyx
│     │     │  │  ├─ _repr_html
│     │     │  │  │  ├─ base.py
│     │     │  │  │  ├─ estimator.css
│     │     │  │  │  ├─ estimator.js
│     │     │  │  │  ├─ estimator.py
│     │     │  │  │  ├─ params.css
│     │     │  │  │  ├─ params.py
│     │     │  │  │  ├─ tests
│     │     │  │  │  │  ├─ test_estimator.py
│     │     │  │  │  │  ├─ test_js.py
│     │     │  │  │  │  ├─ test_params.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ test_estimator.cpython-313.pyc
│     │     │  │  │  │     ├─ test_js.cpython-313.pyc
│     │     │  │  │  │     ├─ test_params.cpython-313.pyc
│     │     │  │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ base.cpython-313.pyc
│     │     │  │  │     ├─ estimator.cpython-313.pyc
│     │     │  │  │     ├─ params.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _response.py
│     │     │  │  ├─ _seq_dataset.cp313-win_amd64.lib
│     │     │  │  ├─ _seq_dataset.cp313-win_amd64.pyd
│     │     │  │  ├─ _seq_dataset.pxd.tp
│     │     │  │  ├─ _seq_dataset.pyx.tp
│     │     │  │  ├─ _set_output.py
│     │     │  │  ├─ _show_versions.py
│     │     │  │  ├─ _sorting.cp313-win_amd64.lib
│     │     │  │  ├─ _sorting.cp313-win_amd64.pyd
│     │     │  │  ├─ _sorting.pxd
│     │     │  │  ├─ _sorting.pyx
│     │     │  │  ├─ _tags.py
│     │     │  │  ├─ _testing.py
│     │     │  │  ├─ _test_common
│     │     │  │  │  ├─ instance_generator.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ instance_generator.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _typedefs.cp313-win_amd64.lib
│     │     │  │  ├─ _typedefs.cp313-win_amd64.pyd
│     │     │  │  ├─ _typedefs.pxd
│     │     │  │  ├─ _typedefs.pyx
│     │     │  │  ├─ _unique.py
│     │     │  │  ├─ _user_interface.py
│     │     │  │  ├─ _vector_sentinel.cp313-win_amd64.lib
│     │     │  │  ├─ _vector_sentinel.cp313-win_amd64.pyd
│     │     │  │  ├─ _vector_sentinel.pxd
│     │     │  │  ├─ _vector_sentinel.pyx
│     │     │  │  ├─ _weight_vector.cp313-win_amd64.lib
│     │     │  │  ├─ _weight_vector.cp313-win_amd64.pyd
│     │     │  │  ├─ _weight_vector.pxd.tp
│     │     │  │  ├─ _weight_vector.pyx.tp
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ class_weight.cpython-313.pyc
│     │     │  │     ├─ deprecation.cpython-313.pyc
│     │     │  │     ├─ discovery.cpython-313.pyc
│     │     │  │     ├─ estimator_checks.cpython-313.pyc
│     │     │  │     ├─ extmath.cpython-313.pyc
│     │     │  │     ├─ fixes.cpython-313.pyc
│     │     │  │     ├─ graph.cpython-313.pyc
│     │     │  │     ├─ metadata_routing.cpython-313.pyc
│     │     │  │     ├─ metaestimators.cpython-313.pyc
│     │     │  │     ├─ multiclass.cpython-313.pyc
│     │     │  │     ├─ optimize.cpython-313.pyc
│     │     │  │     ├─ parallel.cpython-313.pyc
│     │     │  │     ├─ random.cpython-313.pyc
│     │     │  │     ├─ sparsefuncs.cpython-313.pyc
│     │     │  │     ├─ stats.cpython-313.pyc
│     │     │  │     ├─ validation.cpython-313.pyc
│     │     │  │     ├─ _arpack.cpython-313.pyc
│     │     │  │     ├─ _array_api.cpython-313.pyc
│     │     │  │     ├─ _available_if.cpython-313.pyc
│     │     │  │     ├─ _bunch.cpython-313.pyc
│     │     │  │     ├─ _chunking.cpython-313.pyc
│     │     │  │     ├─ _dataframe.cpython-313.pyc
│     │     │  │     ├─ _encode.cpython-313.pyc
│     │     │  │     ├─ _indexing.cpython-313.pyc
│     │     │  │     ├─ _mask.cpython-313.pyc
│     │     │  │     ├─ _metadata_requests.cpython-313.pyc
│     │     │  │     ├─ _missing.cpython-313.pyc
│     │     │  │     ├─ _mocking.cpython-313.pyc
│     │     │  │     ├─ _optional_dependencies.cpython-313.pyc
│     │     │  │     ├─ _param_validation.cpython-313.pyc
│     │     │  │     ├─ _plotting.cpython-313.pyc
│     │     │  │     ├─ _pprint.cpython-313.pyc
│     │     │  │     ├─ _response.cpython-313.pyc
│     │     │  │     ├─ _set_output.cpython-313.pyc
│     │     │  │     ├─ _show_versions.cpython-313.pyc
│     │     │  │     ├─ _tags.cpython-313.pyc
│     │     │  │     ├─ _testing.cpython-313.pyc
│     │     │  │     ├─ _unique.cpython-313.pyc
│     │     │  │     ├─ _user_interface.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ _build_utils
│     │     │  │  ├─ tempita.py
│     │     │  │  ├─ version.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ tempita.cpython-313.pyc
│     │     │  │     ├─ version.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ _config.py
│     │     │  ├─ _cyutility.cp313-win_amd64.lib
│     │     │  ├─ _cyutility.cp313-win_amd64.pyd
│     │     │  ├─ _isotonic.cp313-win_amd64.lib
│     │     │  ├─ _isotonic.cp313-win_amd64.pyd
│     │     │  ├─ _isotonic.pyx
│     │     │  ├─ _loss
│     │     │  │  ├─ link.py
│     │     │  │  ├─ loss.py
│     │     │  │  ├─ meson.build
│     │     │  │  ├─ tests
│     │     │  │  │  ├─ test_link.py
│     │     │  │  │  ├─ test_loss.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ test_link.cpython-313.pyc
│     │     │  │  │     ├─ test_loss.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ _loss.cp313-win_amd64.lib
│     │     │  │  ├─ _loss.cp313-win_amd64.pyd
│     │     │  │  ├─ _loss.pxd
│     │     │  │  ├─ _loss.pyx.tp
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ link.cpython-313.pyc
│     │     │  │     ├─ loss.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ _min_dependencies.py
│     │     │  ├─ __check_build
│     │     │  │  ├─ meson.build
│     │     │  │  ├─ _check_build.cp313-win_amd64.lib
│     │     │  │  ├─ _check_build.cp313-win_amd64.pyd
│     │     │  │  ├─ _check_build.pyx
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     ├─ base.cpython-313.pyc
│     │     │     ├─ calibration.cpython-313.pyc
│     │     │     ├─ conftest.cpython-313.pyc
│     │     │     ├─ discriminant_analysis.cpython-313.pyc
│     │     │     ├─ dummy.cpython-313.pyc
│     │     │     ├─ exceptions.cpython-313.pyc
│     │     │     ├─ isotonic.cpython-313.pyc
│     │     │     ├─ kernel_approximation.cpython-313.pyc
│     │     │     ├─ kernel_ridge.cpython-313.pyc
│     │     │     ├─ multiclass.cpython-313.pyc
│     │     │     ├─ multioutput.cpython-313.pyc
│     │     │     ├─ naive_bayes.cpython-313.pyc
│     │     │     ├─ pipeline.cpython-313.pyc
│     │     │     ├─ random_projection.cpython-313.pyc
│     │     │     ├─ _config.cpython-313.pyc
│     │     │     ├─ _min_dependencies.cpython-313.pyc
│     │     │     └─ __init__.cpython-313.pyc
│     │     ├─ soundfile.py
│     │     ├─ soxr
│     │     │  ├─ soxr_ext.pyd
│     │     │  ├─ soxr_ext.pyi
│     │     │  ├─ _version.py
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     ├─ _version.cpython-313.pyc
│     │     │     └─ __init__.cpython-313.pyc
│     │     ├─ starlette
│     │     │  ├─ applications.py
│     │     │  ├─ authentication.py
│     │     │  ├─ background.py
│     │     │  ├─ concurrency.py
│     │     │  ├─ config.py
│     │     │  ├─ convertors.py
│     │     │  ├─ datastructures.py
│     │     │  ├─ endpoints.py
│     │     │  ├─ exceptions.py
│     │     │  ├─ formparsers.py
│     │     │  ├─ middleware
│     │     │  │  ├─ authentication.py
│     │     │  │  ├─ base.py
│     │     │  │  ├─ cors.py
│     │     │  │  ├─ errors.py
│     │     │  │  ├─ exceptions.py
│     │     │  │  ├─ gzip.py
│     │     │  │  ├─ httpsredirect.py
│     │     │  │  ├─ sessions.py
│     │     │  │  ├─ trustedhost.py
│     │     │  │  ├─ wsgi.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ authentication.cpython-313.pyc
│     │     │  │     ├─ base.cpython-313.pyc
│     │     │  │     ├─ cors.cpython-313.pyc
│     │     │  │     ├─ errors.cpython-313.pyc
│     │     │  │     ├─ exceptions.cpython-313.pyc
│     │     │  │     ├─ gzip.cpython-313.pyc
│     │     │  │     ├─ httpsredirect.cpython-313.pyc
│     │     │  │     ├─ sessions.cpython-313.pyc
│     │     │  │     ├─ trustedhost.cpython-313.pyc
│     │     │  │     ├─ wsgi.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ py.typed
│     │     │  ├─ requests.py
│     │     │  ├─ responses.py
│     │     │  ├─ routing.py
│     │     │  ├─ schemas.py
│     │     │  ├─ staticfiles.py
│     │     │  ├─ status.py
│     │     │  ├─ templating.py
│     │     │  ├─ testclient.py
│     │     │  ├─ types.py
│     │     │  ├─ websockets.py
│     │     │  ├─ _exception_handler.py
│     │     │  ├─ _utils.py
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     ├─ applications.cpython-313.pyc
│     │     │     ├─ authentication.cpython-313.pyc
│     │     │     ├─ background.cpython-313.pyc
│     │     │     ├─ concurrency.cpython-313.pyc
│     │     │     ├─ config.cpython-313.pyc
│     │     │     ├─ convertors.cpython-313.pyc
│     │     │     ├─ datastructures.cpython-313.pyc
│     │     │     ├─ endpoints.cpython-313.pyc
│     │     │     ├─ exceptions.cpython-313.pyc
│     │     │     ├─ formparsers.cpython-313.pyc
│     │     │     ├─ requests.cpython-313.pyc
│     │     │     ├─ responses.cpython-313.pyc
│     │     │     ├─ routing.cpython-313.pyc
│     │     │     ├─ schemas.cpython-313.pyc
│     │     │     ├─ staticfiles.cpython-313.pyc
│     │     │     ├─ status.cpython-313.pyc
│     │     │     ├─ templating.cpython-313.pyc
│     │     │     ├─ testclient.cpython-313.pyc
│     │     │     ├─ types.cpython-313.pyc
│     │     │     ├─ websockets.cpython-313.pyc
│     │     │     ├─ _exception_handler.cpython-313.pyc
│     │     │     ├─ _utils.cpython-313.pyc
│     │     │     └─ __init__.cpython-313.pyc
│     │     ├─ sunau
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     └─ __init__.cpython-313.pyc
│     │     ├─ threadpoolctl.py
│     │     ├─ typing_extensions.py
│     │     ├─ typing_inspection
│     │     │  ├─ introspection.py
│     │     │  ├─ py.typed
│     │     │  ├─ typing_objects.py
│     │     │  ├─ typing_objects.pyi
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     ├─ introspection.cpython-313.pyc
│     │     │     ├─ typing_objects.cpython-313.pyc
│     │     │     └─ __init__.cpython-313.pyc
│     │     ├─ urllib3
│     │     │  ├─ connection.py
│     │     │  ├─ connectionpool.py
│     │     │  ├─ contrib
│     │     │  │  ├─ emscripten
│     │     │  │  │  ├─ connection.py
│     │     │  │  │  ├─ emscripten_fetch_worker.js
│     │     │  │  │  ├─ fetch.py
│     │     │  │  │  ├─ request.py
│     │     │  │  │  ├─ response.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ connection.cpython-313.pyc
│     │     │  │  │     ├─ fetch.cpython-313.pyc
│     │     │  │  │     ├─ request.cpython-313.pyc
│     │     │  │  │     ├─ response.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ pyopenssl.py
│     │     │  │  ├─ socks.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ pyopenssl.cpython-313.pyc
│     │     │  │     ├─ socks.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ exceptions.py
│     │     │  ├─ fields.py
│     │     │  ├─ filepost.py
│     │     │  ├─ http2
│     │     │  │  ├─ connection.py
│     │     │  │  ├─ probe.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ connection.cpython-313.pyc
│     │     │  │     ├─ probe.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ poolmanager.py
│     │     │  ├─ py.typed
│     │     │  ├─ response.py
│     │     │  ├─ util
│     │     │  │  ├─ connection.py
│     │     │  │  ├─ proxy.py
│     │     │  │  ├─ request.py
│     │     │  │  ├─ response.py
│     │     │  │  ├─ retry.py
│     │     │  │  ├─ ssltransport.py
│     │     │  │  ├─ ssl_.py
│     │     │  │  ├─ ssl_match_hostname.py
│     │     │  │  ├─ timeout.py
│     │     │  │  ├─ url.py
│     │     │  │  ├─ util.py
│     │     │  │  ├─ wait.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ connection.cpython-313.pyc
│     │     │  │     ├─ proxy.cpython-313.pyc
│     │     │  │     ├─ request.cpython-313.pyc
│     │     │  │     ├─ response.cpython-313.pyc
│     │     │  │     ├─ retry.cpython-313.pyc
│     │     │  │     ├─ ssltransport.cpython-313.pyc
│     │     │  │     ├─ ssl_.cpython-313.pyc
│     │     │  │     ├─ ssl_match_hostname.cpython-313.pyc
│     │     │  │     ├─ timeout.cpython-313.pyc
│     │     │  │     ├─ url.cpython-313.pyc
│     │     │  │     ├─ util.cpython-313.pyc
│     │     │  │     ├─ wait.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ _base_connection.py
│     │     │  ├─ _collections.py
│     │     │  ├─ _request_methods.py
│     │     │  ├─ _version.py
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     ├─ connection.cpython-313.pyc
│     │     │     ├─ connectionpool.cpython-313.pyc
│     │     │     ├─ exceptions.cpython-313.pyc
│     │     │     ├─ fields.cpython-313.pyc
│     │     │     ├─ filepost.cpython-313.pyc
│     │     │     ├─ poolmanager.cpython-313.pyc
│     │     │     ├─ response.cpython-313.pyc
│     │     │     ├─ _base_connection.cpython-313.pyc
│     │     │     ├─ _collections.cpython-313.pyc
│     │     │     ├─ _request_methods.cpython-313.pyc
│     │     │     ├─ _version.cpython-313.pyc
│     │     │     └─ __init__.cpython-313.pyc
│     │     ├─ uvicorn
│     │     │  ├─ config.py
│     │     │  ├─ importer.py
│     │     │  ├─ lifespan
│     │     │  │  ├─ off.py
│     │     │  │  ├─ on.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ off.cpython-313.pyc
│     │     │  │     ├─ on.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ logging.py
│     │     │  ├─ loops
│     │     │  │  ├─ asyncio.py
│     │     │  │  ├─ auto.py
│     │     │  │  ├─ uvloop.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ asyncio.cpython-313.pyc
│     │     │  │     ├─ auto.cpython-313.pyc
│     │     │  │     ├─ uvloop.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ main.py
│     │     │  ├─ middleware
│     │     │  │  ├─ asgi2.py
│     │     │  │  ├─ message_logger.py
│     │     │  │  ├─ proxy_headers.py
│     │     │  │  ├─ wsgi.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ asgi2.cpython-313.pyc
│     │     │  │     ├─ message_logger.cpython-313.pyc
│     │     │  │     ├─ proxy_headers.cpython-313.pyc
│     │     │  │     ├─ wsgi.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ protocols
│     │     │  │  ├─ http
│     │     │  │  │  ├─ auto.py
│     │     │  │  │  ├─ flow_control.py
│     │     │  │  │  ├─ h11_impl.py
│     │     │  │  │  ├─ httptools_impl.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ auto.cpython-313.pyc
│     │     │  │  │     ├─ flow_control.cpython-313.pyc
│     │     │  │  │     ├─ h11_impl.cpython-313.pyc
│     │     │  │  │     ├─ httptools_impl.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ utils.py
│     │     │  │  ├─ websockets
│     │     │  │  │  ├─ auto.py
│     │     │  │  │  ├─ websockets_impl.py
│     │     │  │  │  ├─ websockets_sansio_impl.py
│     │     │  │  │  ├─ wsproto_impl.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ auto.cpython-313.pyc
│     │     │  │  │     ├─ websockets_impl.cpython-313.pyc
│     │     │  │  │     ├─ websockets_sansio_impl.cpython-313.pyc
│     │     │  │  │     ├─ wsproto_impl.cpython-313.pyc
│     │     │  │  │     └─ __init__.cpython-313.pyc
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ utils.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ py.typed
│     │     │  ├─ server.py
│     │     │  ├─ supervisors
│     │     │  │  ├─ basereload.py
│     │     │  │  ├─ multiprocess.py
│     │     │  │  ├─ statreload.py
│     │     │  │  ├─ watchfilesreload.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ basereload.cpython-313.pyc
│     │     │  │     ├─ multiprocess.cpython-313.pyc
│     │     │  │     ├─ statreload.cpython-313.pyc
│     │     │  │     ├─ watchfilesreload.cpython-313.pyc
│     │     │  │     └─ __init__.cpython-313.pyc
│     │     │  ├─ workers.py
│     │     │  ├─ _compat.py
│     │     │  ├─ _subprocess.py
│     │     │  ├─ _types.py
│     │     │  ├─ __init__.py
│     │     │  ├─ __main__.py
│     │     │  └─ __pycache__
│     │     │     ├─ config.cpython-313.pyc
│     │     │     ├─ importer.cpython-313.pyc
│     │     │     ├─ logging.cpython-313.pyc
│     │     │     ├─ main.cpython-313.pyc
│     │     │     ├─ server.cpython-313.pyc
│     │     │     ├─ workers.cpython-313.pyc
│     │     │     ├─ _compat.cpython-313.pyc
│     │     │     ├─ _subprocess.cpython-313.pyc
│     │     │     ├─ _types.cpython-313.pyc
│     │     │     ├─ __init__.cpython-313.pyc
│     │     │     └─ __main__.cpython-313.pyc
│     │     ├─ _cffi_backend.cp313-win_amd64.pyd
│     │     ├─ _soundfile.py
│     │     ├─ _soundfile_data
│     │     │  ├─ COPYING
│     │     │  ├─ libsndfile_x64.dll
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     └─ __init__.cpython-313.pyc
│     │     └─ __pycache__
│     │        ├─ decorator.cpython-313.pyc
│     │        ├─ six.cpython-313.pyc
│     │        ├─ soundfile.cpython-313.pyc
│     │        ├─ threadpoolctl.cpython-313.pyc
│     │        ├─ typing_extensions.cpython-313.pyc
│     │        └─ _soundfile.cpython-313.pyc
│     ├─ pyvenv.cfg
│     └─ Scripts
│        ├─ activate
│        ├─ activate.bat
│        ├─ activate.fish
│        ├─ Activate.ps1
│        ├─ deactivate.bat
│        ├─ dotenv.exe
│        ├─ email_validator.exe
│        ├─ f2py.exe
│        ├─ fastapi.exe
│        ├─ normalizer.exe
│        ├─ numba
│        ├─ numpy-config.exe
│        ├─ pip.exe
│        ├─ pip3.13.exe
│        ├─ pip3.exe
│        ├─ pyrsa-decrypt.exe
│        ├─ pyrsa-encrypt.exe
│        ├─ pyrsa-keygen.exe
│        ├─ pyrsa-priv2pub.exe
│        ├─ pyrsa-sign.exe
│        ├─ pyrsa-verify.exe
│        ├─ python.exe
│        ├─ pythonw.exe
│        └─ uvicorn.exe
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ public
│  ├─ drums.glb
│  ├─ logo.png
│  └─ vite.svg
├─ README.md
├─ src
│  ├─ App.css
│  ├─ App.jsx
│  ├─ assets
│  │  └─ react.svg
│  ├─ components
│  │  ├─ CreatePasswordPage.jsx
│  │  ├─ ForgotPassword.jsx
│  │  ├─ Hero3D.jsx
│  │  ├─ LoginPage.jsx
│  │  ├─ LogoutModal.jsx
│  │  ├─ MainPage.jsx
│  │  ├─ MusicalNotations3D.jsx
│  │  ├─ MusicWave.jsx
│  │  ├─ RegistrationPage.jsx
│  │  └─ ScoreSection.jsx
│  ├─ index.css
│  └─ main.jsx
├─ tailwind.config.js
├─ venv
│  ├─ Include
│  ├─ Lib
│  │  └─ site-packages
│  │     ├─ aifc
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ annotated_doc
│  │     │  ├─ main.py
│  │     │  ├─ py.typed
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ main.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ annotated_types
│  │     │  ├─ py.typed
│  │     │  ├─ test_cases.py
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ test_cases.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ anyio
│  │     │  ├─ abc
│  │     │  │  ├─ _eventloop.py
│  │     │  │  ├─ _resources.py
│  │     │  │  ├─ _sockets.py
│  │     │  │  ├─ _streams.py
│  │     │  │  ├─ _subprocesses.py
│  │     │  │  ├─ _tasks.py
│  │     │  │  ├─ _testing.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ _eventloop.cpython-313.pyc
│  │     │  │     ├─ _resources.cpython-313.pyc
│  │     │  │     ├─ _sockets.cpython-313.pyc
│  │     │  │     ├─ _streams.cpython-313.pyc
│  │     │  │     ├─ _subprocesses.cpython-313.pyc
│  │     │  │     ├─ _tasks.cpython-313.pyc
│  │     │  │     ├─ _testing.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ from_thread.py
│  │     │  ├─ functools.py
│  │     │  ├─ lowlevel.py
│  │     │  ├─ py.typed
│  │     │  ├─ pytest_plugin.py
│  │     │  ├─ streams
│  │     │  │  ├─ buffered.py
│  │     │  │  ├─ file.py
│  │     │  │  ├─ memory.py
│  │     │  │  ├─ stapled.py
│  │     │  │  ├─ text.py
│  │     │  │  ├─ tls.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ buffered.cpython-313.pyc
│  │     │  │     ├─ file.cpython-313.pyc
│  │     │  │     ├─ memory.cpython-313.pyc
│  │     │  │     ├─ stapled.cpython-313.pyc
│  │     │  │     ├─ text.cpython-313.pyc
│  │     │  │     ├─ tls.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ to_interpreter.py
│  │     │  ├─ to_process.py
│  │     │  ├─ to_thread.py
│  │     │  ├─ _backends
│  │     │  │  ├─ _asyncio.py
│  │     │  │  ├─ _trio.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ _asyncio.cpython-313.pyc
│  │     │  │     ├─ _trio.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ _core
│  │     │  │  ├─ _asyncio_selector_thread.py
│  │     │  │  ├─ _contextmanagers.py
│  │     │  │  ├─ _eventloop.py
│  │     │  │  ├─ _exceptions.py
│  │     │  │  ├─ _fileio.py
│  │     │  │  ├─ _resources.py
│  │     │  │  ├─ _signals.py
│  │     │  │  ├─ _sockets.py
│  │     │  │  ├─ _streams.py
│  │     │  │  ├─ _subprocesses.py
│  │     │  │  ├─ _synchronization.py
│  │     │  │  ├─ _tasks.py
│  │     │  │  ├─ _tempfile.py
│  │     │  │  ├─ _testing.py
│  │     │  │  ├─ _typedattr.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ _asyncio_selector_thread.cpython-313.pyc
│  │     │  │     ├─ _contextmanagers.cpython-313.pyc
│  │     │  │     ├─ _eventloop.cpython-313.pyc
│  │     │  │     ├─ _exceptions.cpython-313.pyc
│  │     │  │     ├─ _fileio.cpython-313.pyc
│  │     │  │     ├─ _resources.cpython-313.pyc
│  │     │  │     ├─ _signals.cpython-313.pyc
│  │     │  │     ├─ _sockets.cpython-313.pyc
│  │     │  │     ├─ _streams.cpython-313.pyc
│  │     │  │     ├─ _subprocesses.cpython-313.pyc
│  │     │  │     ├─ _synchronization.cpython-313.pyc
│  │     │  │     ├─ _tasks.cpython-313.pyc
│  │     │  │     ├─ _tempfile.cpython-313.pyc
│  │     │  │     ├─ _testing.cpython-313.pyc
│  │     │  │     ├─ _typedattr.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ from_thread.cpython-313.pyc
│  │     │     ├─ functools.cpython-313.pyc
│  │     │     ├─ lowlevel.cpython-313.pyc
│  │     │     ├─ pytest_plugin.cpython-313.pyc
│  │     │     ├─ to_interpreter.cpython-313.pyc
│  │     │     ├─ to_process.cpython-313.pyc
│  │     │     ├─ to_thread.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ audioop
│  │     │  ├─ py.typed
│  │     │  ├─ _audioop.pyd
│  │     │  ├─ __init__.py
│  │     │  ├─ __init__.pyi
│  │     │  └─ __pycache__
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ audioread
│  │     │  ├─ base.py
│  │     │  ├─ exceptions.py
│  │     │  ├─ ffdec.py
│  │     │  ├─ gstdec.py
│  │     │  ├─ macca.py
│  │     │  ├─ maddec.py
│  │     │  ├─ rawread.py
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ base.cpython-313.pyc
│  │     │     ├─ exceptions.cpython-313.pyc
│  │     │     ├─ ffdec.cpython-313.pyc
│  │     │     ├─ gstdec.cpython-313.pyc
│  │     │     ├─ macca.cpython-313.pyc
│  │     │     ├─ maddec.cpython-313.pyc
│  │     │     ├─ rawread.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ bcrypt
│  │     │  ├─ py.typed
│  │     │  ├─ _bcrypt.pyd
│  │     │  ├─ __init__.py
│  │     │  ├─ __init__.pyi
│  │     │  └─ __pycache__
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ bson
│  │     │  ├─ binary.py
│  │     │  ├─ bson-endian.h
│  │     │  ├─ buffer.c
│  │     │  ├─ buffer.h
│  │     │  ├─ code.py
│  │     │  ├─ codec_options.py
│  │     │  ├─ datetime_ms.py
│  │     │  ├─ dbref.py
│  │     │  ├─ decimal128.py
│  │     │  ├─ errors.py
│  │     │  ├─ int64.py
│  │     │  ├─ json_util.py
│  │     │  ├─ max_key.py
│  │     │  ├─ min_key.py
│  │     │  ├─ objectid.py
│  │     │  ├─ py.typed
│  │     │  ├─ raw_bson.py
│  │     │  ├─ regex.py
│  │     │  ├─ son.py
│  │     │  ├─ time64.c
│  │     │  ├─ time64.h
│  │     │  ├─ time64_config.h
│  │     │  ├─ time64_limits.h
│  │     │  ├─ timestamp.py
│  │     │  ├─ typings.py
│  │     │  ├─ tz_util.py
│  │     │  ├─ _cbson.cp310-win_amd64.pyd
│  │     │  ├─ _cbson.cp311-win_amd64.pyd
│  │     │  ├─ _cbson.cp312-win_amd64.pyd
│  │     │  ├─ _cbson.cp313-win_amd64.pyd
│  │     │  ├─ _cbson.cp39-win_amd64.pyd
│  │     │  ├─ _cbsonmodule.c
│  │     │  ├─ _cbsonmodule.h
│  │     │  ├─ _helpers.py
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ binary.cpython-313.pyc
│  │     │     ├─ code.cpython-313.pyc
│  │     │     ├─ codec_options.cpython-313.pyc
│  │     │     ├─ datetime_ms.cpython-313.pyc
│  │     │     ├─ dbref.cpython-313.pyc
│  │     │     ├─ decimal128.cpython-313.pyc
│  │     │     ├─ errors.cpython-313.pyc
│  │     │     ├─ int64.cpython-313.pyc
│  │     │     ├─ json_util.cpython-313.pyc
│  │     │     ├─ max_key.cpython-313.pyc
│  │     │     ├─ min_key.cpython-313.pyc
│  │     │     ├─ objectid.cpython-313.pyc
│  │     │     ├─ raw_bson.cpython-313.pyc
│  │     │     ├─ regex.cpython-313.pyc
│  │     │     ├─ son.cpython-313.pyc
│  │     │     ├─ timestamp.cpython-313.pyc
│  │     │     ├─ typings.cpython-313.pyc
│  │     │     ├─ tz_util.cpython-313.pyc
│  │     │     ├─ _helpers.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ certifi
│  │     │  ├─ cacert.pem
│  │     │  ├─ core.py
│  │     │  ├─ py.typed
│  │     │  ├─ __init__.py
│  │     │  ├─ __main__.py
│  │     │  └─ __pycache__
│  │     │     ├─ core.cpython-313.pyc
│  │     │     ├─ __init__.cpython-313.pyc
│  │     │     └─ __main__.cpython-313.pyc
│  │     ├─ cffi
│  │     │  ├─ api.py
│  │     │  ├─ backend_ctypes.py
│  │     │  ├─ cffi_opcode.py
│  │     │  ├─ commontypes.py
│  │     │  ├─ cparser.py
│  │     │  ├─ error.py
│  │     │  ├─ ffiplatform.py
│  │     │  ├─ lock.py
│  │     │  ├─ model.py
│  │     │  ├─ parse_c_type.h
│  │     │  ├─ pkgconfig.py
│  │     │  ├─ recompiler.py
│  │     │  ├─ setuptools_ext.py
│  │     │  ├─ vengine_cpy.py
│  │     │  ├─ vengine_gen.py
│  │     │  ├─ verifier.py
│  │     │  ├─ _cffi_errors.h
│  │     │  ├─ _cffi_include.h
│  │     │  ├─ _embedding.h
│  │     │  ├─ _imp_emulation.py
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ api.cpython-313.pyc
│  │     │     ├─ backend_ctypes.cpython-313.pyc
│  │     │     ├─ cffi_opcode.cpython-313.pyc
│  │     │     ├─ commontypes.cpython-313.pyc
│  │     │     ├─ cparser.cpython-313.pyc
│  │     │     ├─ error.cpython-313.pyc
│  │     │     ├─ ffiplatform.cpython-313.pyc
│  │     │     ├─ lock.cpython-313.pyc
│  │     │     ├─ model.cpython-313.pyc
│  │     │     ├─ pkgconfig.cpython-313.pyc
│  │     │     ├─ recompiler.cpython-313.pyc
│  │     │     ├─ setuptools_ext.cpython-313.pyc
│  │     │     ├─ vengine_cpy.cpython-313.pyc
│  │     │     ├─ vengine_gen.cpython-313.pyc
│  │     │     ├─ verifier.cpython-313.pyc
│  │     │     ├─ _imp_emulation.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ charset_normalizer
│  │     │  ├─ api.py
│  │     │  ├─ cd.py
│  │     │  ├─ cli
│  │     │  │  ├─ __init__.py
│  │     │  │  ├─ __main__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ __init__.cpython-313.pyc
│  │     │  │     └─ __main__.cpython-313.pyc
│  │     │  ├─ constant.py
│  │     │  ├─ legacy.py
│  │     │  ├─ md.cp313-win_amd64.pyd
│  │     │  ├─ md.py
│  │     │  ├─ md__mypyc.cp313-win_amd64.pyd
│  │     │  ├─ models.py
│  │     │  ├─ py.typed
│  │     │  ├─ utils.py
│  │     │  ├─ version.py
│  │     │  ├─ __init__.py
│  │     │  ├─ __main__.py
│  │     │  └─ __pycache__
│  │     │     ├─ api.cpython-313.pyc
│  │     │     ├─ cd.cpython-313.pyc
│  │     │     ├─ constant.cpython-313.pyc
│  │     │     ├─ legacy.cpython-313.pyc
│  │     │     ├─ md.cpython-313.pyc
│  │     │     ├─ models.cpython-313.pyc
│  │     │     ├─ utils.cpython-313.pyc
│  │     │     ├─ version.cpython-313.pyc
│  │     │     ├─ __init__.cpython-313.pyc
│  │     │     └─ __main__.cpython-313.pyc
│  │     ├─ chunk
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ click
│  │     │  ├─ core.py
│  │     │  ├─ decorators.py
│  │     │  ├─ exceptions.py
│  │     │  ├─ formatting.py
│  │     │  ├─ globals.py
│  │     │  ├─ parser.py
│  │     │  ├─ py.typed
│  │     │  ├─ shell_completion.py
│  │     │  ├─ termui.py
│  │     │  ├─ testing.py
│  │     │  ├─ types.py
│  │     │  ├─ utils.py
│  │     │  ├─ _compat.py
│  │     │  ├─ _termui_impl.py
│  │     │  ├─ _textwrap.py
│  │     │  ├─ _utils.py
│  │     │  ├─ _winconsole.py
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ core.cpython-313.pyc
│  │     │     ├─ decorators.cpython-313.pyc
│  │     │     ├─ exceptions.cpython-313.pyc
│  │     │     ├─ formatting.cpython-313.pyc
│  │     │     ├─ globals.cpython-313.pyc
│  │     │     ├─ parser.cpython-313.pyc
│  │     │     ├─ shell_completion.cpython-313.pyc
│  │     │     ├─ termui.cpython-313.pyc
│  │     │     ├─ testing.cpython-313.pyc
│  │     │     ├─ types.cpython-313.pyc
│  │     │     ├─ utils.cpython-313.pyc
│  │     │     ├─ _compat.cpython-313.pyc
│  │     │     ├─ _termui_impl.cpython-313.pyc
│  │     │     ├─ _textwrap.cpython-313.pyc
│  │     │     ├─ _utils.cpython-313.pyc
│  │     │     ├─ _winconsole.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ colorama
│  │     │  ├─ ansi.py
│  │     │  ├─ ansitowin32.py
│  │     │  ├─ initialise.py
│  │     │  ├─ tests
│  │     │  │  ├─ ansitowin32_test.py
│  │     │  │  ├─ ansi_test.py
│  │     │  │  ├─ initialise_test.py
│  │     │  │  ├─ isatty_test.py
│  │     │  │  ├─ utils.py
│  │     │  │  ├─ winterm_test.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ ansitowin32_test.cpython-313.pyc
│  │     │  │     ├─ ansi_test.cpython-313.pyc
│  │     │  │     ├─ initialise_test.cpython-313.pyc
│  │     │  │     ├─ isatty_test.cpython-313.pyc
│  │     │  │     ├─ utils.cpython-313.pyc
│  │     │  │     ├─ winterm_test.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ win32.py
│  │     │  ├─ winterm.py
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ ansi.cpython-313.pyc
│  │     │     ├─ ansitowin32.cpython-313.pyc
│  │     │     ├─ initialise.cpython-313.pyc
│  │     │     ├─ win32.cpython-313.pyc
│  │     │     ├─ winterm.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ cryptography
│  │     │  ├─ exceptions.py
│  │     │  ├─ fernet.py
│  │     │  ├─ hazmat
│  │     │  │  ├─ asn1
│  │     │  │  │  ├─ asn1.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ asn1.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ backends
│  │     │  │  │  ├─ openssl
│  │     │  │  │  │  ├─ backend.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ backend.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ bindings
│  │     │  │  │  ├─ openssl
│  │     │  │  │  │  ├─ binding.py
│  │     │  │  │  │  ├─ _conditional.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ binding.cpython-313.pyc
│  │     │  │  │  │     ├─ _conditional.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ _rust
│  │     │  │  │  │  ├─ asn1.pyi
│  │     │  │  │  │  ├─ declarative_asn1.pyi
│  │     │  │  │  │  ├─ exceptions.pyi
│  │     │  │  │  │  ├─ ocsp.pyi
│  │     │  │  │  │  ├─ openssl
│  │     │  │  │  │  │  ├─ aead.pyi
│  │     │  │  │  │  │  ├─ ciphers.pyi
│  │     │  │  │  │  │  ├─ cmac.pyi
│  │     │  │  │  │  │  ├─ dh.pyi
│  │     │  │  │  │  │  ├─ dsa.pyi
│  │     │  │  │  │  │  ├─ ec.pyi
│  │     │  │  │  │  │  ├─ ed25519.pyi
│  │     │  │  │  │  │  ├─ ed448.pyi
│  │     │  │  │  │  │  ├─ hashes.pyi
│  │     │  │  │  │  │  ├─ hmac.pyi
│  │     │  │  │  │  │  ├─ kdf.pyi
│  │     │  │  │  │  │  ├─ keys.pyi
│  │     │  │  │  │  │  ├─ poly1305.pyi
│  │     │  │  │  │  │  ├─ rsa.pyi
│  │     │  │  │  │  │  ├─ x25519.pyi
│  │     │  │  │  │  │  ├─ x448.pyi
│  │     │  │  │  │  │  └─ __init__.pyi
│  │     │  │  │  │  ├─ pkcs12.pyi
│  │     │  │  │  │  ├─ pkcs7.pyi
│  │     │  │  │  │  ├─ test_support.pyi
│  │     │  │  │  │  ├─ x509.pyi
│  │     │  │  │  │  ├─ _openssl.pyi
│  │     │  │  │  │  └─ __init__.pyi
│  │     │  │  │  ├─ _rust.pyd
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ decrepit
│  │     │  │  │  ├─ ciphers
│  │     │  │  │  │  ├─ algorithms.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ algorithms.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ primitives
│  │     │  │  │  ├─ asymmetric
│  │     │  │  │  │  ├─ dh.py
│  │     │  │  │  │  ├─ dsa.py
│  │     │  │  │  │  ├─ ec.py
│  │     │  │  │  │  ├─ ed25519.py
│  │     │  │  │  │  ├─ ed448.py
│  │     │  │  │  │  ├─ padding.py
│  │     │  │  │  │  ├─ rsa.py
│  │     │  │  │  │  ├─ types.py
│  │     │  │  │  │  ├─ utils.py
│  │     │  │  │  │  ├─ x25519.py
│  │     │  │  │  │  ├─ x448.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ dh.cpython-313.pyc
│  │     │  │  │  │     ├─ dsa.cpython-313.pyc
│  │     │  │  │  │     ├─ ec.cpython-313.pyc
│  │     │  │  │  │     ├─ ed25519.cpython-313.pyc
│  │     │  │  │  │     ├─ ed448.cpython-313.pyc
│  │     │  │  │  │     ├─ padding.cpython-313.pyc
│  │     │  │  │  │     ├─ rsa.cpython-313.pyc
│  │     │  │  │  │     ├─ types.cpython-313.pyc
│  │     │  │  │  │     ├─ utils.cpython-313.pyc
│  │     │  │  │  │     ├─ x25519.cpython-313.pyc
│  │     │  │  │  │     ├─ x448.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ ciphers
│  │     │  │  │  │  ├─ aead.py
│  │     │  │  │  │  ├─ algorithms.py
│  │     │  │  │  │  ├─ base.py
│  │     │  │  │  │  ├─ modes.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ aead.cpython-313.pyc
│  │     │  │  │  │     ├─ algorithms.cpython-313.pyc
│  │     │  │  │  │     ├─ base.cpython-313.pyc
│  │     │  │  │  │     ├─ modes.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ cmac.py
│  │     │  │  │  ├─ constant_time.py
│  │     │  │  │  ├─ hashes.py
│  │     │  │  │  ├─ hmac.py
│  │     │  │  │  ├─ kdf
│  │     │  │  │  │  ├─ argon2.py
│  │     │  │  │  │  ├─ concatkdf.py
│  │     │  │  │  │  ├─ hkdf.py
│  │     │  │  │  │  ├─ kbkdf.py
│  │     │  │  │  │  ├─ pbkdf2.py
│  │     │  │  │  │  ├─ scrypt.py
│  │     │  │  │  │  ├─ x963kdf.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ argon2.cpython-313.pyc
│  │     │  │  │  │     ├─ concatkdf.cpython-313.pyc
│  │     │  │  │  │     ├─ hkdf.cpython-313.pyc
│  │     │  │  │  │     ├─ kbkdf.cpython-313.pyc
│  │     │  │  │  │     ├─ pbkdf2.cpython-313.pyc
│  │     │  │  │  │     ├─ scrypt.cpython-313.pyc
│  │     │  │  │  │     ├─ x963kdf.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ keywrap.py
│  │     │  │  │  ├─ padding.py
│  │     │  │  │  ├─ poly1305.py
│  │     │  │  │  ├─ serialization
│  │     │  │  │  │  ├─ base.py
│  │     │  │  │  │  ├─ pkcs12.py
│  │     │  │  │  │  ├─ pkcs7.py
│  │     │  │  │  │  ├─ ssh.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ base.cpython-313.pyc
│  │     │  │  │  │     ├─ pkcs12.cpython-313.pyc
│  │     │  │  │  │     ├─ pkcs7.cpython-313.pyc
│  │     │  │  │  │     ├─ ssh.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ twofactor
│  │     │  │  │  │  ├─ hotp.py
│  │     │  │  │  │  ├─ totp.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ hotp.cpython-313.pyc
│  │     │  │  │  │     ├─ totp.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ _asymmetric.py
│  │     │  │  │  ├─ _cipheralgorithm.py
│  │     │  │  │  ├─ _serialization.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ cmac.cpython-313.pyc
│  │     │  │  │     ├─ constant_time.cpython-313.pyc
│  │     │  │  │     ├─ hashes.cpython-313.pyc
│  │     │  │  │     ├─ hmac.cpython-313.pyc
│  │     │  │  │     ├─ keywrap.cpython-313.pyc
│  │     │  │  │     ├─ padding.cpython-313.pyc
│  │     │  │  │     ├─ poly1305.cpython-313.pyc
│  │     │  │  │     ├─ _asymmetric.cpython-313.pyc
│  │     │  │  │     ├─ _cipheralgorithm.cpython-313.pyc
│  │     │  │  │     ├─ _serialization.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _oid.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ _oid.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ py.typed
│  │     │  ├─ utils.py
│  │     │  ├─ x509
│  │     │  │  ├─ base.py
│  │     │  │  ├─ certificate_transparency.py
│  │     │  │  ├─ extensions.py
│  │     │  │  ├─ general_name.py
│  │     │  │  ├─ name.py
│  │     │  │  ├─ ocsp.py
│  │     │  │  ├─ oid.py
│  │     │  │  ├─ verification.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ base.cpython-313.pyc
│  │     │  │     ├─ certificate_transparency.cpython-313.pyc
│  │     │  │     ├─ extensions.cpython-313.pyc
│  │     │  │     ├─ general_name.cpython-313.pyc
│  │     │  │     ├─ name.cpython-313.pyc
│  │     │  │     ├─ ocsp.cpython-313.pyc
│  │     │  │     ├─ oid.cpython-313.pyc
│  │     │  │     ├─ verification.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ __about__.py
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ exceptions.cpython-313.pyc
│  │     │     ├─ fernet.cpython-313.pyc
│  │     │     ├─ utils.cpython-313.pyc
│  │     │     ├─ __about__.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ decorator.py
│  │     ├─ dns
│  │     │  ├─ asyncbackend.py
│  │     │  ├─ asyncquery.py
│  │     │  ├─ asyncresolver.py
│  │     │  ├─ btree.py
│  │     │  ├─ btreezone.py
│  │     │  ├─ dnssec.py
│  │     │  ├─ dnssecalgs
│  │     │  │  ├─ base.py
│  │     │  │  ├─ cryptography.py
│  │     │  │  ├─ dsa.py
│  │     │  │  ├─ ecdsa.py
│  │     │  │  ├─ eddsa.py
│  │     │  │  ├─ rsa.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ base.cpython-313.pyc
│  │     │  │     ├─ cryptography.cpython-313.pyc
│  │     │  │     ├─ dsa.cpython-313.pyc
│  │     │  │     ├─ ecdsa.cpython-313.pyc
│  │     │  │     ├─ eddsa.cpython-313.pyc
│  │     │  │     ├─ rsa.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ dnssectypes.py
│  │     │  ├─ e164.py
│  │     │  ├─ edns.py
│  │     │  ├─ entropy.py
│  │     │  ├─ enum.py
│  │     │  ├─ exception.py
│  │     │  ├─ flags.py
│  │     │  ├─ grange.py
│  │     │  ├─ immutable.py
│  │     │  ├─ inet.py
│  │     │  ├─ ipv4.py
│  │     │  ├─ ipv6.py
│  │     │  ├─ message.py
│  │     │  ├─ name.py
│  │     │  ├─ namedict.py
│  │     │  ├─ nameserver.py
│  │     │  ├─ node.py
│  │     │  ├─ opcode.py
│  │     │  ├─ py.typed
│  │     │  ├─ query.py
│  │     │  ├─ quic
│  │     │  │  ├─ _asyncio.py
│  │     │  │  ├─ _common.py
│  │     │  │  ├─ _sync.py
│  │     │  │  ├─ _trio.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ _asyncio.cpython-313.pyc
│  │     │  │     ├─ _common.cpython-313.pyc
│  │     │  │     ├─ _sync.cpython-313.pyc
│  │     │  │     ├─ _trio.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ rcode.py
│  │     │  ├─ rdata.py
│  │     │  ├─ rdataclass.py
│  │     │  ├─ rdataset.py
│  │     │  ├─ rdatatype.py
│  │     │  ├─ rdtypes
│  │     │  │  ├─ ANY
│  │     │  │  │  ├─ AFSDB.py
│  │     │  │  │  ├─ AMTRELAY.py
│  │     │  │  │  ├─ AVC.py
│  │     │  │  │  ├─ CAA.py
│  │     │  │  │  ├─ CDNSKEY.py
│  │     │  │  │  ├─ CDS.py
│  │     │  │  │  ├─ CERT.py
│  │     │  │  │  ├─ CNAME.py
│  │     │  │  │  ├─ CSYNC.py
│  │     │  │  │  ├─ DLV.py
│  │     │  │  │  ├─ DNAME.py
│  │     │  │  │  ├─ DNSKEY.py
│  │     │  │  │  ├─ DS.py
│  │     │  │  │  ├─ DSYNC.py
│  │     │  │  │  ├─ EUI48.py
│  │     │  │  │  ├─ EUI64.py
│  │     │  │  │  ├─ GPOS.py
│  │     │  │  │  ├─ HINFO.py
│  │     │  │  │  ├─ HIP.py
│  │     │  │  │  ├─ ISDN.py
│  │     │  │  │  ├─ L32.py
│  │     │  │  │  ├─ L64.py
│  │     │  │  │  ├─ LOC.py
│  │     │  │  │  ├─ LP.py
│  │     │  │  │  ├─ MX.py
│  │     │  │  │  ├─ NID.py
│  │     │  │  │  ├─ NINFO.py
│  │     │  │  │  ├─ NS.py
│  │     │  │  │  ├─ NSEC.py
│  │     │  │  │  ├─ NSEC3.py
│  │     │  │  │  ├─ NSEC3PARAM.py
│  │     │  │  │  ├─ OPENPGPKEY.py
│  │     │  │  │  ├─ OPT.py
│  │     │  │  │  ├─ PTR.py
│  │     │  │  │  ├─ RESINFO.py
│  │     │  │  │  ├─ RP.py
│  │     │  │  │  ├─ RRSIG.py
│  │     │  │  │  ├─ RT.py
│  │     │  │  │  ├─ SMIMEA.py
│  │     │  │  │  ├─ SOA.py
│  │     │  │  │  ├─ SPF.py
│  │     │  │  │  ├─ SSHFP.py
│  │     │  │  │  ├─ TKEY.py
│  │     │  │  │  ├─ TLSA.py
│  │     │  │  │  ├─ TSIG.py
│  │     │  │  │  ├─ TXT.py
│  │     │  │  │  ├─ URI.py
│  │     │  │  │  ├─ WALLET.py
│  │     │  │  │  ├─ X25.py
│  │     │  │  │  ├─ ZONEMD.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ AFSDB.cpython-313.pyc
│  │     │  │  │     ├─ AMTRELAY.cpython-313.pyc
│  │     │  │  │     ├─ AVC.cpython-313.pyc
│  │     │  │  │     ├─ CAA.cpython-313.pyc
│  │     │  │  │     ├─ CDNSKEY.cpython-313.pyc
│  │     │  │  │     ├─ CDS.cpython-313.pyc
│  │     │  │  │     ├─ CERT.cpython-313.pyc
│  │     │  │  │     ├─ CNAME.cpython-313.pyc
│  │     │  │  │     ├─ CSYNC.cpython-313.pyc
│  │     │  │  │     ├─ DLV.cpython-313.pyc
│  │     │  │  │     ├─ DNAME.cpython-313.pyc
│  │     │  │  │     ├─ DNSKEY.cpython-313.pyc
│  │     │  │  │     ├─ DS.cpython-313.pyc
│  │     │  │  │     ├─ DSYNC.cpython-313.pyc
│  │     │  │  │     ├─ EUI48.cpython-313.pyc
│  │     │  │  │     ├─ EUI64.cpython-313.pyc
│  │     │  │  │     ├─ GPOS.cpython-313.pyc
│  │     │  │  │     ├─ HINFO.cpython-313.pyc
│  │     │  │  │     ├─ HIP.cpython-313.pyc
│  │     │  │  │     ├─ ISDN.cpython-313.pyc
│  │     │  │  │     ├─ L32.cpython-313.pyc
│  │     │  │  │     ├─ L64.cpython-313.pyc
│  │     │  │  │     ├─ LOC.cpython-313.pyc
│  │     │  │  │     ├─ LP.cpython-313.pyc
│  │     │  │  │     ├─ MX.cpython-313.pyc
│  │     │  │  │     ├─ NID.cpython-313.pyc
│  │     │  │  │     ├─ NINFO.cpython-313.pyc
│  │     │  │  │     ├─ NS.cpython-313.pyc
│  │     │  │  │     ├─ NSEC.cpython-313.pyc
│  │     │  │  │     ├─ NSEC3.cpython-313.pyc
│  │     │  │  │     ├─ NSEC3PARAM.cpython-313.pyc
│  │     │  │  │     ├─ OPENPGPKEY.cpython-313.pyc
│  │     │  │  │     ├─ OPT.cpython-313.pyc
│  │     │  │  │     ├─ PTR.cpython-313.pyc
│  │     │  │  │     ├─ RESINFO.cpython-313.pyc
│  │     │  │  │     ├─ RP.cpython-313.pyc
│  │     │  │  │     ├─ RRSIG.cpython-313.pyc
│  │     │  │  │     ├─ RT.cpython-313.pyc
│  │     │  │  │     ├─ SMIMEA.cpython-313.pyc
│  │     │  │  │     ├─ SOA.cpython-313.pyc
│  │     │  │  │     ├─ SPF.cpython-313.pyc
│  │     │  │  │     ├─ SSHFP.cpython-313.pyc
│  │     │  │  │     ├─ TKEY.cpython-313.pyc
│  │     │  │  │     ├─ TLSA.cpython-313.pyc
│  │     │  │  │     ├─ TSIG.cpython-313.pyc
│  │     │  │  │     ├─ TXT.cpython-313.pyc
│  │     │  │  │     ├─ URI.cpython-313.pyc
│  │     │  │  │     ├─ WALLET.cpython-313.pyc
│  │     │  │  │     ├─ X25.cpython-313.pyc
│  │     │  │  │     ├─ ZONEMD.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ CH
│  │     │  │  │  ├─ A.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ A.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ dnskeybase.py
│  │     │  │  ├─ dsbase.py
│  │     │  │  ├─ euibase.py
│  │     │  │  ├─ IN
│  │     │  │  │  ├─ A.py
│  │     │  │  │  ├─ AAAA.py
│  │     │  │  │  ├─ APL.py
│  │     │  │  │  ├─ DHCID.py
│  │     │  │  │  ├─ HTTPS.py
│  │     │  │  │  ├─ IPSECKEY.py
│  │     │  │  │  ├─ KX.py
│  │     │  │  │  ├─ NAPTR.py
│  │     │  │  │  ├─ NSAP.py
│  │     │  │  │  ├─ NSAP_PTR.py
│  │     │  │  │  ├─ PX.py
│  │     │  │  │  ├─ SRV.py
│  │     │  │  │  ├─ SVCB.py
│  │     │  │  │  ├─ WKS.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ A.cpython-313.pyc
│  │     │  │  │     ├─ AAAA.cpython-313.pyc
│  │     │  │  │     ├─ APL.cpython-313.pyc
│  │     │  │  │     ├─ DHCID.cpython-313.pyc
│  │     │  │  │     ├─ HTTPS.cpython-313.pyc
│  │     │  │  │     ├─ IPSECKEY.cpython-313.pyc
│  │     │  │  │     ├─ KX.cpython-313.pyc
│  │     │  │  │     ├─ NAPTR.cpython-313.pyc
│  │     │  │  │     ├─ NSAP.cpython-313.pyc
│  │     │  │  │     ├─ NSAP_PTR.cpython-313.pyc
│  │     │  │  │     ├─ PX.cpython-313.pyc
│  │     │  │  │     ├─ SRV.cpython-313.pyc
│  │     │  │  │     ├─ SVCB.cpython-313.pyc
│  │     │  │  │     ├─ WKS.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ mxbase.py
│  │     │  │  ├─ nsbase.py
│  │     │  │  ├─ svcbbase.py
│  │     │  │  ├─ tlsabase.py
│  │     │  │  ├─ txtbase.py
│  │     │  │  ├─ util.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ dnskeybase.cpython-313.pyc
│  │     │  │     ├─ dsbase.cpython-313.pyc
│  │     │  │     ├─ euibase.cpython-313.pyc
│  │     │  │     ├─ mxbase.cpython-313.pyc
│  │     │  │     ├─ nsbase.cpython-313.pyc
│  │     │  │     ├─ svcbbase.cpython-313.pyc
│  │     │  │     ├─ tlsabase.cpython-313.pyc
│  │     │  │     ├─ txtbase.cpython-313.pyc
│  │     │  │     ├─ util.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ renderer.py
│  │     │  ├─ resolver.py
│  │     │  ├─ reversename.py
│  │     │  ├─ rrset.py
│  │     │  ├─ serial.py
│  │     │  ├─ set.py
│  │     │  ├─ tokenizer.py
│  │     │  ├─ transaction.py
│  │     │  ├─ tsig.py
│  │     │  ├─ tsigkeyring.py
│  │     │  ├─ ttl.py
│  │     │  ├─ update.py
│  │     │  ├─ version.py
│  │     │  ├─ versioned.py
│  │     │  ├─ win32util.py
│  │     │  ├─ wire.py
│  │     │  ├─ xfr.py
│  │     │  ├─ zone.py
│  │     │  ├─ zonefile.py
│  │     │  ├─ zonetypes.py
│  │     │  ├─ _asyncbackend.py
│  │     │  ├─ _asyncio_backend.py
│  │     │  ├─ _ddr.py
│  │     │  ├─ _features.py
│  │     │  ├─ _immutable_ctx.py
│  │     │  ├─ _no_ssl.py
│  │     │  ├─ _tls_util.py
│  │     │  ├─ _trio_backend.py
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ asyncbackend.cpython-313.pyc
│  │     │     ├─ asyncquery.cpython-313.pyc
│  │     │     ├─ asyncresolver.cpython-313.pyc
│  │     │     ├─ btree.cpython-313.pyc
│  │     │     ├─ btreezone.cpython-313.pyc
│  │     │     ├─ dnssec.cpython-313.pyc
│  │     │     ├─ dnssectypes.cpython-313.pyc
│  │     │     ├─ e164.cpython-313.pyc
│  │     │     ├─ edns.cpython-313.pyc
│  │     │     ├─ entropy.cpython-313.pyc
│  │     │     ├─ enum.cpython-313.pyc
│  │     │     ├─ exception.cpython-313.pyc
│  │     │     ├─ flags.cpython-313.pyc
│  │     │     ├─ grange.cpython-313.pyc
│  │     │     ├─ immutable.cpython-313.pyc
│  │     │     ├─ inet.cpython-313.pyc
│  │     │     ├─ ipv4.cpython-313.pyc
│  │     │     ├─ ipv6.cpython-313.pyc
│  │     │     ├─ message.cpython-313.pyc
│  │     │     ├─ name.cpython-313.pyc
│  │     │     ├─ namedict.cpython-313.pyc
│  │     │     ├─ nameserver.cpython-313.pyc
│  │     │     ├─ node.cpython-313.pyc
│  │     │     ├─ opcode.cpython-313.pyc
│  │     │     ├─ query.cpython-313.pyc
│  │     │     ├─ rcode.cpython-313.pyc
│  │     │     ├─ rdata.cpython-313.pyc
│  │     │     ├─ rdataclass.cpython-313.pyc
│  │     │     ├─ rdataset.cpython-313.pyc
│  │     │     ├─ rdatatype.cpython-313.pyc
│  │     │     ├─ renderer.cpython-313.pyc
│  │     │     ├─ resolver.cpython-313.pyc
│  │     │     ├─ reversename.cpython-313.pyc
│  │     │     ├─ rrset.cpython-313.pyc
│  │     │     ├─ serial.cpython-313.pyc
│  │     │     ├─ set.cpython-313.pyc
│  │     │     ├─ tokenizer.cpython-313.pyc
│  │     │     ├─ transaction.cpython-313.pyc
│  │     │     ├─ tsig.cpython-313.pyc
│  │     │     ├─ tsigkeyring.cpython-313.pyc
│  │     │     ├─ ttl.cpython-313.pyc
│  │     │     ├─ update.cpython-313.pyc
│  │     │     ├─ version.cpython-313.pyc
│  │     │     ├─ versioned.cpython-313.pyc
│  │     │     ├─ win32util.cpython-313.pyc
│  │     │     ├─ wire.cpython-313.pyc
│  │     │     ├─ xfr.cpython-313.pyc
│  │     │     ├─ zone.cpython-313.pyc
│  │     │     ├─ zonefile.cpython-313.pyc
│  │     │     ├─ zonetypes.cpython-313.pyc
│  │     │     ├─ _asyncbackend.cpython-313.pyc
│  │     │     ├─ _asyncio_backend.cpython-313.pyc
│  │     │     ├─ _ddr.cpython-313.pyc
│  │     │     ├─ _features.cpython-313.pyc
│  │     │     ├─ _immutable_ctx.cpython-313.pyc
│  │     │     ├─ _no_ssl.cpython-313.pyc
│  │     │     ├─ _tls_util.cpython-313.pyc
│  │     │     ├─ _trio_backend.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ dotenv
│  │     │  ├─ cli.py
│  │     │  ├─ ipython.py
│  │     │  ├─ main.py
│  │     │  ├─ parser.py
│  │     │  ├─ py.typed
│  │     │  ├─ variables.py
│  │     │  ├─ version.py
│  │     │  ├─ __init__.py
│  │     │  ├─ __main__.py
│  │     │  └─ __pycache__
│  │     │     ├─ cli.cpython-313.pyc
│  │     │     ├─ ipython.cpython-313.pyc
│  │     │     ├─ main.cpython-313.pyc
│  │     │     ├─ parser.cpython-313.pyc
│  │     │     ├─ variables.cpython-313.pyc
│  │     │     ├─ version.cpython-313.pyc
│  │     │     ├─ __init__.cpython-313.pyc
│  │     │     └─ __main__.cpython-313.pyc
│  │     ├─ ecdsa
│  │     │  ├─ curves.py
│  │     │  ├─ der.py
│  │     │  ├─ ecdh.py
│  │     │  ├─ ecdsa.py
│  │     │  ├─ eddsa.py
│  │     │  ├─ ellipticcurve.py
│  │     │  ├─ errors.py
│  │     │  ├─ keys.py
│  │     │  ├─ numbertheory.py
│  │     │  ├─ rfc6979.py
│  │     │  ├─ ssh.py
│  │     │  ├─ test_curves.py
│  │     │  ├─ test_der.py
│  │     │  ├─ test_ecdh.py
│  │     │  ├─ test_ecdsa.py
│  │     │  ├─ test_eddsa.py
│  │     │  ├─ test_ellipticcurve.py
│  │     │  ├─ test_jacobi.py
│  │     │  ├─ test_keys.py
│  │     │  ├─ test_malformed_sigs.py
│  │     │  ├─ test_numbertheory.py
│  │     │  ├─ test_pyecdsa.py
│  │     │  ├─ test_rw_lock.py
│  │     │  ├─ test_sha3.py
│  │     │  ├─ util.py
│  │     │  ├─ _compat.py
│  │     │  ├─ _rwlock.py
│  │     │  ├─ _sha3.py
│  │     │  ├─ _version.py
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ curves.cpython-313.pyc
│  │     │     ├─ der.cpython-313.pyc
│  │     │     ├─ ecdh.cpython-313.pyc
│  │     │     ├─ ecdsa.cpython-313.pyc
│  │     │     ├─ eddsa.cpython-313.pyc
│  │     │     ├─ ellipticcurve.cpython-313.pyc
│  │     │     ├─ errors.cpython-313.pyc
│  │     │     ├─ keys.cpython-313.pyc
│  │     │     ├─ numbertheory.cpython-313.pyc
│  │     │     ├─ rfc6979.cpython-313.pyc
│  │     │     ├─ ssh.cpython-313.pyc
│  │     │     ├─ test_curves.cpython-313.pyc
│  │     │     ├─ test_der.cpython-313.pyc
│  │     │     ├─ test_ecdh.cpython-313.pyc
│  │     │     ├─ test_ecdsa.cpython-313.pyc
│  │     │     ├─ test_eddsa.cpython-313.pyc
│  │     │     ├─ test_ellipticcurve.cpython-313.pyc
│  │     │     ├─ test_jacobi.cpython-313.pyc
│  │     │     ├─ test_keys.cpython-313.pyc
│  │     │     ├─ test_malformed_sigs.cpython-313.pyc
│  │     │     ├─ test_numbertheory.cpython-313.pyc
│  │     │     ├─ test_pyecdsa.cpython-313.pyc
│  │     │     ├─ test_rw_lock.cpython-313.pyc
│  │     │     ├─ test_sha3.cpython-313.pyc
│  │     │     ├─ util.cpython-313.pyc
│  │     │     ├─ _compat.cpython-313.pyc
│  │     │     ├─ _rwlock.cpython-313.pyc
│  │     │     ├─ _sha3.cpython-313.pyc
│  │     │     ├─ _version.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ email_validator
│  │     │  ├─ deliverability.py
│  │     │  ├─ exceptions.py
│  │     │  ├─ py.typed
│  │     │  ├─ rfc_constants.py
│  │     │  ├─ syntax.py
│  │     │  ├─ types.py
│  │     │  ├─ validate_email.py
│  │     │  ├─ version.py
│  │     │  ├─ __init__.py
│  │     │  ├─ __main__.py
│  │     │  └─ __pycache__
│  │     │     ├─ deliverability.cpython-313.pyc
│  │     │     ├─ exceptions.cpython-313.pyc
│  │     │     ├─ rfc_constants.cpython-313.pyc
│  │     │     ├─ syntax.cpython-313.pyc
│  │     │     ├─ types.cpython-313.pyc
│  │     │     ├─ validate_email.cpython-313.pyc
│  │     │     ├─ version.cpython-313.pyc
│  │     │     ├─ __init__.cpython-313.pyc
│  │     │     └─ __main__.cpython-313.pyc
│  │     ├─ fastapi
│  │     │  ├─ applications.py
│  │     │  ├─ background.py
│  │     │  ├─ cli.py
│  │     │  ├─ concurrency.py
│  │     │  ├─ datastructures.py
│  │     │  ├─ dependencies
│  │     │  │  ├─ models.py
│  │     │  │  ├─ utils.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ models.cpython-313.pyc
│  │     │  │     ├─ utils.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ encoders.py
│  │     │  ├─ exceptions.py
│  │     │  ├─ exception_handlers.py
│  │     │  ├─ logger.py
│  │     │  ├─ middleware
│  │     │  │  ├─ asyncexitstack.py
│  │     │  │  ├─ cors.py
│  │     │  │  ├─ gzip.py
│  │     │  │  ├─ httpsredirect.py
│  │     │  │  ├─ trustedhost.py
│  │     │  │  ├─ wsgi.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ asyncexitstack.cpython-313.pyc
│  │     │  │     ├─ cors.cpython-313.pyc
│  │     │  │     ├─ gzip.cpython-313.pyc
│  │     │  │     ├─ httpsredirect.cpython-313.pyc
│  │     │  │     ├─ trustedhost.cpython-313.pyc
│  │     │  │     ├─ wsgi.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ openapi
│  │     │  │  ├─ constants.py
│  │     │  │  ├─ docs.py
│  │     │  │  ├─ models.py
│  │     │  │  ├─ utils.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ constants.cpython-313.pyc
│  │     │  │     ├─ docs.cpython-313.pyc
│  │     │  │     ├─ models.cpython-313.pyc
│  │     │  │     ├─ utils.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ params.py
│  │     │  ├─ param_functions.py
│  │     │  ├─ py.typed
│  │     │  ├─ requests.py
│  │     │  ├─ responses.py
│  │     │  ├─ routing.py
│  │     │  ├─ security
│  │     │  │  ├─ api_key.py
│  │     │  │  ├─ base.py
│  │     │  │  ├─ http.py
│  │     │  │  ├─ oauth2.py
│  │     │  │  ├─ open_id_connect_url.py
│  │     │  │  ├─ utils.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ api_key.cpython-313.pyc
│  │     │  │     ├─ base.cpython-313.pyc
│  │     │  │     ├─ http.cpython-313.pyc
│  │     │  │     ├─ oauth2.cpython-313.pyc
│  │     │  │     ├─ open_id_connect_url.cpython-313.pyc
│  │     │  │     ├─ utils.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ staticfiles.py
│  │     │  ├─ templating.py
│  │     │  ├─ testclient.py
│  │     │  ├─ types.py
│  │     │  ├─ utils.py
│  │     │  ├─ websockets.py
│  │     │  ├─ _compat
│  │     │  │  ├─ shared.py
│  │     │  │  ├─ v2.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ shared.cpython-313.pyc
│  │     │  │     ├─ v2.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ __init__.py
│  │     │  ├─ __main__.py
│  │     │  └─ __pycache__
│  │     │     ├─ applications.cpython-313.pyc
│  │     │     ├─ background.cpython-313.pyc
│  │     │     ├─ cli.cpython-313.pyc
│  │     │     ├─ concurrency.cpython-313.pyc
│  │     │     ├─ datastructures.cpython-313.pyc
│  │     │     ├─ encoders.cpython-313.pyc
│  │     │     ├─ exceptions.cpython-313.pyc
│  │     │     ├─ exception_handlers.cpython-313.pyc
│  │     │     ├─ logger.cpython-313.pyc
│  │     │     ├─ params.cpython-313.pyc
│  │     │     ├─ param_functions.cpython-313.pyc
│  │     │     ├─ requests.cpython-313.pyc
│  │     │     ├─ responses.cpython-313.pyc
│  │     │     ├─ routing.cpython-313.pyc
│  │     │     ├─ staticfiles.cpython-313.pyc
│  │     │     ├─ templating.cpython-313.pyc
│  │     │     ├─ testclient.cpython-313.pyc
│  │     │     ├─ types.cpython-313.pyc
│  │     │     ├─ utils.cpython-313.pyc
│  │     │     ├─ websockets.cpython-313.pyc
│  │     │     ├─ __init__.cpython-313.pyc
│  │     │     └─ __main__.cpython-313.pyc
│  │     ├─ gridfs
│  │     │  ├─ asynchronous
│  │     │  │  ├─ grid_file.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ grid_file.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ errors.py
│  │     │  ├─ grid_file.py
│  │     │  ├─ grid_file_shared.py
│  │     │  ├─ py.typed
│  │     │  ├─ synchronous
│  │     │  │  ├─ grid_file.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ grid_file.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ errors.cpython-313.pyc
│  │     │     ├─ grid_file.cpython-313.pyc
│  │     │     ├─ grid_file_shared.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ h11
│  │     │  ├─ py.typed
│  │     │  ├─ _abnf.py
│  │     │  ├─ _connection.py
│  │     │  ├─ _events.py
│  │     │  ├─ _headers.py
│  │     │  ├─ _readers.py
│  │     │  ├─ _receivebuffer.py
│  │     │  ├─ _state.py
│  │     │  ├─ _util.py
│  │     │  ├─ _version.py
│  │     │  ├─ _writers.py
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ _abnf.cpython-313.pyc
│  │     │     ├─ _connection.cpython-313.pyc
│  │     │     ├─ _events.cpython-313.pyc
│  │     │     ├─ _headers.cpython-313.pyc
│  │     │     ├─ _readers.cpython-313.pyc
│  │     │     ├─ _receivebuffer.cpython-313.pyc
│  │     │     ├─ _state.cpython-313.pyc
│  │     │     ├─ _util.cpython-313.pyc
│  │     │     ├─ _version.cpython-313.pyc
│  │     │     ├─ _writers.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ idna
│  │     │  ├─ codec.py
│  │     │  ├─ compat.py
│  │     │  ├─ core.py
│  │     │  ├─ idnadata.py
│  │     │  ├─ intranges.py
│  │     │  ├─ package_data.py
│  │     │  ├─ py.typed
│  │     │  ├─ uts46data.py
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ codec.cpython-313.pyc
│  │     │     ├─ compat.cpython-313.pyc
│  │     │     ├─ core.cpython-313.pyc
│  │     │     ├─ idnadata.cpython-313.pyc
│  │     │     ├─ intranges.cpython-313.pyc
│  │     │     ├─ package_data.cpython-313.pyc
│  │     │     ├─ uts46data.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ joblib
│  │     │  ├─ backports.py
│  │     │  ├─ compressor.py
│  │     │  ├─ disk.py
│  │     │  ├─ executor.py
│  │     │  ├─ externals
│  │     │  │  ├─ cloudpickle
│  │     │  │  │  ├─ cloudpickle.py
│  │     │  │  │  ├─ cloudpickle_fast.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ cloudpickle.cpython-313.pyc
│  │     │  │  │     ├─ cloudpickle_fast.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ loky
│  │     │  │  │  ├─ backend
│  │     │  │  │  │  ├─ context.py
│  │     │  │  │  │  ├─ fork_exec.py
│  │     │  │  │  │  ├─ popen_loky_posix.py
│  │     │  │  │  │  ├─ popen_loky_win32.py
│  │     │  │  │  │  ├─ process.py
│  │     │  │  │  │  ├─ queues.py
│  │     │  │  │  │  ├─ reduction.py
│  │     │  │  │  │  ├─ resource_tracker.py
│  │     │  │  │  │  ├─ spawn.py
│  │     │  │  │  │  ├─ synchronize.py
│  │     │  │  │  │  ├─ utils.py
│  │     │  │  │  │  ├─ _posix_reduction.py
│  │     │  │  │  │  ├─ _win_reduction.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ context.cpython-313.pyc
│  │     │  │  │  │     ├─ fork_exec.cpython-313.pyc
│  │     │  │  │  │     ├─ popen_loky_posix.cpython-313.pyc
│  │     │  │  │  │     ├─ popen_loky_win32.cpython-313.pyc
│  │     │  │  │  │     ├─ process.cpython-313.pyc
│  │     │  │  │  │     ├─ queues.cpython-313.pyc
│  │     │  │  │  │     ├─ reduction.cpython-313.pyc
│  │     │  │  │  │     ├─ resource_tracker.cpython-313.pyc
│  │     │  │  │  │     ├─ spawn.cpython-313.pyc
│  │     │  │  │  │     ├─ synchronize.cpython-313.pyc
│  │     │  │  │  │     ├─ utils.cpython-313.pyc
│  │     │  │  │  │     ├─ _posix_reduction.cpython-313.pyc
│  │     │  │  │  │     ├─ _win_reduction.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ cloudpickle_wrapper.py
│  │     │  │  │  ├─ initializers.py
│  │     │  │  │  ├─ process_executor.py
│  │     │  │  │  ├─ reusable_executor.py
│  │     │  │  │  ├─ _base.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ cloudpickle_wrapper.cpython-313.pyc
│  │     │  │  │     ├─ initializers.cpython-313.pyc
│  │     │  │  │     ├─ process_executor.cpython-313.pyc
│  │     │  │  │     ├─ reusable_executor.cpython-313.pyc
│  │     │  │  │     ├─ _base.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ func_inspect.py
│  │     │  ├─ hashing.py
│  │     │  ├─ logger.py
│  │     │  ├─ memory.py
│  │     │  ├─ numpy_pickle.py
│  │     │  ├─ numpy_pickle_compat.py
│  │     │  ├─ numpy_pickle_utils.py
│  │     │  ├─ parallel.py
│  │     │  ├─ pool.py
│  │     │  ├─ test
│  │     │  │  ├─ common.py
│  │     │  │  ├─ data
│  │     │  │  │  ├─ create_numpy_pickle.py
│  │     │  │  │  ├─ joblib_0.10.0_compressed_pickle_py27_np16.gz
│  │     │  │  │  ├─ joblib_0.10.0_compressed_pickle_py27_np17.gz
│  │     │  │  │  ├─ joblib_0.10.0_compressed_pickle_py33_np18.gz
│  │     │  │  │  ├─ joblib_0.10.0_compressed_pickle_py34_np19.gz
│  │     │  │  │  ├─ joblib_0.10.0_compressed_pickle_py35_np19.gz
│  │     │  │  │  ├─ joblib_0.10.0_pickle_py27_np17.pkl
│  │     │  │  │  ├─ joblib_0.10.0_pickle_py27_np17.pkl.bz2
│  │     │  │  │  ├─ joblib_0.10.0_pickle_py27_np17.pkl.gzip
│  │     │  │  │  ├─ joblib_0.10.0_pickle_py27_np17.pkl.lzma
│  │     │  │  │  ├─ joblib_0.10.0_pickle_py27_np17.pkl.xz
│  │     │  │  │  ├─ joblib_0.10.0_pickle_py33_np18.pkl
│  │     │  │  │  ├─ joblib_0.10.0_pickle_py33_np18.pkl.bz2
│  │     │  │  │  ├─ joblib_0.10.0_pickle_py33_np18.pkl.gzip
│  │     │  │  │  ├─ joblib_0.10.0_pickle_py33_np18.pkl.lzma
│  │     │  │  │  ├─ joblib_0.10.0_pickle_py33_np18.pkl.xz
│  │     │  │  │  ├─ joblib_0.10.0_pickle_py34_np19.pkl
│  │     │  │  │  ├─ joblib_0.10.0_pickle_py34_np19.pkl.bz2
│  │     │  │  │  ├─ joblib_0.10.0_pickle_py34_np19.pkl.gzip
│  │     │  │  │  ├─ joblib_0.10.0_pickle_py34_np19.pkl.lzma
│  │     │  │  │  ├─ joblib_0.10.0_pickle_py34_np19.pkl.xz
│  │     │  │  │  ├─ joblib_0.10.0_pickle_py35_np19.pkl
│  │     │  │  │  ├─ joblib_0.10.0_pickle_py35_np19.pkl.bz2
│  │     │  │  │  ├─ joblib_0.10.0_pickle_py35_np19.pkl.gzip
│  │     │  │  │  ├─ joblib_0.10.0_pickle_py35_np19.pkl.lzma
│  │     │  │  │  ├─ joblib_0.10.0_pickle_py35_np19.pkl.xz
│  │     │  │  │  ├─ joblib_0.11.0_compressed_pickle_py36_np111.gz
│  │     │  │  │  ├─ joblib_0.11.0_pickle_py36_np111.pkl
│  │     │  │  │  ├─ joblib_0.11.0_pickle_py36_np111.pkl.bz2
│  │     │  │  │  ├─ joblib_0.11.0_pickle_py36_np111.pkl.gzip
│  │     │  │  │  ├─ joblib_0.11.0_pickle_py36_np111.pkl.lzma
│  │     │  │  │  ├─ joblib_0.11.0_pickle_py36_np111.pkl.xz
│  │     │  │  │  ├─ joblib_0.8.4_compressed_pickle_py27_np17.gz
│  │     │  │  │  ├─ joblib_0.9.2_compressed_pickle_py27_np16.gz
│  │     │  │  │  ├─ joblib_0.9.2_compressed_pickle_py27_np17.gz
│  │     │  │  │  ├─ joblib_0.9.2_compressed_pickle_py34_np19.gz
│  │     │  │  │  ├─ joblib_0.9.2_compressed_pickle_py35_np19.gz
│  │     │  │  │  ├─ joblib_0.9.2_pickle_py27_np16.pkl
│  │     │  │  │  ├─ joblib_0.9.2_pickle_py27_np16.pkl_01.npy
│  │     │  │  │  ├─ joblib_0.9.2_pickle_py27_np16.pkl_02.npy
│  │     │  │  │  ├─ joblib_0.9.2_pickle_py27_np16.pkl_03.npy
│  │     │  │  │  ├─ joblib_0.9.2_pickle_py27_np16.pkl_04.npy
│  │     │  │  │  ├─ joblib_0.9.2_pickle_py27_np17.pkl
│  │     │  │  │  ├─ joblib_0.9.2_pickle_py27_np17.pkl_01.npy
│  │     │  │  │  ├─ joblib_0.9.2_pickle_py27_np17.pkl_02.npy
│  │     │  │  │  ├─ joblib_0.9.2_pickle_py27_np17.pkl_03.npy
│  │     │  │  │  ├─ joblib_0.9.2_pickle_py27_np17.pkl_04.npy
│  │     │  │  │  ├─ joblib_0.9.2_pickle_py33_np18.pkl
│  │     │  │  │  ├─ joblib_0.9.2_pickle_py33_np18.pkl_01.npy
│  │     │  │  │  ├─ joblib_0.9.2_pickle_py33_np18.pkl_02.npy
│  │     │  │  │  ├─ joblib_0.9.2_pickle_py33_np18.pkl_03.npy
│  │     │  │  │  ├─ joblib_0.9.2_pickle_py33_np18.pkl_04.npy
│  │     │  │  │  ├─ joblib_0.9.2_pickle_py34_np19.pkl
│  │     │  │  │  ├─ joblib_0.9.2_pickle_py34_np19.pkl_01.npy
│  │     │  │  │  ├─ joblib_0.9.2_pickle_py34_np19.pkl_02.npy
│  │     │  │  │  ├─ joblib_0.9.2_pickle_py34_np19.pkl_03.npy
│  │     │  │  │  ├─ joblib_0.9.2_pickle_py34_np19.pkl_04.npy
│  │     │  │  │  ├─ joblib_0.9.2_pickle_py35_np19.pkl
│  │     │  │  │  ├─ joblib_0.9.2_pickle_py35_np19.pkl_01.npy
│  │     │  │  │  ├─ joblib_0.9.2_pickle_py35_np19.pkl_02.npy
│  │     │  │  │  ├─ joblib_0.9.2_pickle_py35_np19.pkl_03.npy
│  │     │  │  │  ├─ joblib_0.9.2_pickle_py35_np19.pkl_04.npy
│  │     │  │  │  ├─ joblib_0.9.4.dev0_compressed_cache_size_pickle_py35_np19.gz
│  │     │  │  │  ├─ joblib_0.9.4.dev0_compressed_cache_size_pickle_py35_np19.gz_01.npy.z
│  │     │  │  │  ├─ joblib_0.9.4.dev0_compressed_cache_size_pickle_py35_np19.gz_02.npy.z
│  │     │  │  │  ├─ joblib_0.9.4.dev0_compressed_cache_size_pickle_py35_np19.gz_03.npy.z
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ create_numpy_pickle.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ testutils.py
│  │     │  │  ├─ test_backports.py
│  │     │  │  ├─ test_cloudpickle_wrapper.py
│  │     │  │  ├─ test_config.py
│  │     │  │  ├─ test_dask.py
│  │     │  │  ├─ test_disk.py
│  │     │  │  ├─ test_func_inspect.py
│  │     │  │  ├─ test_func_inspect_special_encoding.py
│  │     │  │  ├─ test_hashing.py
│  │     │  │  ├─ test_init.py
│  │     │  │  ├─ test_logger.py
│  │     │  │  ├─ test_memmapping.py
│  │     │  │  ├─ test_memory.py
│  │     │  │  ├─ test_memory_async.py
│  │     │  │  ├─ test_missing_multiprocessing.py
│  │     │  │  ├─ test_module.py
│  │     │  │  ├─ test_numpy_pickle.py
│  │     │  │  ├─ test_numpy_pickle_compat.py
│  │     │  │  ├─ test_numpy_pickle_utils.py
│  │     │  │  ├─ test_parallel.py
│  │     │  │  ├─ test_store_backends.py
│  │     │  │  ├─ test_testing.py
│  │     │  │  ├─ test_utils.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ common.cpython-313.pyc
│  │     │  │     ├─ testutils.cpython-313.pyc
│  │     │  │     ├─ test_backports.cpython-313.pyc
│  │     │  │     ├─ test_cloudpickle_wrapper.cpython-313.pyc
│  │     │  │     ├─ test_config.cpython-313.pyc
│  │     │  │     ├─ test_dask.cpython-313.pyc
│  │     │  │     ├─ test_disk.cpython-313.pyc
│  │     │  │     ├─ test_func_inspect.cpython-313.pyc
│  │     │  │     ├─ test_func_inspect_special_encoding.cpython-313.pyc
│  │     │  │     ├─ test_hashing.cpython-313.pyc
│  │     │  │     ├─ test_init.cpython-313.pyc
│  │     │  │     ├─ test_logger.cpython-313.pyc
│  │     │  │     ├─ test_memmapping.cpython-313.pyc
│  │     │  │     ├─ test_memory.cpython-313.pyc
│  │     │  │     ├─ test_memory_async.cpython-313.pyc
│  │     │  │     ├─ test_missing_multiprocessing.cpython-313.pyc
│  │     │  │     ├─ test_module.cpython-313.pyc
│  │     │  │     ├─ test_numpy_pickle.cpython-313.pyc
│  │     │  │     ├─ test_numpy_pickle_compat.cpython-313.pyc
│  │     │  │     ├─ test_numpy_pickle_utils.cpython-313.pyc
│  │     │  │     ├─ test_parallel.cpython-313.pyc
│  │     │  │     ├─ test_store_backends.cpython-313.pyc
│  │     │  │     ├─ test_testing.cpython-313.pyc
│  │     │  │     ├─ test_utils.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ testing.py
│  │     │  ├─ _cloudpickle_wrapper.py
│  │     │  ├─ _dask.py
│  │     │  ├─ _memmapping_reducer.py
│  │     │  ├─ _multiprocessing_helpers.py
│  │     │  ├─ _parallel_backends.py
│  │     │  ├─ _store_backends.py
│  │     │  ├─ _utils.py
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ backports.cpython-313.pyc
│  │     │     ├─ compressor.cpython-313.pyc
│  │     │     ├─ disk.cpython-313.pyc
│  │     │     ├─ executor.cpython-313.pyc
│  │     │     ├─ func_inspect.cpython-313.pyc
│  │     │     ├─ hashing.cpython-313.pyc
│  │     │     ├─ logger.cpython-313.pyc
│  │     │     ├─ memory.cpython-313.pyc
│  │     │     ├─ numpy_pickle.cpython-313.pyc
│  │     │     ├─ numpy_pickle_compat.cpython-313.pyc
│  │     │     ├─ numpy_pickle_utils.cpython-313.pyc
│  │     │     ├─ parallel.cpython-313.pyc
│  │     │     ├─ pool.cpython-313.pyc
│  │     │     ├─ testing.cpython-313.pyc
│  │     │     ├─ _cloudpickle_wrapper.cpython-313.pyc
│  │     │     ├─ _dask.cpython-313.pyc
│  │     │     ├─ _memmapping_reducer.cpython-313.pyc
│  │     │     ├─ _multiprocessing_helpers.cpython-313.pyc
│  │     │     ├─ _parallel_backends.cpython-313.pyc
│  │     │     ├─ _store_backends.cpython-313.pyc
│  │     │     ├─ _utils.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ jose
│  │     │  ├─ backends
│  │     │  │  ├─ base.py
│  │     │  │  ├─ cryptography_backend.py
│  │     │  │  ├─ ecdsa_backend.py
│  │     │  │  ├─ native.py
│  │     │  │  ├─ rsa_backend.py
│  │     │  │  ├─ _asn1.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ base.cpython-313.pyc
│  │     │  │     ├─ cryptography_backend.cpython-313.pyc
│  │     │  │     ├─ ecdsa_backend.cpython-313.pyc
│  │     │  │     ├─ native.cpython-313.pyc
│  │     │  │     ├─ rsa_backend.cpython-313.pyc
│  │     │  │     ├─ _asn1.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ constants.py
│  │     │  ├─ exceptions.py
│  │     │  ├─ jwe.py
│  │     │  ├─ jwk.py
│  │     │  ├─ jws.py
│  │     │  ├─ jwt.py
│  │     │  ├─ utils.py
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ constants.cpython-313.pyc
│  │     │     ├─ exceptions.cpython-313.pyc
│  │     │     ├─ jwe.cpython-313.pyc
│  │     │     ├─ jwk.cpython-313.pyc
│  │     │     ├─ jws.cpython-313.pyc
│  │     │     ├─ jwt.cpython-313.pyc
│  │     │     ├─ utils.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ lazy_loader
│  │     │  ├─ tests
│  │     │  │  ├─ fake_pkg
│  │     │  │  │  ├─ some_func.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  ├─ __init__.pyi
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ some_func.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ import_np_parallel.py
│  │     │  │  ├─ test_lazy_loader.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ import_np_parallel.cpython-313.pyc
│  │     │  │     ├─ test_lazy_loader.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ librosa
│  │     │  ├─ beat.py
│  │     │  ├─ core
│  │     │  │  ├─ audio.py
│  │     │  │  ├─ constantq.py
│  │     │  │  ├─ convert.py
│  │     │  │  ├─ fft.py
│  │     │  │  ├─ harmonic.py
│  │     │  │  ├─ intervals.msgpack
│  │     │  │  ├─ intervals.py
│  │     │  │  ├─ notation.py
│  │     │  │  ├─ pitch.py
│  │     │  │  ├─ spectrum.py
│  │     │  │  ├─ __init__.py
│  │     │  │  ├─ __init__.pyi
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ audio.cpython-313.pyc
│  │     │  │     ├─ audio._zc_wrapper-1154.py313.1.nbc
│  │     │  │     ├─ audio._zc_wrapper-1154.py313.2.nbc
│  │     │  │     ├─ audio._zc_wrapper-1154.py313.nbi
│  │     │  │     ├─ constantq.cpython-313.pyc
│  │     │  │     ├─ convert.cpython-313.pyc
│  │     │  │     ├─ fft.cpython-313.pyc
│  │     │  │     ├─ guf-audio._zc_wrapper-1154.py313.1.nbc
│  │     │  │     ├─ guf-audio._zc_wrapper-1154.py313.2.nbc
│  │     │  │     ├─ guf-audio._zc_wrapper-1154.py313.nbi
│  │     │  │     ├─ guf-pitch._pi_wrapper-430.py313.1.nbc
│  │     │  │     ├─ guf-pitch._pi_wrapper-430.py313.2.nbc
│  │     │  │     ├─ guf-pitch._pi_wrapper-430.py313.nbi
│  │     │  │     ├─ harmonic.cpython-313.pyc
│  │     │  │     ├─ intervals.cpython-313.pyc
│  │     │  │     ├─ notation.cpython-313.pyc
│  │     │  │     ├─ pitch.cpython-313.pyc
│  │     │  │     ├─ pitch._pi_wrapper-430.py313.1.nbc
│  │     │  │     ├─ pitch._pi_wrapper-430.py313.2.nbc
│  │     │  │     ├─ pitch._pi_wrapper-430.py313.nbi
│  │     │  │     ├─ spectrum.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ decompose.py
│  │     │  ├─ display.py
│  │     │  ├─ effects.py
│  │     │  ├─ feature
│  │     │  │  ├─ inverse.py
│  │     │  │  ├─ rhythm.py
│  │     │  │  ├─ spectral.py
│  │     │  │  ├─ utils.py
│  │     │  │  ├─ __init__.py
│  │     │  │  ├─ __init__.pyi
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ inverse.cpython-313.pyc
│  │     │  │     ├─ rhythm.cpython-313.pyc
│  │     │  │     ├─ spectral.cpython-313.pyc
│  │     │  │     ├─ utils.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ filters.py
│  │     │  ├─ onset.py
│  │     │  ├─ py.typed
│  │     │  ├─ segment.py
│  │     │  ├─ sequence.py
│  │     │  ├─ util
│  │     │  │  ├─ decorators.py
│  │     │  │  ├─ deprecation.py
│  │     │  │  ├─ example_data
│  │     │  │  │  ├─ index.json
│  │     │  │  │  ├─ registry.txt
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ exceptions.py
│  │     │  │  ├─ files.py
│  │     │  │  ├─ matching.py
│  │     │  │  ├─ utils.py
│  │     │  │  ├─ _nnls.py
│  │     │  │  ├─ __init__.py
│  │     │  │  ├─ __init__.pyi
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ decorators.cpython-313.pyc
│  │     │  │     ├─ deprecation.cpython-313.pyc
│  │     │  │     ├─ exceptions.cpython-313.pyc
│  │     │  │     ├─ files.cpython-313.pyc
│  │     │  │     ├─ guf-utils._localmax-1035.py313.1.nbc
│  │     │  │     ├─ guf-utils._localmax-1035.py313.2.nbc
│  │     │  │     ├─ guf-utils._localmax-1035.py313.3.nbc
│  │     │  │     ├─ guf-utils._localmax-1035.py313.4.nbc
│  │     │  │     ├─ guf-utils._localmax-1035.py313.5.nbc
│  │     │  │     ├─ guf-utils._localmax-1035.py313.nbi
│  │     │  │     ├─ guf-utils._localmin-1052.py313.1.nbc
│  │     │  │     ├─ guf-utils._localmin-1052.py313.2.nbc
│  │     │  │     ├─ guf-utils._localmin-1052.py313.3.nbc
│  │     │  │     ├─ guf-utils._localmin-1052.py313.4.nbc
│  │     │  │     ├─ guf-utils._localmin-1052.py313.5.nbc
│  │     │  │     ├─ guf-utils._localmin-1052.py313.nbi
│  │     │  │     ├─ guf-utils.__peak_pick-1193.py313.1.nbc
│  │     │  │     ├─ guf-utils.__peak_pick-1193.py313.2.nbc
│  │     │  │     ├─ guf-utils.__peak_pick-1193.py313.3.nbc
│  │     │  │     ├─ guf-utils.__peak_pick-1193.py313.4.nbc
│  │     │  │     ├─ guf-utils.__peak_pick-1193.py313.nbi
│  │     │  │     ├─ matching.cpython-313.pyc
│  │     │  │     ├─ utils.cpython-313.pyc
│  │     │  │     ├─ utils._cabs2-2436.py313.1.nbc
│  │     │  │     ├─ utils._cabs2-2436.py313.2.nbc
│  │     │  │     ├─ utils._cabs2-2436.py313.nbi
│  │     │  │     ├─ utils._localmax-1035.py313.1.nbc
│  │     │  │     ├─ utils._localmax-1035.py313.2.nbc
│  │     │  │     ├─ utils._localmax-1035.py313.3.nbc
│  │     │  │     ├─ utils._localmax-1035.py313.4.nbc
│  │     │  │     ├─ utils._localmax-1035.py313.5.nbc
│  │     │  │     ├─ utils._localmax-1035.py313.nbi
│  │     │  │     ├─ utils._localmin-1052.py313.1.nbc
│  │     │  │     ├─ utils._localmin-1052.py313.2.nbc
│  │     │  │     ├─ utils._localmin-1052.py313.3.nbc
│  │     │  │     ├─ utils._localmin-1052.py313.4.nbc
│  │     │  │     ├─ utils._localmin-1052.py313.5.nbc
│  │     │  │     ├─ utils._localmin-1052.py313.nbi
│  │     │  │     ├─ utils._phasor_angles-2488.py313.1.nbc
│  │     │  │     ├─ utils._phasor_angles-2488.py313.2.nbc
│  │     │  │     ├─ utils._phasor_angles-2488.py313.nbi
│  │     │  │     ├─ utils.__peak_pick-1193.py313.1.nbc
│  │     │  │     ├─ utils.__peak_pick-1193.py313.2.nbc
│  │     │  │     ├─ utils.__peak_pick-1193.py313.3.nbc
│  │     │  │     ├─ utils.__peak_pick-1193.py313.4.nbc
│  │     │  │     ├─ utils.__peak_pick-1193.py313.nbi
│  │     │  │     ├─ _nnls.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ version.py
│  │     │  ├─ _cache.py
│  │     │  ├─ _typing.py
│  │     │  ├─ __init__.py
│  │     │  ├─ __init__.pyi
│  │     │  └─ __pycache__
│  │     │     ├─ beat.cpython-313.pyc
│  │     │     ├─ beat.__beat_track_dp-558.py313.1.nbc
│  │     │     ├─ beat.__beat_track_dp-558.py313.2.nbc
│  │     │     ├─ beat.__beat_track_dp-558.py313.nbi
│  │     │     ├─ beat.__dp_backtrack-686.py313.1.nbc
│  │     │     ├─ beat.__dp_backtrack-686.py313.2.nbc
│  │     │     ├─ beat.__dp_backtrack-686.py313.nbi
│  │     │     ├─ beat.__last_beat_selector-662.py313.1.nbc
│  │     │     ├─ beat.__last_beat_selector-662.py313.2.nbc
│  │     │     ├─ beat.__last_beat_selector-662.py313.nbi
│  │     │     ├─ beat.__trim_beats-609.py313.1.nbc
│  │     │     ├─ beat.__trim_beats-609.py313.2.nbc
│  │     │     ├─ beat.__trim_beats-609.py313.nbi
│  │     │     ├─ decompose.cpython-313.pyc
│  │     │     ├─ display.cpython-313.pyc
│  │     │     ├─ effects.cpython-313.pyc
│  │     │     ├─ filters.cpython-313.pyc
│  │     │     ├─ guf-beat.__beat_track_dp-558.py313.1.nbc
│  │     │     ├─ guf-beat.__beat_track_dp-558.py313.2.nbc
│  │     │     ├─ guf-beat.__beat_track_dp-558.py313.nbi
│  │     │     ├─ guf-beat.__dp_backtrack-686.py313.1.nbc
│  │     │     ├─ guf-beat.__dp_backtrack-686.py313.2.nbc
│  │     │     ├─ guf-beat.__dp_backtrack-686.py313.nbi
│  │     │     ├─ guf-beat.__last_beat_selector-662.py313.1.nbc
│  │     │     ├─ guf-beat.__last_beat_selector-662.py313.2.nbc
│  │     │     ├─ guf-beat.__last_beat_selector-662.py313.nbi
│  │     │     ├─ guf-beat.__trim_beats-609.py313.1.nbc
│  │     │     ├─ guf-beat.__trim_beats-609.py313.2.nbc
│  │     │     ├─ guf-beat.__trim_beats-609.py313.nbi
│  │     │     ├─ onset.cpython-313.pyc
│  │     │     ├─ segment.cpython-313.pyc
│  │     │     ├─ sequence.cpython-313.pyc
│  │     │     ├─ version.cpython-313.pyc
│  │     │     ├─ _cache.cpython-313.pyc
│  │     │     ├─ _typing.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ llvmlite
│  │     │  ├─ binding
│  │     │  │  ├─ analysis.py
│  │     │  │  ├─ common.py
│  │     │  │  ├─ config.py
│  │     │  │  ├─ context.py
│  │     │  │  ├─ dylib.py
│  │     │  │  ├─ executionengine.py
│  │     │  │  ├─ ffi.py
│  │     │  │  ├─ initfini.py
│  │     │  │  ├─ linker.py
│  │     │  │  ├─ llvmlite.dll
│  │     │  │  ├─ module.py
│  │     │  │  ├─ newpassmanagers.py
│  │     │  │  ├─ object_file.py
│  │     │  │  ├─ options.py
│  │     │  │  ├─ orcjit.py
│  │     │  │  ├─ targets.py
│  │     │  │  ├─ typeref.py
│  │     │  │  ├─ value.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ analysis.cpython-313.pyc
│  │     │  │     ├─ common.cpython-313.pyc
│  │     │  │     ├─ config.cpython-313.pyc
│  │     │  │     ├─ context.cpython-313.pyc
│  │     │  │     ├─ dylib.cpython-313.pyc
│  │     │  │     ├─ executionengine.cpython-313.pyc
│  │     │  │     ├─ ffi.cpython-313.pyc
│  │     │  │     ├─ initfini.cpython-313.pyc
│  │     │  │     ├─ linker.cpython-313.pyc
│  │     │  │     ├─ module.cpython-313.pyc
│  │     │  │     ├─ newpassmanagers.cpython-313.pyc
│  │     │  │     ├─ object_file.cpython-313.pyc
│  │     │  │     ├─ options.cpython-313.pyc
│  │     │  │     ├─ orcjit.cpython-313.pyc
│  │     │  │     ├─ targets.cpython-313.pyc
│  │     │  │     ├─ typeref.cpython-313.pyc
│  │     │  │     ├─ value.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ ir
│  │     │  │  ├─ builder.py
│  │     │  │  ├─ context.py
│  │     │  │  ├─ instructions.py
│  │     │  │  ├─ module.py
│  │     │  │  ├─ transforms.py
│  │     │  │  ├─ types.py
│  │     │  │  ├─ values.py
│  │     │  │  ├─ _utils.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ builder.cpython-313.pyc
│  │     │  │     ├─ context.cpython-313.pyc
│  │     │  │     ├─ instructions.cpython-313.pyc
│  │     │  │     ├─ module.cpython-313.pyc
│  │     │  │     ├─ transforms.cpython-313.pyc
│  │     │  │     ├─ types.cpython-313.pyc
│  │     │  │     ├─ values.cpython-313.pyc
│  │     │  │     ├─ _utils.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ tests
│  │     │  │  ├─ customize.py
│  │     │  │  ├─ refprune_proto.py
│  │     │  │  ├─ test_binding.py
│  │     │  │  ├─ test_ir.py
│  │     │  │  ├─ test_refprune.py
│  │     │  │  ├─ test_valuerepr.py
│  │     │  │  ├─ __init__.py
│  │     │  │  ├─ __main__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ customize.cpython-313.pyc
│  │     │  │     ├─ refprune_proto.cpython-313.pyc
│  │     │  │     ├─ test_binding.cpython-313.pyc
│  │     │  │     ├─ test_ir.cpython-313.pyc
│  │     │  │     ├─ test_refprune.cpython-313.pyc
│  │     │  │     ├─ test_valuerepr.cpython-313.pyc
│  │     │  │     ├─ __init__.cpython-313.pyc
│  │     │  │     └─ __main__.cpython-313.pyc
│  │     │  ├─ utils.py
│  │     │  ├─ _version.py
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ utils.cpython-313.pyc
│  │     │     ├─ _version.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ llvmlite.libs
│  │     │  └─ msvcp140-8f141b4454fa78db34bc1f28c571b4da.dll
│  │     ├─ motor
│  │     │  ├─ aiohttp
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ core.py
│  │     │  ├─ core.pyi
│  │     │  ├─ docstrings.py
│  │     │  ├─ frameworks
│  │     │  │  ├─ asyncio
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ tornado
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ metaprogramming.py
│  │     │  ├─ motor_asyncio.py
│  │     │  ├─ motor_asyncio.pyi
│  │     │  ├─ motor_common.py
│  │     │  ├─ motor_gridfs.py
│  │     │  ├─ motor_gridfs.pyi
│  │     │  ├─ motor_tornado.py
│  │     │  ├─ motor_tornado.pyi
│  │     │  ├─ py.typed
│  │     │  ├─ web.py
│  │     │  ├─ _version.py
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ core.cpython-313.pyc
│  │     │     ├─ docstrings.cpython-313.pyc
│  │     │     ├─ metaprogramming.cpython-313.pyc
│  │     │     ├─ motor_asyncio.cpython-313.pyc
│  │     │     ├─ motor_common.cpython-313.pyc
│  │     │     ├─ motor_gridfs.cpython-313.pyc
│  │     │     ├─ motor_tornado.cpython-313.pyc
│  │     │     ├─ web.cpython-313.pyc
│  │     │     ├─ _version.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ msgpack
│  │     │  ├─ exceptions.py
│  │     │  ├─ ext.py
│  │     │  ├─ fallback.py
│  │     │  ├─ _cmsgpack.cp313-win_amd64.pyd
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ exceptions.cpython-313.pyc
│  │     │     ├─ ext.cpython-313.pyc
│  │     │     ├─ fallback.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ multipart
│  │     │  ├─ decoders.py
│  │     │  ├─ exceptions.py
│  │     │  ├─ multipart.py
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ decoders.cpython-313.pyc
│  │     │     ├─ exceptions.cpython-313.pyc
│  │     │     ├─ multipart.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ numba
│  │     │  ├─ cext
│  │     │  │  ├─ cext.h
│  │     │  │  ├─ dictobject.c
│  │     │  │  ├─ dictobject.h
│  │     │  │  ├─ listobject.c
│  │     │  │  ├─ listobject.h
│  │     │  │  ├─ utils.c
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ cloudpickle
│  │     │  │  ├─ cloudpickle.py
│  │     │  │  ├─ cloudpickle_fast.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ cloudpickle.cpython-313.pyc
│  │     │  │     ├─ cloudpickle_fast.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ core
│  │     │  │  ├─ analysis.py
│  │     │  │  ├─ annotations
│  │     │  │  │  ├─ pretty_annotate.py
│  │     │  │  │  ├─ template.html
│  │     │  │  │  ├─ type_annotations.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ pretty_annotate.cpython-313.pyc
│  │     │  │  │     ├─ type_annotations.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ base.py
│  │     │  │  ├─ boxing.py
│  │     │  │  ├─ bytecode.py
│  │     │  │  ├─ byteflow.py
│  │     │  │  ├─ caching.py
│  │     │  │  ├─ callconv.py
│  │     │  │  ├─ callwrapper.py
│  │     │  │  ├─ ccallback.py
│  │     │  │  ├─ cgutils.py
│  │     │  │  ├─ codegen.py
│  │     │  │  ├─ compiler.py
│  │     │  │  ├─ compiler_lock.py
│  │     │  │  ├─ compiler_machinery.py
│  │     │  │  ├─ config.py
│  │     │  │  ├─ consts.py
│  │     │  │  ├─ controlflow.py
│  │     │  │  ├─ cpu.py
│  │     │  │  ├─ cpu_options.py
│  │     │  │  ├─ datamodel
│  │     │  │  │  ├─ manager.py
│  │     │  │  │  ├─ models.py
│  │     │  │  │  ├─ packer.py
│  │     │  │  │  ├─ registry.py
│  │     │  │  │  ├─ testing.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ manager.cpython-313.pyc
│  │     │  │  │     ├─ models.cpython-313.pyc
│  │     │  │  │     ├─ packer.cpython-313.pyc
│  │     │  │  │     ├─ registry.cpython-313.pyc
│  │     │  │  │     ├─ testing.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ debuginfo.py
│  │     │  │  ├─ decorators.py
│  │     │  │  ├─ descriptors.py
│  │     │  │  ├─ dispatcher.py
│  │     │  │  ├─ entrypoints.py
│  │     │  │  ├─ environment.py
│  │     │  │  ├─ errors.py
│  │     │  │  ├─ event.py
│  │     │  │  ├─ extending.py
│  │     │  │  ├─ extending.pyi
│  │     │  │  ├─ externals.py
│  │     │  │  ├─ fastmathpass.py
│  │     │  │  ├─ funcdesc.py
│  │     │  │  ├─ generators.py
│  │     │  │  ├─ imputils.py
│  │     │  │  ├─ inline_closurecall.py
│  │     │  │  ├─ interpreter.py
│  │     │  │  ├─ intrinsics.py
│  │     │  │  ├─ ir.py
│  │     │  │  ├─ ir_utils.py
│  │     │  │  ├─ itanium_mangler.py
│  │     │  │  ├─ llvm_bindings.py
│  │     │  │  ├─ lowering.py
│  │     │  │  ├─ object_mode_passes.py
│  │     │  │  ├─ optional.py
│  │     │  │  ├─ options.py
│  │     │  │  ├─ postproc.py
│  │     │  │  ├─ pylowering.py
│  │     │  │  ├─ pythonapi.py
│  │     │  │  ├─ registry.py
│  │     │  │  ├─ removerefctpass.py
│  │     │  │  ├─ rewrites
│  │     │  │  │  ├─ ir_print.py
│  │     │  │  │  ├─ registry.py
│  │     │  │  │  ├─ static_binop.py
│  │     │  │  │  ├─ static_getitem.py
│  │     │  │  │  ├─ static_raise.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ ir_print.cpython-313.pyc
│  │     │  │  │     ├─ registry.cpython-313.pyc
│  │     │  │  │     ├─ static_binop.cpython-313.pyc
│  │     │  │  │     ├─ static_getitem.cpython-313.pyc
│  │     │  │  │     ├─ static_raise.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ runtime
│  │     │  │  │  ├─ context.py
│  │     │  │  │  ├─ nrt.cpp
│  │     │  │  │  ├─ nrt.h
│  │     │  │  │  ├─ nrt.py
│  │     │  │  │  ├─ nrtdynmod.py
│  │     │  │  │  ├─ nrtopt.py
│  │     │  │  │  ├─ nrt_external.h
│  │     │  │  │  ├─ _nrt_python.c
│  │     │  │  │  ├─ _nrt_python.cp313-win_amd64.pyd
│  │     │  │  │  ├─ _nrt_pythonmod.c
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ context.cpython-313.pyc
│  │     │  │  │     ├─ nrt.cpython-313.pyc
│  │     │  │  │     ├─ nrtdynmod.cpython-313.pyc
│  │     │  │  │     ├─ nrtopt.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ serialize.py
│  │     │  │  ├─ sigutils.py
│  │     │  │  ├─ ssa.py
│  │     │  │  ├─ targetconfig.py
│  │     │  │  ├─ target_extension.py
│  │     │  │  ├─ tracing.py
│  │     │  │  ├─ transforms.py
│  │     │  │  ├─ typeconv
│  │     │  │  │  ├─ castgraph.py
│  │     │  │  │  ├─ rules.py
│  │     │  │  │  ├─ typeconv.py
│  │     │  │  │  ├─ _typeconv.cp313-win_amd64.pyd
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ castgraph.cpython-313.pyc
│  │     │  │  │     ├─ rules.cpython-313.pyc
│  │     │  │  │     ├─ typeconv.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ typed_passes.py
│  │     │  │  ├─ typeinfer.py
│  │     │  │  ├─ types
│  │     │  │  │  ├─ abstract.py
│  │     │  │  │  ├─ common.py
│  │     │  │  │  ├─ containers.py
│  │     │  │  │  ├─ functions.py
│  │     │  │  │  ├─ function_type.py
│  │     │  │  │  ├─ iterators.py
│  │     │  │  │  ├─ misc.py
│  │     │  │  │  ├─ npytypes.py
│  │     │  │  │  ├─ scalars.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  ├─ __init__.pyi
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ abstract.cpython-313.pyc
│  │     │  │  │     ├─ common.cpython-313.pyc
│  │     │  │  │     ├─ containers.cpython-313.pyc
│  │     │  │  │     ├─ functions.cpython-313.pyc
│  │     │  │  │     ├─ function_type.cpython-313.pyc
│  │     │  │  │     ├─ iterators.cpython-313.pyc
│  │     │  │  │     ├─ misc.cpython-313.pyc
│  │     │  │  │     ├─ npytypes.cpython-313.pyc
│  │     │  │  │     ├─ scalars.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ typing
│  │     │  │  │  ├─ arraydecl.py
│  │     │  │  │  ├─ asnumbatype.py
│  │     │  │  │  ├─ bufproto.py
│  │     │  │  │  ├─ builtins.py
│  │     │  │  │  ├─ cffi_utils.py
│  │     │  │  │  ├─ cmathdecl.py
│  │     │  │  │  ├─ collections.py
│  │     │  │  │  ├─ context.py
│  │     │  │  │  ├─ ctypes_utils.py
│  │     │  │  │  ├─ dictdecl.py
│  │     │  │  │  ├─ enumdecl.py
│  │     │  │  │  ├─ listdecl.py
│  │     │  │  │  ├─ mathdecl.py
│  │     │  │  │  ├─ npdatetime.py
│  │     │  │  │  ├─ npydecl.py
│  │     │  │  │  ├─ setdecl.py
│  │     │  │  │  ├─ templates.py
│  │     │  │  │  ├─ typeof.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ arraydecl.cpython-313.pyc
│  │     │  │  │     ├─ asnumbatype.cpython-313.pyc
│  │     │  │  │     ├─ bufproto.cpython-313.pyc
│  │     │  │  │     ├─ builtins.cpython-313.pyc
│  │     │  │  │     ├─ cffi_utils.cpython-313.pyc
│  │     │  │  │     ├─ cmathdecl.cpython-313.pyc
│  │     │  │  │     ├─ collections.cpython-313.pyc
│  │     │  │  │     ├─ context.cpython-313.pyc
│  │     │  │  │     ├─ ctypes_utils.cpython-313.pyc
│  │     │  │  │     ├─ dictdecl.cpython-313.pyc
│  │     │  │  │     ├─ enumdecl.cpython-313.pyc
│  │     │  │  │     ├─ listdecl.cpython-313.pyc
│  │     │  │  │     ├─ mathdecl.cpython-313.pyc
│  │     │  │  │     ├─ npdatetime.cpython-313.pyc
│  │     │  │  │     ├─ npydecl.cpython-313.pyc
│  │     │  │  │     ├─ setdecl.cpython-313.pyc
│  │     │  │  │     ├─ templates.cpython-313.pyc
│  │     │  │  │     ├─ typeof.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ unsafe
│  │     │  │  │  ├─ bytes.py
│  │     │  │  │  ├─ eh.py
│  │     │  │  │  ├─ nrt.py
│  │     │  │  │  ├─ refcount.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ bytes.cpython-313.pyc
│  │     │  │  │     ├─ eh.cpython-313.pyc
│  │     │  │  │     ├─ nrt.cpython-313.pyc
│  │     │  │  │     ├─ refcount.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ untyped_passes.py
│  │     │  │  ├─ utils.py
│  │     │  │  ├─ withcontexts.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ analysis.cpython-313.pyc
│  │     │  │     ├─ base.cpython-313.pyc
│  │     │  │     ├─ boxing.cpython-313.pyc
│  │     │  │     ├─ bytecode.cpython-313.pyc
│  │     │  │     ├─ byteflow.cpython-313.pyc
│  │     │  │     ├─ caching.cpython-313.pyc
│  │     │  │     ├─ callconv.cpython-313.pyc
│  │     │  │     ├─ callwrapper.cpython-313.pyc
│  │     │  │     ├─ ccallback.cpython-313.pyc
│  │     │  │     ├─ cgutils.cpython-313.pyc
│  │     │  │     ├─ codegen.cpython-313.pyc
│  │     │  │     ├─ compiler.cpython-313.pyc
│  │     │  │     ├─ compiler_lock.cpython-313.pyc
│  │     │  │     ├─ compiler_machinery.cpython-313.pyc
│  │     │  │     ├─ config.cpython-313.pyc
│  │     │  │     ├─ consts.cpython-313.pyc
│  │     │  │     ├─ controlflow.cpython-313.pyc
│  │     │  │     ├─ cpu.cpython-313.pyc
│  │     │  │     ├─ cpu_options.cpython-313.pyc
│  │     │  │     ├─ debuginfo.cpython-313.pyc
│  │     │  │     ├─ decorators.cpython-313.pyc
│  │     │  │     ├─ descriptors.cpython-313.pyc
│  │     │  │     ├─ dispatcher.cpython-313.pyc
│  │     │  │     ├─ entrypoints.cpython-313.pyc
│  │     │  │     ├─ environment.cpython-313.pyc
│  │     │  │     ├─ errors.cpython-313.pyc
│  │     │  │     ├─ event.cpython-313.pyc
│  │     │  │     ├─ extending.cpython-313.pyc
│  │     │  │     ├─ externals.cpython-313.pyc
│  │     │  │     ├─ fastmathpass.cpython-313.pyc
│  │     │  │     ├─ funcdesc.cpython-313.pyc
│  │     │  │     ├─ generators.cpython-313.pyc
│  │     │  │     ├─ imputils.cpython-313.pyc
│  │     │  │     ├─ inline_closurecall.cpython-313.pyc
│  │     │  │     ├─ interpreter.cpython-313.pyc
│  │     │  │     ├─ intrinsics.cpython-313.pyc
│  │     │  │     ├─ ir.cpython-313.pyc
│  │     │  │     ├─ ir_utils.cpython-313.pyc
│  │     │  │     ├─ itanium_mangler.cpython-313.pyc
│  │     │  │     ├─ llvm_bindings.cpython-313.pyc
│  │     │  │     ├─ lowering.cpython-313.pyc
│  │     │  │     ├─ object_mode_passes.cpython-313.pyc
│  │     │  │     ├─ optional.cpython-313.pyc
│  │     │  │     ├─ options.cpython-313.pyc
│  │     │  │     ├─ postproc.cpython-313.pyc
│  │     │  │     ├─ pylowering.cpython-313.pyc
│  │     │  │     ├─ pythonapi.cpython-313.pyc
│  │     │  │     ├─ registry.cpython-313.pyc
│  │     │  │     ├─ removerefctpass.cpython-313.pyc
│  │     │  │     ├─ serialize.cpython-313.pyc
│  │     │  │     ├─ sigutils.cpython-313.pyc
│  │     │  │     ├─ ssa.cpython-313.pyc
│  │     │  │     ├─ targetconfig.cpython-313.pyc
│  │     │  │     ├─ target_extension.cpython-313.pyc
│  │     │  │     ├─ tracing.cpython-313.pyc
│  │     │  │     ├─ transforms.cpython-313.pyc
│  │     │  │     ├─ typed_passes.cpython-313.pyc
│  │     │  │     ├─ typeinfer.cpython-313.pyc
│  │     │  │     ├─ untyped_passes.cpython-313.pyc
│  │     │  │     ├─ utils.cpython-313.pyc
│  │     │  │     ├─ withcontexts.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ cpython
│  │     │  │  ├─ builtins.py
│  │     │  │  ├─ charseq.py
│  │     │  │  ├─ cmathimpl.py
│  │     │  │  ├─ enumimpl.py
│  │     │  │  ├─ hashing.py
│  │     │  │  ├─ heapq.py
│  │     │  │  ├─ iterators.py
│  │     │  │  ├─ listobj.py
│  │     │  │  ├─ mathimpl.py
│  │     │  │  ├─ numbers.py
│  │     │  │  ├─ printimpl.py
│  │     │  │  ├─ randomimpl.py
│  │     │  │  ├─ rangeobj.py
│  │     │  │  ├─ setobj.py
│  │     │  │  ├─ slicing.py
│  │     │  │  ├─ tupleobj.py
│  │     │  │  ├─ unicode.py
│  │     │  │  ├─ unicode_support.py
│  │     │  │  ├─ unsafe
│  │     │  │  │  ├─ numbers.py
│  │     │  │  │  ├─ tuple.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ numbers.cpython-313.pyc
│  │     │  │  │     ├─ tuple.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ builtins.cpython-313.pyc
│  │     │  │     ├─ charseq.cpython-313.pyc
│  │     │  │     ├─ cmathimpl.cpython-313.pyc
│  │     │  │     ├─ enumimpl.cpython-313.pyc
│  │     │  │     ├─ hashing.cpython-313.pyc
│  │     │  │     ├─ heapq.cpython-313.pyc
│  │     │  │     ├─ iterators.cpython-313.pyc
│  │     │  │     ├─ listobj.cpython-313.pyc
│  │     │  │     ├─ mathimpl.cpython-313.pyc
│  │     │  │     ├─ numbers.cpython-313.pyc
│  │     │  │     ├─ printimpl.cpython-313.pyc
│  │     │  │     ├─ randomimpl.cpython-313.pyc
│  │     │  │     ├─ rangeobj.cpython-313.pyc
│  │     │  │     ├─ setobj.cpython-313.pyc
│  │     │  │     ├─ slicing.cpython-313.pyc
│  │     │  │     ├─ tupleobj.cpython-313.pyc
│  │     │  │     ├─ unicode.cpython-313.pyc
│  │     │  │     ├─ unicode_support.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ cuda
│  │     │  │  ├─ api.py
│  │     │  │  ├─ api_util.py
│  │     │  │  ├─ args.py
│  │     │  │  ├─ cg.py
│  │     │  │  ├─ codegen.py
│  │     │  │  ├─ compiler.py
│  │     │  │  ├─ cpp_function_wrappers.cu
│  │     │  │  ├─ cudadecl.py
│  │     │  │  ├─ cudadrv
│  │     │  │  │  ├─ devicearray.py
│  │     │  │  │  ├─ devices.py
│  │     │  │  │  ├─ driver.py
│  │     │  │  │  ├─ drvapi.py
│  │     │  │  │  ├─ dummyarray.py
│  │     │  │  │  ├─ enums.py
│  │     │  │  │  ├─ error.py
│  │     │  │  │  ├─ libs.py
│  │     │  │  │  ├─ ndarray.py
│  │     │  │  │  ├─ nvrtc.py
│  │     │  │  │  ├─ nvvm.py
│  │     │  │  │  ├─ rtapi.py
│  │     │  │  │  ├─ runtime.py
│  │     │  │  │  ├─ _extras.cp313-win_amd64.pyd
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ devicearray.cpython-313.pyc
│  │     │  │  │     ├─ devices.cpython-313.pyc
│  │     │  │  │     ├─ driver.cpython-313.pyc
│  │     │  │  │     ├─ drvapi.cpython-313.pyc
│  │     │  │  │     ├─ dummyarray.cpython-313.pyc
│  │     │  │  │     ├─ enums.cpython-313.pyc
│  │     │  │  │     ├─ error.cpython-313.pyc
│  │     │  │  │     ├─ libs.cpython-313.pyc
│  │     │  │  │     ├─ ndarray.cpython-313.pyc
│  │     │  │  │     ├─ nvrtc.cpython-313.pyc
│  │     │  │  │     ├─ nvvm.cpython-313.pyc
│  │     │  │  │     ├─ rtapi.cpython-313.pyc
│  │     │  │  │     ├─ runtime.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ cudaimpl.py
│  │     │  │  ├─ cudamath.py
│  │     │  │  ├─ cuda_fp16.h
│  │     │  │  ├─ cuda_fp16.hpp
│  │     │  │  ├─ cuda_paths.py
│  │     │  │  ├─ decorators.py
│  │     │  │  ├─ descriptor.py
│  │     │  │  ├─ deviceufunc.py
│  │     │  │  ├─ device_init.py
│  │     │  │  ├─ dispatcher.py
│  │     │  │  ├─ errors.py
│  │     │  │  ├─ extending.py
│  │     │  │  ├─ initialize.py
│  │     │  │  ├─ intrinsics.py
│  │     │  │  ├─ intrinsic_wrapper.py
│  │     │  │  ├─ kernels
│  │     │  │  │  ├─ reduction.py
│  │     │  │  │  ├─ transpose.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ reduction.cpython-313.pyc
│  │     │  │  │     ├─ transpose.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ libdevice.py
│  │     │  │  ├─ libdevicedecl.py
│  │     │  │  ├─ libdevicefuncs.py
│  │     │  │  ├─ libdeviceimpl.py
│  │     │  │  ├─ mathimpl.py
│  │     │  │  ├─ models.py
│  │     │  │  ├─ nvvmutils.py
│  │     │  │  ├─ printimpl.py
│  │     │  │  ├─ random.py
│  │     │  │  ├─ simulator
│  │     │  │  │  ├─ api.py
│  │     │  │  │  ├─ compiler.py
│  │     │  │  │  ├─ cudadrv
│  │     │  │  │  │  ├─ devicearray.py
│  │     │  │  │  │  ├─ devices.py
│  │     │  │  │  │  ├─ driver.py
│  │     │  │  │  │  ├─ drvapi.py
│  │     │  │  │  │  ├─ dummyarray.py
│  │     │  │  │  │  ├─ error.py
│  │     │  │  │  │  ├─ libs.py
│  │     │  │  │  │  ├─ nvvm.py
│  │     │  │  │  │  ├─ runtime.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ devicearray.cpython-313.pyc
│  │     │  │  │  │     ├─ devices.cpython-313.pyc
│  │     │  │  │  │     ├─ driver.cpython-313.pyc
│  │     │  │  │  │     ├─ drvapi.cpython-313.pyc
│  │     │  │  │  │     ├─ dummyarray.cpython-313.pyc
│  │     │  │  │  │     ├─ error.cpython-313.pyc
│  │     │  │  │  │     ├─ libs.cpython-313.pyc
│  │     │  │  │  │     ├─ nvvm.cpython-313.pyc
│  │     │  │  │  │     ├─ runtime.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ kernel.py
│  │     │  │  │  ├─ kernelapi.py
│  │     │  │  │  ├─ reduction.py
│  │     │  │  │  ├─ vector_types.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ api.cpython-313.pyc
│  │     │  │  │     ├─ compiler.cpython-313.pyc
│  │     │  │  │     ├─ kernel.cpython-313.pyc
│  │     │  │  │     ├─ kernelapi.cpython-313.pyc
│  │     │  │  │     ├─ reduction.cpython-313.pyc
│  │     │  │  │     ├─ vector_types.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ simulator_init.py
│  │     │  │  ├─ stubs.py
│  │     │  │  ├─ target.py
│  │     │  │  ├─ testing.py
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ cudadrv
│  │     │  │  │  │  ├─ test_array_attr.py
│  │     │  │  │  │  ├─ test_context_stack.py
│  │     │  │  │  │  ├─ test_cuda_array_slicing.py
│  │     │  │  │  │  ├─ test_cuda_auto_context.py
│  │     │  │  │  │  ├─ test_cuda_devicerecord.py
│  │     │  │  │  │  ├─ test_cuda_driver.py
│  │     │  │  │  │  ├─ test_cuda_libraries.py
│  │     │  │  │  │  ├─ test_cuda_memory.py
│  │     │  │  │  │  ├─ test_cuda_ndarray.py
│  │     │  │  │  │  ├─ test_deallocations.py
│  │     │  │  │  │  ├─ test_detect.py
│  │     │  │  │  │  ├─ test_emm_plugins.py
│  │     │  │  │  │  ├─ test_events.py
│  │     │  │  │  │  ├─ test_host_alloc.py
│  │     │  │  │  │  ├─ test_init.py
│  │     │  │  │  │  ├─ test_inline_ptx.py
│  │     │  │  │  │  ├─ test_is_fp16.py
│  │     │  │  │  │  ├─ test_linker.py
│  │     │  │  │  │  ├─ test_managed_alloc.py
│  │     │  │  │  │  ├─ test_mvc.py
│  │     │  │  │  │  ├─ test_nvvm_driver.py
│  │     │  │  │  │  ├─ test_pinned.py
│  │     │  │  │  │  ├─ test_profiler.py
│  │     │  │  │  │  ├─ test_ptds.py
│  │     │  │  │  │  ├─ test_reset_device.py
│  │     │  │  │  │  ├─ test_runtime.py
│  │     │  │  │  │  ├─ test_select_device.py
│  │     │  │  │  │  ├─ test_streams.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ test_array_attr.cpython-313.pyc
│  │     │  │  │  │     ├─ test_context_stack.cpython-313.pyc
│  │     │  │  │  │     ├─ test_cuda_array_slicing.cpython-313.pyc
│  │     │  │  │  │     ├─ test_cuda_auto_context.cpython-313.pyc
│  │     │  │  │  │     ├─ test_cuda_devicerecord.cpython-313.pyc
│  │     │  │  │  │     ├─ test_cuda_driver.cpython-313.pyc
│  │     │  │  │  │     ├─ test_cuda_libraries.cpython-313.pyc
│  │     │  │  │  │     ├─ test_cuda_memory.cpython-313.pyc
│  │     │  │  │  │     ├─ test_cuda_ndarray.cpython-313.pyc
│  │     │  │  │  │     ├─ test_deallocations.cpython-313.pyc
│  │     │  │  │  │     ├─ test_detect.cpython-313.pyc
│  │     │  │  │  │     ├─ test_emm_plugins.cpython-313.pyc
│  │     │  │  │  │     ├─ test_events.cpython-313.pyc
│  │     │  │  │  │     ├─ test_host_alloc.cpython-313.pyc
│  │     │  │  │  │     ├─ test_init.cpython-313.pyc
│  │     │  │  │  │     ├─ test_inline_ptx.cpython-313.pyc
│  │     │  │  │  │     ├─ test_is_fp16.cpython-313.pyc
│  │     │  │  │  │     ├─ test_linker.cpython-313.pyc
│  │     │  │  │  │     ├─ test_managed_alloc.cpython-313.pyc
│  │     │  │  │  │     ├─ test_mvc.cpython-313.pyc
│  │     │  │  │  │     ├─ test_nvvm_driver.cpython-313.pyc
│  │     │  │  │  │     ├─ test_pinned.cpython-313.pyc
│  │     │  │  │  │     ├─ test_profiler.cpython-313.pyc
│  │     │  │  │  │     ├─ test_ptds.cpython-313.pyc
│  │     │  │  │  │     ├─ test_reset_device.cpython-313.pyc
│  │     │  │  │  │     ├─ test_runtime.cpython-313.pyc
│  │     │  │  │  │     ├─ test_select_device.cpython-313.pyc
│  │     │  │  │  │     ├─ test_streams.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ cudapy
│  │     │  │  │  │  ├─ cache_usecases.py
│  │     │  │  │  │  ├─ cache_with_cpu_usecases.py
│  │     │  │  │  │  ├─ extensions_usecases.py
│  │     │  │  │  │  ├─ recursion_usecases.py
│  │     │  │  │  │  ├─ test_alignment.py
│  │     │  │  │  │  ├─ test_array.py
│  │     │  │  │  │  ├─ test_array_args.py
│  │     │  │  │  │  ├─ test_array_methods.py
│  │     │  │  │  │  ├─ test_atomics.py
│  │     │  │  │  │  ├─ test_blackscholes.py
│  │     │  │  │  │  ├─ test_boolean.py
│  │     │  │  │  │  ├─ test_caching.py
│  │     │  │  │  │  ├─ test_casting.py
│  │     │  │  │  │  ├─ test_cffi.py
│  │     │  │  │  │  ├─ test_compiler.py
│  │     │  │  │  │  ├─ test_complex.py
│  │     │  │  │  │  ├─ test_complex_kernel.py
│  │     │  │  │  │  ├─ test_constmem.py
│  │     │  │  │  │  ├─ test_const_string.py
│  │     │  │  │  │  ├─ test_cooperative_groups.py
│  │     │  │  │  │  ├─ test_cuda_array_interface.py
│  │     │  │  │  │  ├─ test_cuda_jit_no_types.py
│  │     │  │  │  │  ├─ test_datetime.py
│  │     │  │  │  │  ├─ test_debug.py
│  │     │  │  │  │  ├─ test_debuginfo.py
│  │     │  │  │  │  ├─ test_device_func.py
│  │     │  │  │  │  ├─ test_dispatcher.py
│  │     │  │  │  │  ├─ test_enums.py
│  │     │  │  │  │  ├─ test_errors.py
│  │     │  │  │  │  ├─ test_exception.py
│  │     │  │  │  │  ├─ test_extending.py
│  │     │  │  │  │  ├─ test_fastmath.py
│  │     │  │  │  │  ├─ test_forall.py
│  │     │  │  │  │  ├─ test_freevar.py
│  │     │  │  │  │  ├─ test_frexp_ldexp.py
│  │     │  │  │  │  ├─ test_globals.py
│  │     │  │  │  │  ├─ test_gufunc.py
│  │     │  │  │  │  ├─ test_gufunc_scalar.py
│  │     │  │  │  │  ├─ test_gufunc_scheduling.py
│  │     │  │  │  │  ├─ test_idiv.py
│  │     │  │  │  │  ├─ test_inspect.py
│  │     │  │  │  │  ├─ test_intrinsics.py
│  │     │  │  │  │  ├─ test_ipc.py
│  │     │  │  │  │  ├─ test_iterators.py
│  │     │  │  │  │  ├─ test_lang.py
│  │     │  │  │  │  ├─ test_laplace.py
│  │     │  │  │  │  ├─ test_libdevice.py
│  │     │  │  │  │  ├─ test_lineinfo.py
│  │     │  │  │  │  ├─ test_localmem.py
│  │     │  │  │  │  ├─ test_mandel.py
│  │     │  │  │  │  ├─ test_math.py
│  │     │  │  │  │  ├─ test_matmul.py
│  │     │  │  │  │  ├─ test_minmax.py
│  │     │  │  │  │  ├─ test_montecarlo.py
│  │     │  │  │  │  ├─ test_multigpu.py
│  │     │  │  │  │  ├─ test_multiprocessing.py
│  │     │  │  │  │  ├─ test_multithreads.py
│  │     │  │  │  │  ├─ test_nondet.py
│  │     │  │  │  │  ├─ test_operator.py
│  │     │  │  │  │  ├─ test_optimization.py
│  │     │  │  │  │  ├─ test_overload.py
│  │     │  │  │  │  ├─ test_powi.py
│  │     │  │  │  │  ├─ test_print.py
│  │     │  │  │  │  ├─ test_py2_div_issue.py
│  │     │  │  │  │  ├─ test_random.py
│  │     │  │  │  │  ├─ test_record_dtype.py
│  │     │  │  │  │  ├─ test_recursion.py
│  │     │  │  │  │  ├─ test_reduction.py
│  │     │  │  │  │  ├─ test_retrieve_autoconverted_arrays.py
│  │     │  │  │  │  ├─ test_serialize.py
│  │     │  │  │  │  ├─ test_slicing.py
│  │     │  │  │  │  ├─ test_sm.py
│  │     │  │  │  │  ├─ test_sm_creation.py
│  │     │  │  │  │  ├─ test_sync.py
│  │     │  │  │  │  ├─ test_transpose.py
│  │     │  │  │  │  ├─ test_ufuncs.py
│  │     │  │  │  │  ├─ test_userexc.py
│  │     │  │  │  │  ├─ test_vectorize.py
│  │     │  │  │  │  ├─ test_vectorize_complex.py
│  │     │  │  │  │  ├─ test_vectorize_decor.py
│  │     │  │  │  │  ├─ test_vectorize_device.py
│  │     │  │  │  │  ├─ test_vectorize_scalar_arg.py
│  │     │  │  │  │  ├─ test_vector_type.py
│  │     │  │  │  │  ├─ test_warning.py
│  │     │  │  │  │  ├─ test_warp_ops.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ cache_usecases.cpython-313.pyc
│  │     │  │  │  │     ├─ cache_with_cpu_usecases.cpython-313.pyc
│  │     │  │  │  │     ├─ extensions_usecases.cpython-313.pyc
│  │     │  │  │  │     ├─ recursion_usecases.cpython-313.pyc
│  │     │  │  │  │     ├─ test_alignment.cpython-313.pyc
│  │     │  │  │  │     ├─ test_array.cpython-313.pyc
│  │     │  │  │  │     ├─ test_array_args.cpython-313.pyc
│  │     │  │  │  │     ├─ test_array_methods.cpython-313.pyc
│  │     │  │  │  │     ├─ test_atomics.cpython-313.pyc
│  │     │  │  │  │     ├─ test_blackscholes.cpython-313.pyc
│  │     │  │  │  │     ├─ test_boolean.cpython-313.pyc
│  │     │  │  │  │     ├─ test_caching.cpython-313.pyc
│  │     │  │  │  │     ├─ test_casting.cpython-313.pyc
│  │     │  │  │  │     ├─ test_cffi.cpython-313.pyc
│  │     │  │  │  │     ├─ test_compiler.cpython-313.pyc
│  │     │  │  │  │     ├─ test_complex.cpython-313.pyc
│  │     │  │  │  │     ├─ test_complex_kernel.cpython-313.pyc
│  │     │  │  │  │     ├─ test_constmem.cpython-313.pyc
│  │     │  │  │  │     ├─ test_const_string.cpython-313.pyc
│  │     │  │  │  │     ├─ test_cooperative_groups.cpython-313.pyc
│  │     │  │  │  │     ├─ test_cuda_array_interface.cpython-313.pyc
│  │     │  │  │  │     ├─ test_cuda_jit_no_types.cpython-313.pyc
│  │     │  │  │  │     ├─ test_datetime.cpython-313.pyc
│  │     │  │  │  │     ├─ test_debug.cpython-313.pyc
│  │     │  │  │  │     ├─ test_debuginfo.cpython-313.pyc
│  │     │  │  │  │     ├─ test_device_func.cpython-313.pyc
│  │     │  │  │  │     ├─ test_dispatcher.cpython-313.pyc
│  │     │  │  │  │     ├─ test_enums.cpython-313.pyc
│  │     │  │  │  │     ├─ test_errors.cpython-313.pyc
│  │     │  │  │  │     ├─ test_exception.cpython-313.pyc
│  │     │  │  │  │     ├─ test_extending.cpython-313.pyc
│  │     │  │  │  │     ├─ test_fastmath.cpython-313.pyc
│  │     │  │  │  │     ├─ test_forall.cpython-313.pyc
│  │     │  │  │  │     ├─ test_freevar.cpython-313.pyc
│  │     │  │  │  │     ├─ test_frexp_ldexp.cpython-313.pyc
│  │     │  │  │  │     ├─ test_globals.cpython-313.pyc
│  │     │  │  │  │     ├─ test_gufunc.cpython-313.pyc
│  │     │  │  │  │     ├─ test_gufunc_scalar.cpython-313.pyc
│  │     │  │  │  │     ├─ test_gufunc_scheduling.cpython-313.pyc
│  │     │  │  │  │     ├─ test_idiv.cpython-313.pyc
│  │     │  │  │  │     ├─ test_inspect.cpython-313.pyc
│  │     │  │  │  │     ├─ test_intrinsics.cpython-313.pyc
│  │     │  │  │  │     ├─ test_ipc.cpython-313.pyc
│  │     │  │  │  │     ├─ test_iterators.cpython-313.pyc
│  │     │  │  │  │     ├─ test_lang.cpython-313.pyc
│  │     │  │  │  │     ├─ test_laplace.cpython-313.pyc
│  │     │  │  │  │     ├─ test_libdevice.cpython-313.pyc
│  │     │  │  │  │     ├─ test_lineinfo.cpython-313.pyc
│  │     │  │  │  │     ├─ test_localmem.cpython-313.pyc
│  │     │  │  │  │     ├─ test_mandel.cpython-313.pyc
│  │     │  │  │  │     ├─ test_math.cpython-313.pyc
│  │     │  │  │  │     ├─ test_matmul.cpython-313.pyc
│  │     │  │  │  │     ├─ test_minmax.cpython-313.pyc
│  │     │  │  │  │     ├─ test_montecarlo.cpython-313.pyc
│  │     │  │  │  │     ├─ test_multigpu.cpython-313.pyc
│  │     │  │  │  │     ├─ test_multiprocessing.cpython-313.pyc
│  │     │  │  │  │     ├─ test_multithreads.cpython-313.pyc
│  │     │  │  │  │     ├─ test_nondet.cpython-313.pyc
│  │     │  │  │  │     ├─ test_operator.cpython-313.pyc
│  │     │  │  │  │     ├─ test_optimization.cpython-313.pyc
│  │     │  │  │  │     ├─ test_overload.cpython-313.pyc
│  │     │  │  │  │     ├─ test_powi.cpython-313.pyc
│  │     │  │  │  │     ├─ test_print.cpython-313.pyc
│  │     │  │  │  │     ├─ test_py2_div_issue.cpython-313.pyc
│  │     │  │  │  │     ├─ test_random.cpython-313.pyc
│  │     │  │  │  │     ├─ test_record_dtype.cpython-313.pyc
│  │     │  │  │  │     ├─ test_recursion.cpython-313.pyc
│  │     │  │  │  │     ├─ test_reduction.cpython-313.pyc
│  │     │  │  │  │     ├─ test_retrieve_autoconverted_arrays.cpython-313.pyc
│  │     │  │  │  │     ├─ test_serialize.cpython-313.pyc
│  │     │  │  │  │     ├─ test_slicing.cpython-313.pyc
│  │     │  │  │  │     ├─ test_sm.cpython-313.pyc
│  │     │  │  │  │     ├─ test_sm_creation.cpython-313.pyc
│  │     │  │  │  │     ├─ test_sync.cpython-313.pyc
│  │     │  │  │  │     ├─ test_transpose.cpython-313.pyc
│  │     │  │  │  │     ├─ test_ufuncs.cpython-313.pyc
│  │     │  │  │  │     ├─ test_userexc.cpython-313.pyc
│  │     │  │  │  │     ├─ test_vectorize.cpython-313.pyc
│  │     │  │  │  │     ├─ test_vectorize_complex.cpython-313.pyc
│  │     │  │  │  │     ├─ test_vectorize_decor.cpython-313.pyc
│  │     │  │  │  │     ├─ test_vectorize_device.cpython-313.pyc
│  │     │  │  │  │     ├─ test_vectorize_scalar_arg.cpython-313.pyc
│  │     │  │  │  │     ├─ test_vector_type.cpython-313.pyc
│  │     │  │  │  │     ├─ test_warning.cpython-313.pyc
│  │     │  │  │  │     ├─ test_warp_ops.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ cudasim
│  │     │  │  │  │  ├─ support.py
│  │     │  │  │  │  ├─ test_cudasim_issues.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ support.cpython-313.pyc
│  │     │  │  │  │     ├─ test_cudasim_issues.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ data
│  │     │  │  │  │  ├─ cuda_include.cu
│  │     │  │  │  │  ├─ error.cu
│  │     │  │  │  │  ├─ jitlink.cu
│  │     │  │  │  │  ├─ jitlink.ptx
│  │     │  │  │  │  ├─ warn.cu
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ doc_examples
│  │     │  │  │  │  ├─ ffi
│  │     │  │  │  │  │  ├─ functions.cu
│  │     │  │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  │  └─ __pycache__
│  │     │  │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  │  ├─ test_cg.py
│  │     │  │  │  │  ├─ test_cpu_gpu_compat.py
│  │     │  │  │  │  ├─ test_ffi.py
│  │     │  │  │  │  ├─ test_laplace.py
│  │     │  │  │  │  ├─ test_matmul.py
│  │     │  │  │  │  ├─ test_montecarlo.py
│  │     │  │  │  │  ├─ test_random.py
│  │     │  │  │  │  ├─ test_reduction.py
│  │     │  │  │  │  ├─ test_sessionize.py
│  │     │  │  │  │  ├─ test_ufunc.py
│  │     │  │  │  │  ├─ test_vecadd.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ test_cg.cpython-313.pyc
│  │     │  │  │  │     ├─ test_cpu_gpu_compat.cpython-313.pyc
│  │     │  │  │  │     ├─ test_ffi.cpython-313.pyc
│  │     │  │  │  │     ├─ test_laplace.cpython-313.pyc
│  │     │  │  │  │     ├─ test_matmul.cpython-313.pyc
│  │     │  │  │  │     ├─ test_montecarlo.cpython-313.pyc
│  │     │  │  │  │     ├─ test_random.cpython-313.pyc
│  │     │  │  │  │     ├─ test_reduction.cpython-313.pyc
│  │     │  │  │  │     ├─ test_sessionize.cpython-313.pyc
│  │     │  │  │  │     ├─ test_ufunc.cpython-313.pyc
│  │     │  │  │  │     ├─ test_vecadd.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ nocuda
│  │     │  │  │  │  ├─ test_dummyarray.py
│  │     │  │  │  │  ├─ test_function_resolution.py
│  │     │  │  │  │  ├─ test_import.py
│  │     │  │  │  │  ├─ test_library_lookup.py
│  │     │  │  │  │  ├─ test_nvvm.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ test_dummyarray.cpython-313.pyc
│  │     │  │  │  │     ├─ test_function_resolution.cpython-313.pyc
│  │     │  │  │  │     ├─ test_import.cpython-313.pyc
│  │     │  │  │  │     ├─ test_library_lookup.cpython-313.pyc
│  │     │  │  │  │     ├─ test_nvvm.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ types.py
│  │     │  │  ├─ ufuncs.py
│  │     │  │  ├─ vectorizers.py
│  │     │  │  ├─ vector_types.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ api.cpython-313.pyc
│  │     │  │     ├─ api_util.cpython-313.pyc
│  │     │  │     ├─ args.cpython-313.pyc
│  │     │  │     ├─ cg.cpython-313.pyc
│  │     │  │     ├─ codegen.cpython-313.pyc
│  │     │  │     ├─ compiler.cpython-313.pyc
│  │     │  │     ├─ cudadecl.cpython-313.pyc
│  │     │  │     ├─ cudaimpl.cpython-313.pyc
│  │     │  │     ├─ cudamath.cpython-313.pyc
│  │     │  │     ├─ cuda_paths.cpython-313.pyc
│  │     │  │     ├─ decorators.cpython-313.pyc
│  │     │  │     ├─ descriptor.cpython-313.pyc
│  │     │  │     ├─ deviceufunc.cpython-313.pyc
│  │     │  │     ├─ device_init.cpython-313.pyc
│  │     │  │     ├─ dispatcher.cpython-313.pyc
│  │     │  │     ├─ errors.cpython-313.pyc
│  │     │  │     ├─ extending.cpython-313.pyc
│  │     │  │     ├─ initialize.cpython-313.pyc
│  │     │  │     ├─ intrinsics.cpython-313.pyc
│  │     │  │     ├─ intrinsic_wrapper.cpython-313.pyc
│  │     │  │     ├─ libdevice.cpython-313.pyc
│  │     │  │     ├─ libdevicedecl.cpython-313.pyc
│  │     │  │     ├─ libdevicefuncs.cpython-313.pyc
│  │     │  │     ├─ libdeviceimpl.cpython-313.pyc
│  │     │  │     ├─ mathimpl.cpython-313.pyc
│  │     │  │     ├─ models.cpython-313.pyc
│  │     │  │     ├─ nvvmutils.cpython-313.pyc
│  │     │  │     ├─ printimpl.cpython-313.pyc
│  │     │  │     ├─ random.cpython-313.pyc
│  │     │  │     ├─ simulator_init.cpython-313.pyc
│  │     │  │     ├─ stubs.cpython-313.pyc
│  │     │  │     ├─ target.cpython-313.pyc
│  │     │  │     ├─ testing.cpython-313.pyc
│  │     │  │     ├─ types.cpython-313.pyc
│  │     │  │     ├─ ufuncs.cpython-313.pyc
│  │     │  │     ├─ vectorizers.cpython-313.pyc
│  │     │  │     ├─ vector_types.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ experimental
│  │     │  │  ├─ function_type.py
│  │     │  │  ├─ jitclass
│  │     │  │  │  ├─ base.py
│  │     │  │  │  ├─ boxing.py
│  │     │  │  │  ├─ decorators.py
│  │     │  │  │  ├─ overloads.py
│  │     │  │  │  ├─ _box.cp313-win_amd64.pyd
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ base.cpython-313.pyc
│  │     │  │  │     ├─ boxing.cpython-313.pyc
│  │     │  │  │     ├─ decorators.cpython-313.pyc
│  │     │  │  │     ├─ overloads.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ structref.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ function_type.cpython-313.pyc
│  │     │  │     ├─ structref.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ extending.py
│  │     │  ├─ mathnames.h
│  │     │  ├─ misc
│  │     │  │  ├─ appdirs.py
│  │     │  │  ├─ cffiimpl.py
│  │     │  │  ├─ cmdlang.gdb
│  │     │  │  ├─ coverage_support.py
│  │     │  │  ├─ dump_style.py
│  │     │  │  ├─ findlib.py
│  │     │  │  ├─ firstlinefinder.py
│  │     │  │  ├─ gdb_hook.py
│  │     │  │  ├─ gdb_print_extension.py
│  │     │  │  ├─ help
│  │     │  │  │  ├─ inspector.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ inspector.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ init_utils.py
│  │     │  │  ├─ inspection.py
│  │     │  │  ├─ literal.py
│  │     │  │  ├─ llvm_pass_timings.py
│  │     │  │  ├─ memoryutils.py
│  │     │  │  ├─ mergesort.py
│  │     │  │  ├─ numba_entry.py
│  │     │  │  ├─ numba_gdbinfo.py
│  │     │  │  ├─ numba_sysinfo.py
│  │     │  │  ├─ POST.py
│  │     │  │  ├─ quicksort.py
│  │     │  │  ├─ special.py
│  │     │  │  ├─ timsort.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ appdirs.cpython-313.pyc
│  │     │  │     ├─ cffiimpl.cpython-313.pyc
│  │     │  │     ├─ coverage_support.cpython-313.pyc
│  │     │  │     ├─ dump_style.cpython-313.pyc
│  │     │  │     ├─ findlib.cpython-313.pyc
│  │     │  │     ├─ firstlinefinder.cpython-313.pyc
│  │     │  │     ├─ gdb_hook.cpython-313.pyc
│  │     │  │     ├─ gdb_print_extension.cpython-313.pyc
│  │     │  │     ├─ init_utils.cpython-313.pyc
│  │     │  │     ├─ inspection.cpython-313.pyc
│  │     │  │     ├─ literal.cpython-313.pyc
│  │     │  │     ├─ llvm_pass_timings.cpython-313.pyc
│  │     │  │     ├─ memoryutils.cpython-313.pyc
│  │     │  │     ├─ mergesort.cpython-313.pyc
│  │     │  │     ├─ numba_entry.cpython-313.pyc
│  │     │  │     ├─ numba_gdbinfo.cpython-313.pyc
│  │     │  │     ├─ numba_sysinfo.cpython-313.pyc
│  │     │  │     ├─ POST.cpython-313.pyc
│  │     │  │     ├─ quicksort.cpython-313.pyc
│  │     │  │     ├─ special.cpython-313.pyc
│  │     │  │     ├─ timsort.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ mviewbuf.c
│  │     │  ├─ mviewbuf.cp313-win_amd64.pyd
│  │     │  ├─ np
│  │     │  │  ├─ arraymath.py
│  │     │  │  ├─ arrayobj.py
│  │     │  │  ├─ extensions.py
│  │     │  │  ├─ linalg.py
│  │     │  │  ├─ math
│  │     │  │  │  ├─ cmathimpl.py
│  │     │  │  │  ├─ mathimpl.py
│  │     │  │  │  ├─ numbers.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ cmathimpl.cpython-313.pyc
│  │     │  │  │     ├─ mathimpl.cpython-313.pyc
│  │     │  │  │     ├─ numbers.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ npdatetime.py
│  │     │  │  ├─ npdatetime_helpers.py
│  │     │  │  ├─ npyfuncs.py
│  │     │  │  ├─ npyimpl.py
│  │     │  │  ├─ numpy_support.py
│  │     │  │  ├─ polynomial
│  │     │  │  │  ├─ polynomial_core.py
│  │     │  │  │  ├─ polynomial_functions.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ polynomial_core.cpython-313.pyc
│  │     │  │  │     ├─ polynomial_functions.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ random
│  │     │  │  │  ├─ generator_core.py
│  │     │  │  │  ├─ generator_methods.py
│  │     │  │  │  ├─ random_methods.py
│  │     │  │  │  ├─ _constants.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ generator_core.cpython-313.pyc
│  │     │  │  │     ├─ generator_methods.cpython-313.pyc
│  │     │  │  │     ├─ random_methods.cpython-313.pyc
│  │     │  │  │     ├─ _constants.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ ufunc
│  │     │  │  │  ├─ array_exprs.py
│  │     │  │  │  ├─ decorators.py
│  │     │  │  │  ├─ dufunc.py
│  │     │  │  │  ├─ gufunc.py
│  │     │  │  │  ├─ omppool.cp313-win_amd64.pyd
│  │     │  │  │  ├─ parallel.py
│  │     │  │  │  ├─ sigparse.py
│  │     │  │  │  ├─ tbbpool.cp313-win_amd64.pyd
│  │     │  │  │  ├─ ufuncbuilder.py
│  │     │  │  │  ├─ ufunc_base.py
│  │     │  │  │  ├─ workqueue.cp313-win_amd64.pyd
│  │     │  │  │  ├─ wrappers.py
│  │     │  │  │  ├─ _internal.cp313-win_amd64.pyd
│  │     │  │  │  ├─ _num_threads.cp313-win_amd64.pyd
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ array_exprs.cpython-313.pyc
│  │     │  │  │     ├─ decorators.cpython-313.pyc
│  │     │  │  │     ├─ dufunc.cpython-313.pyc
│  │     │  │  │     ├─ gufunc.cpython-313.pyc
│  │     │  │  │     ├─ parallel.cpython-313.pyc
│  │     │  │  │     ├─ sigparse.cpython-313.pyc
│  │     │  │  │     ├─ ufuncbuilder.cpython-313.pyc
│  │     │  │  │     ├─ ufunc_base.cpython-313.pyc
│  │     │  │  │     ├─ wrappers.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ ufunc_db.py
│  │     │  │  ├─ unsafe
│  │     │  │  │  ├─ ndarray.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ ndarray.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ arraymath.cpython-313.pyc
│  │     │  │     ├─ arrayobj.cpython-313.pyc
│  │     │  │     ├─ extensions.cpython-313.pyc
│  │     │  │     ├─ linalg.cpython-313.pyc
│  │     │  │     ├─ npdatetime.cpython-313.pyc
│  │     │  │     ├─ npdatetime_helpers.cpython-313.pyc
│  │     │  │     ├─ npyfuncs.cpython-313.pyc
│  │     │  │     ├─ npyimpl.cpython-313.pyc
│  │     │  │     ├─ numpy_support.cpython-313.pyc
│  │     │  │     ├─ ufunc_db.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ parfors
│  │     │  │  ├─ array_analysis.py
│  │     │  │  ├─ parfor.py
│  │     │  │  ├─ parfor_lowering.py
│  │     │  │  ├─ parfor_lowering_utils.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ array_analysis.cpython-313.pyc
│  │     │  │     ├─ parfor.cpython-313.pyc
│  │     │  │     ├─ parfor_lowering.cpython-313.pyc
│  │     │  │     ├─ parfor_lowering_utils.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ pycc
│  │     │  │  ├─ cc.py
│  │     │  │  ├─ compiler.py
│  │     │  │  ├─ decorators.py
│  │     │  │  ├─ llvm_types.py
│  │     │  │  ├─ modulemixin.c
│  │     │  │  ├─ platform.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ cc.cpython-313.pyc
│  │     │  │     ├─ compiler.cpython-313.pyc
│  │     │  │     ├─ decorators.cpython-313.pyc
│  │     │  │     ├─ llvm_types.cpython-313.pyc
│  │     │  │     ├─ platform.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ pythoncapi_compat.h
│  │     │  ├─ runtests.py
│  │     │  ├─ scripts
│  │     │  │  ├─ generate_lower_listing.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ generate_lower_listing.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ stencils
│  │     │  │  ├─ stencil.py
│  │     │  │  ├─ stencilparfor.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ stencil.cpython-313.pyc
│  │     │  │     ├─ stencilparfor.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ testing
│  │     │  │  ├─ loader.py
│  │     │  │  ├─ main.py
│  │     │  │  ├─ notebook.py
│  │     │  │  ├─ _runtests.py
│  │     │  │  ├─ __init__.py
│  │     │  │  ├─ __main__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ loader.cpython-313.pyc
│  │     │  │     ├─ main.cpython-313.pyc
│  │     │  │     ├─ notebook.cpython-313.pyc
│  │     │  │     ├─ _runtests.cpython-313.pyc
│  │     │  │     ├─ __init__.cpython-313.pyc
│  │     │  │     └─ __main__.cpython-313.pyc
│  │     │  ├─ tests
│  │     │  │  ├─ annotation_usecases.py
│  │     │  │  ├─ cache_usecases.py
│  │     │  │  ├─ cffi_usecases.py
│  │     │  │  ├─ cfunc_cache_usecases.py
│  │     │  │  ├─ chained_assign_usecases.py
│  │     │  │  ├─ cloudpickle_main_class.py
│  │     │  │  ├─ compile_with_pycc.py
│  │     │  │  ├─ complex_usecases.py
│  │     │  │  ├─ ctypes_usecases.py
│  │     │  │  ├─ doctest_usecase.py
│  │     │  │  ├─ doc_examples
│  │     │  │  │  ├─ test_examples.py
│  │     │  │  │  ├─ test_interval_example.py
│  │     │  │  │  ├─ test_jitclass.py
│  │     │  │  │  ├─ test_literally_usage.py
│  │     │  │  │  ├─ test_literal_container_usage.py
│  │     │  │  │  ├─ test_llvm_pass_timings.py
│  │     │  │  │  ├─ test_numpy_generators.py
│  │     │  │  │  ├─ test_parallel_chunksize.py
│  │     │  │  │  ├─ test_rec_array.py
│  │     │  │  │  ├─ test_structref_usage.py
│  │     │  │  │  ├─ test_typed_dict_usage.py
│  │     │  │  │  ├─ test_typed_list_usage.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ test_examples.cpython-313.pyc
│  │     │  │  │     ├─ test_interval_example.cpython-313.pyc
│  │     │  │  │     ├─ test_jitclass.cpython-313.pyc
│  │     │  │  │     ├─ test_literally_usage.cpython-313.pyc
│  │     │  │  │     ├─ test_literal_container_usage.cpython-313.pyc
│  │     │  │  │     ├─ test_llvm_pass_timings.cpython-313.pyc
│  │     │  │  │     ├─ test_numpy_generators.cpython-313.pyc
│  │     │  │  │     ├─ test_parallel_chunksize.cpython-313.pyc
│  │     │  │  │     ├─ test_rec_array.cpython-313.pyc
│  │     │  │  │     ├─ test_structref_usage.cpython-313.pyc
│  │     │  │  │     ├─ test_typed_dict_usage.cpython-313.pyc
│  │     │  │  │     ├─ test_typed_list_usage.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ dummy_module.py
│  │     │  │  ├─ enum_usecases.py
│  │     │  │  ├─ errorhandling_usecases.py
│  │     │  │  ├─ error_usecases.py
│  │     │  │  ├─ gdb
│  │     │  │  │  ├─ test_array_arg.py
│  │     │  │  │  ├─ test_basic.py
│  │     │  │  │  ├─ test_break_on_symbol.py
│  │     │  │  │  ├─ test_break_on_symbol_version.py
│  │     │  │  │  ├─ test_conditional_breakpoint.py
│  │     │  │  │  ├─ test_pretty_print.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ test_array_arg.cpython-313.pyc
│  │     │  │  │     ├─ test_basic.cpython-313.pyc
│  │     │  │  │     ├─ test_break_on_symbol.cpython-313.pyc
│  │     │  │  │     ├─ test_break_on_symbol_version.cpython-313.pyc
│  │     │  │  │     ├─ test_conditional_breakpoint.cpython-313.pyc
│  │     │  │  │     ├─ test_pretty_print.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ gdb_support.py
│  │     │  │  ├─ inlining_usecases.py
│  │     │  │  ├─ matmul_usecase.py
│  │     │  │  ├─ npyufunc
│  │     │  │  │  ├─ cache_usecases.py
│  │     │  │  │  ├─ test_caching.py
│  │     │  │  │  ├─ test_dufunc.py
│  │     │  │  │  ├─ test_errors.py
│  │     │  │  │  ├─ test_gufunc.py
│  │     │  │  │  ├─ test_parallel_env_variable.py
│  │     │  │  │  ├─ test_parallel_low_work.py
│  │     │  │  │  ├─ test_parallel_ufunc_issues.py
│  │     │  │  │  ├─ test_ufunc.py
│  │     │  │  │  ├─ test_ufuncbuilding.py
│  │     │  │  │  ├─ test_update_inplace.py
│  │     │  │  │  ├─ test_vectorize_decor.py
│  │     │  │  │  ├─ ufuncbuilding_usecases.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ cache_usecases.cpython-313.pyc
│  │     │  │  │     ├─ test_caching.cpython-313.pyc
│  │     │  │  │     ├─ test_dufunc.cpython-313.pyc
│  │     │  │  │     ├─ test_errors.cpython-313.pyc
│  │     │  │  │     ├─ test_gufunc.cpython-313.pyc
│  │     │  │  │     ├─ test_parallel_env_variable.cpython-313.pyc
│  │     │  │  │     ├─ test_parallel_low_work.cpython-313.pyc
│  │     │  │  │     ├─ test_parallel_ufunc_issues.cpython-313.pyc
│  │     │  │  │     ├─ test_ufunc.cpython-313.pyc
│  │     │  │  │     ├─ test_ufuncbuilding.cpython-313.pyc
│  │     │  │  │     ├─ test_update_inplace.cpython-313.pyc
│  │     │  │  │     ├─ test_vectorize_decor.cpython-313.pyc
│  │     │  │  │     ├─ ufuncbuilding_usecases.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ orphaned_semaphore_usecase.py
│  │     │  │  ├─ overload_usecases.py
│  │     │  │  ├─ parfors_cache_usecases.py
│  │     │  │  ├─ parfor_iss9490_usecase.py
│  │     │  │  ├─ pdlike_usecase.py
│  │     │  │  ├─ recursion_usecases.py
│  │     │  │  ├─ serialize_usecases.py
│  │     │  │  ├─ support.py
│  │     │  │  ├─ test_alignment.py
│  │     │  │  ├─ test_analysis.py
│  │     │  │  ├─ test_annotations.py
│  │     │  │  ├─ test_api.py
│  │     │  │  ├─ test_array_analysis.py
│  │     │  │  ├─ test_array_attr.py
│  │     │  │  ├─ test_array_constants.py
│  │     │  │  ├─ test_array_exprs.py
│  │     │  │  ├─ test_array_iterators.py
│  │     │  │  ├─ test_array_manipulation.py
│  │     │  │  ├─ test_array_methods.py
│  │     │  │  ├─ test_array_reductions.py
│  │     │  │  ├─ test_array_return.py
│  │     │  │  ├─ test_asnumbatype.py
│  │     │  │  ├─ test_auto_constants.py
│  │     │  │  ├─ test_blackscholes.py
│  │     │  │  ├─ test_boundscheck.py
│  │     │  │  ├─ test_buffer_protocol.py
│  │     │  │  ├─ test_builtins.py
│  │     │  │  ├─ test_byteflow.py
│  │     │  │  ├─ test_caching.py
│  │     │  │  ├─ test_casting.py
│  │     │  │  ├─ test_cffi.py
│  │     │  │  ├─ test_cfunc.py
│  │     │  │  ├─ test_cgutils.py
│  │     │  │  ├─ test_chained_assign.py
│  │     │  │  ├─ test_chrome_trace.py
│  │     │  │  ├─ test_cli.py
│  │     │  │  ├─ test_closure.py
│  │     │  │  ├─ test_codegen.py
│  │     │  │  ├─ test_compiler_flags.py
│  │     │  │  ├─ test_compiler_lock.py
│  │     │  │  ├─ test_compile_cache.py
│  │     │  │  ├─ test_complex.py
│  │     │  │  ├─ test_comprehension.py
│  │     │  │  ├─ test_conditions_as_predicates.py
│  │     │  │  ├─ test_config.py
│  │     │  │  ├─ test_conversion.py
│  │     │  │  ├─ test_copy_propagate.py
│  │     │  │  ├─ test_ctypes.py
│  │     │  │  ├─ test_dataflow.py
│  │     │  │  ├─ test_datamodel.py
│  │     │  │  ├─ test_debug.py
│  │     │  │  ├─ test_debuginfo.py
│  │     │  │  ├─ test_deprecations.py
│  │     │  │  ├─ test_dictimpl.py
│  │     │  │  ├─ test_dictobject.py
│  │     │  │  ├─ test_dicts.py
│  │     │  │  ├─ test_dispatcher.py
│  │     │  │  ├─ test_doctest.py
│  │     │  │  ├─ test_dyn_array.py
│  │     │  │  ├─ test_dyn_func.py
│  │     │  │  ├─ test_entrypoints.py
│  │     │  │  ├─ test_enums.py
│  │     │  │  ├─ test_errorhandling.py
│  │     │  │  ├─ test_errormodels.py
│  │     │  │  ├─ test_event.py
│  │     │  │  ├─ test_exceptions.py
│  │     │  │  ├─ test_extended_arg.py
│  │     │  │  ├─ test_extending.py
│  │     │  │  ├─ test_extending_types.py
│  │     │  │  ├─ test_fancy_indexing.py
│  │     │  │  ├─ test_fastmath.py
│  │     │  │  ├─ test_findlib.py
│  │     │  │  ├─ test_firstlinefinder.py
│  │     │  │  ├─ test_flow_control.py
│  │     │  │  ├─ test_funcdesc.py
│  │     │  │  ├─ test_function_type.py
│  │     │  │  ├─ test_func_interface.py
│  │     │  │  ├─ test_func_lifetime.py
│  │     │  │  ├─ test_gdb_bindings.py
│  │     │  │  ├─ test_gdb_dwarf.py
│  │     │  │  ├─ test_generators.py
│  │     │  │  ├─ test_getitem_on_types.py
│  │     │  │  ├─ test_gil.py
│  │     │  │  ├─ test_globals.py
│  │     │  │  ├─ test_hashing.py
│  │     │  │  ├─ test_heapq.py
│  │     │  │  ├─ test_help.py
│  │     │  │  ├─ test_import.py
│  │     │  │  ├─ test_indexing.py
│  │     │  │  ├─ test_init_utils.py
│  │     │  │  ├─ test_inlining.py
│  │     │  │  ├─ test_interpreter.py
│  │     │  │  ├─ test_interproc.py
│  │     │  │  ├─ test_intwidth.py
│  │     │  │  ├─ test_ir.py
│  │     │  │  ├─ test_ir_inlining.py
│  │     │  │  ├─ test_ir_utils.py
│  │     │  │  ├─ test_itanium_mangler.py
│  │     │  │  ├─ test_iteration.py
│  │     │  │  ├─ test_jitclasses.py
│  │     │  │  ├─ test_jitmethod.py
│  │     │  │  ├─ test_jit_module.py
│  │     │  │  ├─ test_linalg.py
│  │     │  │  ├─ test_listimpl.py
│  │     │  │  ├─ test_listobject.py
│  │     │  │  ├─ test_lists.py
│  │     │  │  ├─ test_literal_dispatch.py
│  │     │  │  ├─ test_llvm_pass_timings.py
│  │     │  │  ├─ test_llvm_version_check.py
│  │     │  │  ├─ test_locals.py
│  │     │  │  ├─ test_looplifting.py
│  │     │  │  ├─ test_make_function_to_jit_function.py
│  │     │  │  ├─ test_mandelbrot.py
│  │     │  │  ├─ test_mangling.py
│  │     │  │  ├─ test_map_filter_reduce.py
│  │     │  │  ├─ test_mathlib.py
│  │     │  │  ├─ test_maxmin.py
│  │     │  │  ├─ test_misc_coverage_support.py
│  │     │  │  ├─ test_mixed_tuple_unroller.py
│  │     │  │  ├─ test_moved_modules.py
│  │     │  │  ├─ test_multi3.py
│  │     │  │  ├─ test_nan.py
│  │     │  │  ├─ test_ndarray_subclasses.py
│  │     │  │  ├─ test_nested_calls.py
│  │     │  │  ├─ test_new_type_system.py
│  │     │  │  ├─ test_npdatetime.py
│  │     │  │  ├─ test_np_functions.py
│  │     │  │  ├─ test_np_randomgen.py
│  │     │  │  ├─ test_nrt.py
│  │     │  │  ├─ test_nrt_refct.py
│  │     │  │  ├─ test_numberctor.py
│  │     │  │  ├─ test_numbers.py
│  │     │  │  ├─ test_numconv.py
│  │     │  │  ├─ test_numpyadapt.py
│  │     │  │  ├─ test_numpy_support.py
│  │     │  │  ├─ test_num_threads.py
│  │     │  │  ├─ test_objects.py
│  │     │  │  ├─ test_object_mode.py
│  │     │  │  ├─ test_obj_lifetime.py
│  │     │  │  ├─ test_operators.py
│  │     │  │  ├─ test_optimisation_pipelines.py
│  │     │  │  ├─ test_optional.py
│  │     │  │  ├─ test_overlap.py
│  │     │  │  ├─ test_parallel_backend.py
│  │     │  │  ├─ test_parfors.py
│  │     │  │  ├─ test_parfors_caching.py
│  │     │  │  ├─ test_parfors_passes.py
│  │     │  │  ├─ test_pipeline.py
│  │     │  │  ├─ test_polynomial.py
│  │     │  │  ├─ test_practical_lowering_issues.py
│  │     │  │  ├─ test_print.py
│  │     │  │  ├─ test_profiler.py
│  │     │  │  ├─ test_pycc.py
│  │     │  │  ├─ test_pythonapi.py
│  │     │  │  ├─ test_python_int.py
│  │     │  │  ├─ test_random.py
│  │     │  │  ├─ test_range.py
│  │     │  │  ├─ test_recarray_usecases.py
│  │     │  │  ├─ test_record_dtype.py
│  │     │  │  ├─ test_recursion.py
│  │     │  │  ├─ test_refop_pruning.py
│  │     │  │  ├─ test_remove_dead.py
│  │     │  │  ├─ test_repr.py
│  │     │  │  ├─ test_return_values.py
│  │     │  │  ├─ test_runtests.py
│  │     │  │  ├─ test_serialize.py
│  │     │  │  ├─ test_sets.py
│  │     │  │  ├─ test_slices.py
│  │     │  │  ├─ test_sort.py
│  │     │  │  ├─ test_ssa.py
│  │     │  │  ├─ test_stencils.py
│  │     │  │  ├─ test_storeslice.py
│  │     │  │  ├─ test_struct_ref.py
│  │     │  │  ├─ test_support.py
│  │     │  │  ├─ test_svml.py
│  │     │  │  ├─ test_sysinfo.py
│  │     │  │  ├─ test_sys_monitoring.py
│  │     │  │  ├─ test_sys_stdin_assignment.py
│  │     │  │  ├─ test_target_extension.py
│  │     │  │  ├─ test_target_overloadselector.py
│  │     │  │  ├─ test_threadsafety.py
│  │     │  │  ├─ test_tracing.py
│  │     │  │  ├─ test_try_except.py
│  │     │  │  ├─ test_tuples.py
│  │     │  │  ├─ test_typeconv.py
│  │     │  │  ├─ test_typedlist.py
│  │     │  │  ├─ test_typedobjectutils.py
│  │     │  │  ├─ test_typeguard.py
│  │     │  │  ├─ test_typeinfer.py
│  │     │  │  ├─ test_typenames.py
│  │     │  │  ├─ test_typeof.py
│  │     │  │  ├─ test_types.py
│  │     │  │  ├─ test_typingerror.py
│  │     │  │  ├─ test_ufuncs.py
│  │     │  │  ├─ test_unicode.py
│  │     │  │  ├─ test_unicode_array.py
│  │     │  │  ├─ test_unicode_names.py
│  │     │  │  ├─ test_unpack_sequence.py
│  │     │  │  ├─ test_unpickle_without_module.py
│  │     │  │  ├─ test_unsafe_intrinsics.py
│  │     │  │  ├─ test_usecases.py
│  │     │  │  ├─ test_vectorization.py
│  │     │  │  ├─ test_vectorization_type_inference.py
│  │     │  │  ├─ test_warnings.py
│  │     │  │  ├─ test_withlifting.py
│  │     │  │  ├─ threading_backend_usecases.py
│  │     │  │  ├─ typedlist_usecases.py
│  │     │  │  ├─ usecases.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ annotation_usecases.cpython-313.pyc
│  │     │  │     ├─ cache_usecases.cpython-313.pyc
│  │     │  │     ├─ cffi_usecases.cpython-313.pyc
│  │     │  │     ├─ cfunc_cache_usecases.cpython-313.pyc
│  │     │  │     ├─ chained_assign_usecases.cpython-313.pyc
│  │     │  │     ├─ cloudpickle_main_class.cpython-313.pyc
│  │     │  │     ├─ compile_with_pycc.cpython-313.pyc
│  │     │  │     ├─ complex_usecases.cpython-313.pyc
│  │     │  │     ├─ ctypes_usecases.cpython-313.pyc
│  │     │  │     ├─ doctest_usecase.cpython-313.pyc
│  │     │  │     ├─ dummy_module.cpython-313.pyc
│  │     │  │     ├─ enum_usecases.cpython-313.pyc
│  │     │  │     ├─ errorhandling_usecases.cpython-313.pyc
│  │     │  │     ├─ error_usecases.cpython-313.pyc
│  │     │  │     ├─ gdb_support.cpython-313.pyc
│  │     │  │     ├─ inlining_usecases.cpython-313.pyc
│  │     │  │     ├─ matmul_usecase.cpython-313.pyc
│  │     │  │     ├─ orphaned_semaphore_usecase.cpython-313.pyc
│  │     │  │     ├─ overload_usecases.cpython-313.pyc
│  │     │  │     ├─ parfors_cache_usecases.cpython-313.pyc
│  │     │  │     ├─ parfor_iss9490_usecase.cpython-313.pyc
│  │     │  │     ├─ pdlike_usecase.cpython-313.pyc
│  │     │  │     ├─ recursion_usecases.cpython-313.pyc
│  │     │  │     ├─ serialize_usecases.cpython-313.pyc
│  │     │  │     ├─ support.cpython-313.pyc
│  │     │  │     ├─ test_alignment.cpython-313.pyc
│  │     │  │     ├─ test_analysis.cpython-313.pyc
│  │     │  │     ├─ test_annotations.cpython-313.pyc
│  │     │  │     ├─ test_api.cpython-313.pyc
│  │     │  │     ├─ test_array_analysis.cpython-313.pyc
│  │     │  │     ├─ test_array_attr.cpython-313.pyc
│  │     │  │     ├─ test_array_constants.cpython-313.pyc
│  │     │  │     ├─ test_array_exprs.cpython-313.pyc
│  │     │  │     ├─ test_array_iterators.cpython-313.pyc
│  │     │  │     ├─ test_array_manipulation.cpython-313.pyc
│  │     │  │     ├─ test_array_methods.cpython-313.pyc
│  │     │  │     ├─ test_array_reductions.cpython-313.pyc
│  │     │  │     ├─ test_array_return.cpython-313.pyc
│  │     │  │     ├─ test_asnumbatype.cpython-313.pyc
│  │     │  │     ├─ test_auto_constants.cpython-313.pyc
│  │     │  │     ├─ test_blackscholes.cpython-313.pyc
│  │     │  │     ├─ test_boundscheck.cpython-313.pyc
│  │     │  │     ├─ test_buffer_protocol.cpython-313.pyc
│  │     │  │     ├─ test_builtins.cpython-313.pyc
│  │     │  │     ├─ test_byteflow.cpython-313.pyc
│  │     │  │     ├─ test_caching.cpython-313.pyc
│  │     │  │     ├─ test_casting.cpython-313.pyc
│  │     │  │     ├─ test_cffi.cpython-313.pyc
│  │     │  │     ├─ test_cfunc.cpython-313.pyc
│  │     │  │     ├─ test_cgutils.cpython-313.pyc
│  │     │  │     ├─ test_chained_assign.cpython-313.pyc
│  │     │  │     ├─ test_chrome_trace.cpython-313.pyc
│  │     │  │     ├─ test_cli.cpython-313.pyc
│  │     │  │     ├─ test_closure.cpython-313.pyc
│  │     │  │     ├─ test_codegen.cpython-313.pyc
│  │     │  │     ├─ test_compiler_flags.cpython-313.pyc
│  │     │  │     ├─ test_compiler_lock.cpython-313.pyc
│  │     │  │     ├─ test_compile_cache.cpython-313.pyc
│  │     │  │     ├─ test_complex.cpython-313.pyc
│  │     │  │     ├─ test_comprehension.cpython-313.pyc
│  │     │  │     ├─ test_conditions_as_predicates.cpython-313.pyc
│  │     │  │     ├─ test_config.cpython-313.pyc
│  │     │  │     ├─ test_conversion.cpython-313.pyc
│  │     │  │     ├─ test_copy_propagate.cpython-313.pyc
│  │     │  │     ├─ test_ctypes.cpython-313.pyc
│  │     │  │     ├─ test_dataflow.cpython-313.pyc
│  │     │  │     ├─ test_datamodel.cpython-313.pyc
│  │     │  │     ├─ test_debug.cpython-313.pyc
│  │     │  │     ├─ test_debuginfo.cpython-313.pyc
│  │     │  │     ├─ test_deprecations.cpython-313.pyc
│  │     │  │     ├─ test_dictimpl.cpython-313.pyc
│  │     │  │     ├─ test_dictobject.cpython-313.pyc
│  │     │  │     ├─ test_dicts.cpython-313.pyc
│  │     │  │     ├─ test_dispatcher.cpython-313.pyc
│  │     │  │     ├─ test_doctest.cpython-313.pyc
│  │     │  │     ├─ test_dyn_array.cpython-313.pyc
│  │     │  │     ├─ test_dyn_func.cpython-313.pyc
│  │     │  │     ├─ test_entrypoints.cpython-313.pyc
│  │     │  │     ├─ test_enums.cpython-313.pyc
│  │     │  │     ├─ test_errorhandling.cpython-313.pyc
│  │     │  │     ├─ test_errormodels.cpython-313.pyc
│  │     │  │     ├─ test_event.cpython-313.pyc
│  │     │  │     ├─ test_exceptions.cpython-313.pyc
│  │     │  │     ├─ test_extended_arg.cpython-313.pyc
│  │     │  │     ├─ test_extending.cpython-313.pyc
│  │     │  │     ├─ test_extending_types.cpython-313.pyc
│  │     │  │     ├─ test_fancy_indexing.cpython-313.pyc
│  │     │  │     ├─ test_fastmath.cpython-313.pyc
│  │     │  │     ├─ test_findlib.cpython-313.pyc
│  │     │  │     ├─ test_firstlinefinder.cpython-313.pyc
│  │     │  │     ├─ test_flow_control.cpython-313.pyc
│  │     │  │     ├─ test_funcdesc.cpython-313.pyc
│  │     │  │     ├─ test_function_type.cpython-313.pyc
│  │     │  │     ├─ test_func_interface.cpython-313.pyc
│  │     │  │     ├─ test_func_lifetime.cpython-313.pyc
│  │     │  │     ├─ test_gdb_bindings.cpython-313.pyc
│  │     │  │     ├─ test_gdb_dwarf.cpython-313.pyc
│  │     │  │     ├─ test_generators.cpython-313.pyc
│  │     │  │     ├─ test_getitem_on_types.cpython-313.pyc
│  │     │  │     ├─ test_gil.cpython-313.pyc
│  │     │  │     ├─ test_globals.cpython-313.pyc
│  │     │  │     ├─ test_hashing.cpython-313.pyc
│  │     │  │     ├─ test_heapq.cpython-313.pyc
│  │     │  │     ├─ test_help.cpython-313.pyc
│  │     │  │     ├─ test_import.cpython-313.pyc
│  │     │  │     ├─ test_indexing.cpython-313.pyc
│  │     │  │     ├─ test_init_utils.cpython-313.pyc
│  │     │  │     ├─ test_inlining.cpython-313.pyc
│  │     │  │     ├─ test_interpreter.cpython-313.pyc
│  │     │  │     ├─ test_interproc.cpython-313.pyc
│  │     │  │     ├─ test_intwidth.cpython-313.pyc
│  │     │  │     ├─ test_ir.cpython-313.pyc
│  │     │  │     ├─ test_ir_inlining.cpython-313.pyc
│  │     │  │     ├─ test_ir_utils.cpython-313.pyc
│  │     │  │     ├─ test_itanium_mangler.cpython-313.pyc
│  │     │  │     ├─ test_iteration.cpython-313.pyc
│  │     │  │     ├─ test_jitclasses.cpython-313.pyc
│  │     │  │     ├─ test_jitmethod.cpython-313.pyc
│  │     │  │     ├─ test_jit_module.cpython-313.pyc
│  │     │  │     ├─ test_linalg.cpython-313.pyc
│  │     │  │     ├─ test_listimpl.cpython-313.pyc
│  │     │  │     ├─ test_listobject.cpython-313.pyc
│  │     │  │     ├─ test_lists.cpython-313.pyc
│  │     │  │     ├─ test_literal_dispatch.cpython-313.pyc
│  │     │  │     ├─ test_llvm_pass_timings.cpython-313.pyc
│  │     │  │     ├─ test_llvm_version_check.cpython-313.pyc
│  │     │  │     ├─ test_locals.cpython-313.pyc
│  │     │  │     ├─ test_looplifting.cpython-313.pyc
│  │     │  │     ├─ test_make_function_to_jit_function.cpython-313.pyc
│  │     │  │     ├─ test_mandelbrot.cpython-313.pyc
│  │     │  │     ├─ test_mangling.cpython-313.pyc
│  │     │  │     ├─ test_map_filter_reduce.cpython-313.pyc
│  │     │  │     ├─ test_mathlib.cpython-313.pyc
│  │     │  │     ├─ test_maxmin.cpython-313.pyc
│  │     │  │     ├─ test_misc_coverage_support.cpython-313.pyc
│  │     │  │     ├─ test_mixed_tuple_unroller.cpython-313.pyc
│  │     │  │     ├─ test_moved_modules.cpython-313.pyc
│  │     │  │     ├─ test_multi3.cpython-313.pyc
│  │     │  │     ├─ test_nan.cpython-313.pyc
│  │     │  │     ├─ test_ndarray_subclasses.cpython-313.pyc
│  │     │  │     ├─ test_nested_calls.cpython-313.pyc
│  │     │  │     ├─ test_new_type_system.cpython-313.pyc
│  │     │  │     ├─ test_npdatetime.cpython-313.pyc
│  │     │  │     ├─ test_np_functions.cpython-313.pyc
│  │     │  │     ├─ test_np_randomgen.cpython-313.pyc
│  │     │  │     ├─ test_nrt.cpython-313.pyc
│  │     │  │     ├─ test_nrt_refct.cpython-313.pyc
│  │     │  │     ├─ test_numberctor.cpython-313.pyc
│  │     │  │     ├─ test_numbers.cpython-313.pyc
│  │     │  │     ├─ test_numconv.cpython-313.pyc
│  │     │  │     ├─ test_numpyadapt.cpython-313.pyc
│  │     │  │     ├─ test_numpy_support.cpython-313.pyc
│  │     │  │     ├─ test_num_threads.cpython-313.pyc
│  │     │  │     ├─ test_objects.cpython-313.pyc
│  │     │  │     ├─ test_object_mode.cpython-313.pyc
│  │     │  │     ├─ test_obj_lifetime.cpython-313.pyc
│  │     │  │     ├─ test_operators.cpython-313.pyc
│  │     │  │     ├─ test_optimisation_pipelines.cpython-313.pyc
│  │     │  │     ├─ test_optional.cpython-313.pyc
│  │     │  │     ├─ test_overlap.cpython-313.pyc
│  │     │  │     ├─ test_parallel_backend.cpython-313.pyc
│  │     │  │     ├─ test_parfors.cpython-313.pyc
│  │     │  │     ├─ test_parfors_caching.cpython-313.pyc
│  │     │  │     ├─ test_parfors_passes.cpython-313.pyc
│  │     │  │     ├─ test_pipeline.cpython-313.pyc
│  │     │  │     ├─ test_polynomial.cpython-313.pyc
│  │     │  │     ├─ test_practical_lowering_issues.cpython-313.pyc
│  │     │  │     ├─ test_print.cpython-313.pyc
│  │     │  │     ├─ test_profiler.cpython-313.pyc
│  │     │  │     ├─ test_pycc.cpython-313.pyc
│  │     │  │     ├─ test_pythonapi.cpython-313.pyc
│  │     │  │     ├─ test_python_int.cpython-313.pyc
│  │     │  │     ├─ test_random.cpython-313.pyc
│  │     │  │     ├─ test_range.cpython-313.pyc
│  │     │  │     ├─ test_recarray_usecases.cpython-313.pyc
│  │     │  │     ├─ test_record_dtype.cpython-313.pyc
│  │     │  │     ├─ test_recursion.cpython-313.pyc
│  │     │  │     ├─ test_refop_pruning.cpython-313.pyc
│  │     │  │     ├─ test_remove_dead.cpython-313.pyc
│  │     │  │     ├─ test_repr.cpython-313.pyc
│  │     │  │     ├─ test_return_values.cpython-313.pyc
│  │     │  │     ├─ test_runtests.cpython-313.pyc
│  │     │  │     ├─ test_serialize.cpython-313.pyc
│  │     │  │     ├─ test_sets.cpython-313.pyc
│  │     │  │     ├─ test_slices.cpython-313.pyc
│  │     │  │     ├─ test_sort.cpython-313.pyc
│  │     │  │     ├─ test_ssa.cpython-313.pyc
│  │     │  │     ├─ test_stencils.cpython-313.pyc
│  │     │  │     ├─ test_storeslice.cpython-313.pyc
│  │     │  │     ├─ test_struct_ref.cpython-313.pyc
│  │     │  │     ├─ test_support.cpython-313.pyc
│  │     │  │     ├─ test_svml.cpython-313.pyc
│  │     │  │     ├─ test_sysinfo.cpython-313.pyc
│  │     │  │     ├─ test_sys_monitoring.cpython-313.pyc
│  │     │  │     ├─ test_sys_stdin_assignment.cpython-313.pyc
│  │     │  │     ├─ test_target_extension.cpython-313.pyc
│  │     │  │     ├─ test_target_overloadselector.cpython-313.pyc
│  │     │  │     ├─ test_threadsafety.cpython-313.pyc
│  │     │  │     ├─ test_tracing.cpython-313.pyc
│  │     │  │     ├─ test_try_except.cpython-313.pyc
│  │     │  │     ├─ test_tuples.cpython-313.pyc
│  │     │  │     ├─ test_typeconv.cpython-313.pyc
│  │     │  │     ├─ test_typedlist.cpython-313.pyc
│  │     │  │     ├─ test_typedobjectutils.cpython-313.pyc
│  │     │  │     ├─ test_typeguard.cpython-313.pyc
│  │     │  │     ├─ test_typeinfer.cpython-313.pyc
│  │     │  │     ├─ test_typenames.cpython-313.pyc
│  │     │  │     ├─ test_typeof.cpython-313.pyc
│  │     │  │     ├─ test_types.cpython-313.pyc
│  │     │  │     ├─ test_typingerror.cpython-313.pyc
│  │     │  │     ├─ test_ufuncs.cpython-313.pyc
│  │     │  │     ├─ test_unicode.cpython-313.pyc
│  │     │  │     ├─ test_unicode_array.cpython-313.pyc
│  │     │  │     ├─ test_unicode_names.cpython-313.pyc
│  │     │  │     ├─ test_unpack_sequence.cpython-313.pyc
│  │     │  │     ├─ test_unpickle_without_module.cpython-313.pyc
│  │     │  │     ├─ test_unsafe_intrinsics.cpython-313.pyc
│  │     │  │     ├─ test_usecases.cpython-313.pyc
│  │     │  │     ├─ test_vectorization.cpython-313.pyc
│  │     │  │     ├─ test_vectorization_type_inference.cpython-313.pyc
│  │     │  │     ├─ test_warnings.cpython-313.pyc
│  │     │  │     ├─ test_withlifting.cpython-313.pyc
│  │     │  │     ├─ threading_backend_usecases.cpython-313.pyc
│  │     │  │     ├─ typedlist_usecases.cpython-313.pyc
│  │     │  │     ├─ usecases.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ typed
│  │     │  │  ├─ dictimpl.py
│  │     │  │  ├─ dictobject.py
│  │     │  │  ├─ listobject.py
│  │     │  │  ├─ py.typed
│  │     │  │  ├─ typeddict.py
│  │     │  │  ├─ typedlist.py
│  │     │  │  ├─ typedobjectutils.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ dictimpl.cpython-313.pyc
│  │     │  │     ├─ dictobject.cpython-313.pyc
│  │     │  │     ├─ listobject.cpython-313.pyc
│  │     │  │     ├─ typeddict.cpython-313.pyc
│  │     │  │     ├─ typedlist.cpython-313.pyc
│  │     │  │     ├─ typedobjectutils.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ types
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ _arraystruct.h
│  │     │  ├─ _devicearray.cp313-win_amd64.pyd
│  │     │  ├─ _devicearray.h
│  │     │  ├─ _dispatcher.cp313-win_amd64.pyd
│  │     │  ├─ _dynfunc.c
│  │     │  ├─ _dynfunc.cp313-win_amd64.pyd
│  │     │  ├─ _dynfuncmod.c
│  │     │  ├─ _hashtable.h
│  │     │  ├─ _helperlib.c
│  │     │  ├─ _helperlib.cp313-win_amd64.pyd
│  │     │  ├─ _helperlib.pyi
│  │     │  ├─ _helpermod.c
│  │     │  ├─ _lapack.c
│  │     │  ├─ _numba_common.h
│  │     │  ├─ _pymodule.h
│  │     │  ├─ _random.c
│  │     │  ├─ _typeof.h
│  │     │  ├─ _unicodetype_db.h
│  │     │  ├─ _version.py
│  │     │  ├─ __init__.py
│  │     │  ├─ __main__.py
│  │     │  └─ __pycache__
│  │     │     ├─ extending.cpython-313.pyc
│  │     │     ├─ runtests.cpython-313.pyc
│  │     │     ├─ _version.cpython-313.pyc
│  │     │     ├─ __init__.cpython-313.pyc
│  │     │     └─ __main__.cpython-313.pyc
│  │     ├─ numpy
│  │     │  ├─ char
│  │     │  │  ├─ __init__.py
│  │     │  │  ├─ __init__.pyi
│  │     │  │  └─ __pycache__
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ conftest.py
│  │     │  ├─ core
│  │     │  │  ├─ arrayprint.py
│  │     │  │  ├─ defchararray.py
│  │     │  │  ├─ einsumfunc.py
│  │     │  │  ├─ fromnumeric.py
│  │     │  │  ├─ function_base.py
│  │     │  │  ├─ getlimits.py
│  │     │  │  ├─ multiarray.py
│  │     │  │  ├─ numeric.py
│  │     │  │  ├─ numerictypes.py
│  │     │  │  ├─ overrides.py
│  │     │  │  ├─ overrides.pyi
│  │     │  │  ├─ records.py
│  │     │  │  ├─ shape_base.py
│  │     │  │  ├─ umath.py
│  │     │  │  ├─ _dtype.py
│  │     │  │  ├─ _dtype.pyi
│  │     │  │  ├─ _dtype_ctypes.py
│  │     │  │  ├─ _dtype_ctypes.pyi
│  │     │  │  ├─ _internal.py
│  │     │  │  ├─ _multiarray_umath.py
│  │     │  │  ├─ _utils.py
│  │     │  │  ├─ __init__.py
│  │     │  │  ├─ __init__.pyi
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ arrayprint.cpython-313.pyc
│  │     │  │     ├─ defchararray.cpython-313.pyc
│  │     │  │     ├─ einsumfunc.cpython-313.pyc
│  │     │  │     ├─ fromnumeric.cpython-313.pyc
│  │     │  │     ├─ function_base.cpython-313.pyc
│  │     │  │     ├─ getlimits.cpython-313.pyc
│  │     │  │     ├─ multiarray.cpython-313.pyc
│  │     │  │     ├─ numeric.cpython-313.pyc
│  │     │  │     ├─ numerictypes.cpython-313.pyc
│  │     │  │     ├─ overrides.cpython-313.pyc
│  │     │  │     ├─ records.cpython-313.pyc
│  │     │  │     ├─ shape_base.cpython-313.pyc
│  │     │  │     ├─ umath.cpython-313.pyc
│  │     │  │     ├─ _dtype.cpython-313.pyc
│  │     │  │     ├─ _dtype_ctypes.cpython-313.pyc
│  │     │  │     ├─ _internal.cpython-313.pyc
│  │     │  │     ├─ _multiarray_umath.cpython-313.pyc
│  │     │  │     ├─ _utils.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ ctypeslib
│  │     │  │  ├─ _ctypeslib.py
│  │     │  │  ├─ _ctypeslib.pyi
│  │     │  │  ├─ __init__.py
│  │     │  │  ├─ __init__.pyi
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ _ctypeslib.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ doc
│  │     │  │  ├─ ufuncs.py
│  │     │  │  └─ __pycache__
│  │     │  │     └─ ufuncs.cpython-313.pyc
│  │     │  ├─ dtypes.py
│  │     │  ├─ dtypes.pyi
│  │     │  ├─ exceptions.py
│  │     │  ├─ exceptions.pyi
│  │     │  ├─ f2py
│  │     │  │  ├─ auxfuncs.py
│  │     │  │  ├─ auxfuncs.pyi
│  │     │  │  ├─ capi_maps.py
│  │     │  │  ├─ capi_maps.pyi
│  │     │  │  ├─ cb_rules.py
│  │     │  │  ├─ cb_rules.pyi
│  │     │  │  ├─ cfuncs.py
│  │     │  │  ├─ cfuncs.pyi
│  │     │  │  ├─ common_rules.py
│  │     │  │  ├─ common_rules.pyi
│  │     │  │  ├─ crackfortran.py
│  │     │  │  ├─ crackfortran.pyi
│  │     │  │  ├─ diagnose.py
│  │     │  │  ├─ diagnose.pyi
│  │     │  │  ├─ f2py2e.py
│  │     │  │  ├─ f2py2e.pyi
│  │     │  │  ├─ f90mod_rules.py
│  │     │  │  ├─ f90mod_rules.pyi
│  │     │  │  ├─ func2subr.py
│  │     │  │  ├─ func2subr.pyi
│  │     │  │  ├─ rules.py
│  │     │  │  ├─ rules.pyi
│  │     │  │  ├─ setup.cfg
│  │     │  │  ├─ src
│  │     │  │  │  ├─ fortranobject.c
│  │     │  │  │  └─ fortranobject.h
│  │     │  │  ├─ symbolic.py
│  │     │  │  ├─ symbolic.pyi
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ src
│  │     │  │  │  │  ├─ abstract_interface
│  │     │  │  │  │  │  ├─ foo.f90
│  │     │  │  │  │  │  └─ gh18403_mod.f90
│  │     │  │  │  │  ├─ array_from_pyobj
│  │     │  │  │  │  │  └─ wrapmodule.c
│  │     │  │  │  │  ├─ assumed_shape
│  │     │  │  │  │  │  ├─ .f2py_f2cmap
│  │     │  │  │  │  │  ├─ foo_free.f90
│  │     │  │  │  │  │  ├─ foo_mod.f90
│  │     │  │  │  │  │  ├─ foo_use.f90
│  │     │  │  │  │  │  └─ precision.f90
│  │     │  │  │  │  ├─ block_docstring
│  │     │  │  │  │  │  └─ foo.f
│  │     │  │  │  │  ├─ callback
│  │     │  │  │  │  │  ├─ foo.f
│  │     │  │  │  │  │  ├─ gh17797.f90
│  │     │  │  │  │  │  ├─ gh18335.f90
│  │     │  │  │  │  │  ├─ gh25211.f
│  │     │  │  │  │  │  ├─ gh25211.pyf
│  │     │  │  │  │  │  └─ gh26681.f90
│  │     │  │  │  │  ├─ cli
│  │     │  │  │  │  │  ├─ gh_22819.pyf
│  │     │  │  │  │  │  ├─ hi77.f
│  │     │  │  │  │  │  └─ hiworld.f90
│  │     │  │  │  │  ├─ common
│  │     │  │  │  │  │  ├─ block.f
│  │     │  │  │  │  │  └─ gh19161.f90
│  │     │  │  │  │  ├─ crackfortran
│  │     │  │  │  │  │  ├─ accesstype.f90
│  │     │  │  │  │  │  ├─ common_with_division.f
│  │     │  │  │  │  │  ├─ data_common.f
│  │     │  │  │  │  │  ├─ data_multiplier.f
│  │     │  │  │  │  │  ├─ data_stmts.f90
│  │     │  │  │  │  │  ├─ data_with_comments.f
│  │     │  │  │  │  │  ├─ foo_deps.f90
│  │     │  │  │  │  │  ├─ gh15035.f
│  │     │  │  │  │  │  ├─ gh17859.f
│  │     │  │  │  │  │  ├─ gh22648.pyf
│  │     │  │  │  │  │  ├─ gh23533.f
│  │     │  │  │  │  │  ├─ gh23598.f90
│  │     │  │  │  │  │  ├─ gh23598Warn.f90
│  │     │  │  │  │  │  ├─ gh23879.f90
│  │     │  │  │  │  │  ├─ gh27697.f90
│  │     │  │  │  │  │  ├─ gh2848.f90
│  │     │  │  │  │  │  ├─ operators.f90
│  │     │  │  │  │  │  ├─ privatemod.f90
│  │     │  │  │  │  │  ├─ publicmod.f90
│  │     │  │  │  │  │  ├─ pubprivmod.f90
│  │     │  │  │  │  │  └─ unicode_comment.f90
│  │     │  │  │  │  ├─ f2cmap
│  │     │  │  │  │  │  ├─ .f2py_f2cmap
│  │     │  │  │  │  │  └─ isoFortranEnvMap.f90
│  │     │  │  │  │  ├─ isocintrin
│  │     │  │  │  │  │  └─ isoCtests.f90
│  │     │  │  │  │  ├─ kind
│  │     │  │  │  │  │  └─ foo.f90
│  │     │  │  │  │  ├─ mixed
│  │     │  │  │  │  │  ├─ foo.f
│  │     │  │  │  │  │  ├─ foo_fixed.f90
│  │     │  │  │  │  │  └─ foo_free.f90
│  │     │  │  │  │  ├─ modules
│  │     │  │  │  │  │  ├─ gh25337
│  │     │  │  │  │  │  │  ├─ data.f90
│  │     │  │  │  │  │  │  └─ use_data.f90
│  │     │  │  │  │  │  ├─ gh26920
│  │     │  │  │  │  │  │  ├─ two_mods_with_no_public_entities.f90
│  │     │  │  │  │  │  │  └─ two_mods_with_one_public_routine.f90
│  │     │  │  │  │  │  ├─ module_data_docstring.f90
│  │     │  │  │  │  │  └─ use_modules.f90
│  │     │  │  │  │  ├─ negative_bounds
│  │     │  │  │  │  │  └─ issue_20853.f90
│  │     │  │  │  │  ├─ parameter
│  │     │  │  │  │  │  ├─ constant_array.f90
│  │     │  │  │  │  │  ├─ constant_both.f90
│  │     │  │  │  │  │  ├─ constant_compound.f90
│  │     │  │  │  │  │  ├─ constant_integer.f90
│  │     │  │  │  │  │  ├─ constant_non_compound.f90
│  │     │  │  │  │  │  └─ constant_real.f90
│  │     │  │  │  │  ├─ quoted_character
│  │     │  │  │  │  │  └─ foo.f
│  │     │  │  │  │  ├─ regression
│  │     │  │  │  │  │  ├─ AB.inc
│  │     │  │  │  │  │  ├─ assignOnlyModule.f90
│  │     │  │  │  │  │  ├─ datonly.f90
│  │     │  │  │  │  │  ├─ f77comments.f
│  │     │  │  │  │  │  ├─ f77fixedform.f95
│  │     │  │  │  │  │  ├─ f90continuation.f90
│  │     │  │  │  │  │  ├─ incfile.f90
│  │     │  │  │  │  │  ├─ inout.f90
│  │     │  │  │  │  │  ├─ lower_f2py_fortran.f90
│  │     │  │  │  │  │  └─ mod_derived_types.f90
│  │     │  │  │  │  ├─ return_character
│  │     │  │  │  │  │  ├─ foo77.f
│  │     │  │  │  │  │  └─ foo90.f90
│  │     │  │  │  │  ├─ return_complex
│  │     │  │  │  │  │  ├─ foo77.f
│  │     │  │  │  │  │  └─ foo90.f90
│  │     │  │  │  │  ├─ return_integer
│  │     │  │  │  │  │  ├─ foo77.f
│  │     │  │  │  │  │  └─ foo90.f90
│  │     │  │  │  │  ├─ return_logical
│  │     │  │  │  │  │  ├─ foo77.f
│  │     │  │  │  │  │  └─ foo90.f90
│  │     │  │  │  │  ├─ return_real
│  │     │  │  │  │  │  ├─ foo77.f
│  │     │  │  │  │  │  └─ foo90.f90
│  │     │  │  │  │  ├─ routines
│  │     │  │  │  │  │  ├─ funcfortranname.f
│  │     │  │  │  │  │  ├─ funcfortranname.pyf
│  │     │  │  │  │  │  ├─ subrout.f
│  │     │  │  │  │  │  └─ subrout.pyf
│  │     │  │  │  │  ├─ size
│  │     │  │  │  │  │  └─ foo.f90
│  │     │  │  │  │  ├─ string
│  │     │  │  │  │  │  ├─ char.f90
│  │     │  │  │  │  │  ├─ fixed_string.f90
│  │     │  │  │  │  │  ├─ gh24008.f
│  │     │  │  │  │  │  ├─ gh24662.f90
│  │     │  │  │  │  │  ├─ gh25286.f90
│  │     │  │  │  │  │  ├─ gh25286.pyf
│  │     │  │  │  │  │  ├─ gh25286_bc.pyf
│  │     │  │  │  │  │  ├─ scalar_string.f90
│  │     │  │  │  │  │  └─ string.f
│  │     │  │  │  │  └─ value_attrspec
│  │     │  │  │  │     └─ gh21665.f90
│  │     │  │  │  ├─ test_abstract_interface.py
│  │     │  │  │  ├─ test_array_from_pyobj.py
│  │     │  │  │  ├─ test_assumed_shape.py
│  │     │  │  │  ├─ test_block_docstring.py
│  │     │  │  │  ├─ test_callback.py
│  │     │  │  │  ├─ test_character.py
│  │     │  │  │  ├─ test_common.py
│  │     │  │  │  ├─ test_crackfortran.py
│  │     │  │  │  ├─ test_data.py
│  │     │  │  │  ├─ test_docs.py
│  │     │  │  │  ├─ test_f2cmap.py
│  │     │  │  │  ├─ test_f2py2e.py
│  │     │  │  │  ├─ test_isoc.py
│  │     │  │  │  ├─ test_kind.py
│  │     │  │  │  ├─ test_mixed.py
│  │     │  │  │  ├─ test_modules.py
│  │     │  │  │  ├─ test_parameter.py
│  │     │  │  │  ├─ test_pyf_src.py
│  │     │  │  │  ├─ test_quoted_character.py
│  │     │  │  │  ├─ test_regression.py
│  │     │  │  │  ├─ test_return_character.py
│  │     │  │  │  ├─ test_return_complex.py
│  │     │  │  │  ├─ test_return_integer.py
│  │     │  │  │  ├─ test_return_logical.py
│  │     │  │  │  ├─ test_return_real.py
│  │     │  │  │  ├─ test_routines.py
│  │     │  │  │  ├─ test_semicolon_split.py
│  │     │  │  │  ├─ test_size.py
│  │     │  │  │  ├─ test_string.py
│  │     │  │  │  ├─ test_symbolic.py
│  │     │  │  │  ├─ test_value_attrspec.py
│  │     │  │  │  ├─ util.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ test_abstract_interface.cpython-313.pyc
│  │     │  │  │     ├─ test_array_from_pyobj.cpython-313.pyc
│  │     │  │  │     ├─ test_assumed_shape.cpython-313.pyc
│  │     │  │  │     ├─ test_block_docstring.cpython-313.pyc
│  │     │  │  │     ├─ test_callback.cpython-313.pyc
│  │     │  │  │     ├─ test_character.cpython-313.pyc
│  │     │  │  │     ├─ test_common.cpython-313.pyc
│  │     │  │  │     ├─ test_crackfortran.cpython-313.pyc
│  │     │  │  │     ├─ test_data.cpython-313.pyc
│  │     │  │  │     ├─ test_docs.cpython-313.pyc
│  │     │  │  │     ├─ test_f2cmap.cpython-313.pyc
│  │     │  │  │     ├─ test_f2py2e.cpython-313.pyc
│  │     │  │  │     ├─ test_isoc.cpython-313.pyc
│  │     │  │  │     ├─ test_kind.cpython-313.pyc
│  │     │  │  │     ├─ test_mixed.cpython-313.pyc
│  │     │  │  │     ├─ test_modules.cpython-313.pyc
│  │     │  │  │     ├─ test_parameter.cpython-313.pyc
│  │     │  │  │     ├─ test_pyf_src.cpython-313.pyc
│  │     │  │  │     ├─ test_quoted_character.cpython-313.pyc
│  │     │  │  │     ├─ test_regression.cpython-313.pyc
│  │     │  │  │     ├─ test_return_character.cpython-313.pyc
│  │     │  │  │     ├─ test_return_complex.cpython-313.pyc
│  │     │  │  │     ├─ test_return_integer.cpython-313.pyc
│  │     │  │  │     ├─ test_return_logical.cpython-313.pyc
│  │     │  │  │     ├─ test_return_real.cpython-313.pyc
│  │     │  │  │     ├─ test_routines.cpython-313.pyc
│  │     │  │  │     ├─ test_semicolon_split.cpython-313.pyc
│  │     │  │  │     ├─ test_size.cpython-313.pyc
│  │     │  │  │     ├─ test_string.cpython-313.pyc
│  │     │  │  │     ├─ test_symbolic.cpython-313.pyc
│  │     │  │  │     ├─ test_value_attrspec.cpython-313.pyc
│  │     │  │  │     ├─ util.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ use_rules.py
│  │     │  │  ├─ use_rules.pyi
│  │     │  │  ├─ _backends
│  │     │  │  │  ├─ meson.build.template
│  │     │  │  │  ├─ _backend.py
│  │     │  │  │  ├─ _backend.pyi
│  │     │  │  │  ├─ _meson.py
│  │     │  │  │  ├─ _meson.pyi
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  ├─ __init__.pyi
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ _backend.cpython-313.pyc
│  │     │  │  │     ├─ _meson.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _isocbind.py
│  │     │  │  ├─ _isocbind.pyi
│  │     │  │  ├─ _src_pyf.py
│  │     │  │  ├─ _src_pyf.pyi
│  │     │  │  ├─ __init__.py
│  │     │  │  ├─ __init__.pyi
│  │     │  │  ├─ __main__.py
│  │     │  │  ├─ __pycache__
│  │     │  │  │  ├─ auxfuncs.cpython-313.pyc
│  │     │  │  │  ├─ capi_maps.cpython-313.pyc
│  │     │  │  │  ├─ cb_rules.cpython-313.pyc
│  │     │  │  │  ├─ cfuncs.cpython-313.pyc
│  │     │  │  │  ├─ common_rules.cpython-313.pyc
│  │     │  │  │  ├─ crackfortran.cpython-313.pyc
│  │     │  │  │  ├─ diagnose.cpython-313.pyc
│  │     │  │  │  ├─ f2py2e.cpython-313.pyc
│  │     │  │  │  ├─ f90mod_rules.cpython-313.pyc
│  │     │  │  │  ├─ func2subr.cpython-313.pyc
│  │     │  │  │  ├─ rules.cpython-313.pyc
│  │     │  │  │  ├─ symbolic.cpython-313.pyc
│  │     │  │  │  ├─ use_rules.cpython-313.pyc
│  │     │  │  │  ├─ _isocbind.cpython-313.pyc
│  │     │  │  │  ├─ _src_pyf.cpython-313.pyc
│  │     │  │  │  ├─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ __main__.cpython-313.pyc
│  │     │  │  │  └─ __version__.cpython-313.pyc
│  │     │  │  ├─ __version__.py
│  │     │  │  └─ __version__.pyi
│  │     │  ├─ fft
│  │     │  │  ├─ helper.py
│  │     │  │  ├─ helper.pyi
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ test_helper.py
│  │     │  │  │  ├─ test_pocketfft.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ test_helper.cpython-313.pyc
│  │     │  │  │     ├─ test_pocketfft.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _helper.py
│  │     │  │  ├─ _helper.pyi
│  │     │  │  ├─ _pocketfft.py
│  │     │  │  ├─ _pocketfft.pyi
│  │     │  │  ├─ _pocketfft_umath.cp313-win_amd64.lib
│  │     │  │  ├─ _pocketfft_umath.cp313-win_amd64.pyd
│  │     │  │  ├─ __init__.py
│  │     │  │  ├─ __init__.pyi
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ helper.cpython-313.pyc
│  │     │  │     ├─ _helper.cpython-313.pyc
│  │     │  │     ├─ _pocketfft.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ lib
│  │     │  │  ├─ array_utils.py
│  │     │  │  ├─ array_utils.pyi
│  │     │  │  ├─ format.py
│  │     │  │  ├─ format.pyi
│  │     │  │  ├─ introspect.py
│  │     │  │  ├─ introspect.pyi
│  │     │  │  ├─ mixins.py
│  │     │  │  ├─ mixins.pyi
│  │     │  │  ├─ npyio.py
│  │     │  │  ├─ npyio.pyi
│  │     │  │  ├─ recfunctions.py
│  │     │  │  ├─ recfunctions.pyi
│  │     │  │  ├─ scimath.py
│  │     │  │  ├─ scimath.pyi
│  │     │  │  ├─ stride_tricks.py
│  │     │  │  ├─ stride_tricks.pyi
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ data
│  │     │  │  │  │  ├─ py2-np0-objarr.npy
│  │     │  │  │  │  ├─ py2-objarr.npy
│  │     │  │  │  │  ├─ py2-objarr.npz
│  │     │  │  │  │  ├─ py3-objarr.npy
│  │     │  │  │  │  ├─ py3-objarr.npz
│  │     │  │  │  │  ├─ python3.npy
│  │     │  │  │  │  └─ win64python2.npy
│  │     │  │  │  ├─ test_arraypad.py
│  │     │  │  │  ├─ test_arraysetops.py
│  │     │  │  │  ├─ test_arrayterator.py
│  │     │  │  │  ├─ test_array_utils.py
│  │     │  │  │  ├─ test_format.py
│  │     │  │  │  ├─ test_function_base.py
│  │     │  │  │  ├─ test_histograms.py
│  │     │  │  │  ├─ test_index_tricks.py
│  │     │  │  │  ├─ test_io.py
│  │     │  │  │  ├─ test_loadtxt.py
│  │     │  │  │  ├─ test_mixins.py
│  │     │  │  │  ├─ test_nanfunctions.py
│  │     │  │  │  ├─ test_packbits.py
│  │     │  │  │  ├─ test_polynomial.py
│  │     │  │  │  ├─ test_recfunctions.py
│  │     │  │  │  ├─ test_regression.py
│  │     │  │  │  ├─ test_shape_base.py
│  │     │  │  │  ├─ test_stride_tricks.py
│  │     │  │  │  ├─ test_twodim_base.py
│  │     │  │  │  ├─ test_type_check.py
│  │     │  │  │  ├─ test_ufunclike.py
│  │     │  │  │  ├─ test_utils.py
│  │     │  │  │  ├─ test__datasource.py
│  │     │  │  │  ├─ test__iotools.py
│  │     │  │  │  ├─ test__version.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ test_arraypad.cpython-313.pyc
│  │     │  │  │     ├─ test_arraysetops.cpython-313.pyc
│  │     │  │  │     ├─ test_arrayterator.cpython-313.pyc
│  │     │  │  │     ├─ test_array_utils.cpython-313.pyc
│  │     │  │  │     ├─ test_format.cpython-313.pyc
│  │     │  │  │     ├─ test_function_base.cpython-313.pyc
│  │     │  │  │     ├─ test_histograms.cpython-313.pyc
│  │     │  │  │     ├─ test_index_tricks.cpython-313.pyc
│  │     │  │  │     ├─ test_io.cpython-313.pyc
│  │     │  │  │     ├─ test_loadtxt.cpython-313.pyc
│  │     │  │  │     ├─ test_mixins.cpython-313.pyc
│  │     │  │  │     ├─ test_nanfunctions.cpython-313.pyc
│  │     │  │  │     ├─ test_packbits.cpython-313.pyc
│  │     │  │  │     ├─ test_polynomial.cpython-313.pyc
│  │     │  │  │     ├─ test_recfunctions.cpython-313.pyc
│  │     │  │  │     ├─ test_regression.cpython-313.pyc
│  │     │  │  │     ├─ test_shape_base.cpython-313.pyc
│  │     │  │  │     ├─ test_stride_tricks.cpython-313.pyc
│  │     │  │  │     ├─ test_twodim_base.cpython-313.pyc
│  │     │  │  │     ├─ test_type_check.cpython-313.pyc
│  │     │  │  │     ├─ test_ufunclike.cpython-313.pyc
│  │     │  │  │     ├─ test_utils.cpython-313.pyc
│  │     │  │  │     ├─ test__datasource.cpython-313.pyc
│  │     │  │  │     ├─ test__iotools.cpython-313.pyc
│  │     │  │  │     ├─ test__version.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ user_array.py
│  │     │  │  ├─ user_array.pyi
│  │     │  │  ├─ _arraypad_impl.py
│  │     │  │  ├─ _arraypad_impl.pyi
│  │     │  │  ├─ _arraysetops_impl.py
│  │     │  │  ├─ _arraysetops_impl.pyi
│  │     │  │  ├─ _arrayterator_impl.py
│  │     │  │  ├─ _arrayterator_impl.pyi
│  │     │  │  ├─ _array_utils_impl.py
│  │     │  │  ├─ _array_utils_impl.pyi
│  │     │  │  ├─ _datasource.py
│  │     │  │  ├─ _datasource.pyi
│  │     │  │  ├─ _format_impl.py
│  │     │  │  ├─ _format_impl.pyi
│  │     │  │  ├─ _function_base_impl.py
│  │     │  │  ├─ _function_base_impl.pyi
│  │     │  │  ├─ _histograms_impl.py
│  │     │  │  ├─ _histograms_impl.pyi
│  │     │  │  ├─ _index_tricks_impl.py
│  │     │  │  ├─ _index_tricks_impl.pyi
│  │     │  │  ├─ _iotools.py
│  │     │  │  ├─ _iotools.pyi
│  │     │  │  ├─ _nanfunctions_impl.py
│  │     │  │  ├─ _nanfunctions_impl.pyi
│  │     │  │  ├─ _npyio_impl.py
│  │     │  │  ├─ _npyio_impl.pyi
│  │     │  │  ├─ _polynomial_impl.py
│  │     │  │  ├─ _polynomial_impl.pyi
│  │     │  │  ├─ _scimath_impl.py
│  │     │  │  ├─ _scimath_impl.pyi
│  │     │  │  ├─ _shape_base_impl.py
│  │     │  │  ├─ _shape_base_impl.pyi
│  │     │  │  ├─ _stride_tricks_impl.py
│  │     │  │  ├─ _stride_tricks_impl.pyi
│  │     │  │  ├─ _twodim_base_impl.py
│  │     │  │  ├─ _twodim_base_impl.pyi
│  │     │  │  ├─ _type_check_impl.py
│  │     │  │  ├─ _type_check_impl.pyi
│  │     │  │  ├─ _ufunclike_impl.py
│  │     │  │  ├─ _ufunclike_impl.pyi
│  │     │  │  ├─ _user_array_impl.py
│  │     │  │  ├─ _user_array_impl.pyi
│  │     │  │  ├─ _utils_impl.py
│  │     │  │  ├─ _utils_impl.pyi
│  │     │  │  ├─ _version.py
│  │     │  │  ├─ _version.pyi
│  │     │  │  ├─ __init__.py
│  │     │  │  ├─ __init__.pyi
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ array_utils.cpython-313.pyc
│  │     │  │     ├─ format.cpython-313.pyc
│  │     │  │     ├─ introspect.cpython-313.pyc
│  │     │  │     ├─ mixins.cpython-313.pyc
│  │     │  │     ├─ npyio.cpython-313.pyc
│  │     │  │     ├─ recfunctions.cpython-313.pyc
│  │     │  │     ├─ scimath.cpython-313.pyc
│  │     │  │     ├─ stride_tricks.cpython-313.pyc
│  │     │  │     ├─ user_array.cpython-313.pyc
│  │     │  │     ├─ _arraypad_impl.cpython-313.pyc
│  │     │  │     ├─ _arraysetops_impl.cpython-313.pyc
│  │     │  │     ├─ _arrayterator_impl.cpython-313.pyc
│  │     │  │     ├─ _array_utils_impl.cpython-313.pyc
│  │     │  │     ├─ _datasource.cpython-313.pyc
│  │     │  │     ├─ _format_impl.cpython-313.pyc
│  │     │  │     ├─ _function_base_impl.cpython-313.pyc
│  │     │  │     ├─ _histograms_impl.cpython-313.pyc
│  │     │  │     ├─ _index_tricks_impl.cpython-313.pyc
│  │     │  │     ├─ _iotools.cpython-313.pyc
│  │     │  │     ├─ _nanfunctions_impl.cpython-313.pyc
│  │     │  │     ├─ _npyio_impl.cpython-313.pyc
│  │     │  │     ├─ _polynomial_impl.cpython-313.pyc
│  │     │  │     ├─ _scimath_impl.cpython-313.pyc
│  │     │  │     ├─ _shape_base_impl.cpython-313.pyc
│  │     │  │     ├─ _stride_tricks_impl.cpython-313.pyc
│  │     │  │     ├─ _twodim_base_impl.cpython-313.pyc
│  │     │  │     ├─ _type_check_impl.cpython-313.pyc
│  │     │  │     ├─ _ufunclike_impl.cpython-313.pyc
│  │     │  │     ├─ _user_array_impl.cpython-313.pyc
│  │     │  │     ├─ _utils_impl.cpython-313.pyc
│  │     │  │     ├─ _version.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ linalg
│  │     │  │  ├─ lapack_lite.cp313-win_amd64.lib
│  │     │  │  ├─ lapack_lite.cp313-win_amd64.pyd
│  │     │  │  ├─ lapack_lite.pyi
│  │     │  │  ├─ linalg.py
│  │     │  │  ├─ linalg.pyi
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ test_deprecations.py
│  │     │  │  │  ├─ test_linalg.py
│  │     │  │  │  ├─ test_regression.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ test_deprecations.cpython-313.pyc
│  │     │  │  │     ├─ test_linalg.cpython-313.pyc
│  │     │  │  │     ├─ test_regression.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _linalg.py
│  │     │  │  ├─ _linalg.pyi
│  │     │  │  ├─ _umath_linalg.cp313-win_amd64.lib
│  │     │  │  ├─ _umath_linalg.cp313-win_amd64.pyd
│  │     │  │  ├─ _umath_linalg.pyi
│  │     │  │  ├─ __init__.py
│  │     │  │  ├─ __init__.pyi
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ linalg.cpython-313.pyc
│  │     │  │     ├─ _linalg.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ ma
│  │     │  │  ├─ API_CHANGES.txt
│  │     │  │  ├─ core.py
│  │     │  │  ├─ core.pyi
│  │     │  │  ├─ extras.py
│  │     │  │  ├─ extras.pyi
│  │     │  │  ├─ LICENSE
│  │     │  │  ├─ mrecords.py
│  │     │  │  ├─ mrecords.pyi
│  │     │  │  ├─ README.rst
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ test_arrayobject.py
│  │     │  │  │  ├─ test_core.py
│  │     │  │  │  ├─ test_deprecations.py
│  │     │  │  │  ├─ test_extras.py
│  │     │  │  │  ├─ test_mrecords.py
│  │     │  │  │  ├─ test_old_ma.py
│  │     │  │  │  ├─ test_regression.py
│  │     │  │  │  ├─ test_subclassing.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ test_arrayobject.cpython-313.pyc
│  │     │  │  │     ├─ test_core.cpython-313.pyc
│  │     │  │  │     ├─ test_deprecations.cpython-313.pyc
│  │     │  │  │     ├─ test_extras.cpython-313.pyc
│  │     │  │  │     ├─ test_mrecords.cpython-313.pyc
│  │     │  │  │     ├─ test_old_ma.cpython-313.pyc
│  │     │  │  │     ├─ test_regression.cpython-313.pyc
│  │     │  │  │     ├─ test_subclassing.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ testutils.py
│  │     │  │  ├─ __init__.py
│  │     │  │  ├─ __init__.pyi
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ core.cpython-313.pyc
│  │     │  │     ├─ extras.cpython-313.pyc
│  │     │  │     ├─ mrecords.cpython-313.pyc
│  │     │  │     ├─ testutils.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ matlib.py
│  │     │  ├─ matlib.pyi
│  │     │  ├─ matrixlib
│  │     │  │  ├─ defmatrix.py
│  │     │  │  ├─ defmatrix.pyi
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ test_defmatrix.py
│  │     │  │  │  ├─ test_interaction.py
│  │     │  │  │  ├─ test_masked_matrix.py
│  │     │  │  │  ├─ test_matrix_linalg.py
│  │     │  │  │  ├─ test_multiarray.py
│  │     │  │  │  ├─ test_numeric.py
│  │     │  │  │  ├─ test_regression.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ test_defmatrix.cpython-313.pyc
│  │     │  │  │     ├─ test_interaction.cpython-313.pyc
│  │     │  │  │     ├─ test_masked_matrix.cpython-313.pyc
│  │     │  │  │     ├─ test_matrix_linalg.cpython-313.pyc
│  │     │  │  │     ├─ test_multiarray.cpython-313.pyc
│  │     │  │  │     ├─ test_numeric.cpython-313.pyc
│  │     │  │  │     ├─ test_regression.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ __init__.py
│  │     │  │  ├─ __init__.pyi
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ defmatrix.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ polynomial
│  │     │  │  ├─ chebyshev.py
│  │     │  │  ├─ chebyshev.pyi
│  │     │  │  ├─ hermite.py
│  │     │  │  ├─ hermite.pyi
│  │     │  │  ├─ hermite_e.py
│  │     │  │  ├─ hermite_e.pyi
│  │     │  │  ├─ laguerre.py
│  │     │  │  ├─ laguerre.pyi
│  │     │  │  ├─ legendre.py
│  │     │  │  ├─ legendre.pyi
│  │     │  │  ├─ polynomial.py
│  │     │  │  ├─ polynomial.pyi
│  │     │  │  ├─ polyutils.py
│  │     │  │  ├─ polyutils.pyi
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ test_chebyshev.py
│  │     │  │  │  ├─ test_classes.py
│  │     │  │  │  ├─ test_hermite.py
│  │     │  │  │  ├─ test_hermite_e.py
│  │     │  │  │  ├─ test_laguerre.py
│  │     │  │  │  ├─ test_legendre.py
│  │     │  │  │  ├─ test_polynomial.py
│  │     │  │  │  ├─ test_polyutils.py
│  │     │  │  │  ├─ test_printing.py
│  │     │  │  │  ├─ test_symbol.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ test_chebyshev.cpython-313.pyc
│  │     │  │  │     ├─ test_classes.cpython-313.pyc
│  │     │  │  │     ├─ test_hermite.cpython-313.pyc
│  │     │  │  │     ├─ test_hermite_e.cpython-313.pyc
│  │     │  │  │     ├─ test_laguerre.cpython-313.pyc
│  │     │  │  │     ├─ test_legendre.cpython-313.pyc
│  │     │  │  │     ├─ test_polynomial.cpython-313.pyc
│  │     │  │  │     ├─ test_polyutils.cpython-313.pyc
│  │     │  │  │     ├─ test_printing.cpython-313.pyc
│  │     │  │  │     ├─ test_symbol.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _polybase.py
│  │     │  │  ├─ _polybase.pyi
│  │     │  │  ├─ _polytypes.pyi
│  │     │  │  ├─ __init__.py
│  │     │  │  ├─ __init__.pyi
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ chebyshev.cpython-313.pyc
│  │     │  │     ├─ hermite.cpython-313.pyc
│  │     │  │     ├─ hermite_e.cpython-313.pyc
│  │     │  │     ├─ laguerre.cpython-313.pyc
│  │     │  │     ├─ legendre.cpython-313.pyc
│  │     │  │     ├─ polynomial.cpython-313.pyc
│  │     │  │     ├─ polyutils.cpython-313.pyc
│  │     │  │     ├─ _polybase.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ py.typed
│  │     │  ├─ random
│  │     │  │  ├─ bit_generator.cp313-win_amd64.lib
│  │     │  │  ├─ bit_generator.cp313-win_amd64.pyd
│  │     │  │  ├─ bit_generator.pxd
│  │     │  │  ├─ bit_generator.pyi
│  │     │  │  ├─ lib
│  │     │  │  │  └─ npyrandom.lib
│  │     │  │  ├─ LICENSE.md
│  │     │  │  ├─ mtrand.cp313-win_amd64.lib
│  │     │  │  ├─ mtrand.cp313-win_amd64.pyd
│  │     │  │  ├─ mtrand.pyi
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ data
│  │     │  │  │  │  ├─ generator_pcg64_np121.pkl.gz
│  │     │  │  │  │  ├─ generator_pcg64_np126.pkl.gz
│  │     │  │  │  │  ├─ mt19937-testset-1.csv
│  │     │  │  │  │  ├─ mt19937-testset-2.csv
│  │     │  │  │  │  ├─ pcg64-testset-1.csv
│  │     │  │  │  │  ├─ pcg64-testset-2.csv
│  │     │  │  │  │  ├─ pcg64dxsm-testset-1.csv
│  │     │  │  │  │  ├─ pcg64dxsm-testset-2.csv
│  │     │  │  │  │  ├─ philox-testset-1.csv
│  │     │  │  │  │  ├─ philox-testset-2.csv
│  │     │  │  │  │  ├─ sfc64-testset-1.csv
│  │     │  │  │  │  ├─ sfc64-testset-2.csv
│  │     │  │  │  │  ├─ sfc64_np126.pkl.gz
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ test_direct.py
│  │     │  │  │  ├─ test_extending.py
│  │     │  │  │  ├─ test_generator_mt19937.py
│  │     │  │  │  ├─ test_generator_mt19937_regressions.py
│  │     │  │  │  ├─ test_random.py
│  │     │  │  │  ├─ test_randomstate.py
│  │     │  │  │  ├─ test_randomstate_regression.py
│  │     │  │  │  ├─ test_regression.py
│  │     │  │  │  ├─ test_seed_sequence.py
│  │     │  │  │  ├─ test_smoke.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ test_direct.cpython-313.pyc
│  │     │  │  │     ├─ test_extending.cpython-313.pyc
│  │     │  │  │     ├─ test_generator_mt19937.cpython-313.pyc
│  │     │  │  │     ├─ test_generator_mt19937_regressions.cpython-313.pyc
│  │     │  │  │     ├─ test_random.cpython-313.pyc
│  │     │  │  │     ├─ test_randomstate.cpython-313.pyc
│  │     │  │  │     ├─ test_randomstate_regression.cpython-313.pyc
│  │     │  │  │     ├─ test_regression.cpython-313.pyc
│  │     │  │  │     ├─ test_seed_sequence.cpython-313.pyc
│  │     │  │  │     ├─ test_smoke.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _bounded_integers.cp313-win_amd64.lib
│  │     │  │  ├─ _bounded_integers.cp313-win_amd64.pyd
│  │     │  │  ├─ _bounded_integers.pxd
│  │     │  │  ├─ _bounded_integers.pyi
│  │     │  │  ├─ _common.cp313-win_amd64.lib
│  │     │  │  ├─ _common.cp313-win_amd64.pyd
│  │     │  │  ├─ _common.pxd
│  │     │  │  ├─ _common.pyi
│  │     │  │  ├─ _examples
│  │     │  │  │  ├─ cffi
│  │     │  │  │  │  ├─ extending.py
│  │     │  │  │  │  ├─ parse.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ extending.cpython-313.pyc
│  │     │  │  │  │     └─ parse.cpython-313.pyc
│  │     │  │  │  ├─ cython
│  │     │  │  │  │  ├─ extending.pyx
│  │     │  │  │  │  └─ meson.build
│  │     │  │  │  └─ numba
│  │     │  │  │     ├─ extending.py
│  │     │  │  │     └─ __pycache__
│  │     │  │  │        └─ extending.cpython-313.pyc
│  │     │  │  ├─ _generator.cp313-win_amd64.lib
│  │     │  │  ├─ _generator.cp313-win_amd64.pyd
│  │     │  │  ├─ _generator.pyi
│  │     │  │  ├─ _mt19937.cp313-win_amd64.lib
│  │     │  │  ├─ _mt19937.cp313-win_amd64.pyd
│  │     │  │  ├─ _mt19937.pyi
│  │     │  │  ├─ _pcg64.cp313-win_amd64.lib
│  │     │  │  ├─ _pcg64.cp313-win_amd64.pyd
│  │     │  │  ├─ _pcg64.pyi
│  │     │  │  ├─ _philox.cp313-win_amd64.lib
│  │     │  │  ├─ _philox.cp313-win_amd64.pyd
│  │     │  │  ├─ _philox.pyi
│  │     │  │  ├─ _pickle.py
│  │     │  │  ├─ _pickle.pyi
│  │     │  │  ├─ _sfc64.cp313-win_amd64.lib
│  │     │  │  ├─ _sfc64.cp313-win_amd64.pyd
│  │     │  │  ├─ _sfc64.pyi
│  │     │  │  ├─ __init__.pxd
│  │     │  │  ├─ __init__.py
│  │     │  │  ├─ __init__.pyi
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ _pickle.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ rec
│  │     │  │  ├─ __init__.py
│  │     │  │  ├─ __init__.pyi
│  │     │  │  └─ __pycache__
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ strings
│  │     │  │  ├─ __init__.py
│  │     │  │  ├─ __init__.pyi
│  │     │  │  └─ __pycache__
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ testing
│  │     │  │  ├─ overrides.py
│  │     │  │  ├─ overrides.pyi
│  │     │  │  ├─ print_coercion_tables.py
│  │     │  │  ├─ print_coercion_tables.pyi
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ test_utils.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ test_utils.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _private
│  │     │  │  │  ├─ extbuild.py
│  │     │  │  │  ├─ extbuild.pyi
│  │     │  │  │  ├─ utils.py
│  │     │  │  │  ├─ utils.pyi
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  ├─ __init__.pyi
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ extbuild.cpython-313.pyc
│  │     │  │  │     ├─ utils.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ __init__.py
│  │     │  │  ├─ __init__.pyi
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ overrides.cpython-313.pyc
│  │     │  │     ├─ print_coercion_tables.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ tests
│  │     │  │  ├─ test_configtool.py
│  │     │  │  ├─ test_ctypeslib.py
│  │     │  │  ├─ test_lazyloading.py
│  │     │  │  ├─ test_matlib.py
│  │     │  │  ├─ test_numpy_config.py
│  │     │  │  ├─ test_numpy_version.py
│  │     │  │  ├─ test_public_api.py
│  │     │  │  ├─ test_reloading.py
│  │     │  │  ├─ test_scripts.py
│  │     │  │  ├─ test_warnings.py
│  │     │  │  ├─ test__all__.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ test_configtool.cpython-313.pyc
│  │     │  │     ├─ test_ctypeslib.cpython-313.pyc
│  │     │  │     ├─ test_lazyloading.cpython-313.pyc
│  │     │  │     ├─ test_matlib.cpython-313.pyc
│  │     │  │     ├─ test_numpy_config.cpython-313.pyc
│  │     │  │     ├─ test_numpy_version.cpython-313.pyc
│  │     │  │     ├─ test_public_api.cpython-313.pyc
│  │     │  │     ├─ test_reloading.cpython-313.pyc
│  │     │  │     ├─ test_scripts.cpython-313.pyc
│  │     │  │     ├─ test_warnings.cpython-313.pyc
│  │     │  │     ├─ test__all__.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ typing
│  │     │  │  ├─ mypy_plugin.py
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ data
│  │     │  │  │  │  ├─ fail
│  │     │  │  │  │  │  ├─ arithmetic.pyi
│  │     │  │  │  │  │  ├─ arrayprint.pyi
│  │     │  │  │  │  │  ├─ arrayterator.pyi
│  │     │  │  │  │  │  ├─ array_constructors.pyi
│  │     │  │  │  │  │  ├─ array_like.pyi
│  │     │  │  │  │  │  ├─ array_pad.pyi
│  │     │  │  │  │  │  ├─ bitwise_ops.pyi
│  │     │  │  │  │  │  ├─ char.pyi
│  │     │  │  │  │  │  ├─ chararray.pyi
│  │     │  │  │  │  │  ├─ comparisons.pyi
│  │     │  │  │  │  │  ├─ constants.pyi
│  │     │  │  │  │  │  ├─ datasource.pyi
│  │     │  │  │  │  │  ├─ dtype.pyi
│  │     │  │  │  │  │  ├─ einsumfunc.pyi
│  │     │  │  │  │  │  ├─ flatiter.pyi
│  │     │  │  │  │  │  ├─ fromnumeric.pyi
│  │     │  │  │  │  │  ├─ histograms.pyi
│  │     │  │  │  │  │  ├─ index_tricks.pyi
│  │     │  │  │  │  │  ├─ lib_function_base.pyi
│  │     │  │  │  │  │  ├─ lib_polynomial.pyi
│  │     │  │  │  │  │  ├─ lib_utils.pyi
│  │     │  │  │  │  │  ├─ lib_version.pyi
│  │     │  │  │  │  │  ├─ linalg.pyi
│  │     │  │  │  │  │  ├─ ma.pyi
│  │     │  │  │  │  │  ├─ memmap.pyi
│  │     │  │  │  │  │  ├─ modules.pyi
│  │     │  │  │  │  │  ├─ multiarray.pyi
│  │     │  │  │  │  │  ├─ ndarray.pyi
│  │     │  │  │  │  │  ├─ ndarray_misc.pyi
│  │     │  │  │  │  │  ├─ nditer.pyi
│  │     │  │  │  │  │  ├─ nested_sequence.pyi
│  │     │  │  │  │  │  ├─ npyio.pyi
│  │     │  │  │  │  │  ├─ numerictypes.pyi
│  │     │  │  │  │  │  ├─ random.pyi
│  │     │  │  │  │  │  ├─ rec.pyi
│  │     │  │  │  │  │  ├─ scalars.pyi
│  │     │  │  │  │  │  ├─ shape.pyi
│  │     │  │  │  │  │  ├─ shape_base.pyi
│  │     │  │  │  │  │  ├─ stride_tricks.pyi
│  │     │  │  │  │  │  ├─ strings.pyi
│  │     │  │  │  │  │  ├─ testing.pyi
│  │     │  │  │  │  │  ├─ twodim_base.pyi
│  │     │  │  │  │  │  ├─ type_check.pyi
│  │     │  │  │  │  │  ├─ ufunclike.pyi
│  │     │  │  │  │  │  ├─ ufuncs.pyi
│  │     │  │  │  │  │  ├─ ufunc_config.pyi
│  │     │  │  │  │  │  └─ warnings_and_errors.pyi
│  │     │  │  │  │  ├─ misc
│  │     │  │  │  │  │  └─ extended_precision.pyi
│  │     │  │  │  │  ├─ mypy.ini
│  │     │  │  │  │  ├─ pass
│  │     │  │  │  │  │  ├─ arithmetic.py
│  │     │  │  │  │  │  ├─ arrayprint.py
│  │     │  │  │  │  │  ├─ arrayterator.py
│  │     │  │  │  │  │  ├─ array_constructors.py
│  │     │  │  │  │  │  ├─ array_like.py
│  │     │  │  │  │  │  ├─ bitwise_ops.py
│  │     │  │  │  │  │  ├─ comparisons.py
│  │     │  │  │  │  │  ├─ dtype.py
│  │     │  │  │  │  │  ├─ einsumfunc.py
│  │     │  │  │  │  │  ├─ flatiter.py
│  │     │  │  │  │  │  ├─ fromnumeric.py
│  │     │  │  │  │  │  ├─ index_tricks.py
│  │     │  │  │  │  │  ├─ lib_user_array.py
│  │     │  │  │  │  │  ├─ lib_utils.py
│  │     │  │  │  │  │  ├─ lib_version.py
│  │     │  │  │  │  │  ├─ literal.py
│  │     │  │  │  │  │  ├─ ma.py
│  │     │  │  │  │  │  ├─ mod.py
│  │     │  │  │  │  │  ├─ modules.py
│  │     │  │  │  │  │  ├─ multiarray.py
│  │     │  │  │  │  │  ├─ ndarray_conversion.py
│  │     │  │  │  │  │  ├─ ndarray_misc.py
│  │     │  │  │  │  │  ├─ ndarray_shape_manipulation.py
│  │     │  │  │  │  │  ├─ nditer.py
│  │     │  │  │  │  │  ├─ numeric.py
│  │     │  │  │  │  │  ├─ numerictypes.py
│  │     │  │  │  │  │  ├─ random.py
│  │     │  │  │  │  │  ├─ recfunctions.py
│  │     │  │  │  │  │  ├─ scalars.py
│  │     │  │  │  │  │  ├─ shape.py
│  │     │  │  │  │  │  ├─ simple.py
│  │     │  │  │  │  │  ├─ simple_py3.py
│  │     │  │  │  │  │  ├─ ufunclike.py
│  │     │  │  │  │  │  ├─ ufuncs.py
│  │     │  │  │  │  │  ├─ ufunc_config.py
│  │     │  │  │  │  │  ├─ warnings_and_errors.py
│  │     │  │  │  │  │  └─ __pycache__
│  │     │  │  │  │  │     ├─ arithmetic.cpython-313.pyc
│  │     │  │  │  │  │     ├─ arrayprint.cpython-313.pyc
│  │     │  │  │  │  │     ├─ arrayterator.cpython-313.pyc
│  │     │  │  │  │  │     ├─ array_constructors.cpython-313.pyc
│  │     │  │  │  │  │     ├─ array_like.cpython-313.pyc
│  │     │  │  │  │  │     ├─ bitwise_ops.cpython-313.pyc
│  │     │  │  │  │  │     ├─ comparisons.cpython-313.pyc
│  │     │  │  │  │  │     ├─ dtype.cpython-313.pyc
│  │     │  │  │  │  │     ├─ einsumfunc.cpython-313.pyc
│  │     │  │  │  │  │     ├─ flatiter.cpython-313.pyc
│  │     │  │  │  │  │     ├─ fromnumeric.cpython-313.pyc
│  │     │  │  │  │  │     ├─ index_tricks.cpython-313.pyc
│  │     │  │  │  │  │     ├─ lib_user_array.cpython-313.pyc
│  │     │  │  │  │  │     ├─ lib_utils.cpython-313.pyc
│  │     │  │  │  │  │     ├─ lib_version.cpython-313.pyc
│  │     │  │  │  │  │     ├─ literal.cpython-313.pyc
│  │     │  │  │  │  │     ├─ ma.cpython-313.pyc
│  │     │  │  │  │  │     ├─ mod.cpython-313.pyc
│  │     │  │  │  │  │     ├─ modules.cpython-313.pyc
│  │     │  │  │  │  │     ├─ multiarray.cpython-313.pyc
│  │     │  │  │  │  │     ├─ ndarray_conversion.cpython-313.pyc
│  │     │  │  │  │  │     ├─ ndarray_misc.cpython-313.pyc
│  │     │  │  │  │  │     ├─ ndarray_shape_manipulation.cpython-313.pyc
│  │     │  │  │  │  │     ├─ nditer.cpython-313.pyc
│  │     │  │  │  │  │     ├─ numeric.cpython-313.pyc
│  │     │  │  │  │  │     ├─ numerictypes.cpython-313.pyc
│  │     │  │  │  │  │     ├─ random.cpython-313.pyc
│  │     │  │  │  │  │     ├─ recfunctions.cpython-313.pyc
│  │     │  │  │  │  │     ├─ scalars.cpython-313.pyc
│  │     │  │  │  │  │     ├─ shape.cpython-313.pyc
│  │     │  │  │  │  │     ├─ simple.cpython-313.pyc
│  │     │  │  │  │  │     ├─ simple_py3.cpython-313.pyc
│  │     │  │  │  │  │     ├─ ufunclike.cpython-313.pyc
│  │     │  │  │  │  │     ├─ ufuncs.cpython-313.pyc
│  │     │  │  │  │  │     ├─ ufunc_config.cpython-313.pyc
│  │     │  │  │  │  │     └─ warnings_and_errors.cpython-313.pyc
│  │     │  │  │  │  └─ reveal
│  │     │  │  │  │     ├─ arithmetic.pyi
│  │     │  │  │  │     ├─ arraypad.pyi
│  │     │  │  │  │     ├─ arrayprint.pyi
│  │     │  │  │  │     ├─ arraysetops.pyi
│  │     │  │  │  │     ├─ arrayterator.pyi
│  │     │  │  │  │     ├─ array_api_info.pyi
│  │     │  │  │  │     ├─ array_constructors.pyi
│  │     │  │  │  │     ├─ bitwise_ops.pyi
│  │     │  │  │  │     ├─ char.pyi
│  │     │  │  │  │     ├─ chararray.pyi
│  │     │  │  │  │     ├─ comparisons.pyi
│  │     │  │  │  │     ├─ constants.pyi
│  │     │  │  │  │     ├─ ctypeslib.pyi
│  │     │  │  │  │     ├─ datasource.pyi
│  │     │  │  │  │     ├─ dtype.pyi
│  │     │  │  │  │     ├─ einsumfunc.pyi
│  │     │  │  │  │     ├─ emath.pyi
│  │     │  │  │  │     ├─ fft.pyi
│  │     │  │  │  │     ├─ flatiter.pyi
│  │     │  │  │  │     ├─ fromnumeric.pyi
│  │     │  │  │  │     ├─ getlimits.pyi
│  │     │  │  │  │     ├─ histograms.pyi
│  │     │  │  │  │     ├─ index_tricks.pyi
│  │     │  │  │  │     ├─ lib_function_base.pyi
│  │     │  │  │  │     ├─ lib_polynomial.pyi
│  │     │  │  │  │     ├─ lib_utils.pyi
│  │     │  │  │  │     ├─ lib_version.pyi
│  │     │  │  │  │     ├─ linalg.pyi
│  │     │  │  │  │     ├─ ma.pyi
│  │     │  │  │  │     ├─ matrix.pyi
│  │     │  │  │  │     ├─ memmap.pyi
│  │     │  │  │  │     ├─ mod.pyi
│  │     │  │  │  │     ├─ modules.pyi
│  │     │  │  │  │     ├─ multiarray.pyi
│  │     │  │  │  │     ├─ nbit_base_example.pyi
│  │     │  │  │  │     ├─ ndarray_assignability.pyi
│  │     │  │  │  │     ├─ ndarray_conversion.pyi
│  │     │  │  │  │     ├─ ndarray_misc.pyi
│  │     │  │  │  │     ├─ ndarray_shape_manipulation.pyi
│  │     │  │  │  │     ├─ nditer.pyi
│  │     │  │  │  │     ├─ nested_sequence.pyi
│  │     │  │  │  │     ├─ npyio.pyi
│  │     │  │  │  │     ├─ numeric.pyi
│  │     │  │  │  │     ├─ numerictypes.pyi
│  │     │  │  │  │     ├─ polynomial_polybase.pyi
│  │     │  │  │  │     ├─ polynomial_polyutils.pyi
│  │     │  │  │  │     ├─ polynomial_series.pyi
│  │     │  │  │  │     ├─ random.pyi
│  │     │  │  │  │     ├─ rec.pyi
│  │     │  │  │  │     ├─ scalars.pyi
│  │     │  │  │  │     ├─ shape.pyi
│  │     │  │  │  │     ├─ shape_base.pyi
│  │     │  │  │  │     ├─ stride_tricks.pyi
│  │     │  │  │  │     ├─ strings.pyi
│  │     │  │  │  │     ├─ testing.pyi
│  │     │  │  │  │     ├─ twodim_base.pyi
│  │     │  │  │  │     ├─ type_check.pyi
│  │     │  │  │  │     ├─ ufunclike.pyi
│  │     │  │  │  │     ├─ ufuncs.pyi
│  │     │  │  │  │     ├─ ufunc_config.pyi
│  │     │  │  │  │     └─ warnings_and_errors.pyi
│  │     │  │  │  ├─ test_isfile.py
│  │     │  │  │  ├─ test_runtime.py
│  │     │  │  │  ├─ test_typing.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ test_isfile.cpython-313.pyc
│  │     │  │  │     ├─ test_runtime.cpython-313.pyc
│  │     │  │  │     ├─ test_typing.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ mypy_plugin.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ version.py
│  │     │  ├─ version.pyi
│  │     │  ├─ _array_api_info.py
│  │     │  ├─ _array_api_info.pyi
│  │     │  ├─ _configtool.py
│  │     │  ├─ _configtool.pyi
│  │     │  ├─ _core
│  │     │  │  ├─ arrayprint.py
│  │     │  │  ├─ arrayprint.pyi
│  │     │  │  ├─ cversions.py
│  │     │  │  ├─ defchararray.py
│  │     │  │  ├─ defchararray.pyi
│  │     │  │  ├─ einsumfunc.py
│  │     │  │  ├─ einsumfunc.pyi
│  │     │  │  ├─ fromnumeric.py
│  │     │  │  ├─ fromnumeric.pyi
│  │     │  │  ├─ function_base.py
│  │     │  │  ├─ function_base.pyi
│  │     │  │  ├─ getlimits.py
│  │     │  │  ├─ getlimits.pyi
│  │     │  │  ├─ include
│  │     │  │  │  └─ numpy
│  │     │  │  │     ├─ arrayobject.h
│  │     │  │  │     ├─ arrayscalars.h
│  │     │  │  │     ├─ dtype_api.h
│  │     │  │  │     ├─ halffloat.h
│  │     │  │  │     ├─ ndarrayobject.h
│  │     │  │  │     ├─ ndarraytypes.h
│  │     │  │  │     ├─ npy_2_compat.h
│  │     │  │  │     ├─ npy_2_complexcompat.h
│  │     │  │  │     ├─ npy_3kcompat.h
│  │     │  │  │     ├─ npy_common.h
│  │     │  │  │     ├─ npy_cpu.h
│  │     │  │  │     ├─ npy_endian.h
│  │     │  │  │     ├─ npy_math.h
│  │     │  │  │     ├─ npy_no_deprecated_api.h
│  │     │  │  │     ├─ npy_os.h
│  │     │  │  │     ├─ numpyconfig.h
│  │     │  │  │     ├─ random
│  │     │  │  │     │  ├─ bitgen.h
│  │     │  │  │     │  ├─ libdivide.h
│  │     │  │  │     │  └─ LICENSE.txt
│  │     │  │  │     ├─ ufuncobject.h
│  │     │  │  │     ├─ utils.h
│  │     │  │  │     ├─ _neighborhood_iterator_imp.h
│  │     │  │  │     ├─ _numpyconfig.h
│  │     │  │  │     ├─ _public_dtype_api_table.h
│  │     │  │  │     ├─ __multiarray_api.c
│  │     │  │  │     ├─ __multiarray_api.h
│  │     │  │  │     ├─ __ufunc_api.c
│  │     │  │  │     └─ __ufunc_api.h
│  │     │  │  ├─ lib
│  │     │  │  │  ├─ npy-pkg-config
│  │     │  │  │  │  ├─ mlib.ini
│  │     │  │  │  │  └─ npymath.ini
│  │     │  │  │  ├─ npymath.lib
│  │     │  │  │  └─ pkgconfig
│  │     │  │  │     └─ numpy.pc
│  │     │  │  ├─ memmap.py
│  │     │  │  ├─ memmap.pyi
│  │     │  │  ├─ multiarray.py
│  │     │  │  ├─ multiarray.pyi
│  │     │  │  ├─ numeric.py
│  │     │  │  ├─ numeric.pyi
│  │     │  │  ├─ numerictypes.py
│  │     │  │  ├─ numerictypes.pyi
│  │     │  │  ├─ overrides.py
│  │     │  │  ├─ overrides.pyi
│  │     │  │  ├─ printoptions.py
│  │     │  │  ├─ printoptions.pyi
│  │     │  │  ├─ records.py
│  │     │  │  ├─ records.pyi
│  │     │  │  ├─ shape_base.py
│  │     │  │  ├─ shape_base.pyi
│  │     │  │  ├─ strings.py
│  │     │  │  ├─ strings.pyi
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ data
│  │     │  │  │  │  ├─ astype_copy.pkl
│  │     │  │  │  │  ├─ generate_umath_validation_data.cpp
│  │     │  │  │  │  ├─ recarray_from_file.fits
│  │     │  │  │  │  ├─ umath-validation-set-arccos.csv
│  │     │  │  │  │  ├─ umath-validation-set-arccosh.csv
│  │     │  │  │  │  ├─ umath-validation-set-arcsin.csv
│  │     │  │  │  │  ├─ umath-validation-set-arcsinh.csv
│  │     │  │  │  │  ├─ umath-validation-set-arctan.csv
│  │     │  │  │  │  ├─ umath-validation-set-arctanh.csv
│  │     │  │  │  │  ├─ umath-validation-set-cbrt.csv
│  │     │  │  │  │  ├─ umath-validation-set-cos.csv
│  │     │  │  │  │  ├─ umath-validation-set-cosh.csv
│  │     │  │  │  │  ├─ umath-validation-set-exp.csv
│  │     │  │  │  │  ├─ umath-validation-set-exp2.csv
│  │     │  │  │  │  ├─ umath-validation-set-expm1.csv
│  │     │  │  │  │  ├─ umath-validation-set-log.csv
│  │     │  │  │  │  ├─ umath-validation-set-log10.csv
│  │     │  │  │  │  ├─ umath-validation-set-log1p.csv
│  │     │  │  │  │  ├─ umath-validation-set-log2.csv
│  │     │  │  │  │  ├─ umath-validation-set-README.txt
│  │     │  │  │  │  ├─ umath-validation-set-sin.csv
│  │     │  │  │  │  ├─ umath-validation-set-sinh.csv
│  │     │  │  │  │  ├─ umath-validation-set-tan.csv
│  │     │  │  │  │  └─ umath-validation-set-tanh.csv
│  │     │  │  │  ├─ examples
│  │     │  │  │  │  ├─ cython
│  │     │  │  │  │  │  ├─ checks.pyx
│  │     │  │  │  │  │  ├─ meson.build
│  │     │  │  │  │  │  ├─ setup.py
│  │     │  │  │  │  │  └─ __pycache__
│  │     │  │  │  │  │     └─ setup.cpython-313.pyc
│  │     │  │  │  │  └─ limited_api
│  │     │  │  │  │     ├─ limited_api1.c
│  │     │  │  │  │     ├─ limited_api2.pyx
│  │     │  │  │  │     ├─ limited_api_latest.c
│  │     │  │  │  │     ├─ meson.build
│  │     │  │  │  │     ├─ setup.py
│  │     │  │  │  │     └─ __pycache__
│  │     │  │  │  │        └─ setup.cpython-313.pyc
│  │     │  │  │  ├─ test_abc.py
│  │     │  │  │  ├─ test_api.py
│  │     │  │  │  ├─ test_argparse.py
│  │     │  │  │  ├─ test_arraymethod.py
│  │     │  │  │  ├─ test_arrayobject.py
│  │     │  │  │  ├─ test_arrayprint.py
│  │     │  │  │  ├─ test_array_api_info.py
│  │     │  │  │  ├─ test_array_coercion.py
│  │     │  │  │  ├─ test_array_interface.py
│  │     │  │  │  ├─ test_casting_floatingpoint_errors.py
│  │     │  │  │  ├─ test_casting_unittests.py
│  │     │  │  │  ├─ test_conversion_utils.py
│  │     │  │  │  ├─ test_cpu_dispatcher.py
│  │     │  │  │  ├─ test_cpu_features.py
│  │     │  │  │  ├─ test_custom_dtypes.py
│  │     │  │  │  ├─ test_cython.py
│  │     │  │  │  ├─ test_datetime.py
│  │     │  │  │  ├─ test_defchararray.py
│  │     │  │  │  ├─ test_deprecations.py
│  │     │  │  │  ├─ test_dlpack.py
│  │     │  │  │  ├─ test_dtype.py
│  │     │  │  │  ├─ test_einsum.py
│  │     │  │  │  ├─ test_errstate.py
│  │     │  │  │  ├─ test_extint128.py
│  │     │  │  │  ├─ test_function_base.py
│  │     │  │  │  ├─ test_getlimits.py
│  │     │  │  │  ├─ test_half.py
│  │     │  │  │  ├─ test_hashtable.py
│  │     │  │  │  ├─ test_indexerrors.py
│  │     │  │  │  ├─ test_indexing.py
│  │     │  │  │  ├─ test_item_selection.py
│  │     │  │  │  ├─ test_limited_api.py
│  │     │  │  │  ├─ test_longdouble.py
│  │     │  │  │  ├─ test_machar.py
│  │     │  │  │  ├─ test_memmap.py
│  │     │  │  │  ├─ test_mem_overlap.py
│  │     │  │  │  ├─ test_mem_policy.py
│  │     │  │  │  ├─ test_multiarray.py
│  │     │  │  │  ├─ test_multithreading.py
│  │     │  │  │  ├─ test_nditer.py
│  │     │  │  │  ├─ test_nep50_promotions.py
│  │     │  │  │  ├─ test_numeric.py
│  │     │  │  │  ├─ test_numerictypes.py
│  │     │  │  │  ├─ test_overrides.py
│  │     │  │  │  ├─ test_print.py
│  │     │  │  │  ├─ test_protocols.py
│  │     │  │  │  ├─ test_records.py
│  │     │  │  │  ├─ test_regression.py
│  │     │  │  │  ├─ test_scalarbuffer.py
│  │     │  │  │  ├─ test_scalarinherit.py
│  │     │  │  │  ├─ test_scalarmath.py
│  │     │  │  │  ├─ test_scalarprint.py
│  │     │  │  │  ├─ test_scalar_ctors.py
│  │     │  │  │  ├─ test_scalar_methods.py
│  │     │  │  │  ├─ test_shape_base.py
│  │     │  │  │  ├─ test_simd.py
│  │     │  │  │  ├─ test_simd_module.py
│  │     │  │  │  ├─ test_stringdtype.py
│  │     │  │  │  ├─ test_strings.py
│  │     │  │  │  ├─ test_ufunc.py
│  │     │  │  │  ├─ test_umath.py
│  │     │  │  │  ├─ test_umath_accuracy.py
│  │     │  │  │  ├─ test_umath_complex.py
│  │     │  │  │  ├─ test_unicode.py
│  │     │  │  │  ├─ test__exceptions.py
│  │     │  │  │  ├─ _locales.py
│  │     │  │  │  ├─ _natype.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ test_abc.cpython-313.pyc
│  │     │  │  │     ├─ test_api.cpython-313.pyc
│  │     │  │  │     ├─ test_argparse.cpython-313.pyc
│  │     │  │  │     ├─ test_arraymethod.cpython-313.pyc
│  │     │  │  │     ├─ test_arrayobject.cpython-313.pyc
│  │     │  │  │     ├─ test_arrayprint.cpython-313.pyc
│  │     │  │  │     ├─ test_array_api_info.cpython-313.pyc
│  │     │  │  │     ├─ test_array_coercion.cpython-313.pyc
│  │     │  │  │     ├─ test_array_interface.cpython-313.pyc
│  │     │  │  │     ├─ test_casting_floatingpoint_errors.cpython-313.pyc
│  │     │  │  │     ├─ test_casting_unittests.cpython-313.pyc
│  │     │  │  │     ├─ test_conversion_utils.cpython-313.pyc
│  │     │  │  │     ├─ test_cpu_dispatcher.cpython-313.pyc
│  │     │  │  │     ├─ test_cpu_features.cpython-313.pyc
│  │     │  │  │     ├─ test_custom_dtypes.cpython-313.pyc
│  │     │  │  │     ├─ test_cython.cpython-313.pyc
│  │     │  │  │     ├─ test_datetime.cpython-313.pyc
│  │     │  │  │     ├─ test_defchararray.cpython-313.pyc
│  │     │  │  │     ├─ test_deprecations.cpython-313.pyc
│  │     │  │  │     ├─ test_dlpack.cpython-313.pyc
│  │     │  │  │     ├─ test_dtype.cpython-313.pyc
│  │     │  │  │     ├─ test_einsum.cpython-313.pyc
│  │     │  │  │     ├─ test_errstate.cpython-313.pyc
│  │     │  │  │     ├─ test_extint128.cpython-313.pyc
│  │     │  │  │     ├─ test_function_base.cpython-313.pyc
│  │     │  │  │     ├─ test_getlimits.cpython-313.pyc
│  │     │  │  │     ├─ test_half.cpython-313.pyc
│  │     │  │  │     ├─ test_hashtable.cpython-313.pyc
│  │     │  │  │     ├─ test_indexerrors.cpython-313.pyc
│  │     │  │  │     ├─ test_indexing.cpython-313.pyc
│  │     │  │  │     ├─ test_item_selection.cpython-313.pyc
│  │     │  │  │     ├─ test_limited_api.cpython-313.pyc
│  │     │  │  │     ├─ test_longdouble.cpython-313.pyc
│  │     │  │  │     ├─ test_machar.cpython-313.pyc
│  │     │  │  │     ├─ test_memmap.cpython-313.pyc
│  │     │  │  │     ├─ test_mem_overlap.cpython-313.pyc
│  │     │  │  │     ├─ test_mem_policy.cpython-313.pyc
│  │     │  │  │     ├─ test_multiarray.cpython-313.pyc
│  │     │  │  │     ├─ test_multithreading.cpython-313.pyc
│  │     │  │  │     ├─ test_nditer.cpython-313.pyc
│  │     │  │  │     ├─ test_nep50_promotions.cpython-313.pyc
│  │     │  │  │     ├─ test_numeric.cpython-313.pyc
│  │     │  │  │     ├─ test_numerictypes.cpython-313.pyc
│  │     │  │  │     ├─ test_overrides.cpython-313.pyc
│  │     │  │  │     ├─ test_print.cpython-313.pyc
│  │     │  │  │     ├─ test_protocols.cpython-313.pyc
│  │     │  │  │     ├─ test_records.cpython-313.pyc
│  │     │  │  │     ├─ test_regression.cpython-313.pyc
│  │     │  │  │     ├─ test_scalarbuffer.cpython-313.pyc
│  │     │  │  │     ├─ test_scalarinherit.cpython-313.pyc
│  │     │  │  │     ├─ test_scalarmath.cpython-313.pyc
│  │     │  │  │     ├─ test_scalarprint.cpython-313.pyc
│  │     │  │  │     ├─ test_scalar_ctors.cpython-313.pyc
│  │     │  │  │     ├─ test_scalar_methods.cpython-313.pyc
│  │     │  │  │     ├─ test_shape_base.cpython-313.pyc
│  │     │  │  │     ├─ test_simd.cpython-313.pyc
│  │     │  │  │     ├─ test_simd_module.cpython-313.pyc
│  │     │  │  │     ├─ test_stringdtype.cpython-313.pyc
│  │     │  │  │     ├─ test_strings.cpython-313.pyc
│  │     │  │  │     ├─ test_ufunc.cpython-313.pyc
│  │     │  │  │     ├─ test_umath.cpython-313.pyc
│  │     │  │  │     ├─ test_umath_accuracy.cpython-313.pyc
│  │     │  │  │     ├─ test_umath_complex.cpython-313.pyc
│  │     │  │  │     ├─ test_unicode.cpython-313.pyc
│  │     │  │  │     ├─ test__exceptions.cpython-313.pyc
│  │     │  │  │     ├─ _locales.cpython-313.pyc
│  │     │  │  │     └─ _natype.cpython-313.pyc
│  │     │  │  ├─ umath.py
│  │     │  │  ├─ umath.pyi
│  │     │  │  ├─ _add_newdocs.py
│  │     │  │  ├─ _add_newdocs.pyi
│  │     │  │  ├─ _add_newdocs_scalars.py
│  │     │  │  ├─ _add_newdocs_scalars.pyi
│  │     │  │  ├─ _asarray.py
│  │     │  │  ├─ _asarray.pyi
│  │     │  │  ├─ _dtype.py
│  │     │  │  ├─ _dtype.pyi
│  │     │  │  ├─ _dtype_ctypes.py
│  │     │  │  ├─ _dtype_ctypes.pyi
│  │     │  │  ├─ _exceptions.py
│  │     │  │  ├─ _exceptions.pyi
│  │     │  │  ├─ _internal.py
│  │     │  │  ├─ _internal.pyi
│  │     │  │  ├─ _machar.py
│  │     │  │  ├─ _machar.pyi
│  │     │  │  ├─ _methods.py
│  │     │  │  ├─ _methods.pyi
│  │     │  │  ├─ _multiarray_tests.cp313-win_amd64.lib
│  │     │  │  ├─ _multiarray_tests.cp313-win_amd64.pyd
│  │     │  │  ├─ _multiarray_umath.cp313-win_amd64.lib
│  │     │  │  ├─ _multiarray_umath.cp313-win_amd64.pyd
│  │     │  │  ├─ _operand_flag_tests.cp313-win_amd64.lib
│  │     │  │  ├─ _operand_flag_tests.cp313-win_amd64.pyd
│  │     │  │  ├─ _rational_tests.cp313-win_amd64.lib
│  │     │  │  ├─ _rational_tests.cp313-win_amd64.pyd
│  │     │  │  ├─ _simd.cp313-win_amd64.lib
│  │     │  │  ├─ _simd.cp313-win_amd64.pyd
│  │     │  │  ├─ _simd.pyi
│  │     │  │  ├─ _string_helpers.py
│  │     │  │  ├─ _string_helpers.pyi
│  │     │  │  ├─ _struct_ufunc_tests.cp313-win_amd64.lib
│  │     │  │  ├─ _struct_ufunc_tests.cp313-win_amd64.pyd
│  │     │  │  ├─ _type_aliases.py
│  │     │  │  ├─ _type_aliases.pyi
│  │     │  │  ├─ _ufunc_config.py
│  │     │  │  ├─ _ufunc_config.pyi
│  │     │  │  ├─ _umath_tests.cp313-win_amd64.lib
│  │     │  │  ├─ _umath_tests.cp313-win_amd64.pyd
│  │     │  │  ├─ __init__.py
│  │     │  │  ├─ __init__.pyi
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ arrayprint.cpython-313.pyc
│  │     │  │     ├─ cversions.cpython-313.pyc
│  │     │  │     ├─ defchararray.cpython-313.pyc
│  │     │  │     ├─ einsumfunc.cpython-313.pyc
│  │     │  │     ├─ fromnumeric.cpython-313.pyc
│  │     │  │     ├─ function_base.cpython-313.pyc
│  │     │  │     ├─ getlimits.cpython-313.pyc
│  │     │  │     ├─ memmap.cpython-313.pyc
│  │     │  │     ├─ multiarray.cpython-313.pyc
│  │     │  │     ├─ numeric.cpython-313.pyc
│  │     │  │     ├─ numerictypes.cpython-313.pyc
│  │     │  │     ├─ overrides.cpython-313.pyc
│  │     │  │     ├─ printoptions.cpython-313.pyc
│  │     │  │     ├─ records.cpython-313.pyc
│  │     │  │     ├─ shape_base.cpython-313.pyc
│  │     │  │     ├─ strings.cpython-313.pyc
│  │     │  │     ├─ umath.cpython-313.pyc
│  │     │  │     ├─ _add_newdocs.cpython-313.pyc
│  │     │  │     ├─ _add_newdocs_scalars.cpython-313.pyc
│  │     │  │     ├─ _asarray.cpython-313.pyc
│  │     │  │     ├─ _dtype.cpython-313.pyc
│  │     │  │     ├─ _dtype_ctypes.cpython-313.pyc
│  │     │  │     ├─ _exceptions.cpython-313.pyc
│  │     │  │     ├─ _internal.cpython-313.pyc
│  │     │  │     ├─ _machar.cpython-313.pyc
│  │     │  │     ├─ _methods.cpython-313.pyc
│  │     │  │     ├─ _string_helpers.cpython-313.pyc
│  │     │  │     ├─ _type_aliases.cpython-313.pyc
│  │     │  │     ├─ _ufunc_config.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ _expired_attrs_2_0.py
│  │     │  ├─ _expired_attrs_2_0.pyi
│  │     │  ├─ _globals.py
│  │     │  ├─ _globals.pyi
│  │     │  ├─ _pyinstaller
│  │     │  │  ├─ hook-numpy.py
│  │     │  │  ├─ hook-numpy.pyi
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ pyinstaller-smoke.py
│  │     │  │  │  ├─ test_pyinstaller.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ pyinstaller-smoke.cpython-313.pyc
│  │     │  │  │     ├─ test_pyinstaller.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ __init__.py
│  │     │  │  ├─ __init__.pyi
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ hook-numpy.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ _pytesttester.py
│  │     │  ├─ _pytesttester.pyi
│  │     │  ├─ _typing
│  │     │  │  ├─ _add_docstring.py
│  │     │  │  ├─ _array_like.py
│  │     │  │  ├─ _char_codes.py
│  │     │  │  ├─ _dtype_like.py
│  │     │  │  ├─ _extended_precision.py
│  │     │  │  ├─ _nbit.py
│  │     │  │  ├─ _nbit_base.py
│  │     │  │  ├─ _nbit_base.pyi
│  │     │  │  ├─ _nested_sequence.py
│  │     │  │  ├─ _scalars.py
│  │     │  │  ├─ _shape.py
│  │     │  │  ├─ _ufunc.py
│  │     │  │  ├─ _ufunc.pyi
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ _add_docstring.cpython-313.pyc
│  │     │  │     ├─ _array_like.cpython-313.pyc
│  │     │  │     ├─ _char_codes.cpython-313.pyc
│  │     │  │     ├─ _dtype_like.cpython-313.pyc
│  │     │  │     ├─ _extended_precision.cpython-313.pyc
│  │     │  │     ├─ _nbit.cpython-313.pyc
│  │     │  │     ├─ _nbit_base.cpython-313.pyc
│  │     │  │     ├─ _nested_sequence.cpython-313.pyc
│  │     │  │     ├─ _scalars.cpython-313.pyc
│  │     │  │     ├─ _shape.cpython-313.pyc
│  │     │  │     ├─ _ufunc.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ _utils
│  │     │  │  ├─ _convertions.py
│  │     │  │  ├─ _convertions.pyi
│  │     │  │  ├─ _inspect.py
│  │     │  │  ├─ _inspect.pyi
│  │     │  │  ├─ _pep440.py
│  │     │  │  ├─ _pep440.pyi
│  │     │  │  ├─ __init__.py
│  │     │  │  ├─ __init__.pyi
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ _convertions.cpython-313.pyc
│  │     │  │     ├─ _inspect.cpython-313.pyc
│  │     │  │     ├─ _pep440.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ __config__.py
│  │     │  ├─ __config__.pyi
│  │     │  ├─ __init__.cython-30.pxd
│  │     │  ├─ __init__.pxd
│  │     │  ├─ __init__.py
│  │     │  ├─ __init__.pyi
│  │     │  └─ __pycache__
│  │     │     ├─ conftest.cpython-313.pyc
│  │     │     ├─ dtypes.cpython-313.pyc
│  │     │     ├─ exceptions.cpython-313.pyc
│  │     │     ├─ matlib.cpython-313.pyc
│  │     │     ├─ version.cpython-313.pyc
│  │     │     ├─ _array_api_info.cpython-313.pyc
│  │     │     ├─ _configtool.cpython-313.pyc
│  │     │     ├─ _expired_attrs_2_0.cpython-313.pyc
│  │     │     ├─ _globals.cpython-313.pyc
│  │     │     ├─ _pytesttester.cpython-313.pyc
│  │     │     ├─ __config__.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ numpy.libs
│  │     │  ├─ libscipy_openblas64_-9e3e5a4229c1ca39f10dc82bba9e2b2b.dll
│  │     │  └─ msvcp140-a4c2229bdc2a2a630acdc095b4d86008.dll
│  │     ├─ packaging
│  │     │  ├─ licenses
│  │     │  │  ├─ _spdx.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ _spdx.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ markers.py
│  │     │  ├─ metadata.py
│  │     │  ├─ py.typed
│  │     │  ├─ requirements.py
│  │     │  ├─ specifiers.py
│  │     │  ├─ tags.py
│  │     │  ├─ utils.py
│  │     │  ├─ version.py
│  │     │  ├─ _elffile.py
│  │     │  ├─ _manylinux.py
│  │     │  ├─ _musllinux.py
│  │     │  ├─ _parser.py
│  │     │  ├─ _structures.py
│  │     │  ├─ _tokenizer.py
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ markers.cpython-313.pyc
│  │     │     ├─ metadata.cpython-313.pyc
│  │     │     ├─ requirements.cpython-313.pyc
│  │     │     ├─ specifiers.cpython-313.pyc
│  │     │     ├─ tags.cpython-313.pyc
│  │     │     ├─ utils.cpython-313.pyc
│  │     │     ├─ version.cpython-313.pyc
│  │     │     ├─ _elffile.cpython-313.pyc
│  │     │     ├─ _manylinux.cpython-313.pyc
│  │     │     ├─ _musllinux.cpython-313.pyc
│  │     │     ├─ _parser.cpython-313.pyc
│  │     │     ├─ _structures.cpython-313.pyc
│  │     │     ├─ _tokenizer.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ pip
│  │     │  ├─ py.typed
│  │     │  ├─ _internal
│  │     │  │  ├─ build_env.py
│  │     │  │  ├─ cache.py
│  │     │  │  ├─ cli
│  │     │  │  │  ├─ autocompletion.py
│  │     │  │  │  ├─ base_command.py
│  │     │  │  │  ├─ cmdoptions.py
│  │     │  │  │  ├─ command_context.py
│  │     │  │  │  ├─ index_command.py
│  │     │  │  │  ├─ main.py
│  │     │  │  │  ├─ main_parser.py
│  │     │  │  │  ├─ parser.py
│  │     │  │  │  ├─ progress_bars.py
│  │     │  │  │  ├─ req_command.py
│  │     │  │  │  ├─ spinners.py
│  │     │  │  │  ├─ status_codes.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ autocompletion.cpython-313.pyc
│  │     │  │  │     ├─ base_command.cpython-313.pyc
│  │     │  │  │     ├─ cmdoptions.cpython-313.pyc
│  │     │  │  │     ├─ command_context.cpython-313.pyc
│  │     │  │  │     ├─ index_command.cpython-313.pyc
│  │     │  │  │     ├─ main.cpython-313.pyc
│  │     │  │  │     ├─ main_parser.cpython-313.pyc
│  │     │  │  │     ├─ parser.cpython-313.pyc
│  │     │  │  │     ├─ progress_bars.cpython-313.pyc
│  │     │  │  │     ├─ req_command.cpython-313.pyc
│  │     │  │  │     ├─ spinners.cpython-313.pyc
│  │     │  │  │     ├─ status_codes.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ commands
│  │     │  │  │  ├─ cache.py
│  │     │  │  │  ├─ check.py
│  │     │  │  │  ├─ completion.py
│  │     │  │  │  ├─ configuration.py
│  │     │  │  │  ├─ debug.py
│  │     │  │  │  ├─ download.py
│  │     │  │  │  ├─ freeze.py
│  │     │  │  │  ├─ hash.py
│  │     │  │  │  ├─ help.py
│  │     │  │  │  ├─ index.py
│  │     │  │  │  ├─ inspect.py
│  │     │  │  │  ├─ install.py
│  │     │  │  │  ├─ list.py
│  │     │  │  │  ├─ lock.py
│  │     │  │  │  ├─ search.py
│  │     │  │  │  ├─ show.py
│  │     │  │  │  ├─ uninstall.py
│  │     │  │  │  ├─ wheel.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ cache.cpython-313.pyc
│  │     │  │  │     ├─ check.cpython-313.pyc
│  │     │  │  │     ├─ completion.cpython-313.pyc
│  │     │  │  │     ├─ configuration.cpython-313.pyc
│  │     │  │  │     ├─ debug.cpython-313.pyc
│  │     │  │  │     ├─ download.cpython-313.pyc
│  │     │  │  │     ├─ freeze.cpython-313.pyc
│  │     │  │  │     ├─ hash.cpython-313.pyc
│  │     │  │  │     ├─ help.cpython-313.pyc
│  │     │  │  │     ├─ index.cpython-313.pyc
│  │     │  │  │     ├─ inspect.cpython-313.pyc
│  │     │  │  │     ├─ install.cpython-313.pyc
│  │     │  │  │     ├─ list.cpython-313.pyc
│  │     │  │  │     ├─ lock.cpython-313.pyc
│  │     │  │  │     ├─ search.cpython-313.pyc
│  │     │  │  │     ├─ show.cpython-313.pyc
│  │     │  │  │     ├─ uninstall.cpython-313.pyc
│  │     │  │  │     ├─ wheel.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ configuration.py
│  │     │  │  ├─ exceptions.py
│  │     │  │  ├─ index
│  │     │  │  │  ├─ collector.py
│  │     │  │  │  ├─ package_finder.py
│  │     │  │  │  ├─ sources.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ collector.cpython-313.pyc
│  │     │  │  │     ├─ package_finder.cpython-313.pyc
│  │     │  │  │     ├─ sources.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ locations
│  │     │  │  │  ├─ base.py
│  │     │  │  │  ├─ _sysconfig.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ base.cpython-313.pyc
│  │     │  │  │     ├─ _sysconfig.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ main.py
│  │     │  │  ├─ metadata
│  │     │  │  │  ├─ base.py
│  │     │  │  │  ├─ importlib
│  │     │  │  │  │  ├─ _compat.py
│  │     │  │  │  │  ├─ _envs.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ _compat.cpython-313.pyc
│  │     │  │  │  │     ├─ _envs.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ pkg_resources.py
│  │     │  │  │  ├─ _json.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ base.cpython-313.pyc
│  │     │  │  │     ├─ pkg_resources.cpython-313.pyc
│  │     │  │  │     ├─ _json.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ models
│  │     │  │  │  ├─ candidate.py
│  │     │  │  │  ├─ direct_url.py
│  │     │  │  │  ├─ format_control.py
│  │     │  │  │  ├─ index.py
│  │     │  │  │  ├─ installation_report.py
│  │     │  │  │  ├─ link.py
│  │     │  │  │  ├─ pylock.py
│  │     │  │  │  ├─ scheme.py
│  │     │  │  │  ├─ search_scope.py
│  │     │  │  │  ├─ selection_prefs.py
│  │     │  │  │  ├─ target_python.py
│  │     │  │  │  ├─ wheel.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ candidate.cpython-313.pyc
│  │     │  │  │     ├─ direct_url.cpython-313.pyc
│  │     │  │  │     ├─ format_control.cpython-313.pyc
│  │     │  │  │     ├─ index.cpython-313.pyc
│  │     │  │  │     ├─ installation_report.cpython-313.pyc
│  │     │  │  │     ├─ link.cpython-313.pyc
│  │     │  │  │     ├─ pylock.cpython-313.pyc
│  │     │  │  │     ├─ scheme.cpython-313.pyc
│  │     │  │  │     ├─ search_scope.cpython-313.pyc
│  │     │  │  │     ├─ selection_prefs.cpython-313.pyc
│  │     │  │  │     ├─ target_python.cpython-313.pyc
│  │     │  │  │     ├─ wheel.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ network
│  │     │  │  │  ├─ auth.py
│  │     │  │  │  ├─ cache.py
│  │     │  │  │  ├─ download.py
│  │     │  │  │  ├─ lazy_wheel.py
│  │     │  │  │  ├─ session.py
│  │     │  │  │  ├─ utils.py
│  │     │  │  │  ├─ xmlrpc.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ auth.cpython-313.pyc
│  │     │  │  │     ├─ cache.cpython-313.pyc
│  │     │  │  │     ├─ download.cpython-313.pyc
│  │     │  │  │     ├─ lazy_wheel.cpython-313.pyc
│  │     │  │  │     ├─ session.cpython-313.pyc
│  │     │  │  │     ├─ utils.cpython-313.pyc
│  │     │  │  │     ├─ xmlrpc.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ operations
│  │     │  │  │  ├─ build
│  │     │  │  │  │  ├─ build_tracker.py
│  │     │  │  │  │  ├─ metadata.py
│  │     │  │  │  │  ├─ metadata_editable.py
│  │     │  │  │  │  ├─ metadata_legacy.py
│  │     │  │  │  │  ├─ wheel.py
│  │     │  │  │  │  ├─ wheel_editable.py
│  │     │  │  │  │  ├─ wheel_legacy.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ build_tracker.cpython-313.pyc
│  │     │  │  │  │     ├─ metadata.cpython-313.pyc
│  │     │  │  │  │     ├─ metadata_editable.cpython-313.pyc
│  │     │  │  │  │     ├─ metadata_legacy.cpython-313.pyc
│  │     │  │  │  │     ├─ wheel.cpython-313.pyc
│  │     │  │  │  │     ├─ wheel_editable.cpython-313.pyc
│  │     │  │  │  │     ├─ wheel_legacy.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ check.py
│  │     │  │  │  ├─ freeze.py
│  │     │  │  │  ├─ install
│  │     │  │  │  │  ├─ editable_legacy.py
│  │     │  │  │  │  ├─ wheel.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ editable_legacy.cpython-313.pyc
│  │     │  │  │  │     ├─ wheel.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ prepare.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ check.cpython-313.pyc
│  │     │  │  │     ├─ freeze.cpython-313.pyc
│  │     │  │  │     ├─ prepare.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ pyproject.py
│  │     │  │  ├─ req
│  │     │  │  │  ├─ constructors.py
│  │     │  │  │  ├─ req_dependency_group.py
│  │     │  │  │  ├─ req_file.py
│  │     │  │  │  ├─ req_install.py
│  │     │  │  │  ├─ req_set.py
│  │     │  │  │  ├─ req_uninstall.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ constructors.cpython-313.pyc
│  │     │  │  │     ├─ req_dependency_group.cpython-313.pyc
│  │     │  │  │     ├─ req_file.cpython-313.pyc
│  │     │  │  │     ├─ req_install.cpython-313.pyc
│  │     │  │  │     ├─ req_set.cpython-313.pyc
│  │     │  │  │     ├─ req_uninstall.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ resolution
│  │     │  │  │  ├─ base.py
│  │     │  │  │  ├─ legacy
│  │     │  │  │  │  ├─ resolver.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ resolver.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ resolvelib
│  │     │  │  │  │  ├─ base.py
│  │     │  │  │  │  ├─ candidates.py
│  │     │  │  │  │  ├─ factory.py
│  │     │  │  │  │  ├─ found_candidates.py
│  │     │  │  │  │  ├─ provider.py
│  │     │  │  │  │  ├─ reporter.py
│  │     │  │  │  │  ├─ requirements.py
│  │     │  │  │  │  ├─ resolver.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ base.cpython-313.pyc
│  │     │  │  │  │     ├─ candidates.cpython-313.pyc
│  │     │  │  │  │     ├─ factory.cpython-313.pyc
│  │     │  │  │  │     ├─ found_candidates.cpython-313.pyc
│  │     │  │  │  │     ├─ provider.cpython-313.pyc
│  │     │  │  │  │     ├─ reporter.cpython-313.pyc
│  │     │  │  │  │     ├─ requirements.cpython-313.pyc
│  │     │  │  │  │     ├─ resolver.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ base.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ self_outdated_check.py
│  │     │  │  ├─ utils
│  │     │  │  │  ├─ appdirs.py
│  │     │  │  │  ├─ compat.py
│  │     │  │  │  ├─ compatibility_tags.py
│  │     │  │  │  ├─ datetime.py
│  │     │  │  │  ├─ deprecation.py
│  │     │  │  │  ├─ direct_url_helpers.py
│  │     │  │  │  ├─ egg_link.py
│  │     │  │  │  ├─ entrypoints.py
│  │     │  │  │  ├─ filesystem.py
│  │     │  │  │  ├─ filetypes.py
│  │     │  │  │  ├─ glibc.py
│  │     │  │  │  ├─ hashes.py
│  │     │  │  │  ├─ logging.py
│  │     │  │  │  ├─ misc.py
│  │     │  │  │  ├─ packaging.py
│  │     │  │  │  ├─ retry.py
│  │     │  │  │  ├─ setuptools_build.py
│  │     │  │  │  ├─ subprocess.py
│  │     │  │  │  ├─ temp_dir.py
│  │     │  │  │  ├─ unpacking.py
│  │     │  │  │  ├─ urls.py
│  │     │  │  │  ├─ virtualenv.py
│  │     │  │  │  ├─ wheel.py
│  │     │  │  │  ├─ _jaraco_text.py
│  │     │  │  │  ├─ _log.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ appdirs.cpython-313.pyc
│  │     │  │  │     ├─ compat.cpython-313.pyc
│  │     │  │  │     ├─ compatibility_tags.cpython-313.pyc
│  │     │  │  │     ├─ datetime.cpython-313.pyc
│  │     │  │  │     ├─ deprecation.cpython-313.pyc
│  │     │  │  │     ├─ direct_url_helpers.cpython-313.pyc
│  │     │  │  │     ├─ egg_link.cpython-313.pyc
│  │     │  │  │     ├─ entrypoints.cpython-313.pyc
│  │     │  │  │     ├─ filesystem.cpython-313.pyc
│  │     │  │  │     ├─ filetypes.cpython-313.pyc
│  │     │  │  │     ├─ glibc.cpython-313.pyc
│  │     │  │  │     ├─ hashes.cpython-313.pyc
│  │     │  │  │     ├─ logging.cpython-313.pyc
│  │     │  │  │     ├─ misc.cpython-313.pyc
│  │     │  │  │     ├─ packaging.cpython-313.pyc
│  │     │  │  │     ├─ retry.cpython-313.pyc
│  │     │  │  │     ├─ setuptools_build.cpython-313.pyc
│  │     │  │  │     ├─ subprocess.cpython-313.pyc
│  │     │  │  │     ├─ temp_dir.cpython-313.pyc
│  │     │  │  │     ├─ unpacking.cpython-313.pyc
│  │     │  │  │     ├─ urls.cpython-313.pyc
│  │     │  │  │     ├─ virtualenv.cpython-313.pyc
│  │     │  │  │     ├─ wheel.cpython-313.pyc
│  │     │  │  │     ├─ _jaraco_text.cpython-313.pyc
│  │     │  │  │     ├─ _log.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ vcs
│  │     │  │  │  ├─ bazaar.py
│  │     │  │  │  ├─ git.py
│  │     │  │  │  ├─ mercurial.py
│  │     │  │  │  ├─ subversion.py
│  │     │  │  │  ├─ versioncontrol.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ bazaar.cpython-313.pyc
│  │     │  │  │     ├─ git.cpython-313.pyc
│  │     │  │  │     ├─ mercurial.cpython-313.pyc
│  │     │  │  │     ├─ subversion.cpython-313.pyc
│  │     │  │  │     ├─ versioncontrol.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ wheel_builder.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ build_env.cpython-313.pyc
│  │     │  │     ├─ cache.cpython-313.pyc
│  │     │  │     ├─ configuration.cpython-313.pyc
│  │     │  │     ├─ exceptions.cpython-313.pyc
│  │     │  │     ├─ main.cpython-313.pyc
│  │     │  │     ├─ pyproject.cpython-313.pyc
│  │     │  │     ├─ self_outdated_check.cpython-313.pyc
│  │     │  │     ├─ wheel_builder.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ _vendor
│  │     │  │  ├─ cachecontrol
│  │     │  │  │  ├─ adapter.py
│  │     │  │  │  ├─ cache.py
│  │     │  │  │  ├─ caches
│  │     │  │  │  │  ├─ file_cache.py
│  │     │  │  │  │  ├─ redis_cache.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ file_cache.cpython-313.pyc
│  │     │  │  │  │     ├─ redis_cache.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ controller.py
│  │     │  │  │  ├─ filewrapper.py
│  │     │  │  │  ├─ heuristics.py
│  │     │  │  │  ├─ py.typed
│  │     │  │  │  ├─ serialize.py
│  │     │  │  │  ├─ wrapper.py
│  │     │  │  │  ├─ _cmd.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ adapter.cpython-313.pyc
│  │     │  │  │     ├─ cache.cpython-313.pyc
│  │     │  │  │     ├─ controller.cpython-313.pyc
│  │     │  │  │     ├─ filewrapper.cpython-313.pyc
│  │     │  │  │     ├─ heuristics.cpython-313.pyc
│  │     │  │  │     ├─ serialize.cpython-313.pyc
│  │     │  │  │     ├─ wrapper.cpython-313.pyc
│  │     │  │  │     ├─ _cmd.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ certifi
│  │     │  │  │  ├─ cacert.pem
│  │     │  │  │  ├─ core.py
│  │     │  │  │  ├─ py.typed
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  ├─ __main__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ core.cpython-313.pyc
│  │     │  │  │     ├─ __init__.cpython-313.pyc
│  │     │  │  │     └─ __main__.cpython-313.pyc
│  │     │  │  ├─ dependency_groups
│  │     │  │  │  ├─ py.typed
│  │     │  │  │  ├─ _implementation.py
│  │     │  │  │  ├─ _lint_dependency_groups.py
│  │     │  │  │  ├─ _pip_wrapper.py
│  │     │  │  │  ├─ _toml_compat.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  ├─ __main__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ _implementation.cpython-313.pyc
│  │     │  │  │     ├─ _lint_dependency_groups.cpython-313.pyc
│  │     │  │  │     ├─ _pip_wrapper.cpython-313.pyc
│  │     │  │  │     ├─ _toml_compat.cpython-313.pyc
│  │     │  │  │     ├─ __init__.cpython-313.pyc
│  │     │  │  │     └─ __main__.cpython-313.pyc
│  │     │  │  ├─ idna
│  │     │  │  │  ├─ codec.py
│  │     │  │  │  ├─ compat.py
│  │     │  │  │  ├─ core.py
│  │     │  │  │  ├─ idnadata.py
│  │     │  │  │  ├─ intranges.py
│  │     │  │  │  ├─ package_data.py
│  │     │  │  │  ├─ py.typed
│  │     │  │  │  ├─ uts46data.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ codec.cpython-313.pyc
│  │     │  │  │     ├─ compat.cpython-313.pyc
│  │     │  │  │     ├─ core.cpython-313.pyc
│  │     │  │  │     ├─ idnadata.cpython-313.pyc
│  │     │  │  │     ├─ intranges.cpython-313.pyc
│  │     │  │  │     ├─ package_data.cpython-313.pyc
│  │     │  │  │     ├─ uts46data.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ msgpack
│  │     │  │  │  ├─ exceptions.py
│  │     │  │  │  ├─ ext.py
│  │     │  │  │  ├─ fallback.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ exceptions.cpython-313.pyc
│  │     │  │  │     ├─ ext.cpython-313.pyc
│  │     │  │  │     ├─ fallback.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ packaging
│  │     │  │  │  ├─ licenses
│  │     │  │  │  │  ├─ _spdx.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ _spdx.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ markers.py
│  │     │  │  │  ├─ metadata.py
│  │     │  │  │  ├─ py.typed
│  │     │  │  │  ├─ requirements.py
│  │     │  │  │  ├─ specifiers.py
│  │     │  │  │  ├─ tags.py
│  │     │  │  │  ├─ utils.py
│  │     │  │  │  ├─ version.py
│  │     │  │  │  ├─ _elffile.py
│  │     │  │  │  ├─ _manylinux.py
│  │     │  │  │  ├─ _musllinux.py
│  │     │  │  │  ├─ _parser.py
│  │     │  │  │  ├─ _structures.py
│  │     │  │  │  ├─ _tokenizer.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ markers.cpython-313.pyc
│  │     │  │  │     ├─ metadata.cpython-313.pyc
│  │     │  │  │     ├─ requirements.cpython-313.pyc
│  │     │  │  │     ├─ specifiers.cpython-313.pyc
│  │     │  │  │     ├─ tags.cpython-313.pyc
│  │     │  │  │     ├─ utils.cpython-313.pyc
│  │     │  │  │     ├─ version.cpython-313.pyc
│  │     │  │  │     ├─ _elffile.cpython-313.pyc
│  │     │  │  │     ├─ _manylinux.cpython-313.pyc
│  │     │  │  │     ├─ _musllinux.cpython-313.pyc
│  │     │  │  │     ├─ _parser.cpython-313.pyc
│  │     │  │  │     ├─ _structures.cpython-313.pyc
│  │     │  │  │     ├─ _tokenizer.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ pkg_resources
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ platformdirs
│  │     │  │  │  ├─ android.py
│  │     │  │  │  ├─ api.py
│  │     │  │  │  ├─ macos.py
│  │     │  │  │  ├─ py.typed
│  │     │  │  │  ├─ unix.py
│  │     │  │  │  ├─ version.py
│  │     │  │  │  ├─ windows.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  ├─ __main__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ android.cpython-313.pyc
│  │     │  │  │     ├─ api.cpython-313.pyc
│  │     │  │  │     ├─ macos.cpython-313.pyc
│  │     │  │  │     ├─ unix.cpython-313.pyc
│  │     │  │  │     ├─ version.cpython-313.pyc
│  │     │  │  │     ├─ windows.cpython-313.pyc
│  │     │  │  │     ├─ __init__.cpython-313.pyc
│  │     │  │  │     └─ __main__.cpython-313.pyc
│  │     │  │  ├─ pygments
│  │     │  │  │  ├─ console.py
│  │     │  │  │  ├─ filter.py
│  │     │  │  │  ├─ filters
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ formatter.py
│  │     │  │  │  ├─ formatters
│  │     │  │  │  │  ├─ _mapping.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ _mapping.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ lexer.py
│  │     │  │  │  ├─ lexers
│  │     │  │  │  │  ├─ python.py
│  │     │  │  │  │  ├─ _mapping.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ python.cpython-313.pyc
│  │     │  │  │  │     ├─ _mapping.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ modeline.py
│  │     │  │  │  ├─ plugin.py
│  │     │  │  │  ├─ regexopt.py
│  │     │  │  │  ├─ scanner.py
│  │     │  │  │  ├─ sphinxext.py
│  │     │  │  │  ├─ style.py
│  │     │  │  │  ├─ styles
│  │     │  │  │  │  ├─ _mapping.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ _mapping.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ token.py
│  │     │  │  │  ├─ unistring.py
│  │     │  │  │  ├─ util.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  ├─ __main__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ console.cpython-313.pyc
│  │     │  │  │     ├─ filter.cpython-313.pyc
│  │     │  │  │     ├─ formatter.cpython-313.pyc
│  │     │  │  │     ├─ lexer.cpython-313.pyc
│  │     │  │  │     ├─ modeline.cpython-313.pyc
│  │     │  │  │     ├─ plugin.cpython-313.pyc
│  │     │  │  │     ├─ regexopt.cpython-313.pyc
│  │     │  │  │     ├─ scanner.cpython-313.pyc
│  │     │  │  │     ├─ sphinxext.cpython-313.pyc
│  │     │  │  │     ├─ style.cpython-313.pyc
│  │     │  │  │     ├─ token.cpython-313.pyc
│  │     │  │  │     ├─ unistring.cpython-313.pyc
│  │     │  │  │     ├─ util.cpython-313.pyc
│  │     │  │  │     ├─ __init__.cpython-313.pyc
│  │     │  │  │     └─ __main__.cpython-313.pyc
│  │     │  │  ├─ pyproject_hooks
│  │     │  │  │  ├─ py.typed
│  │     │  │  │  ├─ _impl.py
│  │     │  │  │  ├─ _in_process
│  │     │  │  │  │  ├─ _in_process.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ _in_process.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ _impl.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ requests
│  │     │  │  │  ├─ adapters.py
│  │     │  │  │  ├─ api.py
│  │     │  │  │  ├─ auth.py
│  │     │  │  │  ├─ certs.py
│  │     │  │  │  ├─ compat.py
│  │     │  │  │  ├─ cookies.py
│  │     │  │  │  ├─ exceptions.py
│  │     │  │  │  ├─ help.py
│  │     │  │  │  ├─ hooks.py
│  │     │  │  │  ├─ models.py
│  │     │  │  │  ├─ packages.py
│  │     │  │  │  ├─ sessions.py
│  │     │  │  │  ├─ status_codes.py
│  │     │  │  │  ├─ structures.py
│  │     │  │  │  ├─ utils.py
│  │     │  │  │  ├─ _internal_utils.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  ├─ __pycache__
│  │     │  │  │  │  ├─ adapters.cpython-313.pyc
│  │     │  │  │  │  ├─ api.cpython-313.pyc
│  │     │  │  │  │  ├─ auth.cpython-313.pyc
│  │     │  │  │  │  ├─ certs.cpython-313.pyc
│  │     │  │  │  │  ├─ compat.cpython-313.pyc
│  │     │  │  │  │  ├─ cookies.cpython-313.pyc
│  │     │  │  │  │  ├─ exceptions.cpython-313.pyc
│  │     │  │  │  │  ├─ help.cpython-313.pyc
│  │     │  │  │  │  ├─ hooks.cpython-313.pyc
│  │     │  │  │  │  ├─ models.cpython-313.pyc
│  │     │  │  │  │  ├─ packages.cpython-313.pyc
│  │     │  │  │  │  ├─ sessions.cpython-313.pyc
│  │     │  │  │  │  ├─ status_codes.cpython-313.pyc
│  │     │  │  │  │  ├─ structures.cpython-313.pyc
│  │     │  │  │  │  ├─ utils.cpython-313.pyc
│  │     │  │  │  │  ├─ _internal_utils.cpython-313.pyc
│  │     │  │  │  │  ├─ __init__.cpython-313.pyc
│  │     │  │  │  │  └─ __version__.cpython-313.pyc
│  │     │  │  │  └─ __version__.py
│  │     │  │  ├─ resolvelib
│  │     │  │  │  ├─ providers.py
│  │     │  │  │  ├─ py.typed
│  │     │  │  │  ├─ reporters.py
│  │     │  │  │  ├─ resolvers
│  │     │  │  │  │  ├─ abstract.py
│  │     │  │  │  │  ├─ criterion.py
│  │     │  │  │  │  ├─ exceptions.py
│  │     │  │  │  │  ├─ resolution.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ abstract.cpython-313.pyc
│  │     │  │  │  │     ├─ criterion.cpython-313.pyc
│  │     │  │  │  │     ├─ exceptions.cpython-313.pyc
│  │     │  │  │  │     ├─ resolution.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ structs.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ providers.cpython-313.pyc
│  │     │  │  │     ├─ reporters.cpython-313.pyc
│  │     │  │  │     ├─ structs.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ rich
│  │     │  │  │  ├─ abc.py
│  │     │  │  │  ├─ align.py
│  │     │  │  │  ├─ ansi.py
│  │     │  │  │  ├─ bar.py
│  │     │  │  │  ├─ box.py
│  │     │  │  │  ├─ cells.py
│  │     │  │  │  ├─ color.py
│  │     │  │  │  ├─ color_triplet.py
│  │     │  │  │  ├─ columns.py
│  │     │  │  │  ├─ console.py
│  │     │  │  │  ├─ constrain.py
│  │     │  │  │  ├─ containers.py
│  │     │  │  │  ├─ control.py
│  │     │  │  │  ├─ default_styles.py
│  │     │  │  │  ├─ diagnose.py
│  │     │  │  │  ├─ emoji.py
│  │     │  │  │  ├─ errors.py
│  │     │  │  │  ├─ filesize.py
│  │     │  │  │  ├─ file_proxy.py
│  │     │  │  │  ├─ highlighter.py
│  │     │  │  │  ├─ json.py
│  │     │  │  │  ├─ jupyter.py
│  │     │  │  │  ├─ layout.py
│  │     │  │  │  ├─ live.py
│  │     │  │  │  ├─ live_render.py
│  │     │  │  │  ├─ logging.py
│  │     │  │  │  ├─ markup.py
│  │     │  │  │  ├─ measure.py
│  │     │  │  │  ├─ padding.py
│  │     │  │  │  ├─ pager.py
│  │     │  │  │  ├─ palette.py
│  │     │  │  │  ├─ panel.py
│  │     │  │  │  ├─ pretty.py
│  │     │  │  │  ├─ progress.py
│  │     │  │  │  ├─ progress_bar.py
│  │     │  │  │  ├─ prompt.py
│  │     │  │  │  ├─ protocol.py
│  │     │  │  │  ├─ py.typed
│  │     │  │  │  ├─ region.py
│  │     │  │  │  ├─ repr.py
│  │     │  │  │  ├─ rule.py
│  │     │  │  │  ├─ scope.py
│  │     │  │  │  ├─ screen.py
│  │     │  │  │  ├─ segment.py
│  │     │  │  │  ├─ spinner.py
│  │     │  │  │  ├─ status.py
│  │     │  │  │  ├─ style.py
│  │     │  │  │  ├─ styled.py
│  │     │  │  │  ├─ syntax.py
│  │     │  │  │  ├─ table.py
│  │     │  │  │  ├─ terminal_theme.py
│  │     │  │  │  ├─ text.py
│  │     │  │  │  ├─ theme.py
│  │     │  │  │  ├─ themes.py
│  │     │  │  │  ├─ traceback.py
│  │     │  │  │  ├─ tree.py
│  │     │  │  │  ├─ _cell_widths.py
│  │     │  │  │  ├─ _emoji_codes.py
│  │     │  │  │  ├─ _emoji_replace.py
│  │     │  │  │  ├─ _export_format.py
│  │     │  │  │  ├─ _extension.py
│  │     │  │  │  ├─ _fileno.py
│  │     │  │  │  ├─ _inspect.py
│  │     │  │  │  ├─ _log_render.py
│  │     │  │  │  ├─ _loop.py
│  │     │  │  │  ├─ _null_file.py
│  │     │  │  │  ├─ _palettes.py
│  │     │  │  │  ├─ _pick.py
│  │     │  │  │  ├─ _ratio.py
│  │     │  │  │  ├─ _spinners.py
│  │     │  │  │  ├─ _stack.py
│  │     │  │  │  ├─ _timer.py
│  │     │  │  │  ├─ _win32_console.py
│  │     │  │  │  ├─ _windows.py
│  │     │  │  │  ├─ _windows_renderer.py
│  │     │  │  │  ├─ _wrap.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  ├─ __main__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ abc.cpython-313.pyc
│  │     │  │  │     ├─ align.cpython-313.pyc
│  │     │  │  │     ├─ ansi.cpython-313.pyc
│  │     │  │  │     ├─ bar.cpython-313.pyc
│  │     │  │  │     ├─ box.cpython-313.pyc
│  │     │  │  │     ├─ cells.cpython-313.pyc
│  │     │  │  │     ├─ color.cpython-313.pyc
│  │     │  │  │     ├─ color_triplet.cpython-313.pyc
│  │     │  │  │     ├─ columns.cpython-313.pyc
│  │     │  │  │     ├─ console.cpython-313.pyc
│  │     │  │  │     ├─ constrain.cpython-313.pyc
│  │     │  │  │     ├─ containers.cpython-313.pyc
│  │     │  │  │     ├─ control.cpython-313.pyc
│  │     │  │  │     ├─ default_styles.cpython-313.pyc
│  │     │  │  │     ├─ diagnose.cpython-313.pyc
│  │     │  │  │     ├─ emoji.cpython-313.pyc
│  │     │  │  │     ├─ errors.cpython-313.pyc
│  │     │  │  │     ├─ filesize.cpython-313.pyc
│  │     │  │  │     ├─ file_proxy.cpython-313.pyc
│  │     │  │  │     ├─ highlighter.cpython-313.pyc
│  │     │  │  │     ├─ json.cpython-313.pyc
│  │     │  │  │     ├─ jupyter.cpython-313.pyc
│  │     │  │  │     ├─ layout.cpython-313.pyc
│  │     │  │  │     ├─ live.cpython-313.pyc
│  │     │  │  │     ├─ live_render.cpython-313.pyc
│  │     │  │  │     ├─ logging.cpython-313.pyc
│  │     │  │  │     ├─ markup.cpython-313.pyc
│  │     │  │  │     ├─ measure.cpython-313.pyc
│  │     │  │  │     ├─ padding.cpython-313.pyc
│  │     │  │  │     ├─ pager.cpython-313.pyc
│  │     │  │  │     ├─ palette.cpython-313.pyc
│  │     │  │  │     ├─ panel.cpython-313.pyc
│  │     │  │  │     ├─ pretty.cpython-313.pyc
│  │     │  │  │     ├─ progress.cpython-313.pyc
│  │     │  │  │     ├─ progress_bar.cpython-313.pyc
│  │     │  │  │     ├─ prompt.cpython-313.pyc
│  │     │  │  │     ├─ protocol.cpython-313.pyc
│  │     │  │  │     ├─ region.cpython-313.pyc
│  │     │  │  │     ├─ repr.cpython-313.pyc
│  │     │  │  │     ├─ rule.cpython-313.pyc
│  │     │  │  │     ├─ scope.cpython-313.pyc
│  │     │  │  │     ├─ screen.cpython-313.pyc
│  │     │  │  │     ├─ segment.cpython-313.pyc
│  │     │  │  │     ├─ spinner.cpython-313.pyc
│  │     │  │  │     ├─ status.cpython-313.pyc
│  │     │  │  │     ├─ style.cpython-313.pyc
│  │     │  │  │     ├─ styled.cpython-313.pyc
│  │     │  │  │     ├─ syntax.cpython-313.pyc
│  │     │  │  │     ├─ table.cpython-313.pyc
│  │     │  │  │     ├─ terminal_theme.cpython-313.pyc
│  │     │  │  │     ├─ text.cpython-313.pyc
│  │     │  │  │     ├─ theme.cpython-313.pyc
│  │     │  │  │     ├─ themes.cpython-313.pyc
│  │     │  │  │     ├─ traceback.cpython-313.pyc
│  │     │  │  │     ├─ tree.cpython-313.pyc
│  │     │  │  │     ├─ _cell_widths.cpython-313.pyc
│  │     │  │  │     ├─ _emoji_codes.cpython-313.pyc
│  │     │  │  │     ├─ _emoji_replace.cpython-313.pyc
│  │     │  │  │     ├─ _export_format.cpython-313.pyc
│  │     │  │  │     ├─ _extension.cpython-313.pyc
│  │     │  │  │     ├─ _fileno.cpython-313.pyc
│  │     │  │  │     ├─ _inspect.cpython-313.pyc
│  │     │  │  │     ├─ _log_render.cpython-313.pyc
│  │     │  │  │     ├─ _loop.cpython-313.pyc
│  │     │  │  │     ├─ _null_file.cpython-313.pyc
│  │     │  │  │     ├─ _palettes.cpython-313.pyc
│  │     │  │  │     ├─ _pick.cpython-313.pyc
│  │     │  │  │     ├─ _ratio.cpython-313.pyc
│  │     │  │  │     ├─ _spinners.cpython-313.pyc
│  │     │  │  │     ├─ _stack.cpython-313.pyc
│  │     │  │  │     ├─ _timer.cpython-313.pyc
│  │     │  │  │     ├─ _win32_console.cpython-313.pyc
│  │     │  │  │     ├─ _windows.cpython-313.pyc
│  │     │  │  │     ├─ _windows_renderer.cpython-313.pyc
│  │     │  │  │     ├─ _wrap.cpython-313.pyc
│  │     │  │  │     ├─ __init__.cpython-313.pyc
│  │     │  │  │     └─ __main__.cpython-313.pyc
│  │     │  │  ├─ tomli
│  │     │  │  │  ├─ py.typed
│  │     │  │  │  ├─ _parser.py
│  │     │  │  │  ├─ _re.py
│  │     │  │  │  ├─ _types.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ _parser.cpython-313.pyc
│  │     │  │  │     ├─ _re.cpython-313.pyc
│  │     │  │  │     ├─ _types.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ tomli_w
│  │     │  │  │  ├─ py.typed
│  │     │  │  │  ├─ _writer.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ _writer.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ truststore
│  │     │  │  │  ├─ py.typed
│  │     │  │  │  ├─ _api.py
│  │     │  │  │  ├─ _macos.py
│  │     │  │  │  ├─ _openssl.py
│  │     │  │  │  ├─ _ssl_constants.py
│  │     │  │  │  ├─ _windows.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ _api.cpython-313.pyc
│  │     │  │  │     ├─ _macos.cpython-313.pyc
│  │     │  │  │     ├─ _openssl.cpython-313.pyc
│  │     │  │  │     ├─ _ssl_constants.cpython-313.pyc
│  │     │  │  │     ├─ _windows.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ urllib3
│  │     │  │  │  ├─ connection.py
│  │     │  │  │  ├─ connectionpool.py
│  │     │  │  │  ├─ contrib
│  │     │  │  │  │  ├─ appengine.py
│  │     │  │  │  │  ├─ ntlmpool.py
│  │     │  │  │  │  ├─ pyopenssl.py
│  │     │  │  │  │  ├─ securetransport.py
│  │     │  │  │  │  ├─ socks.py
│  │     │  │  │  │  ├─ _appengine_environ.py
│  │     │  │  │  │  ├─ _securetransport
│  │     │  │  │  │  │  ├─ bindings.py
│  │     │  │  │  │  │  ├─ low_level.py
│  │     │  │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  │  └─ __pycache__
│  │     │  │  │  │  │     ├─ bindings.cpython-313.pyc
│  │     │  │  │  │  │     ├─ low_level.cpython-313.pyc
│  │     │  │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ appengine.cpython-313.pyc
│  │     │  │  │  │     ├─ ntlmpool.cpython-313.pyc
│  │     │  │  │  │     ├─ pyopenssl.cpython-313.pyc
│  │     │  │  │  │     ├─ securetransport.cpython-313.pyc
│  │     │  │  │  │     ├─ socks.cpython-313.pyc
│  │     │  │  │  │     ├─ _appengine_environ.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ exceptions.py
│  │     │  │  │  ├─ fields.py
│  │     │  │  │  ├─ filepost.py
│  │     │  │  │  ├─ packages
│  │     │  │  │  │  ├─ backports
│  │     │  │  │  │  │  ├─ makefile.py
│  │     │  │  │  │  │  ├─ weakref_finalize.py
│  │     │  │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  │  └─ __pycache__
│  │     │  │  │  │  │     ├─ makefile.cpython-313.pyc
│  │     │  │  │  │  │     ├─ weakref_finalize.cpython-313.pyc
│  │     │  │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  │  ├─ six.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ six.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ poolmanager.py
│  │     │  │  │  ├─ request.py
│  │     │  │  │  ├─ response.py
│  │     │  │  │  ├─ util
│  │     │  │  │  │  ├─ connection.py
│  │     │  │  │  │  ├─ proxy.py
│  │     │  │  │  │  ├─ queue.py
│  │     │  │  │  │  ├─ request.py
│  │     │  │  │  │  ├─ response.py
│  │     │  │  │  │  ├─ retry.py
│  │     │  │  │  │  ├─ ssltransport.py
│  │     │  │  │  │  ├─ ssl_.py
│  │     │  │  │  │  ├─ ssl_match_hostname.py
│  │     │  │  │  │  ├─ timeout.py
│  │     │  │  │  │  ├─ url.py
│  │     │  │  │  │  ├─ wait.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ connection.cpython-313.pyc
│  │     │  │  │  │     ├─ proxy.cpython-313.pyc
│  │     │  │  │  │     ├─ queue.cpython-313.pyc
│  │     │  │  │  │     ├─ request.cpython-313.pyc
│  │     │  │  │  │     ├─ response.cpython-313.pyc
│  │     │  │  │  │     ├─ retry.cpython-313.pyc
│  │     │  │  │  │     ├─ ssltransport.cpython-313.pyc
│  │     │  │  │  │     ├─ ssl_.cpython-313.pyc
│  │     │  │  │  │     ├─ ssl_match_hostname.cpython-313.pyc
│  │     │  │  │  │     ├─ timeout.cpython-313.pyc
│  │     │  │  │  │     ├─ url.cpython-313.pyc
│  │     │  │  │  │     ├─ wait.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ _collections.py
│  │     │  │  │  ├─ _version.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ connection.cpython-313.pyc
│  │     │  │  │     ├─ connectionpool.cpython-313.pyc
│  │     │  │  │     ├─ exceptions.cpython-313.pyc
│  │     │  │  │     ├─ fields.cpython-313.pyc
│  │     │  │  │     ├─ filepost.cpython-313.pyc
│  │     │  │  │     ├─ poolmanager.cpython-313.pyc
│  │     │  │  │     ├─ request.cpython-313.pyc
│  │     │  │  │     ├─ response.cpython-313.pyc
│  │     │  │  │     ├─ _collections.cpython-313.pyc
│  │     │  │  │     ├─ _version.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ vendor.txt
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ __init__.py
│  │     │  ├─ __main__.py
│  │     │  ├─ __pip-runner__.py
│  │     │  └─ __pycache__
│  │     │     ├─ __init__.cpython-313.pyc
│  │     │     ├─ __main__.cpython-313.pyc
│  │     │     └─ __pip-runner__.cpython-313.pyc
│  │     ├─ platformdirs
│  │     │  ├─ android.py
│  │     │  ├─ api.py
│  │     │  ├─ macos.py
│  │     │  ├─ py.typed
│  │     │  ├─ unix.py
│  │     │  ├─ version.py
│  │     │  ├─ windows.py
│  │     │  ├─ __init__.py
│  │     │  ├─ __main__.py
│  │     │  └─ __pycache__
│  │     │     ├─ android.cpython-313.pyc
│  │     │     ├─ api.cpython-313.pyc
│  │     │     ├─ macos.cpython-313.pyc
│  │     │     ├─ unix.cpython-313.pyc
│  │     │     ├─ version.cpython-313.pyc
│  │     │     ├─ windows.cpython-313.pyc
│  │     │     ├─ __init__.cpython-313.pyc
│  │     │     └─ __main__.cpython-313.pyc
│  │     ├─ pooch
│  │     │  ├─ core.py
│  │     │  ├─ downloaders.py
│  │     │  ├─ hashes.py
│  │     │  ├─ processors.py
│  │     │  ├─ tests
│  │     │  │  ├─ data
│  │     │  │  │  ├─ large-data.txt
│  │     │  │  │  ├─ registry-custom-url.txt
│  │     │  │  │  ├─ registry-invalid.txt
│  │     │  │  │  ├─ registry-spaces.txt
│  │     │  │  │  ├─ registry.txt
│  │     │  │  │  ├─ registry_comments.txt
│  │     │  │  │  ├─ store
│  │     │  │  │  │  ├─ subdir
│  │     │  │  │  │  │  └─ tiny-data.txt
│  │     │  │  │  │  └─ tiny-data.txt
│  │     │  │  │  ├─ store.tar.gz
│  │     │  │  │  ├─ store.zip
│  │     │  │  │  ├─ tiny-data.tar.gz
│  │     │  │  │  ├─ tiny-data.txt
│  │     │  │  │  ├─ tiny-data.txt.bz2
│  │     │  │  │  ├─ tiny-data.txt.gz
│  │     │  │  │  ├─ tiny-data.txt.xz
│  │     │  │  │  └─ tiny-data.zip
│  │     │  │  ├─ test_core.py
│  │     │  │  ├─ test_downloaders.py
│  │     │  │  ├─ test_hashes.py
│  │     │  │  ├─ test_integration.py
│  │     │  │  ├─ test_processors.py
│  │     │  │  ├─ test_utils.py
│  │     │  │  ├─ test_version.py
│  │     │  │  ├─ utils.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ test_core.cpython-313.pyc
│  │     │  │     ├─ test_downloaders.cpython-313.pyc
│  │     │  │     ├─ test_hashes.cpython-313.pyc
│  │     │  │     ├─ test_integration.cpython-313.pyc
│  │     │  │     ├─ test_processors.cpython-313.pyc
│  │     │  │     ├─ test_utils.cpython-313.pyc
│  │     │  │     ├─ test_version.cpython-313.pyc
│  │     │  │     ├─ utils.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ utils.py
│  │     │  ├─ _version.py
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ core.cpython-313.pyc
│  │     │     ├─ downloaders.cpython-313.pyc
│  │     │     ├─ hashes.cpython-313.pyc
│  │     │     ├─ processors.cpython-313.pyc
│  │     │     ├─ utils.cpython-313.pyc
│  │     │     ├─ _version.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ pyasn1
│  │     │  ├─ codec
│  │     │  │  ├─ ber
│  │     │  │  │  ├─ decoder.py
│  │     │  │  │  ├─ encoder.py
│  │     │  │  │  ├─ eoo.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ decoder.cpython-313.pyc
│  │     │  │  │     ├─ encoder.cpython-313.pyc
│  │     │  │  │     ├─ eoo.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ cer
│  │     │  │  │  ├─ decoder.py
│  │     │  │  │  ├─ encoder.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ decoder.cpython-313.pyc
│  │     │  │  │     ├─ encoder.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ der
│  │     │  │  │  ├─ decoder.py
│  │     │  │  │  ├─ encoder.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ decoder.cpython-313.pyc
│  │     │  │  │     ├─ encoder.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ native
│  │     │  │  │  ├─ decoder.py
│  │     │  │  │  ├─ encoder.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ decoder.cpython-313.pyc
│  │     │  │  │     ├─ encoder.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ streaming.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ streaming.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ compat
│  │     │  │  ├─ integer.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ integer.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ debug.py
│  │     │  ├─ error.py
│  │     │  ├─ type
│  │     │  │  ├─ base.py
│  │     │  │  ├─ char.py
│  │     │  │  ├─ constraint.py
│  │     │  │  ├─ error.py
│  │     │  │  ├─ namedtype.py
│  │     │  │  ├─ namedval.py
│  │     │  │  ├─ opentype.py
│  │     │  │  ├─ tag.py
│  │     │  │  ├─ tagmap.py
│  │     │  │  ├─ univ.py
│  │     │  │  ├─ useful.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ base.cpython-313.pyc
│  │     │  │     ├─ char.cpython-313.pyc
│  │     │  │     ├─ constraint.cpython-313.pyc
│  │     │  │     ├─ error.cpython-313.pyc
│  │     │  │     ├─ namedtype.cpython-313.pyc
│  │     │  │     ├─ namedval.cpython-313.pyc
│  │     │  │     ├─ opentype.cpython-313.pyc
│  │     │  │     ├─ tag.cpython-313.pyc
│  │     │  │     ├─ tagmap.cpython-313.pyc
│  │     │  │     ├─ univ.cpython-313.pyc
│  │     │  │     ├─ useful.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ debug.cpython-313.pyc
│  │     │     ├─ error.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ pycparser
│  │     │  ├─ ast_transforms.py
│  │     │  ├─ c_ast.py
│  │     │  ├─ c_generator.py
│  │     │  ├─ c_lexer.py
│  │     │  ├─ c_parser.py
│  │     │  ├─ lextab.py
│  │     │  ├─ ply
│  │     │  │  ├─ cpp.py
│  │     │  │  ├─ ctokens.py
│  │     │  │  ├─ lex.py
│  │     │  │  ├─ yacc.py
│  │     │  │  ├─ ygen.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ cpp.cpython-313.pyc
│  │     │  │     ├─ ctokens.cpython-313.pyc
│  │     │  │     ├─ lex.cpython-313.pyc
│  │     │  │     ├─ yacc.cpython-313.pyc
│  │     │  │     ├─ ygen.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ plyparser.py
│  │     │  ├─ yacctab.py
│  │     │  ├─ _ast_gen.py
│  │     │  ├─ _build_tables.py
│  │     │  ├─ _c_ast.cfg
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ ast_transforms.cpython-313.pyc
│  │     │     ├─ c_ast.cpython-313.pyc
│  │     │     ├─ c_generator.cpython-313.pyc
│  │     │     ├─ c_lexer.cpython-313.pyc
│  │     │     ├─ c_parser.cpython-313.pyc
│  │     │     ├─ lextab.cpython-313.pyc
│  │     │     ├─ plyparser.cpython-313.pyc
│  │     │     ├─ yacctab.cpython-313.pyc
│  │     │     ├─ _ast_gen.cpython-313.pyc
│  │     │     ├─ _build_tables.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ pydantic
│  │     │  ├─ aliases.py
│  │     │  ├─ alias_generators.py
│  │     │  ├─ annotated_handlers.py
│  │     │  ├─ class_validators.py
│  │     │  ├─ color.py
│  │     │  ├─ config.py
│  │     │  ├─ dataclasses.py
│  │     │  ├─ datetime_parse.py
│  │     │  ├─ decorator.py
│  │     │  ├─ deprecated
│  │     │  │  ├─ class_validators.py
│  │     │  │  ├─ config.py
│  │     │  │  ├─ copy_internals.py
│  │     │  │  ├─ decorator.py
│  │     │  │  ├─ json.py
│  │     │  │  ├─ parse.py
│  │     │  │  ├─ tools.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ class_validators.cpython-313.pyc
│  │     │  │     ├─ config.cpython-313.pyc
│  │     │  │     ├─ copy_internals.cpython-313.pyc
│  │     │  │     ├─ decorator.cpython-313.pyc
│  │     │  │     ├─ json.cpython-313.pyc
│  │     │  │     ├─ parse.cpython-313.pyc
│  │     │  │     ├─ tools.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ env_settings.py
│  │     │  ├─ errors.py
│  │     │  ├─ error_wrappers.py
│  │     │  ├─ experimental
│  │     │  │  ├─ arguments_schema.py
│  │     │  │  ├─ missing_sentinel.py
│  │     │  │  ├─ pipeline.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ arguments_schema.cpython-313.pyc
│  │     │  │     ├─ missing_sentinel.cpython-313.pyc
│  │     │  │     ├─ pipeline.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ fields.py
│  │     │  ├─ functional_serializers.py
│  │     │  ├─ functional_validators.py
│  │     │  ├─ generics.py
│  │     │  ├─ json.py
│  │     │  ├─ json_schema.py
│  │     │  ├─ main.py
│  │     │  ├─ mypy.py
│  │     │  ├─ networks.py
│  │     │  ├─ parse.py
│  │     │  ├─ plugin
│  │     │  │  ├─ _loader.py
│  │     │  │  ├─ _schema_validator.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ _loader.cpython-313.pyc
│  │     │  │     ├─ _schema_validator.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ py.typed
│  │     │  ├─ root_model.py
│  │     │  ├─ schema.py
│  │     │  ├─ tools.py
│  │     │  ├─ types.py
│  │     │  ├─ type_adapter.py
│  │     │  ├─ typing.py
│  │     │  ├─ utils.py
│  │     │  ├─ v1
│  │     │  │  ├─ annotated_types.py
│  │     │  │  ├─ class_validators.py
│  │     │  │  ├─ color.py
│  │     │  │  ├─ config.py
│  │     │  │  ├─ dataclasses.py
│  │     │  │  ├─ datetime_parse.py
│  │     │  │  ├─ decorator.py
│  │     │  │  ├─ env_settings.py
│  │     │  │  ├─ errors.py
│  │     │  │  ├─ error_wrappers.py
│  │     │  │  ├─ fields.py
│  │     │  │  ├─ generics.py
│  │     │  │  ├─ json.py
│  │     │  │  ├─ main.py
│  │     │  │  ├─ mypy.py
│  │     │  │  ├─ networks.py
│  │     │  │  ├─ parse.py
│  │     │  │  ├─ py.typed
│  │     │  │  ├─ schema.py
│  │     │  │  ├─ tools.py
│  │     │  │  ├─ types.py
│  │     │  │  ├─ typing.py
│  │     │  │  ├─ utils.py
│  │     │  │  ├─ validators.py
│  │     │  │  ├─ version.py
│  │     │  │  ├─ _hypothesis_plugin.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ annotated_types.cpython-313.pyc
│  │     │  │     ├─ class_validators.cpython-313.pyc
│  │     │  │     ├─ color.cpython-313.pyc
│  │     │  │     ├─ config.cpython-313.pyc
│  │     │  │     ├─ dataclasses.cpython-313.pyc
│  │     │  │     ├─ datetime_parse.cpython-313.pyc
│  │     │  │     ├─ decorator.cpython-313.pyc
│  │     │  │     ├─ env_settings.cpython-313.pyc
│  │     │  │     ├─ errors.cpython-313.pyc
│  │     │  │     ├─ error_wrappers.cpython-313.pyc
│  │     │  │     ├─ fields.cpython-313.pyc
│  │     │  │     ├─ generics.cpython-313.pyc
│  │     │  │     ├─ json.cpython-313.pyc
│  │     │  │     ├─ main.cpython-313.pyc
│  │     │  │     ├─ mypy.cpython-313.pyc
│  │     │  │     ├─ networks.cpython-313.pyc
│  │     │  │     ├─ parse.cpython-313.pyc
│  │     │  │     ├─ schema.cpython-313.pyc
│  │     │  │     ├─ tools.cpython-313.pyc
│  │     │  │     ├─ types.cpython-313.pyc
│  │     │  │     ├─ typing.cpython-313.pyc
│  │     │  │     ├─ utils.cpython-313.pyc
│  │     │  │     ├─ validators.cpython-313.pyc
│  │     │  │     ├─ version.cpython-313.pyc
│  │     │  │     ├─ _hypothesis_plugin.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ validate_call_decorator.py
│  │     │  ├─ validators.py
│  │     │  ├─ version.py
│  │     │  ├─ warnings.py
│  │     │  ├─ _internal
│  │     │  │  ├─ _config.py
│  │     │  │  ├─ _core_metadata.py
│  │     │  │  ├─ _core_utils.py
│  │     │  │  ├─ _dataclasses.py
│  │     │  │  ├─ _decorators.py
│  │     │  │  ├─ _decorators_v1.py
│  │     │  │  ├─ _discriminated_union.py
│  │     │  │  ├─ _docs_extraction.py
│  │     │  │  ├─ _fields.py
│  │     │  │  ├─ _forward_ref.py
│  │     │  │  ├─ _generate_schema.py
│  │     │  │  ├─ _generics.py
│  │     │  │  ├─ _git.py
│  │     │  │  ├─ _import_utils.py
│  │     │  │  ├─ _internal_dataclass.py
│  │     │  │  ├─ _known_annotated_metadata.py
│  │     │  │  ├─ _mock_val_ser.py
│  │     │  │  ├─ _model_construction.py
│  │     │  │  ├─ _namespace_utils.py
│  │     │  │  ├─ _repr.py
│  │     │  │  ├─ _schema_gather.py
│  │     │  │  ├─ _schema_generation_shared.py
│  │     │  │  ├─ _serializers.py
│  │     │  │  ├─ _signature.py
│  │     │  │  ├─ _typing_extra.py
│  │     │  │  ├─ _utils.py
│  │     │  │  ├─ _validate_call.py
│  │     │  │  ├─ _validators.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ _config.cpython-313.pyc
│  │     │  │     ├─ _core_metadata.cpython-313.pyc
│  │     │  │     ├─ _core_utils.cpython-313.pyc
│  │     │  │     ├─ _dataclasses.cpython-313.pyc
│  │     │  │     ├─ _decorators.cpython-313.pyc
│  │     │  │     ├─ _decorators_v1.cpython-313.pyc
│  │     │  │     ├─ _discriminated_union.cpython-313.pyc
│  │     │  │     ├─ _docs_extraction.cpython-313.pyc
│  │     │  │     ├─ _fields.cpython-313.pyc
│  │     │  │     ├─ _forward_ref.cpython-313.pyc
│  │     │  │     ├─ _generate_schema.cpython-313.pyc
│  │     │  │     ├─ _generics.cpython-313.pyc
│  │     │  │     ├─ _git.cpython-313.pyc
│  │     │  │     ├─ _import_utils.cpython-313.pyc
│  │     │  │     ├─ _internal_dataclass.cpython-313.pyc
│  │     │  │     ├─ _known_annotated_metadata.cpython-313.pyc
│  │     │  │     ├─ _mock_val_ser.cpython-313.pyc
│  │     │  │     ├─ _model_construction.cpython-313.pyc
│  │     │  │     ├─ _namespace_utils.cpython-313.pyc
│  │     │  │     ├─ _repr.cpython-313.pyc
│  │     │  │     ├─ _schema_gather.cpython-313.pyc
│  │     │  │     ├─ _schema_generation_shared.cpython-313.pyc
│  │     │  │     ├─ _serializers.cpython-313.pyc
│  │     │  │     ├─ _signature.cpython-313.pyc
│  │     │  │     ├─ _typing_extra.cpython-313.pyc
│  │     │  │     ├─ _utils.cpython-313.pyc
│  │     │  │     ├─ _validate_call.cpython-313.pyc
│  │     │  │     ├─ _validators.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ _migration.py
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ aliases.cpython-313.pyc
│  │     │     ├─ alias_generators.cpython-313.pyc
│  │     │     ├─ annotated_handlers.cpython-313.pyc
│  │     │     ├─ class_validators.cpython-313.pyc
│  │     │     ├─ color.cpython-313.pyc
│  │     │     ├─ config.cpython-313.pyc
│  │     │     ├─ dataclasses.cpython-313.pyc
│  │     │     ├─ datetime_parse.cpython-313.pyc
│  │     │     ├─ decorator.cpython-313.pyc
│  │     │     ├─ env_settings.cpython-313.pyc
│  │     │     ├─ errors.cpython-313.pyc
│  │     │     ├─ error_wrappers.cpython-313.pyc
│  │     │     ├─ fields.cpython-313.pyc
│  │     │     ├─ functional_serializers.cpython-313.pyc
│  │     │     ├─ functional_validators.cpython-313.pyc
│  │     │     ├─ generics.cpython-313.pyc
│  │     │     ├─ json.cpython-313.pyc
│  │     │     ├─ json_schema.cpython-313.pyc
│  │     │     ├─ main.cpython-313.pyc
│  │     │     ├─ mypy.cpython-313.pyc
│  │     │     ├─ networks.cpython-313.pyc
│  │     │     ├─ parse.cpython-313.pyc
│  │     │     ├─ root_model.cpython-313.pyc
│  │     │     ├─ schema.cpython-313.pyc
│  │     │     ├─ tools.cpython-313.pyc
│  │     │     ├─ types.cpython-313.pyc
│  │     │     ├─ type_adapter.cpython-313.pyc
│  │     │     ├─ typing.cpython-313.pyc
│  │     │     ├─ utils.cpython-313.pyc
│  │     │     ├─ validate_call_decorator.cpython-313.pyc
│  │     │     ├─ validators.cpython-313.pyc
│  │     │     ├─ version.cpython-313.pyc
│  │     │     ├─ warnings.cpython-313.pyc
│  │     │     ├─ _migration.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ pydantic_core
│  │     │  ├─ core_schema.py
│  │     │  ├─ py.typed
│  │     │  ├─ _pydantic_core.cp313-win_amd64.pyd
│  │     │  ├─ _pydantic_core.pyi
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ core_schema.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ pymongo
│  │     │  ├─ asynchronous
│  │     │  │  ├─ aggregation.py
│  │     │  │  ├─ auth.py
│  │     │  │  ├─ auth_aws.py
│  │     │  │  ├─ auth_oidc.py
│  │     │  │  ├─ bulk.py
│  │     │  │  ├─ change_stream.py
│  │     │  │  ├─ client_bulk.py
│  │     │  │  ├─ client_session.py
│  │     │  │  ├─ collection.py
│  │     │  │  ├─ command_cursor.py
│  │     │  │  ├─ cursor.py
│  │     │  │  ├─ database.py
│  │     │  │  ├─ encryption.py
│  │     │  │  ├─ helpers.py
│  │     │  │  ├─ mongo_client.py
│  │     │  │  ├─ monitor.py
│  │     │  │  ├─ network.py
│  │     │  │  ├─ pool.py
│  │     │  │  ├─ server.py
│  │     │  │  ├─ settings.py
│  │     │  │  ├─ srv_resolver.py
│  │     │  │  ├─ topology.py
│  │     │  │  ├─ uri_parser.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ aggregation.cpython-313.pyc
│  │     │  │     ├─ auth.cpython-313.pyc
│  │     │  │     ├─ auth_aws.cpython-313.pyc
│  │     │  │     ├─ auth_oidc.cpython-313.pyc
│  │     │  │     ├─ bulk.cpython-313.pyc
│  │     │  │     ├─ change_stream.cpython-313.pyc
│  │     │  │     ├─ client_bulk.cpython-313.pyc
│  │     │  │     ├─ client_session.cpython-313.pyc
│  │     │  │     ├─ collection.cpython-313.pyc
│  │     │  │     ├─ command_cursor.cpython-313.pyc
│  │     │  │     ├─ cursor.cpython-313.pyc
│  │     │  │     ├─ database.cpython-313.pyc
│  │     │  │     ├─ encryption.cpython-313.pyc
│  │     │  │     ├─ helpers.cpython-313.pyc
│  │     │  │     ├─ mongo_client.cpython-313.pyc
│  │     │  │     ├─ monitor.cpython-313.pyc
│  │     │  │     ├─ network.cpython-313.pyc
│  │     │  │     ├─ pool.cpython-313.pyc
│  │     │  │     ├─ server.cpython-313.pyc
│  │     │  │     ├─ settings.cpython-313.pyc
│  │     │  │     ├─ srv_resolver.cpython-313.pyc
│  │     │  │     ├─ topology.cpython-313.pyc
│  │     │  │     ├─ uri_parser.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ auth.py
│  │     │  ├─ auth_oidc.py
│  │     │  ├─ auth_oidc_shared.py
│  │     │  ├─ auth_shared.py
│  │     │  ├─ bulk_shared.py
│  │     │  ├─ change_stream.py
│  │     │  ├─ client_options.py
│  │     │  ├─ client_session.py
│  │     │  ├─ collation.py
│  │     │  ├─ collection.py
│  │     │  ├─ command_cursor.py
│  │     │  ├─ common.py
│  │     │  ├─ compression_support.py
│  │     │  ├─ cursor.py
│  │     │  ├─ cursor_shared.py
│  │     │  ├─ daemon.py
│  │     │  ├─ database.py
│  │     │  ├─ database_shared.py
│  │     │  ├─ driver_info.py
│  │     │  ├─ encryption.py
│  │     │  ├─ encryption_options.py
│  │     │  ├─ errors.py
│  │     │  ├─ event_loggers.py
│  │     │  ├─ hello.py
│  │     │  ├─ helpers_shared.py
│  │     │  ├─ lock.py
│  │     │  ├─ logger.py
│  │     │  ├─ max_staleness_selectors.py
│  │     │  ├─ message.py
│  │     │  ├─ mongo_client.py
│  │     │  ├─ monitoring.py
│  │     │  ├─ network_layer.py
│  │     │  ├─ ocsp_cache.py
│  │     │  ├─ ocsp_support.py
│  │     │  ├─ operations.py
│  │     │  ├─ periodic_executor.py
│  │     │  ├─ pool.py
│  │     │  ├─ pool_options.py
│  │     │  ├─ pool_shared.py
│  │     │  ├─ py.typed
│  │     │  ├─ pyopenssl_context.py
│  │     │  ├─ read_concern.py
│  │     │  ├─ read_preferences.py
│  │     │  ├─ response.py
│  │     │  ├─ results.py
│  │     │  ├─ saslprep.py
│  │     │  ├─ server_api.py
│  │     │  ├─ server_description.py
│  │     │  ├─ server_selectors.py
│  │     │  ├─ server_type.py
│  │     │  ├─ socket_checker.py
│  │     │  ├─ ssl_context.py
│  │     │  ├─ ssl_support.py
│  │     │  ├─ synchronous
│  │     │  │  ├─ aggregation.py
│  │     │  │  ├─ auth.py
│  │     │  │  ├─ auth_aws.py
│  │     │  │  ├─ auth_oidc.py
│  │     │  │  ├─ bulk.py
│  │     │  │  ├─ change_stream.py
│  │     │  │  ├─ client_bulk.py
│  │     │  │  ├─ client_session.py
│  │     │  │  ├─ collection.py
│  │     │  │  ├─ command_cursor.py
│  │     │  │  ├─ cursor.py
│  │     │  │  ├─ database.py
│  │     │  │  ├─ encryption.py
│  │     │  │  ├─ helpers.py
│  │     │  │  ├─ mongo_client.py
│  │     │  │  ├─ monitor.py
│  │     │  │  ├─ network.py
│  │     │  │  ├─ pool.py
│  │     │  │  ├─ server.py
│  │     │  │  ├─ settings.py
│  │     │  │  ├─ srv_resolver.py
│  │     │  │  ├─ topology.py
│  │     │  │  ├─ uri_parser.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ aggregation.cpython-313.pyc
│  │     │  │     ├─ auth.cpython-313.pyc
│  │     │  │     ├─ auth_aws.cpython-313.pyc
│  │     │  │     ├─ auth_oidc.cpython-313.pyc
│  │     │  │     ├─ bulk.cpython-313.pyc
│  │     │  │     ├─ change_stream.cpython-313.pyc
│  │     │  │     ├─ client_bulk.cpython-313.pyc
│  │     │  │     ├─ client_session.cpython-313.pyc
│  │     │  │     ├─ collection.cpython-313.pyc
│  │     │  │     ├─ command_cursor.cpython-313.pyc
│  │     │  │     ├─ cursor.cpython-313.pyc
│  │     │  │     ├─ database.cpython-313.pyc
│  │     │  │     ├─ encryption.cpython-313.pyc
│  │     │  │     ├─ helpers.cpython-313.pyc
│  │     │  │     ├─ mongo_client.cpython-313.pyc
│  │     │  │     ├─ monitor.cpython-313.pyc
│  │     │  │     ├─ network.cpython-313.pyc
│  │     │  │     ├─ pool.cpython-313.pyc
│  │     │  │     ├─ server.cpython-313.pyc
│  │     │  │     ├─ settings.cpython-313.pyc
│  │     │  │     ├─ srv_resolver.cpython-313.pyc
│  │     │  │     ├─ topology.cpython-313.pyc
│  │     │  │     ├─ uri_parser.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ topology_description.py
│  │     │  ├─ typings.py
│  │     │  ├─ uri_parser.py
│  │     │  ├─ uri_parser_shared.py
│  │     │  ├─ write_concern.py
│  │     │  ├─ _asyncio_lock.py
│  │     │  ├─ _asyncio_task.py
│  │     │  ├─ _azure_helpers.py
│  │     │  ├─ _client_bulk_shared.py
│  │     │  ├─ _cmessage.cp310-win_amd64.pyd
│  │     │  ├─ _cmessage.cp311-win_amd64.pyd
│  │     │  ├─ _cmessage.cp312-win_amd64.pyd
│  │     │  ├─ _cmessage.cp313-win_amd64.pyd
│  │     │  ├─ _cmessage.cp39-win_amd64.pyd
│  │     │  ├─ _cmessagemodule.c
│  │     │  ├─ _csot.py
│  │     │  ├─ _gcp_helpers.py
│  │     │  ├─ _version.py
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ auth.cpython-313.pyc
│  │     │     ├─ auth_oidc.cpython-313.pyc
│  │     │     ├─ auth_oidc_shared.cpython-313.pyc
│  │     │     ├─ auth_shared.cpython-313.pyc
│  │     │     ├─ bulk_shared.cpython-313.pyc
│  │     │     ├─ change_stream.cpython-313.pyc
│  │     │     ├─ client_options.cpython-313.pyc
│  │     │     ├─ client_session.cpython-313.pyc
│  │     │     ├─ collation.cpython-313.pyc
│  │     │     ├─ collection.cpython-313.pyc
│  │     │     ├─ command_cursor.cpython-313.pyc
│  │     │     ├─ common.cpython-313.pyc
│  │     │     ├─ compression_support.cpython-313.pyc
│  │     │     ├─ cursor.cpython-313.pyc
│  │     │     ├─ cursor_shared.cpython-313.pyc
│  │     │     ├─ daemon.cpython-313.pyc
│  │     │     ├─ database.cpython-313.pyc
│  │     │     ├─ database_shared.cpython-313.pyc
│  │     │     ├─ driver_info.cpython-313.pyc
│  │     │     ├─ encryption.cpython-313.pyc
│  │     │     ├─ encryption_options.cpython-313.pyc
│  │     │     ├─ errors.cpython-313.pyc
│  │     │     ├─ event_loggers.cpython-313.pyc
│  │     │     ├─ hello.cpython-313.pyc
│  │     │     ├─ helpers_shared.cpython-313.pyc
│  │     │     ├─ lock.cpython-313.pyc
│  │     │     ├─ logger.cpython-313.pyc
│  │     │     ├─ max_staleness_selectors.cpython-313.pyc
│  │     │     ├─ message.cpython-313.pyc
│  │     │     ├─ mongo_client.cpython-313.pyc
│  │     │     ├─ monitoring.cpython-313.pyc
│  │     │     ├─ network_layer.cpython-313.pyc
│  │     │     ├─ ocsp_cache.cpython-313.pyc
│  │     │     ├─ ocsp_support.cpython-313.pyc
│  │     │     ├─ operations.cpython-313.pyc
│  │     │     ├─ periodic_executor.cpython-313.pyc
│  │     │     ├─ pool.cpython-313.pyc
│  │     │     ├─ pool_options.cpython-313.pyc
│  │     │     ├─ pool_shared.cpython-313.pyc
│  │     │     ├─ pyopenssl_context.cpython-313.pyc
│  │     │     ├─ read_concern.cpython-313.pyc
│  │     │     ├─ read_preferences.cpython-313.pyc
│  │     │     ├─ response.cpython-313.pyc
│  │     │     ├─ results.cpython-313.pyc
│  │     │     ├─ saslprep.cpython-313.pyc
│  │     │     ├─ server_api.cpython-313.pyc
│  │     │     ├─ server_description.cpython-313.pyc
│  │     │     ├─ server_selectors.cpython-313.pyc
│  │     │     ├─ server_type.cpython-313.pyc
│  │     │     ├─ socket_checker.cpython-313.pyc
│  │     │     ├─ ssl_context.cpython-313.pyc
│  │     │     ├─ ssl_support.cpython-313.pyc
│  │     │     ├─ topology_description.cpython-313.pyc
│  │     │     ├─ typings.cpython-313.pyc
│  │     │     ├─ uri_parser.cpython-313.pyc
│  │     │     ├─ uri_parser_shared.cpython-313.pyc
│  │     │     ├─ write_concern.cpython-313.pyc
│  │     │     ├─ _asyncio_lock.cpython-313.pyc
│  │     │     ├─ _asyncio_task.cpython-313.pyc
│  │     │     ├─ _azure_helpers.cpython-313.pyc
│  │     │     ├─ _client_bulk_shared.cpython-313.pyc
│  │     │     ├─ _csot.cpython-313.pyc
│  │     │     ├─ _gcp_helpers.cpython-313.pyc
│  │     │     ├─ _version.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ python_multipart
│  │     │  ├─ decoders.py
│  │     │  ├─ exceptions.py
│  │     │  ├─ multipart.py
│  │     │  ├─ py.typed
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ decoders.cpython-313.pyc
│  │     │     ├─ exceptions.cpython-313.pyc
│  │     │     ├─ multipart.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ requests
│  │     │  ├─ adapters.py
│  │     │  ├─ api.py
│  │     │  ├─ auth.py
│  │     │  ├─ certs.py
│  │     │  ├─ compat.py
│  │     │  ├─ cookies.py
│  │     │  ├─ exceptions.py
│  │     │  ├─ help.py
│  │     │  ├─ hooks.py
│  │     │  ├─ models.py
│  │     │  ├─ packages.py
│  │     │  ├─ sessions.py
│  │     │  ├─ status_codes.py
│  │     │  ├─ structures.py
│  │     │  ├─ utils.py
│  │     │  ├─ _internal_utils.py
│  │     │  ├─ __init__.py
│  │     │  ├─ __pycache__
│  │     │  │  ├─ adapters.cpython-313.pyc
│  │     │  │  ├─ api.cpython-313.pyc
│  │     │  │  ├─ auth.cpython-313.pyc
│  │     │  │  ├─ certs.cpython-313.pyc
│  │     │  │  ├─ compat.cpython-313.pyc
│  │     │  │  ├─ cookies.cpython-313.pyc
│  │     │  │  ├─ exceptions.cpython-313.pyc
│  │     │  │  ├─ help.cpython-313.pyc
│  │     │  │  ├─ hooks.cpython-313.pyc
│  │     │  │  ├─ models.cpython-313.pyc
│  │     │  │  ├─ packages.cpython-313.pyc
│  │     │  │  ├─ sessions.cpython-313.pyc
│  │     │  │  ├─ status_codes.cpython-313.pyc
│  │     │  │  ├─ structures.cpython-313.pyc
│  │     │  │  ├─ utils.cpython-313.pyc
│  │     │  │  ├─ _internal_utils.cpython-313.pyc
│  │     │  │  ├─ __init__.cpython-313.pyc
│  │     │  │  └─ __version__.cpython-313.pyc
│  │     │  └─ __version__.py
│  │     ├─ rsa
│  │     │  ├─ asn1.py
│  │     │  ├─ cli.py
│  │     │  ├─ common.py
│  │     │  ├─ core.py
│  │     │  ├─ key.py
│  │     │  ├─ parallel.py
│  │     │  ├─ pem.py
│  │     │  ├─ pkcs1.py
│  │     │  ├─ pkcs1_v2.py
│  │     │  ├─ prime.py
│  │     │  ├─ py.typed
│  │     │  ├─ randnum.py
│  │     │  ├─ transform.py
│  │     │  ├─ util.py
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ asn1.cpython-313.pyc
│  │     │     ├─ cli.cpython-313.pyc
│  │     │     ├─ common.cpython-313.pyc
│  │     │     ├─ core.cpython-313.pyc
│  │     │     ├─ key.cpython-313.pyc
│  │     │     ├─ parallel.cpython-313.pyc
│  │     │     ├─ pem.cpython-313.pyc
│  │     │     ├─ pkcs1.cpython-313.pyc
│  │     │     ├─ pkcs1_v2.cpython-313.pyc
│  │     │     ├─ prime.cpython-313.pyc
│  │     │     ├─ randnum.cpython-313.pyc
│  │     │     ├─ transform.cpython-313.pyc
│  │     │     ├─ util.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ scipy
│  │     │  ├─ cluster
│  │     │  │  ├─ hierarchy.py
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ hierarchy_test_data.py
│  │     │  │  │  ├─ test_disjoint_set.py
│  │     │  │  │  ├─ test_hierarchy.py
│  │     │  │  │  ├─ test_vq.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ hierarchy_test_data.cpython-313.pyc
│  │     │  │  │     ├─ test_disjoint_set.cpython-313.pyc
│  │     │  │  │     ├─ test_hierarchy.cpython-313.pyc
│  │     │  │  │     ├─ test_vq.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ vq.py
│  │     │  │  ├─ _hierarchy.cp313-win_amd64.dll.a
│  │     │  │  ├─ _hierarchy.cp313-win_amd64.pyd
│  │     │  │  ├─ _optimal_leaf_ordering.cp313-win_amd64.dll.a
│  │     │  │  ├─ _optimal_leaf_ordering.cp313-win_amd64.pyd
│  │     │  │  ├─ _vq.cp313-win_amd64.dll.a
│  │     │  │  ├─ _vq.cp313-win_amd64.pyd
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ hierarchy.cpython-313.pyc
│  │     │  │     ├─ vq.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ conftest.py
│  │     │  ├─ constants
│  │     │  │  ├─ codata.py
│  │     │  │  ├─ constants.py
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ test_codata.py
│  │     │  │  │  ├─ test_constants.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ test_codata.cpython-313.pyc
│  │     │  │  │     ├─ test_constants.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _codata.py
│  │     │  │  ├─ _constants.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ codata.cpython-313.pyc
│  │     │  │     ├─ constants.cpython-313.pyc
│  │     │  │     ├─ _codata.cpython-313.pyc
│  │     │  │     ├─ _constants.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ datasets
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ test_data.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ test_data.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _download_all.py
│  │     │  │  ├─ _fetchers.py
│  │     │  │  ├─ _registry.py
│  │     │  │  ├─ _utils.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ _download_all.cpython-313.pyc
│  │     │  │     ├─ _fetchers.cpython-313.pyc
│  │     │  │     ├─ _registry.cpython-313.pyc
│  │     │  │     ├─ _utils.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ differentiate
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ test_differentiate.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ test_differentiate.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _differentiate.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ _differentiate.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ fft
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ mock_backend.py
│  │     │  │  │  ├─ test_backend.py
│  │     │  │  │  ├─ test_basic.py
│  │     │  │  │  ├─ test_fftlog.py
│  │     │  │  │  ├─ test_helper.py
│  │     │  │  │  ├─ test_multithreading.py
│  │     │  │  │  ├─ test_real_transforms.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ mock_backend.cpython-313.pyc
│  │     │  │  │     ├─ test_backend.cpython-313.pyc
│  │     │  │  │     ├─ test_basic.cpython-313.pyc
│  │     │  │  │     ├─ test_fftlog.cpython-313.pyc
│  │     │  │  │     ├─ test_helper.cpython-313.pyc
│  │     │  │  │     ├─ test_multithreading.cpython-313.pyc
│  │     │  │  │     ├─ test_real_transforms.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _backend.py
│  │     │  │  ├─ _basic.py
│  │     │  │  ├─ _basic_backend.py
│  │     │  │  ├─ _debug_backends.py
│  │     │  │  ├─ _fftlog.py
│  │     │  │  ├─ _fftlog_backend.py
│  │     │  │  ├─ _helper.py
│  │     │  │  ├─ _pocketfft
│  │     │  │  │  ├─ basic.py
│  │     │  │  │  ├─ helper.py
│  │     │  │  │  ├─ LICENSE.md
│  │     │  │  │  ├─ pypocketfft.cp313-win_amd64.dll.a
│  │     │  │  │  ├─ pypocketfft.cp313-win_amd64.pyd
│  │     │  │  │  ├─ realtransforms.py
│  │     │  │  │  ├─ tests
│  │     │  │  │  │  ├─ test_basic.py
│  │     │  │  │  │  ├─ test_real_transforms.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ test_basic.cpython-313.pyc
│  │     │  │  │  │     ├─ test_real_transforms.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ basic.cpython-313.pyc
│  │     │  │  │     ├─ helper.cpython-313.pyc
│  │     │  │  │     ├─ realtransforms.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _realtransforms.py
│  │     │  │  ├─ _realtransforms_backend.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ _backend.cpython-313.pyc
│  │     │  │     ├─ _basic.cpython-313.pyc
│  │     │  │     ├─ _basic_backend.cpython-313.pyc
│  │     │  │     ├─ _debug_backends.cpython-313.pyc
│  │     │  │     ├─ _fftlog.cpython-313.pyc
│  │     │  │     ├─ _fftlog_backend.cpython-313.pyc
│  │     │  │     ├─ _helper.cpython-313.pyc
│  │     │  │     ├─ _realtransforms.cpython-313.pyc
│  │     │  │     ├─ _realtransforms_backend.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ fftpack
│  │     │  │  ├─ basic.py
│  │     │  │  ├─ convolve.cp313-win_amd64.dll.a
│  │     │  │  ├─ convolve.cp313-win_amd64.pyd
│  │     │  │  ├─ helper.py
│  │     │  │  ├─ pseudo_diffs.py
│  │     │  │  ├─ realtransforms.py
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ fftw_double_ref.npz
│  │     │  │  │  ├─ fftw_longdouble_ref.npz
│  │     │  │  │  ├─ fftw_single_ref.npz
│  │     │  │  │  ├─ test.npz
│  │     │  │  │  ├─ test_basic.py
│  │     │  │  │  ├─ test_helper.py
│  │     │  │  │  ├─ test_import.py
│  │     │  │  │  ├─ test_pseudo_diffs.py
│  │     │  │  │  ├─ test_real_transforms.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ test_basic.cpython-313.pyc
│  │     │  │  │     ├─ test_helper.cpython-313.pyc
│  │     │  │  │     ├─ test_import.cpython-313.pyc
│  │     │  │  │     ├─ test_pseudo_diffs.cpython-313.pyc
│  │     │  │  │     ├─ test_real_transforms.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _basic.py
│  │     │  │  ├─ _helper.py
│  │     │  │  ├─ _pseudo_diffs.py
│  │     │  │  ├─ _realtransforms.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ basic.cpython-313.pyc
│  │     │  │     ├─ helper.cpython-313.pyc
│  │     │  │     ├─ pseudo_diffs.cpython-313.pyc
│  │     │  │     ├─ realtransforms.cpython-313.pyc
│  │     │  │     ├─ _basic.cpython-313.pyc
│  │     │  │     ├─ _helper.cpython-313.pyc
│  │     │  │     ├─ _pseudo_diffs.cpython-313.pyc
│  │     │  │     ├─ _realtransforms.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ integrate
│  │     │  │  ├─ dop.py
│  │     │  │  ├─ lsoda.py
│  │     │  │  ├─ odepack.py
│  │     │  │  ├─ quadpack.py
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ test_banded_ode_solvers.py
│  │     │  │  │  ├─ test_bvp.py
│  │     │  │  │  ├─ test_cubature.py
│  │     │  │  │  ├─ test_integrate.py
│  │     │  │  │  ├─ test_odeint_jac.py
│  │     │  │  │  ├─ test_quadpack.py
│  │     │  │  │  ├─ test_quadrature.py
│  │     │  │  │  ├─ test_tanhsinh.py
│  │     │  │  │  ├─ test__quad_vec.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ test_banded_ode_solvers.cpython-313.pyc
│  │     │  │  │     ├─ test_bvp.cpython-313.pyc
│  │     │  │  │     ├─ test_cubature.cpython-313.pyc
│  │     │  │  │     ├─ test_integrate.cpython-313.pyc
│  │     │  │  │     ├─ test_odeint_jac.cpython-313.pyc
│  │     │  │  │     ├─ test_quadpack.cpython-313.pyc
│  │     │  │  │     ├─ test_quadrature.cpython-313.pyc
│  │     │  │  │     ├─ test_tanhsinh.cpython-313.pyc
│  │     │  │  │     ├─ test__quad_vec.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ vode.py
│  │     │  │  ├─ _bvp.py
│  │     │  │  ├─ _cubature.py
│  │     │  │  ├─ _dop.cp313-win_amd64.dll.a
│  │     │  │  ├─ _dop.cp313-win_amd64.pyd
│  │     │  │  ├─ _ivp
│  │     │  │  │  ├─ base.py
│  │     │  │  │  ├─ bdf.py
│  │     │  │  │  ├─ common.py
│  │     │  │  │  ├─ dop853_coefficients.py
│  │     │  │  │  ├─ ivp.py
│  │     │  │  │  ├─ lsoda.py
│  │     │  │  │  ├─ radau.py
│  │     │  │  │  ├─ rk.py
│  │     │  │  │  ├─ tests
│  │     │  │  │  │  ├─ test_ivp.py
│  │     │  │  │  │  ├─ test_rk.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ test_ivp.cpython-313.pyc
│  │     │  │  │  │     ├─ test_rk.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ base.cpython-313.pyc
│  │     │  │  │     ├─ bdf.cpython-313.pyc
│  │     │  │  │     ├─ common.cpython-313.pyc
│  │     │  │  │     ├─ dop853_coefficients.cpython-313.pyc
│  │     │  │  │     ├─ ivp.cpython-313.pyc
│  │     │  │  │     ├─ lsoda.cpython-313.pyc
│  │     │  │  │     ├─ radau.cpython-313.pyc
│  │     │  │  │     ├─ rk.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _lebedev.py
│  │     │  │  ├─ _lsoda.cp313-win_amd64.dll.a
│  │     │  │  ├─ _lsoda.cp313-win_amd64.pyd
│  │     │  │  ├─ _ode.py
│  │     │  │  ├─ _odepack.cp313-win_amd64.dll.a
│  │     │  │  ├─ _odepack.cp313-win_amd64.pyd
│  │     │  │  ├─ _odepack_py.py
│  │     │  │  ├─ _quadpack.cp313-win_amd64.dll.a
│  │     │  │  ├─ _quadpack.cp313-win_amd64.pyd
│  │     │  │  ├─ _quadpack_py.py
│  │     │  │  ├─ _quadrature.py
│  │     │  │  ├─ _quad_vec.py
│  │     │  │  ├─ _rules
│  │     │  │  │  ├─ _base.py
│  │     │  │  │  ├─ _gauss_kronrod.py
│  │     │  │  │  ├─ _gauss_legendre.py
│  │     │  │  │  ├─ _genz_malik.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ _base.cpython-313.pyc
│  │     │  │  │     ├─ _gauss_kronrod.cpython-313.pyc
│  │     │  │  │     ├─ _gauss_legendre.cpython-313.pyc
│  │     │  │  │     ├─ _genz_malik.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _tanhsinh.py
│  │     │  │  ├─ _test_multivariate.cp313-win_amd64.dll.a
│  │     │  │  ├─ _test_multivariate.cp313-win_amd64.pyd
│  │     │  │  ├─ _test_odeint_banded.cp313-win_amd64.dll.a
│  │     │  │  ├─ _test_odeint_banded.cp313-win_amd64.pyd
│  │     │  │  ├─ _vode.cp313-win_amd64.dll.a
│  │     │  │  ├─ _vode.cp313-win_amd64.pyd
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ dop.cpython-313.pyc
│  │     │  │     ├─ lsoda.cpython-313.pyc
│  │     │  │     ├─ odepack.cpython-313.pyc
│  │     │  │     ├─ quadpack.cpython-313.pyc
│  │     │  │     ├─ vode.cpython-313.pyc
│  │     │  │     ├─ _bvp.cpython-313.pyc
│  │     │  │     ├─ _cubature.cpython-313.pyc
│  │     │  │     ├─ _lebedev.cpython-313.pyc
│  │     │  │     ├─ _ode.cpython-313.pyc
│  │     │  │     ├─ _odepack_py.cpython-313.pyc
│  │     │  │     ├─ _quadpack_py.cpython-313.pyc
│  │     │  │     ├─ _quadrature.cpython-313.pyc
│  │     │  │     ├─ _quad_vec.cpython-313.pyc
│  │     │  │     ├─ _tanhsinh.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ interpolate
│  │     │  │  ├─ dfitpack.py
│  │     │  │  ├─ fitpack.py
│  │     │  │  ├─ fitpack2.py
│  │     │  │  ├─ interpnd.py
│  │     │  │  ├─ interpolate.py
│  │     │  │  ├─ ndgriddata.py
│  │     │  │  ├─ polyint.py
│  │     │  │  ├─ rbf.py
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ data
│  │     │  │  │  │  ├─ bug-1310.npz
│  │     │  │  │  │  ├─ estimate_gradients_hang.npy
│  │     │  │  │  │  └─ gcvspl.npz
│  │     │  │  │  ├─ test_bary_rational.py
│  │     │  │  │  ├─ test_bsplines.py
│  │     │  │  │  ├─ test_fitpack.py
│  │     │  │  │  ├─ test_fitpack2.py
│  │     │  │  │  ├─ test_gil.py
│  │     │  │  │  ├─ test_interpnd.py
│  │     │  │  │  ├─ test_interpolate.py
│  │     │  │  │  ├─ test_ndgriddata.py
│  │     │  │  │  ├─ test_pade.py
│  │     │  │  │  ├─ test_polyint.py
│  │     │  │  │  ├─ test_rbf.py
│  │     │  │  │  ├─ test_rbfinterp.py
│  │     │  │  │  ├─ test_rgi.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ test_bary_rational.cpython-313.pyc
│  │     │  │  │     ├─ test_bsplines.cpython-313.pyc
│  │     │  │  │     ├─ test_fitpack.cpython-313.pyc
│  │     │  │  │     ├─ test_fitpack2.cpython-313.pyc
│  │     │  │  │     ├─ test_gil.cpython-313.pyc
│  │     │  │  │     ├─ test_interpnd.cpython-313.pyc
│  │     │  │  │     ├─ test_interpolate.cpython-313.pyc
│  │     │  │  │     ├─ test_ndgriddata.cpython-313.pyc
│  │     │  │  │     ├─ test_pade.cpython-313.pyc
│  │     │  │  │     ├─ test_polyint.cpython-313.pyc
│  │     │  │  │     ├─ test_rbf.cpython-313.pyc
│  │     │  │  │     ├─ test_rbfinterp.cpython-313.pyc
│  │     │  │  │     ├─ test_rgi.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _bary_rational.py
│  │     │  │  ├─ _bsplines.py
│  │     │  │  ├─ _cubic.py
│  │     │  │  ├─ _dfitpack.cp313-win_amd64.dll.a
│  │     │  │  ├─ _dfitpack.cp313-win_amd64.pyd
│  │     │  │  ├─ _dierckx.cp313-win_amd64.dll.a
│  │     │  │  ├─ _dierckx.cp313-win_amd64.pyd
│  │     │  │  ├─ _fitpack.cp313-win_amd64.dll.a
│  │     │  │  ├─ _fitpack.cp313-win_amd64.pyd
│  │     │  │  ├─ _fitpack2.py
│  │     │  │  ├─ _fitpack_impl.py
│  │     │  │  ├─ _fitpack_py.py
│  │     │  │  ├─ _fitpack_repro.py
│  │     │  │  ├─ _interpnd.cp313-win_amd64.dll.a
│  │     │  │  ├─ _interpnd.cp313-win_amd64.pyd
│  │     │  │  ├─ _interpolate.py
│  │     │  │  ├─ _ndbspline.py
│  │     │  │  ├─ _ndgriddata.py
│  │     │  │  ├─ _pade.py
│  │     │  │  ├─ _polyint.py
│  │     │  │  ├─ _ppoly.cp313-win_amd64.dll.a
│  │     │  │  ├─ _ppoly.cp313-win_amd64.pyd
│  │     │  │  ├─ _rbf.py
│  │     │  │  ├─ _rbfinterp.py
│  │     │  │  ├─ _rbfinterp_pythran.cp313-win_amd64.dll.a
│  │     │  │  ├─ _rbfinterp_pythran.cp313-win_amd64.pyd
│  │     │  │  ├─ _rgi.py
│  │     │  │  ├─ _rgi_cython.cp313-win_amd64.dll.a
│  │     │  │  ├─ _rgi_cython.cp313-win_amd64.pyd
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ dfitpack.cpython-313.pyc
│  │     │  │     ├─ fitpack.cpython-313.pyc
│  │     │  │     ├─ fitpack2.cpython-313.pyc
│  │     │  │     ├─ interpnd.cpython-313.pyc
│  │     │  │     ├─ interpolate.cpython-313.pyc
│  │     │  │     ├─ ndgriddata.cpython-313.pyc
│  │     │  │     ├─ polyint.cpython-313.pyc
│  │     │  │     ├─ rbf.cpython-313.pyc
│  │     │  │     ├─ _bary_rational.cpython-313.pyc
│  │     │  │     ├─ _bsplines.cpython-313.pyc
│  │     │  │     ├─ _cubic.cpython-313.pyc
│  │     │  │     ├─ _fitpack2.cpython-313.pyc
│  │     │  │     ├─ _fitpack_impl.cpython-313.pyc
│  │     │  │     ├─ _fitpack_py.cpython-313.pyc
│  │     │  │     ├─ _fitpack_repro.cpython-313.pyc
│  │     │  │     ├─ _interpolate.cpython-313.pyc
│  │     │  │     ├─ _ndbspline.cpython-313.pyc
│  │     │  │     ├─ _ndgriddata.cpython-313.pyc
│  │     │  │     ├─ _pade.cpython-313.pyc
│  │     │  │     ├─ _polyint.cpython-313.pyc
│  │     │  │     ├─ _rbf.cpython-313.pyc
│  │     │  │     ├─ _rbfinterp.cpython-313.pyc
│  │     │  │     ├─ _rgi.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ io
│  │     │  │  ├─ arff
│  │     │  │  │  ├─ arffread.py
│  │     │  │  │  ├─ tests
│  │     │  │  │  │  ├─ data
│  │     │  │  │  │  │  ├─ iris.arff
│  │     │  │  │  │  │  ├─ missing.arff
│  │     │  │  │  │  │  ├─ nodata.arff
│  │     │  │  │  │  │  ├─ quoted_nominal.arff
│  │     │  │  │  │  │  ├─ quoted_nominal_spaces.arff
│  │     │  │  │  │  │  ├─ test1.arff
│  │     │  │  │  │  │  ├─ test10.arff
│  │     │  │  │  │  │  ├─ test11.arff
│  │     │  │  │  │  │  ├─ test2.arff
│  │     │  │  │  │  │  ├─ test3.arff
│  │     │  │  │  │  │  ├─ test4.arff
│  │     │  │  │  │  │  ├─ test5.arff
│  │     │  │  │  │  │  ├─ test6.arff
│  │     │  │  │  │  │  ├─ test7.arff
│  │     │  │  │  │  │  ├─ test8.arff
│  │     │  │  │  │  │  └─ test9.arff
│  │     │  │  │  │  ├─ test_arffread.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ test_arffread.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ _arffread.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ arffread.cpython-313.pyc
│  │     │  │  │     ├─ _arffread.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ harwell_boeing.py
│  │     │  │  ├─ idl.py
│  │     │  │  ├─ matlab
│  │     │  │  │  ├─ byteordercodes.py
│  │     │  │  │  ├─ mio.py
│  │     │  │  │  ├─ mio4.py
│  │     │  │  │  ├─ mio5.py
│  │     │  │  │  ├─ mio5_params.py
│  │     │  │  │  ├─ mio5_utils.py
│  │     │  │  │  ├─ miobase.py
│  │     │  │  │  ├─ mio_utils.py
│  │     │  │  │  ├─ streams.py
│  │     │  │  │  ├─ tests
│  │     │  │  │  │  ├─ data
│  │     │  │  │  │  │  ├─ bad_miuint32.mat
│  │     │  │  │  │  │  ├─ bad_miutf8_array_name.mat
│  │     │  │  │  │  │  ├─ big_endian.mat
│  │     │  │  │  │  │  ├─ broken_utf8.mat
│  │     │  │  │  │  │  ├─ corrupted_zlib_checksum.mat
│  │     │  │  │  │  │  ├─ corrupted_zlib_data.mat
│  │     │  │  │  │  │  ├─ debigged_m4.mat
│  │     │  │  │  │  │  ├─ japanese_utf8.txt
│  │     │  │  │  │  │  ├─ little_endian.mat
│  │     │  │  │  │  │  ├─ logical_sparse.mat
│  │     │  │  │  │  │  ├─ malformed1.mat
│  │     │  │  │  │  │  ├─ miuint32_for_miint32.mat
│  │     │  │  │  │  │  ├─ miutf8_array_name.mat
│  │     │  │  │  │  │  ├─ nasty_duplicate_fieldnames.mat
│  │     │  │  │  │  │  ├─ one_by_zero_char.mat
│  │     │  │  │  │  │  ├─ parabola.mat
│  │     │  │  │  │  │  ├─ single_empty_string.mat
│  │     │  │  │  │  │  ├─ some_functions.mat
│  │     │  │  │  │  │  ├─ sqr.mat
│  │     │  │  │  │  │  ├─ test3dmatrix_6.1_SOL2.mat
│  │     │  │  │  │  │  ├─ test3dmatrix_6.5.1_GLNX86.mat
│  │     │  │  │  │  │  ├─ test3dmatrix_7.1_GLNX86.mat
│  │     │  │  │  │  │  ├─ test3dmatrix_7.4_GLNX86.mat
│  │     │  │  │  │  │  ├─ testbool_8_WIN64.mat
│  │     │  │  │  │  │  ├─ testcellnest_6.1_SOL2.mat
│  │     │  │  │  │  │  ├─ testcellnest_6.5.1_GLNX86.mat
│  │     │  │  │  │  │  ├─ testcellnest_7.1_GLNX86.mat
│  │     │  │  │  │  │  ├─ testcellnest_7.4_GLNX86.mat
│  │     │  │  │  │  │  ├─ testcell_6.1_SOL2.mat
│  │     │  │  │  │  │  ├─ testcell_6.5.1_GLNX86.mat
│  │     │  │  │  │  │  ├─ testcell_7.1_GLNX86.mat
│  │     │  │  │  │  │  ├─ testcell_7.4_GLNX86.mat
│  │     │  │  │  │  │  ├─ testcomplex_4.2c_SOL2.mat
│  │     │  │  │  │  │  ├─ testcomplex_6.1_SOL2.mat
│  │     │  │  │  │  │  ├─ testcomplex_6.5.1_GLNX86.mat
│  │     │  │  │  │  │  ├─ testcomplex_7.1_GLNX86.mat
│  │     │  │  │  │  │  ├─ testcomplex_7.4_GLNX86.mat
│  │     │  │  │  │  │  ├─ testdouble_4.2c_SOL2.mat
│  │     │  │  │  │  │  ├─ testdouble_6.1_SOL2.mat
│  │     │  │  │  │  │  ├─ testdouble_6.5.1_GLNX86.mat
│  │     │  │  │  │  │  ├─ testdouble_7.1_GLNX86.mat
│  │     │  │  │  │  │  ├─ testdouble_7.4_GLNX86.mat
│  │     │  │  │  │  │  ├─ testemptycell_5.3_SOL2.mat
│  │     │  │  │  │  │  ├─ testemptycell_6.5.1_GLNX86.mat
│  │     │  │  │  │  │  ├─ testemptycell_7.1_GLNX86.mat
│  │     │  │  │  │  │  ├─ testemptycell_7.4_GLNX86.mat
│  │     │  │  │  │  │  ├─ testfunc_7.4_GLNX86.mat
│  │     │  │  │  │  │  ├─ testhdf5_7.4_GLNX86.mat
│  │     │  │  │  │  │  ├─ testmatrix_4.2c_SOL2.mat
│  │     │  │  │  │  │  ├─ testmatrix_6.1_SOL2.mat
│  │     │  │  │  │  │  ├─ testmatrix_6.5.1_GLNX86.mat
│  │     │  │  │  │  │  ├─ testmatrix_7.1_GLNX86.mat
│  │     │  │  │  │  │  ├─ testmatrix_7.4_GLNX86.mat
│  │     │  │  │  │  │  ├─ testminus_4.2c_SOL2.mat
│  │     │  │  │  │  │  ├─ testminus_6.1_SOL2.mat
│  │     │  │  │  │  │  ├─ testminus_6.5.1_GLNX86.mat
│  │     │  │  │  │  │  ├─ testminus_7.1_GLNX86.mat
│  │     │  │  │  │  │  ├─ testminus_7.4_GLNX86.mat
│  │     │  │  │  │  │  ├─ testmulti_4.2c_SOL2.mat
│  │     │  │  │  │  │  ├─ testmulti_7.1_GLNX86.mat
│  │     │  │  │  │  │  ├─ testmulti_7.4_GLNX86.mat
│  │     │  │  │  │  │  ├─ testobject_6.1_SOL2.mat
│  │     │  │  │  │  │  ├─ testobject_6.5.1_GLNX86.mat
│  │     │  │  │  │  │  ├─ testobject_7.1_GLNX86.mat
│  │     │  │  │  │  │  ├─ testobject_7.4_GLNX86.mat
│  │     │  │  │  │  │  ├─ testonechar_4.2c_SOL2.mat
│  │     │  │  │  │  │  ├─ testonechar_6.1_SOL2.mat
│  │     │  │  │  │  │  ├─ testonechar_6.5.1_GLNX86.mat
│  │     │  │  │  │  │  ├─ testonechar_7.1_GLNX86.mat
│  │     │  │  │  │  │  ├─ testonechar_7.4_GLNX86.mat
│  │     │  │  │  │  │  ├─ testscalarcell_7.4_GLNX86.mat
│  │     │  │  │  │  │  ├─ testsimplecell.mat
│  │     │  │  │  │  │  ├─ testsparsecomplex_4.2c_SOL2.mat
│  │     │  │  │  │  │  ├─ testsparsecomplex_6.1_SOL2.mat
│  │     │  │  │  │  │  ├─ testsparsecomplex_6.5.1_GLNX86.mat
│  │     │  │  │  │  │  ├─ testsparsecomplex_7.1_GLNX86.mat
│  │     │  │  │  │  │  ├─ testsparsecomplex_7.4_GLNX86.mat
│  │     │  │  │  │  │  ├─ testsparsefloat_7.4_GLNX86.mat
│  │     │  │  │  │  │  ├─ testsparse_4.2c_SOL2.mat
│  │     │  │  │  │  │  ├─ testsparse_6.1_SOL2.mat
│  │     │  │  │  │  │  ├─ testsparse_6.5.1_GLNX86.mat
│  │     │  │  │  │  │  ├─ testsparse_7.1_GLNX86.mat
│  │     │  │  │  │  │  ├─ testsparse_7.4_GLNX86.mat
│  │     │  │  │  │  │  ├─ teststringarray_4.2c_SOL2.mat
│  │     │  │  │  │  │  ├─ teststringarray_6.1_SOL2.mat
│  │     │  │  │  │  │  ├─ teststringarray_6.5.1_GLNX86.mat
│  │     │  │  │  │  │  ├─ teststringarray_7.1_GLNX86.mat
│  │     │  │  │  │  │  ├─ teststringarray_7.4_GLNX86.mat
│  │     │  │  │  │  │  ├─ teststring_4.2c_SOL2.mat
│  │     │  │  │  │  │  ├─ teststring_6.1_SOL2.mat
│  │     │  │  │  │  │  ├─ teststring_6.5.1_GLNX86.mat
│  │     │  │  │  │  │  ├─ teststring_7.1_GLNX86.mat
│  │     │  │  │  │  │  ├─ teststring_7.4_GLNX86.mat
│  │     │  │  │  │  │  ├─ teststructarr_6.1_SOL2.mat
│  │     │  │  │  │  │  ├─ teststructarr_6.5.1_GLNX86.mat
│  │     │  │  │  │  │  ├─ teststructarr_7.1_GLNX86.mat
│  │     │  │  │  │  │  ├─ teststructarr_7.4_GLNX86.mat
│  │     │  │  │  │  │  ├─ teststructnest_6.1_SOL2.mat
│  │     │  │  │  │  │  ├─ teststructnest_6.5.1_GLNX86.mat
│  │     │  │  │  │  │  ├─ teststructnest_7.1_GLNX86.mat
│  │     │  │  │  │  │  ├─ teststructnest_7.4_GLNX86.mat
│  │     │  │  │  │  │  ├─ teststruct_6.1_SOL2.mat
│  │     │  │  │  │  │  ├─ teststruct_6.5.1_GLNX86.mat
│  │     │  │  │  │  │  ├─ teststruct_7.1_GLNX86.mat
│  │     │  │  │  │  │  ├─ teststruct_7.4_GLNX86.mat
│  │     │  │  │  │  │  ├─ testunicode_7.1_GLNX86.mat
│  │     │  │  │  │  │  ├─ testunicode_7.4_GLNX86.mat
│  │     │  │  │  │  │  ├─ testvec_4_GLNX86.mat
│  │     │  │  │  │  │  ├─ test_empty_struct.mat
│  │     │  │  │  │  │  ├─ test_mat4_le_floats.mat
│  │     │  │  │  │  │  └─ test_skip_variable.mat
│  │     │  │  │  │  ├─ test_byteordercodes.py
│  │     │  │  │  │  ├─ test_mio.py
│  │     │  │  │  │  ├─ test_mio5_utils.py
│  │     │  │  │  │  ├─ test_miobase.py
│  │     │  │  │  │  ├─ test_mio_funcs.py
│  │     │  │  │  │  ├─ test_mio_utils.py
│  │     │  │  │  │  ├─ test_pathological.py
│  │     │  │  │  │  ├─ test_streams.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ test_byteordercodes.cpython-313.pyc
│  │     │  │  │  │     ├─ test_mio.cpython-313.pyc
│  │     │  │  │  │     ├─ test_mio5_utils.cpython-313.pyc
│  │     │  │  │  │     ├─ test_miobase.cpython-313.pyc
│  │     │  │  │  │     ├─ test_mio_funcs.cpython-313.pyc
│  │     │  │  │  │     ├─ test_mio_utils.cpython-313.pyc
│  │     │  │  │  │     ├─ test_pathological.cpython-313.pyc
│  │     │  │  │  │     ├─ test_streams.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ _byteordercodes.py
│  │     │  │  │  ├─ _mio.py
│  │     │  │  │  ├─ _mio4.py
│  │     │  │  │  ├─ _mio5.py
│  │     │  │  │  ├─ _mio5_params.py
│  │     │  │  │  ├─ _mio5_utils.cp313-win_amd64.dll.a
│  │     │  │  │  ├─ _mio5_utils.cp313-win_amd64.pyd
│  │     │  │  │  ├─ _miobase.py
│  │     │  │  │  ├─ _mio_utils.cp313-win_amd64.dll.a
│  │     │  │  │  ├─ _mio_utils.cp313-win_amd64.pyd
│  │     │  │  │  ├─ _streams.cp313-win_amd64.dll.a
│  │     │  │  │  ├─ _streams.cp313-win_amd64.pyd
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ byteordercodes.cpython-313.pyc
│  │     │  │  │     ├─ mio.cpython-313.pyc
│  │     │  │  │     ├─ mio4.cpython-313.pyc
│  │     │  │  │     ├─ mio5.cpython-313.pyc
│  │     │  │  │     ├─ mio5_params.cpython-313.pyc
│  │     │  │  │     ├─ mio5_utils.cpython-313.pyc
│  │     │  │  │     ├─ miobase.cpython-313.pyc
│  │     │  │  │     ├─ mio_utils.cpython-313.pyc
│  │     │  │  │     ├─ streams.cpython-313.pyc
│  │     │  │  │     ├─ _byteordercodes.cpython-313.pyc
│  │     │  │  │     ├─ _mio.cpython-313.pyc
│  │     │  │  │     ├─ _mio4.cpython-313.pyc
│  │     │  │  │     ├─ _mio5.cpython-313.pyc
│  │     │  │  │     ├─ _mio5_params.cpython-313.pyc
│  │     │  │  │     ├─ _miobase.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ mmio.py
│  │     │  │  ├─ netcdf.py
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ data
│  │     │  │  │  │  ├─ array_float32_1d.sav
│  │     │  │  │  │  ├─ array_float32_2d.sav
│  │     │  │  │  │  ├─ array_float32_3d.sav
│  │     │  │  │  │  ├─ array_float32_4d.sav
│  │     │  │  │  │  ├─ array_float32_5d.sav
│  │     │  │  │  │  ├─ array_float32_6d.sav
│  │     │  │  │  │  ├─ array_float32_7d.sav
│  │     │  │  │  │  ├─ array_float32_8d.sav
│  │     │  │  │  │  ├─ array_float32_pointer_1d.sav
│  │     │  │  │  │  ├─ array_float32_pointer_2d.sav
│  │     │  │  │  │  ├─ array_float32_pointer_3d.sav
│  │     │  │  │  │  ├─ array_float32_pointer_4d.sav
│  │     │  │  │  │  ├─ array_float32_pointer_5d.sav
│  │     │  │  │  │  ├─ array_float32_pointer_6d.sav
│  │     │  │  │  │  ├─ array_float32_pointer_7d.sav
│  │     │  │  │  │  ├─ array_float32_pointer_8d.sav
│  │     │  │  │  │  ├─ example_1.nc
│  │     │  │  │  │  ├─ example_2.nc
│  │     │  │  │  │  ├─ example_3_maskedvals.nc
│  │     │  │  │  │  ├─ fortran-3x3d-2i.dat
│  │     │  │  │  │  ├─ fortran-mixed.dat
│  │     │  │  │  │  ├─ fortran-sf8-11x1x10.dat
│  │     │  │  │  │  ├─ fortran-sf8-15x10x22.dat
│  │     │  │  │  │  ├─ fortran-sf8-1x1x1.dat
│  │     │  │  │  │  ├─ fortran-sf8-1x1x5.dat
│  │     │  │  │  │  ├─ fortran-sf8-1x1x7.dat
│  │     │  │  │  │  ├─ fortran-sf8-1x3x5.dat
│  │     │  │  │  │  ├─ fortran-si4-11x1x10.dat
│  │     │  │  │  │  ├─ fortran-si4-15x10x22.dat
│  │     │  │  │  │  ├─ fortran-si4-1x1x1.dat
│  │     │  │  │  │  ├─ fortran-si4-1x1x5.dat
│  │     │  │  │  │  ├─ fortran-si4-1x1x7.dat
│  │     │  │  │  │  ├─ fortran-si4-1x3x5.dat
│  │     │  │  │  │  ├─ invalid_pointer.sav
│  │     │  │  │  │  ├─ null_pointer.sav
│  │     │  │  │  │  ├─ scalar_byte.sav
│  │     │  │  │  │  ├─ scalar_byte_descr.sav
│  │     │  │  │  │  ├─ scalar_complex32.sav
│  │     │  │  │  │  ├─ scalar_complex64.sav
│  │     │  │  │  │  ├─ scalar_float32.sav
│  │     │  │  │  │  ├─ scalar_float64.sav
│  │     │  │  │  │  ├─ scalar_heap_pointer.sav
│  │     │  │  │  │  ├─ scalar_int16.sav
│  │     │  │  │  │  ├─ scalar_int32.sav
│  │     │  │  │  │  ├─ scalar_int64.sav
│  │     │  │  │  │  ├─ scalar_string.sav
│  │     │  │  │  │  ├─ scalar_uint16.sav
│  │     │  │  │  │  ├─ scalar_uint32.sav
│  │     │  │  │  │  ├─ scalar_uint64.sav
│  │     │  │  │  │  ├─ struct_arrays.sav
│  │     │  │  │  │  ├─ struct_arrays_byte_idl80.sav
│  │     │  │  │  │  ├─ struct_arrays_replicated.sav
│  │     │  │  │  │  ├─ struct_arrays_replicated_3d.sav
│  │     │  │  │  │  ├─ struct_inherit.sav
│  │     │  │  │  │  ├─ struct_pointers.sav
│  │     │  │  │  │  ├─ struct_pointers_replicated.sav
│  │     │  │  │  │  ├─ struct_pointers_replicated_3d.sav
│  │     │  │  │  │  ├─ struct_pointer_arrays.sav
│  │     │  │  │  │  ├─ struct_pointer_arrays_replicated.sav
│  │     │  │  │  │  ├─ struct_pointer_arrays_replicated_3d.sav
│  │     │  │  │  │  ├─ struct_scalars.sav
│  │     │  │  │  │  ├─ struct_scalars_replicated.sav
│  │     │  │  │  │  ├─ struct_scalars_replicated_3d.sav
│  │     │  │  │  │  ├─ test-1234Hz-le-1ch-10S-20bit-extra.wav
│  │     │  │  │  │  ├─ test-44100Hz-2ch-32bit-float-be.wav
│  │     │  │  │  │  ├─ test-44100Hz-2ch-32bit-float-le.wav
│  │     │  │  │  │  ├─ test-44100Hz-be-1ch-4bytes.wav
│  │     │  │  │  │  ├─ test-44100Hz-le-1ch-4bytes-early-eof-no-data.wav
│  │     │  │  │  │  ├─ test-44100Hz-le-1ch-4bytes-early-eof.wav
│  │     │  │  │  │  ├─ test-44100Hz-le-1ch-4bytes-incomplete-chunk.wav
│  │     │  │  │  │  ├─ test-44100Hz-le-1ch-4bytes-rf64.wav
│  │     │  │  │  │  ├─ test-44100Hz-le-1ch-4bytes.wav
│  │     │  │  │  │  ├─ test-48000Hz-2ch-64bit-float-le-wavex.wav
│  │     │  │  │  │  ├─ test-8000Hz-be-3ch-5S-24bit.wav
│  │     │  │  │  │  ├─ test-8000Hz-le-1ch-1byte-ulaw.wav
│  │     │  │  │  │  ├─ test-8000Hz-le-2ch-1byteu.wav
│  │     │  │  │  │  ├─ test-8000Hz-le-3ch-5S-24bit-inconsistent.wav
│  │     │  │  │  │  ├─ test-8000Hz-le-3ch-5S-24bit-rf64.wav
│  │     │  │  │  │  ├─ test-8000Hz-le-3ch-5S-24bit.wav
│  │     │  │  │  │  ├─ test-8000Hz-le-3ch-5S-36bit.wav
│  │     │  │  │  │  ├─ test-8000Hz-le-3ch-5S-45bit.wav
│  │     │  │  │  │  ├─ test-8000Hz-le-3ch-5S-53bit.wav
│  │     │  │  │  │  ├─ test-8000Hz-le-3ch-5S-64bit.wav
│  │     │  │  │  │  ├─ test-8000Hz-le-4ch-9S-12bit.wav
│  │     │  │  │  │  ├─ test-8000Hz-le-5ch-9S-5bit.wav
│  │     │  │  │  │  ├─ Transparent Busy.ani
│  │     │  │  │  │  └─ various_compressed.sav
│  │     │  │  │  ├─ test_fortran.py
│  │     │  │  │  ├─ test_idl.py
│  │     │  │  │  ├─ test_mmio.py
│  │     │  │  │  ├─ test_netcdf.py
│  │     │  │  │  ├─ test_paths.py
│  │     │  │  │  ├─ test_wavfile.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ test_fortran.cpython-313.pyc
│  │     │  │  │     ├─ test_idl.cpython-313.pyc
│  │     │  │  │     ├─ test_mmio.cpython-313.pyc
│  │     │  │  │     ├─ test_netcdf.cpython-313.pyc
│  │     │  │  │     ├─ test_paths.cpython-313.pyc
│  │     │  │  │     ├─ test_wavfile.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ wavfile.py
│  │     │  │  ├─ _fast_matrix_market
│  │     │  │  │  ├─ _fmm_core.cp313-win_amd64.dll.a
│  │     │  │  │  ├─ _fmm_core.cp313-win_amd64.pyd
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _fortran.py
│  │     │  │  ├─ _harwell_boeing
│  │     │  │  │  ├─ hb.py
│  │     │  │  │  ├─ tests
│  │     │  │  │  │  ├─ test_fortran_format.py
│  │     │  │  │  │  ├─ test_hb.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ test_fortran_format.cpython-313.pyc
│  │     │  │  │  │     ├─ test_hb.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ _fortran_format_parser.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ hb.cpython-313.pyc
│  │     │  │  │     ├─ _fortran_format_parser.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _idl.py
│  │     │  │  ├─ _mmio.py
│  │     │  │  ├─ _netcdf.py
│  │     │  │  ├─ _test_fortran.cp313-win_amd64.dll.a
│  │     │  │  ├─ _test_fortran.cp313-win_amd64.pyd
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ harwell_boeing.cpython-313.pyc
│  │     │  │     ├─ idl.cpython-313.pyc
│  │     │  │     ├─ mmio.cpython-313.pyc
│  │     │  │     ├─ netcdf.cpython-313.pyc
│  │     │  │     ├─ wavfile.cpython-313.pyc
│  │     │  │     ├─ _fortran.cpython-313.pyc
│  │     │  │     ├─ _idl.cpython-313.pyc
│  │     │  │     ├─ _mmio.cpython-313.pyc
│  │     │  │     ├─ _netcdf.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ linalg
│  │     │  │  ├─ basic.py
│  │     │  │  ├─ blas.py
│  │     │  │  ├─ cython_blas.cp313-win_amd64.dll.a
│  │     │  │  ├─ cython_blas.cp313-win_amd64.pyd
│  │     │  │  ├─ cython_blas.pxd
│  │     │  │  ├─ cython_blas.pyx
│  │     │  │  ├─ cython_lapack.cp313-win_amd64.dll.a
│  │     │  │  ├─ cython_lapack.cp313-win_amd64.pyd
│  │     │  │  ├─ cython_lapack.pxd
│  │     │  │  ├─ cython_lapack.pyx
│  │     │  │  ├─ decomp.py
│  │     │  │  ├─ decomp_cholesky.py
│  │     │  │  ├─ decomp_lu.py
│  │     │  │  ├─ decomp_qr.py
│  │     │  │  ├─ decomp_schur.py
│  │     │  │  ├─ decomp_svd.py
│  │     │  │  ├─ interpolative.py
│  │     │  │  ├─ lapack.py
│  │     │  │  ├─ matfuncs.py
│  │     │  │  ├─ misc.py
│  │     │  │  ├─ special_matrices.py
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ data
│  │     │  │  │  │  ├─ carex_15_data.npz
│  │     │  │  │  │  ├─ carex_18_data.npz
│  │     │  │  │  │  ├─ carex_19_data.npz
│  │     │  │  │  │  ├─ carex_20_data.npz
│  │     │  │  │  │  ├─ carex_6_data.npz
│  │     │  │  │  │  └─ gendare_20170120_data.npz
│  │     │  │  │  ├─ test_basic.py
│  │     │  │  │  ├─ test_batch.py
│  │     │  │  │  ├─ test_blas.py
│  │     │  │  │  ├─ test_cythonized_array_utils.py
│  │     │  │  │  ├─ test_cython_blas.py
│  │     │  │  │  ├─ test_cython_lapack.py
│  │     │  │  │  ├─ test_decomp.py
│  │     │  │  │  ├─ test_decomp_cholesky.py
│  │     │  │  │  ├─ test_decomp_cossin.py
│  │     │  │  │  ├─ test_decomp_ldl.py
│  │     │  │  │  ├─ test_decomp_lu.py
│  │     │  │  │  ├─ test_decomp_polar.py
│  │     │  │  │  ├─ test_decomp_update.py
│  │     │  │  │  ├─ test_extending.py
│  │     │  │  │  ├─ test_fblas.py
│  │     │  │  │  ├─ test_interpolative.py
│  │     │  │  │  ├─ test_lapack.py
│  │     │  │  │  ├─ test_matfuncs.py
│  │     │  │  │  ├─ test_matmul_toeplitz.py
│  │     │  │  │  ├─ test_procrustes.py
│  │     │  │  │  ├─ test_sketches.py
│  │     │  │  │  ├─ test_solvers.py
│  │     │  │  │  ├─ test_solve_toeplitz.py
│  │     │  │  │  ├─ test_special_matrices.py
│  │     │  │  │  ├─ _cython_examples
│  │     │  │  │  │  ├─ extending.pyx
│  │     │  │  │  │  └─ meson.build
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ test_basic.cpython-313.pyc
│  │     │  │  │     ├─ test_batch.cpython-313.pyc
│  │     │  │  │     ├─ test_blas.cpython-313.pyc
│  │     │  │  │     ├─ test_cythonized_array_utils.cpython-313.pyc
│  │     │  │  │     ├─ test_cython_blas.cpython-313.pyc
│  │     │  │  │     ├─ test_cython_lapack.cpython-313.pyc
│  │     │  │  │     ├─ test_decomp.cpython-313.pyc
│  │     │  │  │     ├─ test_decomp_cholesky.cpython-313.pyc
│  │     │  │  │     ├─ test_decomp_cossin.cpython-313.pyc
│  │     │  │  │     ├─ test_decomp_ldl.cpython-313.pyc
│  │     │  │  │     ├─ test_decomp_lu.cpython-313.pyc
│  │     │  │  │     ├─ test_decomp_polar.cpython-313.pyc
│  │     │  │  │     ├─ test_decomp_update.cpython-313.pyc
│  │     │  │  │     ├─ test_extending.cpython-313.pyc
│  │     │  │  │     ├─ test_fblas.cpython-313.pyc
│  │     │  │  │     ├─ test_interpolative.cpython-313.pyc
│  │     │  │  │     ├─ test_lapack.cpython-313.pyc
│  │     │  │  │     ├─ test_matfuncs.cpython-313.pyc
│  │     │  │  │     ├─ test_matmul_toeplitz.cpython-313.pyc
│  │     │  │  │     ├─ test_procrustes.cpython-313.pyc
│  │     │  │  │     ├─ test_sketches.cpython-313.pyc
│  │     │  │  │     ├─ test_solvers.cpython-313.pyc
│  │     │  │  │     ├─ test_solve_toeplitz.cpython-313.pyc
│  │     │  │  │     ├─ test_special_matrices.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _basic.py
│  │     │  │  ├─ _blas_subroutines.h
│  │     │  │  ├─ _cythonized_array_utils.cp313-win_amd64.dll.a
│  │     │  │  ├─ _cythonized_array_utils.cp313-win_amd64.pyd
│  │     │  │  ├─ _cythonized_array_utils.pxd
│  │     │  │  ├─ _cythonized_array_utils.pyi
│  │     │  │  ├─ _decomp.py
│  │     │  │  ├─ _decomp_cholesky.py
│  │     │  │  ├─ _decomp_cossin.py
│  │     │  │  ├─ _decomp_interpolative.cp313-win_amd64.dll.a
│  │     │  │  ├─ _decomp_interpolative.cp313-win_amd64.pyd
│  │     │  │  ├─ _decomp_ldl.py
│  │     │  │  ├─ _decomp_lu.py
│  │     │  │  ├─ _decomp_lu_cython.cp313-win_amd64.dll.a
│  │     │  │  ├─ _decomp_lu_cython.cp313-win_amd64.pyd
│  │     │  │  ├─ _decomp_lu_cython.pyi
│  │     │  │  ├─ _decomp_polar.py
│  │     │  │  ├─ _decomp_qr.py
│  │     │  │  ├─ _decomp_qz.py
│  │     │  │  ├─ _decomp_schur.py
│  │     │  │  ├─ _decomp_svd.py
│  │     │  │  ├─ _decomp_update.cp313-win_amd64.dll.a
│  │     │  │  ├─ _decomp_update.cp313-win_amd64.pyd
│  │     │  │  ├─ _expm_frechet.py
│  │     │  │  ├─ _fblas.cp313-win_amd64.dll.a
│  │     │  │  ├─ _fblas.cp313-win_amd64.pyd
│  │     │  │  ├─ _flapack.cp313-win_amd64.dll.a
│  │     │  │  ├─ _flapack.cp313-win_amd64.pyd
│  │     │  │  ├─ _lapack_subroutines.h
│  │     │  │  ├─ _linalg_pythran.cp313-win_amd64.dll.a
│  │     │  │  ├─ _linalg_pythran.cp313-win_amd64.pyd
│  │     │  │  ├─ _matfuncs.py
│  │     │  │  ├─ _matfuncs_expm.cp313-win_amd64.dll.a
│  │     │  │  ├─ _matfuncs_expm.cp313-win_amd64.pyd
│  │     │  │  ├─ _matfuncs_expm.pyi
│  │     │  │  ├─ _matfuncs_inv_ssq.py
│  │     │  │  ├─ _matfuncs_schur_sqrtm.cp313-win_amd64.dll.a
│  │     │  │  ├─ _matfuncs_schur_sqrtm.cp313-win_amd64.pyd
│  │     │  │  ├─ _matfuncs_sqrtm.py
│  │     │  │  ├─ _matfuncs_sqrtm_triu.cp313-win_amd64.dll.a
│  │     │  │  ├─ _matfuncs_sqrtm_triu.cp313-win_amd64.pyd
│  │     │  │  ├─ _misc.py
│  │     │  │  ├─ _procrustes.py
│  │     │  │  ├─ _sketches.py
│  │     │  │  ├─ _solvers.py
│  │     │  │  ├─ _solve_toeplitz.cp313-win_amd64.dll.a
│  │     │  │  ├─ _solve_toeplitz.cp313-win_amd64.pyd
│  │     │  │  ├─ _special_matrices.py
│  │     │  │  ├─ _testutils.py
│  │     │  │  ├─ __init__.pxd
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ basic.cpython-313.pyc
│  │     │  │     ├─ blas.cpython-313.pyc
│  │     │  │     ├─ decomp.cpython-313.pyc
│  │     │  │     ├─ decomp_cholesky.cpython-313.pyc
│  │     │  │     ├─ decomp_lu.cpython-313.pyc
│  │     │  │     ├─ decomp_qr.cpython-313.pyc
│  │     │  │     ├─ decomp_schur.cpython-313.pyc
│  │     │  │     ├─ decomp_svd.cpython-313.pyc
│  │     │  │     ├─ interpolative.cpython-313.pyc
│  │     │  │     ├─ lapack.cpython-313.pyc
│  │     │  │     ├─ matfuncs.cpython-313.pyc
│  │     │  │     ├─ misc.cpython-313.pyc
│  │     │  │     ├─ special_matrices.cpython-313.pyc
│  │     │  │     ├─ _basic.cpython-313.pyc
│  │     │  │     ├─ _decomp.cpython-313.pyc
│  │     │  │     ├─ _decomp_cholesky.cpython-313.pyc
│  │     │  │     ├─ _decomp_cossin.cpython-313.pyc
│  │     │  │     ├─ _decomp_ldl.cpython-313.pyc
│  │     │  │     ├─ _decomp_lu.cpython-313.pyc
│  │     │  │     ├─ _decomp_polar.cpython-313.pyc
│  │     │  │     ├─ _decomp_qr.cpython-313.pyc
│  │     │  │     ├─ _decomp_qz.cpython-313.pyc
│  │     │  │     ├─ _decomp_schur.cpython-313.pyc
│  │     │  │     ├─ _decomp_svd.cpython-313.pyc
│  │     │  │     ├─ _expm_frechet.cpython-313.pyc
│  │     │  │     ├─ _matfuncs.cpython-313.pyc
│  │     │  │     ├─ _matfuncs_inv_ssq.cpython-313.pyc
│  │     │  │     ├─ _matfuncs_sqrtm.cpython-313.pyc
│  │     │  │     ├─ _misc.cpython-313.pyc
│  │     │  │     ├─ _procrustes.cpython-313.pyc
│  │     │  │     ├─ _sketches.cpython-313.pyc
│  │     │  │     ├─ _solvers.cpython-313.pyc
│  │     │  │     ├─ _special_matrices.cpython-313.pyc
│  │     │  │     ├─ _testutils.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ misc
│  │     │  │  ├─ common.py
│  │     │  │  ├─ doccer.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ common.cpython-313.pyc
│  │     │  │     ├─ doccer.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ ndimage
│  │     │  │  ├─ filters.py
│  │     │  │  ├─ fourier.py
│  │     │  │  ├─ interpolation.py
│  │     │  │  ├─ measurements.py
│  │     │  │  ├─ morphology.py
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ data
│  │     │  │  │  │  ├─ label_inputs.txt
│  │     │  │  │  │  ├─ label_results.txt
│  │     │  │  │  │  └─ label_strels.txt
│  │     │  │  │  ├─ dots.png
│  │     │  │  │  ├─ test_c_api.py
│  │     │  │  │  ├─ test_datatypes.py
│  │     │  │  │  ├─ test_filters.py
│  │     │  │  │  ├─ test_fourier.py
│  │     │  │  │  ├─ test_interpolation.py
│  │     │  │  │  ├─ test_measurements.py
│  │     │  │  │  ├─ test_morphology.py
│  │     │  │  │  ├─ test_ni_support.py
│  │     │  │  │  ├─ test_splines.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ test_c_api.cpython-313.pyc
│  │     │  │  │     ├─ test_datatypes.cpython-313.pyc
│  │     │  │  │     ├─ test_filters.cpython-313.pyc
│  │     │  │  │     ├─ test_fourier.cpython-313.pyc
│  │     │  │  │     ├─ test_interpolation.cpython-313.pyc
│  │     │  │  │     ├─ test_measurements.cpython-313.pyc
│  │     │  │  │     ├─ test_morphology.cpython-313.pyc
│  │     │  │  │     ├─ test_ni_support.cpython-313.pyc
│  │     │  │  │     ├─ test_splines.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _ctest.cp313-win_amd64.dll.a
│  │     │  │  ├─ _ctest.cp313-win_amd64.pyd
│  │     │  │  ├─ _cytest.cp313-win_amd64.dll.a
│  │     │  │  ├─ _cytest.cp313-win_amd64.pyd
│  │     │  │  ├─ _delegators.py
│  │     │  │  ├─ _filters.py
│  │     │  │  ├─ _fourier.py
│  │     │  │  ├─ _interpolation.py
│  │     │  │  ├─ _measurements.py
│  │     │  │  ├─ _morphology.py
│  │     │  │  ├─ _ndimage_api.py
│  │     │  │  ├─ _nd_image.cp313-win_amd64.dll.a
│  │     │  │  ├─ _nd_image.cp313-win_amd64.pyd
│  │     │  │  ├─ _ni_docstrings.py
│  │     │  │  ├─ _ni_label.cp313-win_amd64.dll.a
│  │     │  │  ├─ _ni_label.cp313-win_amd64.pyd
│  │     │  │  ├─ _ni_support.py
│  │     │  │  ├─ _rank_filter_1d.cp313-win_amd64.dll.a
│  │     │  │  ├─ _rank_filter_1d.cp313-win_amd64.pyd
│  │     │  │  ├─ _support_alternative_backends.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ filters.cpython-313.pyc
│  │     │  │     ├─ fourier.cpython-313.pyc
│  │     │  │     ├─ interpolation.cpython-313.pyc
│  │     │  │     ├─ measurements.cpython-313.pyc
│  │     │  │     ├─ morphology.cpython-313.pyc
│  │     │  │     ├─ _delegators.cpython-313.pyc
│  │     │  │     ├─ _filters.cpython-313.pyc
│  │     │  │     ├─ _fourier.cpython-313.pyc
│  │     │  │     ├─ _interpolation.cpython-313.pyc
│  │     │  │     ├─ _measurements.cpython-313.pyc
│  │     │  │     ├─ _morphology.cpython-313.pyc
│  │     │  │     ├─ _ndimage_api.cpython-313.pyc
│  │     │  │     ├─ _ni_docstrings.cpython-313.pyc
│  │     │  │     ├─ _ni_support.cpython-313.pyc
│  │     │  │     ├─ _support_alternative_backends.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ odr
│  │     │  │  ├─ models.py
│  │     │  │  ├─ odrpack.py
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ test_odr.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ test_odr.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _add_newdocs.py
│  │     │  │  ├─ _models.py
│  │     │  │  ├─ _odrpack.py
│  │     │  │  ├─ __init__.py
│  │     │  │  ├─ __odrpack.cp313-win_amd64.dll.a
│  │     │  │  ├─ __odrpack.cp313-win_amd64.pyd
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ models.cpython-313.pyc
│  │     │  │     ├─ odrpack.cpython-313.pyc
│  │     │  │     ├─ _add_newdocs.cpython-313.pyc
│  │     │  │     ├─ _models.cpython-313.pyc
│  │     │  │     ├─ _odrpack.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ optimize
│  │     │  │  ├─ cobyla.py
│  │     │  │  ├─ cython_optimize
│  │     │  │  │  ├─ c_zeros.pxd
│  │     │  │  │  ├─ _zeros.cp313-win_amd64.dll.a
│  │     │  │  │  ├─ _zeros.cp313-win_amd64.pyd
│  │     │  │  │  ├─ _zeros.pxd
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ cython_optimize.pxd
│  │     │  │  ├─ elementwise.py
│  │     │  │  ├─ lbfgsb.py
│  │     │  │  ├─ linesearch.py
│  │     │  │  ├─ minpack.py
│  │     │  │  ├─ minpack2.py
│  │     │  │  ├─ moduleTNC.py
│  │     │  │  ├─ nonlin.py
│  │     │  │  ├─ optimize.py
│  │     │  │  ├─ slsqp.py
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ test_bracket.py
│  │     │  │  │  ├─ test_chandrupatla.py
│  │     │  │  │  ├─ test_cobyla.py
│  │     │  │  │  ├─ test_cobyqa.py
│  │     │  │  │  ├─ test_constraints.py
│  │     │  │  │  ├─ test_constraint_conversion.py
│  │     │  │  │  ├─ test_cython_optimize.py
│  │     │  │  │  ├─ test_differentiable_functions.py
│  │     │  │  │  ├─ test_direct.py
│  │     │  │  │  ├─ test_extending.py
│  │     │  │  │  ├─ test_hessian_update_strategy.py
│  │     │  │  │  ├─ test_isotonic_regression.py
│  │     │  │  │  ├─ test_lbfgsb_hessinv.py
│  │     │  │  │  ├─ test_lbfgsb_setulb.py
│  │     │  │  │  ├─ test_least_squares.py
│  │     │  │  │  ├─ test_linear_assignment.py
│  │     │  │  │  ├─ test_linesearch.py
│  │     │  │  │  ├─ test_linprog.py
│  │     │  │  │  ├─ test_lsq_common.py
│  │     │  │  │  ├─ test_lsq_linear.py
│  │     │  │  │  ├─ test_milp.py
│  │     │  │  │  ├─ test_minimize_constrained.py
│  │     │  │  │  ├─ test_minpack.py
│  │     │  │  │  ├─ test_nnls.py
│  │     │  │  │  ├─ test_nonlin.py
│  │     │  │  │  ├─ test_optimize.py
│  │     │  │  │  ├─ test_quadratic_assignment.py
│  │     │  │  │  ├─ test_regression.py
│  │     │  │  │  ├─ test_slsqp.py
│  │     │  │  │  ├─ test_tnc.py
│  │     │  │  │  ├─ test_trustregion.py
│  │     │  │  │  ├─ test_trustregion_exact.py
│  │     │  │  │  ├─ test_trustregion_krylov.py
│  │     │  │  │  ├─ test_zeros.py
│  │     │  │  │  ├─ test__basinhopping.py
│  │     │  │  │  ├─ test__differential_evolution.py
│  │     │  │  │  ├─ test__dual_annealing.py
│  │     │  │  │  ├─ test__linprog_clean_inputs.py
│  │     │  │  │  ├─ test__numdiff.py
│  │     │  │  │  ├─ test__remove_redundancy.py
│  │     │  │  │  ├─ test__root.py
│  │     │  │  │  ├─ test__shgo.py
│  │     │  │  │  ├─ test__spectral.py
│  │     │  │  │  ├─ _cython_examples
│  │     │  │  │  │  ├─ extending.pyx
│  │     │  │  │  │  └─ meson.build
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ test_bracket.cpython-313.pyc
│  │     │  │  │     ├─ test_chandrupatla.cpython-313.pyc
│  │     │  │  │     ├─ test_cobyla.cpython-313.pyc
│  │     │  │  │     ├─ test_cobyqa.cpython-313.pyc
│  │     │  │  │     ├─ test_constraints.cpython-313.pyc
│  │     │  │  │     ├─ test_constraint_conversion.cpython-313.pyc
│  │     │  │  │     ├─ test_cython_optimize.cpython-313.pyc
│  │     │  │  │     ├─ test_differentiable_functions.cpython-313.pyc
│  │     │  │  │     ├─ test_direct.cpython-313.pyc
│  │     │  │  │     ├─ test_extending.cpython-313.pyc
│  │     │  │  │     ├─ test_hessian_update_strategy.cpython-313.pyc
│  │     │  │  │     ├─ test_isotonic_regression.cpython-313.pyc
│  │     │  │  │     ├─ test_lbfgsb_hessinv.cpython-313.pyc
│  │     │  │  │     ├─ test_lbfgsb_setulb.cpython-313.pyc
│  │     │  │  │     ├─ test_least_squares.cpython-313.pyc
│  │     │  │  │     ├─ test_linear_assignment.cpython-313.pyc
│  │     │  │  │     ├─ test_linesearch.cpython-313.pyc
│  │     │  │  │     ├─ test_linprog.cpython-313.pyc
│  │     │  │  │     ├─ test_lsq_common.cpython-313.pyc
│  │     │  │  │     ├─ test_lsq_linear.cpython-313.pyc
│  │     │  │  │     ├─ test_milp.cpython-313.pyc
│  │     │  │  │     ├─ test_minimize_constrained.cpython-313.pyc
│  │     │  │  │     ├─ test_minpack.cpython-313.pyc
│  │     │  │  │     ├─ test_nnls.cpython-313.pyc
│  │     │  │  │     ├─ test_nonlin.cpython-313.pyc
│  │     │  │  │     ├─ test_optimize.cpython-313.pyc
│  │     │  │  │     ├─ test_quadratic_assignment.cpython-313.pyc
│  │     │  │  │     ├─ test_regression.cpython-313.pyc
│  │     │  │  │     ├─ test_slsqp.cpython-313.pyc
│  │     │  │  │     ├─ test_tnc.cpython-313.pyc
│  │     │  │  │     ├─ test_trustregion.cpython-313.pyc
│  │     │  │  │     ├─ test_trustregion_exact.cpython-313.pyc
│  │     │  │  │     ├─ test_trustregion_krylov.cpython-313.pyc
│  │     │  │  │     ├─ test_zeros.cpython-313.pyc
│  │     │  │  │     ├─ test__basinhopping.cpython-313.pyc
│  │     │  │  │     ├─ test__differential_evolution.cpython-313.pyc
│  │     │  │  │     ├─ test__dual_annealing.cpython-313.pyc
│  │     │  │  │     ├─ test__linprog_clean_inputs.cpython-313.pyc
│  │     │  │  │     ├─ test__numdiff.cpython-313.pyc
│  │     │  │  │     ├─ test__remove_redundancy.cpython-313.pyc
│  │     │  │  │     ├─ test__root.cpython-313.pyc
│  │     │  │  │     ├─ test__shgo.cpython-313.pyc
│  │     │  │  │     ├─ test__spectral.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ tnc.py
│  │     │  │  ├─ zeros.py
│  │     │  │  ├─ _basinhopping.py
│  │     │  │  ├─ _bglu_dense.cp313-win_amd64.dll.a
│  │     │  │  ├─ _bglu_dense.cp313-win_amd64.pyd
│  │     │  │  ├─ _bracket.py
│  │     │  │  ├─ _chandrupatla.py
│  │     │  │  ├─ _cobyla_py.py
│  │     │  │  ├─ _cobyqa_py.py
│  │     │  │  ├─ _constraints.py
│  │     │  │  ├─ _dcsrch.py
│  │     │  │  ├─ _differentiable_functions.py
│  │     │  │  ├─ _differentialevolution.py
│  │     │  │  ├─ _direct.cp313-win_amd64.dll.a
│  │     │  │  ├─ _direct.cp313-win_amd64.pyd
│  │     │  │  ├─ _direct_py.py
│  │     │  │  ├─ _dual_annealing.py
│  │     │  │  ├─ _elementwise.py
│  │     │  │  ├─ _group_columns.cp313-win_amd64.dll.a
│  │     │  │  ├─ _group_columns.cp313-win_amd64.pyd
│  │     │  │  ├─ _hessian_update_strategy.py
│  │     │  │  ├─ _highspy
│  │     │  │  │  ├─ _core.cp313-win_amd64.dll.a
│  │     │  │  │  ├─ _core.cp313-win_amd64.pyd
│  │     │  │  │  ├─ _highs_options.cp313-win_amd64.dll.a
│  │     │  │  │  ├─ _highs_options.cp313-win_amd64.pyd
│  │     │  │  │  ├─ _highs_wrapper.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ _highs_wrapper.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _isotonic.py
│  │     │  │  ├─ _lbfgsb.cp313-win_amd64.dll.a
│  │     │  │  ├─ _lbfgsb.cp313-win_amd64.pyd
│  │     │  │  ├─ _lbfgsb_py.py
│  │     │  │  ├─ _linesearch.py
│  │     │  │  ├─ _linprog.py
│  │     │  │  ├─ _linprog_doc.py
│  │     │  │  ├─ _linprog_highs.py
│  │     │  │  ├─ _linprog_ip.py
│  │     │  │  ├─ _linprog_rs.py
│  │     │  │  ├─ _linprog_simplex.py
│  │     │  │  ├─ _linprog_util.py
│  │     │  │  ├─ _lsap.cp313-win_amd64.dll.a
│  │     │  │  ├─ _lsap.cp313-win_amd64.pyd
│  │     │  │  ├─ _lsq
│  │     │  │  │  ├─ bvls.py
│  │     │  │  │  ├─ common.py
│  │     │  │  │  ├─ dogbox.py
│  │     │  │  │  ├─ givens_elimination.cp313-win_amd64.dll.a
│  │     │  │  │  ├─ givens_elimination.cp313-win_amd64.pyd
│  │     │  │  │  ├─ least_squares.py
│  │     │  │  │  ├─ lsq_linear.py
│  │     │  │  │  ├─ trf.py
│  │     │  │  │  ├─ trf_linear.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ bvls.cpython-313.pyc
│  │     │  │  │     ├─ common.cpython-313.pyc
│  │     │  │  │     ├─ dogbox.cpython-313.pyc
│  │     │  │  │     ├─ least_squares.cpython-313.pyc
│  │     │  │  │     ├─ lsq_linear.cpython-313.pyc
│  │     │  │  │     ├─ trf.cpython-313.pyc
│  │     │  │  │     ├─ trf_linear.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _milp.py
│  │     │  │  ├─ _minimize.py
│  │     │  │  ├─ _minpack.cp313-win_amd64.dll.a
│  │     │  │  ├─ _minpack.cp313-win_amd64.pyd
│  │     │  │  ├─ _minpack_py.py
│  │     │  │  ├─ _moduleTNC.cp313-win_amd64.dll.a
│  │     │  │  ├─ _moduleTNC.cp313-win_amd64.pyd
│  │     │  │  ├─ _nnls.py
│  │     │  │  ├─ _nonlin.py
│  │     │  │  ├─ _numdiff.py
│  │     │  │  ├─ _optimize.py
│  │     │  │  ├─ _pava_pybind.cp313-win_amd64.dll.a
│  │     │  │  ├─ _pava_pybind.cp313-win_amd64.pyd
│  │     │  │  ├─ _qap.py
│  │     │  │  ├─ _remove_redundancy.py
│  │     │  │  ├─ _root.py
│  │     │  │  ├─ _root_scalar.py
│  │     │  │  ├─ _shgo.py
│  │     │  │  ├─ _shgo_lib
│  │     │  │  │  ├─ _complex.py
│  │     │  │  │  ├─ _vertex.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ _complex.cpython-313.pyc
│  │     │  │  │     ├─ _vertex.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _slsqplib.cp313-win_amd64.dll.a
│  │     │  │  ├─ _slsqplib.cp313-win_amd64.pyd
│  │     │  │  ├─ _slsqp_py.py
│  │     │  │  ├─ _spectral.py
│  │     │  │  ├─ _tnc.py
│  │     │  │  ├─ _trlib
│  │     │  │  │  ├─ _trlib.cp313-win_amd64.dll.a
│  │     │  │  │  ├─ _trlib.cp313-win_amd64.pyd
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _trustregion.py
│  │     │  │  ├─ _trustregion_constr
│  │     │  │  │  ├─ canonical_constraint.py
│  │     │  │  │  ├─ equality_constrained_sqp.py
│  │     │  │  │  ├─ minimize_trustregion_constr.py
│  │     │  │  │  ├─ projections.py
│  │     │  │  │  ├─ qp_subproblem.py
│  │     │  │  │  ├─ report.py
│  │     │  │  │  ├─ tests
│  │     │  │  │  │  ├─ test_canonical_constraint.py
│  │     │  │  │  │  ├─ test_nested_minimize.py
│  │     │  │  │  │  ├─ test_projections.py
│  │     │  │  │  │  ├─ test_qp_subproblem.py
│  │     │  │  │  │  ├─ test_report.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ test_canonical_constraint.cpython-313.pyc
│  │     │  │  │  │     ├─ test_nested_minimize.cpython-313.pyc
│  │     │  │  │  │     ├─ test_projections.cpython-313.pyc
│  │     │  │  │  │     ├─ test_qp_subproblem.cpython-313.pyc
│  │     │  │  │  │     ├─ test_report.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ tr_interior_point.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ canonical_constraint.cpython-313.pyc
│  │     │  │  │     ├─ equality_constrained_sqp.cpython-313.pyc
│  │     │  │  │     ├─ minimize_trustregion_constr.cpython-313.pyc
│  │     │  │  │     ├─ projections.cpython-313.pyc
│  │     │  │  │     ├─ qp_subproblem.cpython-313.pyc
│  │     │  │  │     ├─ report.cpython-313.pyc
│  │     │  │  │     ├─ tr_interior_point.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _trustregion_dogleg.py
│  │     │  │  ├─ _trustregion_exact.py
│  │     │  │  ├─ _trustregion_krylov.py
│  │     │  │  ├─ _trustregion_ncg.py
│  │     │  │  ├─ _tstutils.py
│  │     │  │  ├─ _zeros.cp313-win_amd64.dll.a
│  │     │  │  ├─ _zeros.cp313-win_amd64.pyd
│  │     │  │  ├─ _zeros_py.py
│  │     │  │  ├─ __init__.pxd
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ cobyla.cpython-313.pyc
│  │     │  │     ├─ elementwise.cpython-313.pyc
│  │     │  │     ├─ lbfgsb.cpython-313.pyc
│  │     │  │     ├─ linesearch.cpython-313.pyc
│  │     │  │     ├─ minpack.cpython-313.pyc
│  │     │  │     ├─ minpack2.cpython-313.pyc
│  │     │  │     ├─ moduleTNC.cpython-313.pyc
│  │     │  │     ├─ nonlin.cpython-313.pyc
│  │     │  │     ├─ optimize.cpython-313.pyc
│  │     │  │     ├─ slsqp.cpython-313.pyc
│  │     │  │     ├─ tnc.cpython-313.pyc
│  │     │  │     ├─ zeros.cpython-313.pyc
│  │     │  │     ├─ _basinhopping.cpython-313.pyc
│  │     │  │     ├─ _bracket.cpython-313.pyc
│  │     │  │     ├─ _chandrupatla.cpython-313.pyc
│  │     │  │     ├─ _cobyla_py.cpython-313.pyc
│  │     │  │     ├─ _cobyqa_py.cpython-313.pyc
│  │     │  │     ├─ _constraints.cpython-313.pyc
│  │     │  │     ├─ _dcsrch.cpython-313.pyc
│  │     │  │     ├─ _differentiable_functions.cpython-313.pyc
│  │     │  │     ├─ _differentialevolution.cpython-313.pyc
│  │     │  │     ├─ _direct_py.cpython-313.pyc
│  │     │  │     ├─ _dual_annealing.cpython-313.pyc
│  │     │  │     ├─ _elementwise.cpython-313.pyc
│  │     │  │     ├─ _hessian_update_strategy.cpython-313.pyc
│  │     │  │     ├─ _isotonic.cpython-313.pyc
│  │     │  │     ├─ _lbfgsb_py.cpython-313.pyc
│  │     │  │     ├─ _linesearch.cpython-313.pyc
│  │     │  │     ├─ _linprog.cpython-313.pyc
│  │     │  │     ├─ _linprog_doc.cpython-313.pyc
│  │     │  │     ├─ _linprog_highs.cpython-313.pyc
│  │     │  │     ├─ _linprog_ip.cpython-313.pyc
│  │     │  │     ├─ _linprog_rs.cpython-313.pyc
│  │     │  │     ├─ _linprog_simplex.cpython-313.pyc
│  │     │  │     ├─ _linprog_util.cpython-313.pyc
│  │     │  │     ├─ _milp.cpython-313.pyc
│  │     │  │     ├─ _minimize.cpython-313.pyc
│  │     │  │     ├─ _minpack_py.cpython-313.pyc
│  │     │  │     ├─ _nnls.cpython-313.pyc
│  │     │  │     ├─ _nonlin.cpython-313.pyc
│  │     │  │     ├─ _numdiff.cpython-313.pyc
│  │     │  │     ├─ _optimize.cpython-313.pyc
│  │     │  │     ├─ _qap.cpython-313.pyc
│  │     │  │     ├─ _remove_redundancy.cpython-313.pyc
│  │     │  │     ├─ _root.cpython-313.pyc
│  │     │  │     ├─ _root_scalar.cpython-313.pyc
│  │     │  │     ├─ _shgo.cpython-313.pyc
│  │     │  │     ├─ _slsqp_py.cpython-313.pyc
│  │     │  │     ├─ _spectral.cpython-313.pyc
│  │     │  │     ├─ _tnc.cpython-313.pyc
│  │     │  │     ├─ _trustregion.cpython-313.pyc
│  │     │  │     ├─ _trustregion_dogleg.cpython-313.pyc
│  │     │  │     ├─ _trustregion_exact.cpython-313.pyc
│  │     │  │     ├─ _trustregion_krylov.cpython-313.pyc
│  │     │  │     ├─ _trustregion_ncg.cpython-313.pyc
│  │     │  │     ├─ _tstutils.cpython-313.pyc
│  │     │  │     ├─ _zeros_py.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ signal
│  │     │  │  ├─ bsplines.py
│  │     │  │  ├─ filter_design.py
│  │     │  │  ├─ fir_filter_design.py
│  │     │  │  ├─ ltisys.py
│  │     │  │  ├─ lti_conversion.py
│  │     │  │  ├─ signaltools.py
│  │     │  │  ├─ spectral.py
│  │     │  │  ├─ spline.py
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ mpsig.py
│  │     │  │  │  ├─ test_array_tools.py
│  │     │  │  │  ├─ test_bsplines.py
│  │     │  │  │  ├─ test_cont2discrete.py
│  │     │  │  │  ├─ test_czt.py
│  │     │  │  │  ├─ test_dltisys.py
│  │     │  │  │  ├─ test_filter_design.py
│  │     │  │  │  ├─ test_fir_filter_design.py
│  │     │  │  │  ├─ test_ltisys.py
│  │     │  │  │  ├─ test_max_len_seq.py
│  │     │  │  │  ├─ test_peak_finding.py
│  │     │  │  │  ├─ test_result_type.py
│  │     │  │  │  ├─ test_savitzky_golay.py
│  │     │  │  │  ├─ test_short_time_fft.py
│  │     │  │  │  ├─ test_signaltools.py
│  │     │  │  │  ├─ test_spectral.py
│  │     │  │  │  ├─ test_splines.py
│  │     │  │  │  ├─ test_upfirdn.py
│  │     │  │  │  ├─ test_waveforms.py
│  │     │  │  │  ├─ test_wavelets.py
│  │     │  │  │  ├─ test_windows.py
│  │     │  │  │  ├─ _scipy_spectral_test_shim.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ mpsig.cpython-313.pyc
│  │     │  │  │     ├─ test_array_tools.cpython-313.pyc
│  │     │  │  │     ├─ test_bsplines.cpython-313.pyc
│  │     │  │  │     ├─ test_cont2discrete.cpython-313.pyc
│  │     │  │  │     ├─ test_czt.cpython-313.pyc
│  │     │  │  │     ├─ test_dltisys.cpython-313.pyc
│  │     │  │  │     ├─ test_filter_design.cpython-313.pyc
│  │     │  │  │     ├─ test_fir_filter_design.cpython-313.pyc
│  │     │  │  │     ├─ test_ltisys.cpython-313.pyc
│  │     │  │  │     ├─ test_max_len_seq.cpython-313.pyc
│  │     │  │  │     ├─ test_peak_finding.cpython-313.pyc
│  │     │  │  │     ├─ test_result_type.cpython-313.pyc
│  │     │  │  │     ├─ test_savitzky_golay.cpython-313.pyc
│  │     │  │  │     ├─ test_short_time_fft.cpython-313.pyc
│  │     │  │  │     ├─ test_signaltools.cpython-313.pyc
│  │     │  │  │     ├─ test_spectral.cpython-313.pyc
│  │     │  │  │     ├─ test_splines.cpython-313.pyc
│  │     │  │  │     ├─ test_upfirdn.cpython-313.pyc
│  │     │  │  │     ├─ test_waveforms.cpython-313.pyc
│  │     │  │  │     ├─ test_wavelets.cpython-313.pyc
│  │     │  │  │     ├─ test_windows.cpython-313.pyc
│  │     │  │  │     ├─ _scipy_spectral_test_shim.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ waveforms.py
│  │     │  │  ├─ wavelets.py
│  │     │  │  ├─ windows
│  │     │  │  │  ├─ windows.py
│  │     │  │  │  ├─ _windows.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ windows.cpython-313.pyc
│  │     │  │  │     ├─ _windows.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _arraytools.py
│  │     │  │  ├─ _czt.py
│  │     │  │  ├─ _delegators.py
│  │     │  │  ├─ _filter_design.py
│  │     │  │  ├─ _fir_filter_design.py
│  │     │  │  ├─ _ltisys.py
│  │     │  │  ├─ _lti_conversion.py
│  │     │  │  ├─ _max_len_seq.py
│  │     │  │  ├─ _max_len_seq_inner.cp313-win_amd64.dll.a
│  │     │  │  ├─ _max_len_seq_inner.cp313-win_amd64.pyd
│  │     │  │  ├─ _peak_finding.py
│  │     │  │  ├─ _peak_finding_utils.cp313-win_amd64.dll.a
│  │     │  │  ├─ _peak_finding_utils.cp313-win_amd64.pyd
│  │     │  │  ├─ _polyutils.py
│  │     │  │  ├─ _savitzky_golay.py
│  │     │  │  ├─ _short_time_fft.py
│  │     │  │  ├─ _signaltools.py
│  │     │  │  ├─ _signal_api.py
│  │     │  │  ├─ _sigtools.cp313-win_amd64.dll.a
│  │     │  │  ├─ _sigtools.cp313-win_amd64.pyd
│  │     │  │  ├─ _sosfilt.cp313-win_amd64.dll.a
│  │     │  │  ├─ _sosfilt.cp313-win_amd64.pyd
│  │     │  │  ├─ _spectral_py.py
│  │     │  │  ├─ _spline.cp313-win_amd64.dll.a
│  │     │  │  ├─ _spline.cp313-win_amd64.pyd
│  │     │  │  ├─ _spline.pyi
│  │     │  │  ├─ _spline_filters.py
│  │     │  │  ├─ _support_alternative_backends.py
│  │     │  │  ├─ _upfirdn.py
│  │     │  │  ├─ _upfirdn_apply.cp313-win_amd64.dll.a
│  │     │  │  ├─ _upfirdn_apply.cp313-win_amd64.pyd
│  │     │  │  ├─ _waveforms.py
│  │     │  │  ├─ _wavelets.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ bsplines.cpython-313.pyc
│  │     │  │     ├─ filter_design.cpython-313.pyc
│  │     │  │     ├─ fir_filter_design.cpython-313.pyc
│  │     │  │     ├─ ltisys.cpython-313.pyc
│  │     │  │     ├─ lti_conversion.cpython-313.pyc
│  │     │  │     ├─ signaltools.cpython-313.pyc
│  │     │  │     ├─ spectral.cpython-313.pyc
│  │     │  │     ├─ spline.cpython-313.pyc
│  │     │  │     ├─ waveforms.cpython-313.pyc
│  │     │  │     ├─ wavelets.cpython-313.pyc
│  │     │  │     ├─ _arraytools.cpython-313.pyc
│  │     │  │     ├─ _czt.cpython-313.pyc
│  │     │  │     ├─ _delegators.cpython-313.pyc
│  │     │  │     ├─ _filter_design.cpython-313.pyc
│  │     │  │     ├─ _fir_filter_design.cpython-313.pyc
│  │     │  │     ├─ _ltisys.cpython-313.pyc
│  │     │  │     ├─ _lti_conversion.cpython-313.pyc
│  │     │  │     ├─ _max_len_seq.cpython-313.pyc
│  │     │  │     ├─ _peak_finding.cpython-313.pyc
│  │     │  │     ├─ _polyutils.cpython-313.pyc
│  │     │  │     ├─ _savitzky_golay.cpython-313.pyc
│  │     │  │     ├─ _short_time_fft.cpython-313.pyc
│  │     │  │     ├─ _signaltools.cpython-313.pyc
│  │     │  │     ├─ _signal_api.cpython-313.pyc
│  │     │  │     ├─ _spectral_py.cpython-313.pyc
│  │     │  │     ├─ _spline_filters.cpython-313.pyc
│  │     │  │     ├─ _support_alternative_backends.cpython-313.pyc
│  │     │  │     ├─ _upfirdn.cpython-313.pyc
│  │     │  │     ├─ _waveforms.cpython-313.pyc
│  │     │  │     ├─ _wavelets.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ sparse
│  │     │  │  ├─ base.py
│  │     │  │  ├─ bsr.py
│  │     │  │  ├─ compressed.py
│  │     │  │  ├─ construct.py
│  │     │  │  ├─ coo.py
│  │     │  │  ├─ csc.py
│  │     │  │  ├─ csgraph
│  │     │  │  │  ├─ tests
│  │     │  │  │  │  ├─ test_connected_components.py
│  │     │  │  │  │  ├─ test_conversions.py
│  │     │  │  │  │  ├─ test_flow.py
│  │     │  │  │  │  ├─ test_graph_laplacian.py
│  │     │  │  │  │  ├─ test_matching.py
│  │     │  │  │  │  ├─ test_pydata_sparse.py
│  │     │  │  │  │  ├─ test_reordering.py
│  │     │  │  │  │  ├─ test_shortest_path.py
│  │     │  │  │  │  ├─ test_spanning_tree.py
│  │     │  │  │  │  ├─ test_traversal.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ test_connected_components.cpython-313.pyc
│  │     │  │  │  │     ├─ test_conversions.cpython-313.pyc
│  │     │  │  │  │     ├─ test_flow.cpython-313.pyc
│  │     │  │  │  │     ├─ test_graph_laplacian.cpython-313.pyc
│  │     │  │  │  │     ├─ test_matching.cpython-313.pyc
│  │     │  │  │  │     ├─ test_pydata_sparse.cpython-313.pyc
│  │     │  │  │  │     ├─ test_reordering.cpython-313.pyc
│  │     │  │  │  │     ├─ test_shortest_path.cpython-313.pyc
│  │     │  │  │  │     ├─ test_spanning_tree.cpython-313.pyc
│  │     │  │  │  │     ├─ test_traversal.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ _flow.cp313-win_amd64.dll.a
│  │     │  │  │  ├─ _flow.cp313-win_amd64.pyd
│  │     │  │  │  ├─ _laplacian.py
│  │     │  │  │  ├─ _matching.cp313-win_amd64.dll.a
│  │     │  │  │  ├─ _matching.cp313-win_amd64.pyd
│  │     │  │  │  ├─ _min_spanning_tree.cp313-win_amd64.dll.a
│  │     │  │  │  ├─ _min_spanning_tree.cp313-win_amd64.pyd
│  │     │  │  │  ├─ _reordering.cp313-win_amd64.dll.a
│  │     │  │  │  ├─ _reordering.cp313-win_amd64.pyd
│  │     │  │  │  ├─ _shortest_path.cp313-win_amd64.dll.a
│  │     │  │  │  ├─ _shortest_path.cp313-win_amd64.pyd
│  │     │  │  │  ├─ _tools.cp313-win_amd64.dll.a
│  │     │  │  │  ├─ _tools.cp313-win_amd64.pyd
│  │     │  │  │  ├─ _traversal.cp313-win_amd64.dll.a
│  │     │  │  │  ├─ _traversal.cp313-win_amd64.pyd
│  │     │  │  │  ├─ _validation.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ _laplacian.cpython-313.pyc
│  │     │  │  │     ├─ _validation.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ csr.py
│  │     │  │  ├─ data.py
│  │     │  │  ├─ dia.py
│  │     │  │  ├─ dok.py
│  │     │  │  ├─ extract.py
│  │     │  │  ├─ lil.py
│  │     │  │  ├─ linalg
│  │     │  │  │  ├─ dsolve.py
│  │     │  │  │  ├─ eigen.py
│  │     │  │  │  ├─ interface.py
│  │     │  │  │  ├─ isolve.py
│  │     │  │  │  ├─ matfuncs.py
│  │     │  │  │  ├─ tests
│  │     │  │  │  │  ├─ propack_test_data.npz
│  │     │  │  │  │  ├─ test_expm_multiply.py
│  │     │  │  │  │  ├─ test_interface.py
│  │     │  │  │  │  ├─ test_matfuncs.py
│  │     │  │  │  │  ├─ test_norm.py
│  │     │  │  │  │  ├─ test_onenormest.py
│  │     │  │  │  │  ├─ test_propack.py
│  │     │  │  │  │  ├─ test_pydata_sparse.py
│  │     │  │  │  │  ├─ test_special_sparse_arrays.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ test_expm_multiply.cpython-313.pyc
│  │     │  │  │  │     ├─ test_interface.cpython-313.pyc
│  │     │  │  │  │     ├─ test_matfuncs.cpython-313.pyc
│  │     │  │  │  │     ├─ test_norm.cpython-313.pyc
│  │     │  │  │  │     ├─ test_onenormest.cpython-313.pyc
│  │     │  │  │  │     ├─ test_propack.cpython-313.pyc
│  │     │  │  │  │     ├─ test_pydata_sparse.cpython-313.pyc
│  │     │  │  │  │     ├─ test_special_sparse_arrays.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ _dsolve
│  │     │  │  │  │  ├─ linsolve.py
│  │     │  │  │  │  ├─ tests
│  │     │  │  │  │  │  ├─ test_linsolve.py
│  │     │  │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  │  └─ __pycache__
│  │     │  │  │  │  │     ├─ test_linsolve.cpython-313.pyc
│  │     │  │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  │  ├─ _add_newdocs.py
│  │     │  │  │  │  ├─ _superlu.cp313-win_amd64.dll.a
│  │     │  │  │  │  ├─ _superlu.cp313-win_amd64.pyd
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ linsolve.cpython-313.pyc
│  │     │  │  │  │     ├─ _add_newdocs.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ _eigen
│  │     │  │  │  │  ├─ arpack
│  │     │  │  │  │  │  ├─ arpack.py
│  │     │  │  │  │  │  ├─ COPYING
│  │     │  │  │  │  │  ├─ tests
│  │     │  │  │  │  │  │  ├─ test_arpack.py
│  │     │  │  │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  │  │  └─ __pycache__
│  │     │  │  │  │  │  │     ├─ test_arpack.cpython-313.pyc
│  │     │  │  │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  │  │  ├─ _arpack.cp313-win_amd64.dll.a
│  │     │  │  │  │  │  ├─ _arpack.cp313-win_amd64.pyd
│  │     │  │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  │  └─ __pycache__
│  │     │  │  │  │  │     ├─ arpack.cpython-313.pyc
│  │     │  │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  │  ├─ lobpcg
│  │     │  │  │  │  │  ├─ lobpcg.py
│  │     │  │  │  │  │  ├─ tests
│  │     │  │  │  │  │  │  ├─ test_lobpcg.py
│  │     │  │  │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  │  │  └─ __pycache__
│  │     │  │  │  │  │  │     ├─ test_lobpcg.cpython-313.pyc
│  │     │  │  │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  │  └─ __pycache__
│  │     │  │  │  │  │     ├─ lobpcg.cpython-313.pyc
│  │     │  │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  │  ├─ tests
│  │     │  │  │  │  │  ├─ test_svds.py
│  │     │  │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  │  └─ __pycache__
│  │     │  │  │  │  │     ├─ test_svds.cpython-313.pyc
│  │     │  │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  │  ├─ _svds.py
│  │     │  │  │  │  ├─ _svds_doc.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ _svds.cpython-313.pyc
│  │     │  │  │  │     ├─ _svds_doc.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ _expm_multiply.py
│  │     │  │  │  ├─ _interface.py
│  │     │  │  │  ├─ _isolve
│  │     │  │  │  │  ├─ iterative.py
│  │     │  │  │  │  ├─ lgmres.py
│  │     │  │  │  │  ├─ lsmr.py
│  │     │  │  │  │  ├─ lsqr.py
│  │     │  │  │  │  ├─ minres.py
│  │     │  │  │  │  ├─ tests
│  │     │  │  │  │  │  ├─ test_gcrotmk.py
│  │     │  │  │  │  │  ├─ test_iterative.py
│  │     │  │  │  │  │  ├─ test_lgmres.py
│  │     │  │  │  │  │  ├─ test_lsmr.py
│  │     │  │  │  │  │  ├─ test_lsqr.py
│  │     │  │  │  │  │  ├─ test_minres.py
│  │     │  │  │  │  │  ├─ test_utils.py
│  │     │  │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  │  └─ __pycache__
│  │     │  │  │  │  │     ├─ test_gcrotmk.cpython-313.pyc
│  │     │  │  │  │  │     ├─ test_iterative.cpython-313.pyc
│  │     │  │  │  │  │     ├─ test_lgmres.cpython-313.pyc
│  │     │  │  │  │  │     ├─ test_lsmr.cpython-313.pyc
│  │     │  │  │  │  │     ├─ test_lsqr.cpython-313.pyc
│  │     │  │  │  │  │     ├─ test_minres.cpython-313.pyc
│  │     │  │  │  │  │     ├─ test_utils.cpython-313.pyc
│  │     │  │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  │  ├─ tfqmr.py
│  │     │  │  │  │  ├─ utils.py
│  │     │  │  │  │  ├─ _gcrotmk.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ iterative.cpython-313.pyc
│  │     │  │  │  │     ├─ lgmres.cpython-313.pyc
│  │     │  │  │  │     ├─ lsmr.cpython-313.pyc
│  │     │  │  │  │     ├─ lsqr.cpython-313.pyc
│  │     │  │  │  │     ├─ minres.cpython-313.pyc
│  │     │  │  │  │     ├─ tfqmr.cpython-313.pyc
│  │     │  │  │  │     ├─ utils.cpython-313.pyc
│  │     │  │  │  │     ├─ _gcrotmk.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ _matfuncs.py
│  │     │  │  │  ├─ _norm.py
│  │     │  │  │  ├─ _onenormest.py
│  │     │  │  │  ├─ _propack
│  │     │  │  │  │  ├─ _cpropack.cp313-win_amd64.dll.a
│  │     │  │  │  │  ├─ _cpropack.cp313-win_amd64.pyd
│  │     │  │  │  │  ├─ _dpropack.cp313-win_amd64.dll.a
│  │     │  │  │  │  ├─ _dpropack.cp313-win_amd64.pyd
│  │     │  │  │  │  ├─ _spropack.cp313-win_amd64.dll.a
│  │     │  │  │  │  ├─ _spropack.cp313-win_amd64.pyd
│  │     │  │  │  │  ├─ _zpropack.cp313-win_amd64.dll.a
│  │     │  │  │  │  └─ _zpropack.cp313-win_amd64.pyd
│  │     │  │  │  ├─ _special_sparse_arrays.py
│  │     │  │  │  ├─ _svdp.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ dsolve.cpython-313.pyc
│  │     │  │  │     ├─ eigen.cpython-313.pyc
│  │     │  │  │     ├─ interface.cpython-313.pyc
│  │     │  │  │     ├─ isolve.cpython-313.pyc
│  │     │  │  │     ├─ matfuncs.cpython-313.pyc
│  │     │  │  │     ├─ _expm_multiply.cpython-313.pyc
│  │     │  │  │     ├─ _interface.cpython-313.pyc
│  │     │  │  │     ├─ _matfuncs.cpython-313.pyc
│  │     │  │  │     ├─ _norm.cpython-313.pyc
│  │     │  │  │     ├─ _onenormest.cpython-313.pyc
│  │     │  │  │     ├─ _special_sparse_arrays.cpython-313.pyc
│  │     │  │  │     ├─ _svdp.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ sparsetools.py
│  │     │  │  ├─ spfuncs.py
│  │     │  │  ├─ sputils.py
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ data
│  │     │  │  │  │  ├─ csc_py2.npz
│  │     │  │  │  │  └─ csc_py3.npz
│  │     │  │  │  ├─ test_arithmetic1d.py
│  │     │  │  │  ├─ test_array_api.py
│  │     │  │  │  ├─ test_base.py
│  │     │  │  │  ├─ test_common1d.py
│  │     │  │  │  ├─ test_construct.py
│  │     │  │  │  ├─ test_coo.py
│  │     │  │  │  ├─ test_csc.py
│  │     │  │  │  ├─ test_csr.py
│  │     │  │  │  ├─ test_dok.py
│  │     │  │  │  ├─ test_extract.py
│  │     │  │  │  ├─ test_indexing1d.py
│  │     │  │  │  ├─ test_matrix_io.py
│  │     │  │  │  ├─ test_minmax1d.py
│  │     │  │  │  ├─ test_sparsetools.py
│  │     │  │  │  ├─ test_spfuncs.py
│  │     │  │  │  ├─ test_sputils.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ test_arithmetic1d.cpython-313.pyc
│  │     │  │  │     ├─ test_array_api.cpython-313.pyc
│  │     │  │  │     ├─ test_base.cpython-313.pyc
│  │     │  │  │     ├─ test_common1d.cpython-313.pyc
│  │     │  │  │     ├─ test_construct.cpython-313.pyc
│  │     │  │  │     ├─ test_coo.cpython-313.pyc
│  │     │  │  │     ├─ test_csc.cpython-313.pyc
│  │     │  │  │     ├─ test_csr.cpython-313.pyc
│  │     │  │  │     ├─ test_dok.cpython-313.pyc
│  │     │  │  │     ├─ test_extract.cpython-313.pyc
│  │     │  │  │     ├─ test_indexing1d.cpython-313.pyc
│  │     │  │  │     ├─ test_matrix_io.cpython-313.pyc
│  │     │  │  │     ├─ test_minmax1d.cpython-313.pyc
│  │     │  │  │     ├─ test_sparsetools.cpython-313.pyc
│  │     │  │  │     ├─ test_spfuncs.cpython-313.pyc
│  │     │  │  │     ├─ test_sputils.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _base.py
│  │     │  │  ├─ _bsr.py
│  │     │  │  ├─ _compressed.py
│  │     │  │  ├─ _construct.py
│  │     │  │  ├─ _coo.py
│  │     │  │  ├─ _csc.py
│  │     │  │  ├─ _csparsetools.cp313-win_amd64.dll.a
│  │     │  │  ├─ _csparsetools.cp313-win_amd64.pyd
│  │     │  │  ├─ _csr.py
│  │     │  │  ├─ _data.py
│  │     │  │  ├─ _dia.py
│  │     │  │  ├─ _dok.py
│  │     │  │  ├─ _extract.py
│  │     │  │  ├─ _index.py
│  │     │  │  ├─ _lil.py
│  │     │  │  ├─ _matrix.py
│  │     │  │  ├─ _matrix_io.py
│  │     │  │  ├─ _sparsetools.cp313-win_amd64.dll.a
│  │     │  │  ├─ _sparsetools.cp313-win_amd64.pyd
│  │     │  │  ├─ _spfuncs.py
│  │     │  │  ├─ _sputils.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ base.cpython-313.pyc
│  │     │  │     ├─ bsr.cpython-313.pyc
│  │     │  │     ├─ compressed.cpython-313.pyc
│  │     │  │     ├─ construct.cpython-313.pyc
│  │     │  │     ├─ coo.cpython-313.pyc
│  │     │  │     ├─ csc.cpython-313.pyc
│  │     │  │     ├─ csr.cpython-313.pyc
│  │     │  │     ├─ data.cpython-313.pyc
│  │     │  │     ├─ dia.cpython-313.pyc
│  │     │  │     ├─ dok.cpython-313.pyc
│  │     │  │     ├─ extract.cpython-313.pyc
│  │     │  │     ├─ lil.cpython-313.pyc
│  │     │  │     ├─ sparsetools.cpython-313.pyc
│  │     │  │     ├─ spfuncs.cpython-313.pyc
│  │     │  │     ├─ sputils.cpython-313.pyc
│  │     │  │     ├─ _base.cpython-313.pyc
│  │     │  │     ├─ _bsr.cpython-313.pyc
│  │     │  │     ├─ _compressed.cpython-313.pyc
│  │     │  │     ├─ _construct.cpython-313.pyc
│  │     │  │     ├─ _coo.cpython-313.pyc
│  │     │  │     ├─ _csc.cpython-313.pyc
│  │     │  │     ├─ _csr.cpython-313.pyc
│  │     │  │     ├─ _data.cpython-313.pyc
│  │     │  │     ├─ _dia.cpython-313.pyc
│  │     │  │     ├─ _dok.cpython-313.pyc
│  │     │  │     ├─ _extract.cpython-313.pyc
│  │     │  │     ├─ _index.cpython-313.pyc
│  │     │  │     ├─ _lil.cpython-313.pyc
│  │     │  │     ├─ _matrix.cpython-313.pyc
│  │     │  │     ├─ _matrix_io.cpython-313.pyc
│  │     │  │     ├─ _spfuncs.cpython-313.pyc
│  │     │  │     ├─ _sputils.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ spatial
│  │     │  │  ├─ ckdtree.py
│  │     │  │  ├─ kdtree.py
│  │     │  │  ├─ qhull.py
│  │     │  │  ├─ qhull_src
│  │     │  │  │  └─ COPYING_QHULL.txt
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ data
│  │     │  │  │  │  ├─ degenerate_pointset.npz
│  │     │  │  │  │  ├─ iris.txt
│  │     │  │  │  │  ├─ random-bool-data.txt
│  │     │  │  │  │  ├─ random-double-data.txt
│  │     │  │  │  │  ├─ random-int-data.txt
│  │     │  │  │  │  ├─ random-uint-data.txt
│  │     │  │  │  │  └─ selfdual-4d-polytope.txt
│  │     │  │  │  ├─ test_hausdorff.py
│  │     │  │  │  ├─ test_kdtree.py
│  │     │  │  │  ├─ test_qhull.py
│  │     │  │  │  ├─ test_slerp.py
│  │     │  │  │  ├─ test_spherical_voronoi.py
│  │     │  │  │  ├─ test__plotutils.py
│  │     │  │  │  ├─ test__procrustes.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ test_hausdorff.cpython-313.pyc
│  │     │  │  │     ├─ test_kdtree.cpython-313.pyc
│  │     │  │  │     ├─ test_qhull.cpython-313.pyc
│  │     │  │  │     ├─ test_slerp.cpython-313.pyc
│  │     │  │  │     ├─ test_spherical_voronoi.cpython-313.pyc
│  │     │  │  │     ├─ test__plotutils.cpython-313.pyc
│  │     │  │  │     ├─ test__procrustes.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ transform
│  │     │  │  │  ├─ rotation.py
│  │     │  │  │  ├─ tests
│  │     │  │  │  │  ├─ test_rigid_transform.py
│  │     │  │  │  │  ├─ test_rotation.py
│  │     │  │  │  │  ├─ test_rotation_groups.py
│  │     │  │  │  │  ├─ test_rotation_spline.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ test_rigid_transform.cpython-313.pyc
│  │     │  │  │  │     ├─ test_rotation.cpython-313.pyc
│  │     │  │  │  │     ├─ test_rotation_groups.cpython-313.pyc
│  │     │  │  │  │     ├─ test_rotation_spline.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ _rigid_transform.cp313-win_amd64.dll.a
│  │     │  │  │  ├─ _rigid_transform.cp313-win_amd64.pyd
│  │     │  │  │  ├─ _rotation.cp313-win_amd64.dll.a
│  │     │  │  │  ├─ _rotation.cp313-win_amd64.pyd
│  │     │  │  │  ├─ _rotation_groups.py
│  │     │  │  │  ├─ _rotation_spline.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ rotation.cpython-313.pyc
│  │     │  │  │     ├─ _rotation_groups.cpython-313.pyc
│  │     │  │  │     ├─ _rotation_spline.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _ckdtree.cp313-win_amd64.dll.a
│  │     │  │  ├─ _ckdtree.cp313-win_amd64.pyd
│  │     │  │  ├─ _geometric_slerp.py
│  │     │  │  ├─ _hausdorff.cp313-win_amd64.dll.a
│  │     │  │  ├─ _hausdorff.cp313-win_amd64.pyd
│  │     │  │  ├─ _kdtree.py
│  │     │  │  ├─ _plotutils.py
│  │     │  │  ├─ _procrustes.py
│  │     │  │  ├─ _qhull.cp313-win_amd64.dll.a
│  │     │  │  ├─ _qhull.cp313-win_amd64.pyd
│  │     │  │  ├─ _qhull.pyi
│  │     │  │  ├─ _spherical_voronoi.py
│  │     │  │  ├─ _voronoi.cp313-win_amd64.dll.a
│  │     │  │  ├─ _voronoi.cp313-win_amd64.pyd
│  │     │  │  ├─ _voronoi.pyi
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ ckdtree.cpython-313.pyc
│  │     │  │     ├─ kdtree.cpython-313.pyc
│  │     │  │     ├─ qhull.cpython-313.pyc
│  │     │  │     ├─ _geometric_slerp.cpython-313.pyc
│  │     │  │     ├─ _kdtree.cpython-313.pyc
│  │     │  │     ├─ _plotutils.cpython-313.pyc
│  │     │  │     ├─ _procrustes.cpython-313.pyc
│  │     │  │     ├─ _spherical_voronoi.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ special
│  │     │  │  ├─ add_newdocs.py
│  │     │  │  ├─ basic.py
│  │     │  │  ├─ cython_special.cp313-win_amd64.dll.a
│  │     │  │  ├─ cython_special.cp313-win_amd64.pyd
│  │     │  │  ├─ cython_special.pxd
│  │     │  │  ├─ cython_special.pyi
│  │     │  │  ├─ orthogonal.py
│  │     │  │  ├─ sf_error.py
│  │     │  │  ├─ specfun.py
│  │     │  │  ├─ spfun_stats.py
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ data
│  │     │  │  │  │  ├─ boost.npz
│  │     │  │  │  │  ├─ gsl.npz
│  │     │  │  │  │  ├─ local.npz
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ test_basic.py
│  │     │  │  │  ├─ test_bdtr.py
│  │     │  │  │  ├─ test_boost_ufuncs.py
│  │     │  │  │  ├─ test_boxcox.py
│  │     │  │  │  ├─ test_cdflib.py
│  │     │  │  │  ├─ test_cdft_asymptotic.py
│  │     │  │  │  ├─ test_cephes_intp_cast.py
│  │     │  │  │  ├─ test_cython_special.py
│  │     │  │  │  ├─ test_data.py
│  │     │  │  │  ├─ test_dd.py
│  │     │  │  │  ├─ test_digamma.py
│  │     │  │  │  ├─ test_ellip_harm.py
│  │     │  │  │  ├─ test_erfinv.py
│  │     │  │  │  ├─ test_exponential_integrals.py
│  │     │  │  │  ├─ test_extending.py
│  │     │  │  │  ├─ test_faddeeva.py
│  │     │  │  │  ├─ test_gamma.py
│  │     │  │  │  ├─ test_gammainc.py
│  │     │  │  │  ├─ test_hyp2f1.py
│  │     │  │  │  ├─ test_hypergeometric.py
│  │     │  │  │  ├─ test_iv_ratio.py
│  │     │  │  │  ├─ test_kolmogorov.py
│  │     │  │  │  ├─ test_lambertw.py
│  │     │  │  │  ├─ test_legendre.py
│  │     │  │  │  ├─ test_log1mexp.py
│  │     │  │  │  ├─ test_loggamma.py
│  │     │  │  │  ├─ test_logit.py
│  │     │  │  │  ├─ test_mpmath.py
│  │     │  │  │  ├─ test_nan_inputs.py
│  │     │  │  │  ├─ test_ndtr.py
│  │     │  │  │  ├─ test_ndtri_exp.py
│  │     │  │  │  ├─ test_orthogonal.py
│  │     │  │  │  ├─ test_orthogonal_eval.py
│  │     │  │  │  ├─ test_owens_t.py
│  │     │  │  │  ├─ test_pcf.py
│  │     │  │  │  ├─ test_pdtr.py
│  │     │  │  │  ├─ test_powm1.py
│  │     │  │  │  ├─ test_precompute_expn_asy.py
│  │     │  │  │  ├─ test_precompute_gammainc.py
│  │     │  │  │  ├─ test_precompute_utils.py
│  │     │  │  │  ├─ test_round.py
│  │     │  │  │  ├─ test_sf_error.py
│  │     │  │  │  ├─ test_sici.py
│  │     │  │  │  ├─ test_specfun.py
│  │     │  │  │  ├─ test_spence.py
│  │     │  │  │  ├─ test_spfun_stats.py
│  │     │  │  │  ├─ test_spherical_bessel.py
│  │     │  │  │  ├─ test_sph_harm.py
│  │     │  │  │  ├─ test_support_alternative_backends.py
│  │     │  │  │  ├─ test_trig.py
│  │     │  │  │  ├─ test_ufunc_signatures.py
│  │     │  │  │  ├─ test_wrightomega.py
│  │     │  │  │  ├─ test_wright_bessel.py
│  │     │  │  │  ├─ test_zeta.py
│  │     │  │  │  ├─ _cython_examples
│  │     │  │  │  │  ├─ extending.pyx
│  │     │  │  │  │  └─ meson.build
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ test_basic.cpython-313.pyc
│  │     │  │  │     ├─ test_bdtr.cpython-313.pyc
│  │     │  │  │     ├─ test_boost_ufuncs.cpython-313.pyc
│  │     │  │  │     ├─ test_boxcox.cpython-313.pyc
│  │     │  │  │     ├─ test_cdflib.cpython-313.pyc
│  │     │  │  │     ├─ test_cdft_asymptotic.cpython-313.pyc
│  │     │  │  │     ├─ test_cephes_intp_cast.cpython-313.pyc
│  │     │  │  │     ├─ test_cython_special.cpython-313.pyc
│  │     │  │  │     ├─ test_data.cpython-313.pyc
│  │     │  │  │     ├─ test_dd.cpython-313.pyc
│  │     │  │  │     ├─ test_digamma.cpython-313.pyc
│  │     │  │  │     ├─ test_ellip_harm.cpython-313.pyc
│  │     │  │  │     ├─ test_erfinv.cpython-313.pyc
│  │     │  │  │     ├─ test_exponential_integrals.cpython-313.pyc
│  │     │  │  │     ├─ test_extending.cpython-313.pyc
│  │     │  │  │     ├─ test_faddeeva.cpython-313.pyc
│  │     │  │  │     ├─ test_gamma.cpython-313.pyc
│  │     │  │  │     ├─ test_gammainc.cpython-313.pyc
│  │     │  │  │     ├─ test_hyp2f1.cpython-313.pyc
│  │     │  │  │     ├─ test_hypergeometric.cpython-313.pyc
│  │     │  │  │     ├─ test_iv_ratio.cpython-313.pyc
│  │     │  │  │     ├─ test_kolmogorov.cpython-313.pyc
│  │     │  │  │     ├─ test_lambertw.cpython-313.pyc
│  │     │  │  │     ├─ test_legendre.cpython-313.pyc
│  │     │  │  │     ├─ test_log1mexp.cpython-313.pyc
│  │     │  │  │     ├─ test_loggamma.cpython-313.pyc
│  │     │  │  │     ├─ test_logit.cpython-313.pyc
│  │     │  │  │     ├─ test_mpmath.cpython-313.pyc
│  │     │  │  │     ├─ test_nan_inputs.cpython-313.pyc
│  │     │  │  │     ├─ test_ndtr.cpython-313.pyc
│  │     │  │  │     ├─ test_ndtri_exp.cpython-313.pyc
│  │     │  │  │     ├─ test_orthogonal.cpython-313.pyc
│  │     │  │  │     ├─ test_orthogonal_eval.cpython-313.pyc
│  │     │  │  │     ├─ test_owens_t.cpython-313.pyc
│  │     │  │  │     ├─ test_pcf.cpython-313.pyc
│  │     │  │  │     ├─ test_pdtr.cpython-313.pyc
│  │     │  │  │     ├─ test_powm1.cpython-313.pyc
│  │     │  │  │     ├─ test_precompute_expn_asy.cpython-313.pyc
│  │     │  │  │     ├─ test_precompute_gammainc.cpython-313.pyc
│  │     │  │  │     ├─ test_precompute_utils.cpython-313.pyc
│  │     │  │  │     ├─ test_round.cpython-313.pyc
│  │     │  │  │     ├─ test_sf_error.cpython-313.pyc
│  │     │  │  │     ├─ test_sici.cpython-313.pyc
│  │     │  │  │     ├─ test_specfun.cpython-313.pyc
│  │     │  │  │     ├─ test_spence.cpython-313.pyc
│  │     │  │  │     ├─ test_spfun_stats.cpython-313.pyc
│  │     │  │  │     ├─ test_spherical_bessel.cpython-313.pyc
│  │     │  │  │     ├─ test_sph_harm.cpython-313.pyc
│  │     │  │  │     ├─ test_support_alternative_backends.cpython-313.pyc
│  │     │  │  │     ├─ test_trig.cpython-313.pyc
│  │     │  │  │     ├─ test_ufunc_signatures.cpython-313.pyc
│  │     │  │  │     ├─ test_wrightomega.cpython-313.pyc
│  │     │  │  │     ├─ test_wright_bessel.cpython-313.pyc
│  │     │  │  │     ├─ test_zeta.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _add_newdocs.py
│  │     │  │  ├─ _basic.py
│  │     │  │  ├─ _comb.cp313-win_amd64.dll.a
│  │     │  │  ├─ _comb.cp313-win_amd64.pyd
│  │     │  │  ├─ _ellip_harm.py
│  │     │  │  ├─ _ellip_harm_2.cp313-win_amd64.dll.a
│  │     │  │  ├─ _ellip_harm_2.cp313-win_amd64.pyd
│  │     │  │  ├─ _gufuncs.cp313-win_amd64.dll.a
│  │     │  │  ├─ _gufuncs.cp313-win_amd64.pyd
│  │     │  │  ├─ _input_validation.py
│  │     │  │  ├─ _lambertw.py
│  │     │  │  ├─ _mptestutils.py
│  │     │  │  ├─ _multiufuncs.py
│  │     │  │  ├─ _orthogonal.py
│  │     │  │  ├─ _orthogonal.pyi
│  │     │  │  ├─ _precompute
│  │     │  │  │  ├─ cosine_cdf.py
│  │     │  │  │  ├─ expn_asy.py
│  │     │  │  │  ├─ gammainc_asy.py
│  │     │  │  │  ├─ gammainc_data.py
│  │     │  │  │  ├─ hyp2f1_data.py
│  │     │  │  │  ├─ lambertw.py
│  │     │  │  │  ├─ loggamma.py
│  │     │  │  │  ├─ struve_convergence.py
│  │     │  │  │  ├─ utils.py
│  │     │  │  │  ├─ wrightomega.py
│  │     │  │  │  ├─ wright_bessel.py
│  │     │  │  │  ├─ wright_bessel_data.py
│  │     │  │  │  ├─ zetac.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ cosine_cdf.cpython-313.pyc
│  │     │  │  │     ├─ expn_asy.cpython-313.pyc
│  │     │  │  │     ├─ gammainc_asy.cpython-313.pyc
│  │     │  │  │     ├─ gammainc_data.cpython-313.pyc
│  │     │  │  │     ├─ hyp2f1_data.cpython-313.pyc
│  │     │  │  │     ├─ lambertw.cpython-313.pyc
│  │     │  │  │     ├─ loggamma.cpython-313.pyc
│  │     │  │  │     ├─ struve_convergence.cpython-313.pyc
│  │     │  │  │     ├─ utils.cpython-313.pyc
│  │     │  │  │     ├─ wrightomega.cpython-313.pyc
│  │     │  │  │     ├─ wright_bessel.cpython-313.pyc
│  │     │  │  │     ├─ wright_bessel_data.cpython-313.pyc
│  │     │  │  │     ├─ zetac.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _sf_error.py
│  │     │  │  ├─ _specfun.cp313-win_amd64.dll.a
│  │     │  │  ├─ _specfun.cp313-win_amd64.pyd
│  │     │  │  ├─ _special_ufuncs.cp313-win_amd64.dll.a
│  │     │  │  ├─ _special_ufuncs.cp313-win_amd64.pyd
│  │     │  │  ├─ _spfun_stats.py
│  │     │  │  ├─ _spherical_bessel.py
│  │     │  │  ├─ _support_alternative_backends.py
│  │     │  │  ├─ _testutils.py
│  │     │  │  ├─ _test_internal.cp313-win_amd64.dll.a
│  │     │  │  ├─ _test_internal.cp313-win_amd64.pyd
│  │     │  │  ├─ _test_internal.pyi
│  │     │  │  ├─ _ufuncs.cp313-win_amd64.dll.a
│  │     │  │  ├─ _ufuncs.cp313-win_amd64.pyd
│  │     │  │  ├─ _ufuncs.pyi
│  │     │  │  ├─ _ufuncs.pyx
│  │     │  │  ├─ _ufuncs_cxx.cp313-win_amd64.dll.a
│  │     │  │  ├─ _ufuncs_cxx.cp313-win_amd64.pyd
│  │     │  │  ├─ _ufuncs_cxx.pxd
│  │     │  │  ├─ _ufuncs_cxx.pyx
│  │     │  │  ├─ _ufuncs_cxx_defs.h
│  │     │  │  ├─ _ufuncs_defs.h
│  │     │  │  ├─ __init__.pxd
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ add_newdocs.cpython-313.pyc
│  │     │  │     ├─ basic.cpython-313.pyc
│  │     │  │     ├─ orthogonal.cpython-313.pyc
│  │     │  │     ├─ sf_error.cpython-313.pyc
│  │     │  │     ├─ specfun.cpython-313.pyc
│  │     │  │     ├─ spfun_stats.cpython-313.pyc
│  │     │  │     ├─ _add_newdocs.cpython-313.pyc
│  │     │  │     ├─ _basic.cpython-313.pyc
│  │     │  │     ├─ _ellip_harm.cpython-313.pyc
│  │     │  │     ├─ _input_validation.cpython-313.pyc
│  │     │  │     ├─ _lambertw.cpython-313.pyc
│  │     │  │     ├─ _mptestutils.cpython-313.pyc
│  │     │  │     ├─ _multiufuncs.cpython-313.pyc
│  │     │  │     ├─ _orthogonal.cpython-313.pyc
│  │     │  │     ├─ _sf_error.cpython-313.pyc
│  │     │  │     ├─ _spfun_stats.cpython-313.pyc
│  │     │  │     ├─ _spherical_bessel.cpython-313.pyc
│  │     │  │     ├─ _support_alternative_backends.cpython-313.pyc
│  │     │  │     ├─ _testutils.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ stats
│  │     │  │  ├─ biasedurn.py
│  │     │  │  ├─ contingency.py
│  │     │  │  ├─ kde.py
│  │     │  │  ├─ morestats.py
│  │     │  │  ├─ mstats.py
│  │     │  │  ├─ mstats_basic.py
│  │     │  │  ├─ mstats_extras.py
│  │     │  │  ├─ mvn.py
│  │     │  │  ├─ qmc.py
│  │     │  │  ├─ sampling.py
│  │     │  │  ├─ stats.py
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ common_tests.py
│  │     │  │  │  ├─ data
│  │     │  │  │  │  ├─ fisher_exact_results_from_r.py
│  │     │  │  │  │  ├─ jf_skew_t_gamlss_pdf_data.npy
│  │     │  │  │  │  ├─ levy_stable
│  │     │  │  │  │  │  ├─ stable-loc-scale-sample-data.npy
│  │     │  │  │  │  │  ├─ stable-Z1-cdf-sample-data.npy
│  │     │  │  │  │  │  └─ stable-Z1-pdf-sample-data.npy
│  │     │  │  │  │  ├─ nist_anova
│  │     │  │  │  │  │  ├─ AtmWtAg.dat
│  │     │  │  │  │  │  ├─ SiRstv.dat
│  │     │  │  │  │  │  ├─ SmLs01.dat
│  │     │  │  │  │  │  ├─ SmLs02.dat
│  │     │  │  │  │  │  ├─ SmLs03.dat
│  │     │  │  │  │  │  ├─ SmLs04.dat
│  │     │  │  │  │  │  ├─ SmLs05.dat
│  │     │  │  │  │  │  ├─ SmLs06.dat
│  │     │  │  │  │  │  ├─ SmLs07.dat
│  │     │  │  │  │  │  ├─ SmLs08.dat
│  │     │  │  │  │  │  └─ SmLs09.dat
│  │     │  │  │  │  ├─ nist_linregress
│  │     │  │  │  │  │  └─ Norris.dat
│  │     │  │  │  │  ├─ rel_breitwigner_pdf_sample_data_ROOT.npy
│  │     │  │  │  │  ├─ studentized_range_mpmath_ref.json
│  │     │  │  │  │  ├─ _mvt.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ fisher_exact_results_from_r.cpython-313.pyc
│  │     │  │  │  │     └─ _mvt.cpython-313.pyc
│  │     │  │  │  ├─ test_axis_nan_policy.py
│  │     │  │  │  ├─ test_binned_statistic.py
│  │     │  │  │  ├─ test_censored_data.py
│  │     │  │  │  ├─ test_contingency.py
│  │     │  │  │  ├─ test_continued_fraction.py
│  │     │  │  │  ├─ test_continuous.py
│  │     │  │  │  ├─ test_continuous_basic.py
│  │     │  │  │  ├─ test_continuous_fit_censored.py
│  │     │  │  │  ├─ test_correlation.py
│  │     │  │  │  ├─ test_crosstab.py
│  │     │  │  │  ├─ test_discrete_basic.py
│  │     │  │  │  ├─ test_entropy.py
│  │     │  │  │  ├─ test_fast_gen_inversion.py
│  │     │  │  │  ├─ test_fit.py
│  │     │  │  │  ├─ test_hypotests.py
│  │     │  │  │  ├─ test_kdeoth.py
│  │     │  │  │  ├─ test_marray.py
│  │     │  │  │  ├─ test_mgc.py
│  │     │  │  │  ├─ test_morestats.py
│  │     │  │  │  ├─ test_mstats_basic.py
│  │     │  │  │  ├─ test_mstats_extras.py
│  │     │  │  │  ├─ test_multicomp.py
│  │     │  │  │  ├─ test_multivariate.py
│  │     │  │  │  ├─ test_odds_ratio.py
│  │     │  │  │  ├─ test_qmc.py
│  │     │  │  │  ├─ test_quantile.py
│  │     │  │  │  ├─ test_rank.py
│  │     │  │  │  ├─ test_relative_risk.py
│  │     │  │  │  ├─ test_resampling.py
│  │     │  │  │  ├─ test_sampling.py
│  │     │  │  │  ├─ test_sensitivity_analysis.py
│  │     │  │  │  ├─ test_stats.py
│  │     │  │  │  ├─ test_survival.py
│  │     │  │  │  ├─ test_tukeylambda_stats.py
│  │     │  │  │  ├─ test_variation.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ common_tests.cpython-313.pyc
│  │     │  │  │     ├─ test_axis_nan_policy.cpython-313.pyc
│  │     │  │  │     ├─ test_binned_statistic.cpython-313.pyc
│  │     │  │  │     ├─ test_censored_data.cpython-313.pyc
│  │     │  │  │     ├─ test_contingency.cpython-313.pyc
│  │     │  │  │     ├─ test_continued_fraction.cpython-313.pyc
│  │     │  │  │     ├─ test_continuous.cpython-313.pyc
│  │     │  │  │     ├─ test_continuous_basic.cpython-313.pyc
│  │     │  │  │     ├─ test_continuous_fit_censored.cpython-313.pyc
│  │     │  │  │     ├─ test_correlation.cpython-313.pyc
│  │     │  │  │     ├─ test_crosstab.cpython-313.pyc
│  │     │  │  │     ├─ test_discrete_basic.cpython-313.pyc
│  │     │  │  │     ├─ test_entropy.cpython-313.pyc
│  │     │  │  │     ├─ test_fast_gen_inversion.cpython-313.pyc
│  │     │  │  │     ├─ test_fit.cpython-313.pyc
│  │     │  │  │     ├─ test_hypotests.cpython-313.pyc
│  │     │  │  │     ├─ test_kdeoth.cpython-313.pyc
│  │     │  │  │     ├─ test_marray.cpython-313.pyc
│  │     │  │  │     ├─ test_mgc.cpython-313.pyc
│  │     │  │  │     ├─ test_morestats.cpython-313.pyc
│  │     │  │  │     ├─ test_mstats_basic.cpython-313.pyc
│  │     │  │  │     ├─ test_mstats_extras.cpython-313.pyc
│  │     │  │  │     ├─ test_multicomp.cpython-313.pyc
│  │     │  │  │     ├─ test_multivariate.cpython-313.pyc
│  │     │  │  │     ├─ test_odds_ratio.cpython-313.pyc
│  │     │  │  │     ├─ test_qmc.cpython-313.pyc
│  │     │  │  │     ├─ test_quantile.cpython-313.pyc
│  │     │  │  │     ├─ test_rank.cpython-313.pyc
│  │     │  │  │     ├─ test_relative_risk.cpython-313.pyc
│  │     │  │  │     ├─ test_resampling.cpython-313.pyc
│  │     │  │  │     ├─ test_sampling.cpython-313.pyc
│  │     │  │  │     ├─ test_sensitivity_analysis.cpython-313.pyc
│  │     │  │  │     ├─ test_stats.cpython-313.pyc
│  │     │  │  │     ├─ test_survival.cpython-313.pyc
│  │     │  │  │     ├─ test_tukeylambda_stats.cpython-313.pyc
│  │     │  │  │     ├─ test_variation.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _ansari_swilk_statistics.cp313-win_amd64.dll.a
│  │     │  │  ├─ _ansari_swilk_statistics.cp313-win_amd64.pyd
│  │     │  │  ├─ _axis_nan_policy.py
│  │     │  │  ├─ _biasedurn.cp313-win_amd64.dll.a
│  │     │  │  ├─ _biasedurn.cp313-win_amd64.pyd
│  │     │  │  ├─ _biasedurn.pxd
│  │     │  │  ├─ _binned_statistic.py
│  │     │  │  ├─ _binomtest.py
│  │     │  │  ├─ _bws_test.py
│  │     │  │  ├─ _censored_data.py
│  │     │  │  ├─ _common.py
│  │     │  │  ├─ _constants.py
│  │     │  │  ├─ _continued_fraction.py
│  │     │  │  ├─ _correlation.py
│  │     │  │  ├─ _covariance.py
│  │     │  │  ├─ _crosstab.py
│  │     │  │  ├─ _entropy.py
│  │     │  │  ├─ _finite_differences.py
│  │     │  │  ├─ _fit.py
│  │     │  │  ├─ _hypotests.py
│  │     │  │  ├─ _kde.py
│  │     │  │  ├─ _ksstats.py
│  │     │  │  ├─ _levy_stable
│  │     │  │  │  ├─ levyst.cp313-win_amd64.dll.a
│  │     │  │  │  ├─ levyst.cp313-win_amd64.pyd
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _mannwhitneyu.py
│  │     │  │  ├─ _mgc.py
│  │     │  │  ├─ _morestats.py
│  │     │  │  ├─ _mstats_basic.py
│  │     │  │  ├─ _mstats_extras.py
│  │     │  │  ├─ _multicomp.py
│  │     │  │  ├─ _multivariate.py
│  │     │  │  ├─ _odds_ratio.py
│  │     │  │  ├─ _page_trend_test.py
│  │     │  │  ├─ _qmc.py
│  │     │  │  ├─ _qmc_cy.cp313-win_amd64.dll.a
│  │     │  │  ├─ _qmc_cy.cp313-win_amd64.pyd
│  │     │  │  ├─ _qmc_cy.pyi
│  │     │  │  ├─ _qmvnt.py
│  │     │  │  ├─ _qmvnt_cy.cp313-win_amd64.dll.a
│  │     │  │  ├─ _qmvnt_cy.cp313-win_amd64.pyd
│  │     │  │  ├─ _quantile.py
│  │     │  │  ├─ _rcont
│  │     │  │  │  ├─ rcont.cp313-win_amd64.dll.a
│  │     │  │  │  ├─ rcont.cp313-win_amd64.pyd
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _relative_risk.py
│  │     │  │  ├─ _resampling.py
│  │     │  │  ├─ _result_classes.py
│  │     │  │  ├─ _sampling.py
│  │     │  │  ├─ _sensitivity_analysis.py
│  │     │  │  ├─ _sobol.cp313-win_amd64.dll.a
│  │     │  │  ├─ _sobol.cp313-win_amd64.pyd
│  │     │  │  ├─ _sobol.pyi
│  │     │  │  ├─ _sobol_direction_numbers.npz
│  │     │  │  ├─ _stats.cp313-win_amd64.dll.a
│  │     │  │  ├─ _stats.cp313-win_amd64.pyd
│  │     │  │  ├─ _stats.pxd
│  │     │  │  ├─ _stats_mstats_common.py
│  │     │  │  ├─ _stats_py.py
│  │     │  │  ├─ _stats_pythran.cp313-win_amd64.dll.a
│  │     │  │  ├─ _stats_pythran.cp313-win_amd64.pyd
│  │     │  │  ├─ _survival.py
│  │     │  │  ├─ _tukeylambda_stats.py
│  │     │  │  ├─ _unuran
│  │     │  │  │  ├─ unuran_wrapper.cp313-win_amd64.dll.a
│  │     │  │  │  ├─ unuran_wrapper.cp313-win_amd64.pyd
│  │     │  │  │  ├─ unuran_wrapper.pyi
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _variation.py
│  │     │  │  ├─ _warnings_errors.py
│  │     │  │  ├─ _wilcoxon.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ biasedurn.cpython-313.pyc
│  │     │  │     ├─ contingency.cpython-313.pyc
│  │     │  │     ├─ kde.cpython-313.pyc
│  │     │  │     ├─ morestats.cpython-313.pyc
│  │     │  │     ├─ mstats.cpython-313.pyc
│  │     │  │     ├─ mstats_basic.cpython-313.pyc
│  │     │  │     ├─ mstats_extras.cpython-313.pyc
│  │     │  │     ├─ mvn.cpython-313.pyc
│  │     │  │     ├─ qmc.cpython-313.pyc
│  │     │  │     ├─ sampling.cpython-313.pyc
│  │     │  │     ├─ stats.cpython-313.pyc
│  │     │  │     ├─ _axis_nan_policy.cpython-313.pyc
│  │     │  │     ├─ _binned_statistic.cpython-313.pyc
│  │     │  │     ├─ _binomtest.cpython-313.pyc
│  │     │  │     ├─ _bws_test.cpython-313.pyc
│  │     │  │     ├─ _censored_data.cpython-313.pyc
│  │     │  │     ├─ _common.cpython-313.pyc
│  │     │  │     ├─ _constants.cpython-313.pyc
│  │     │  │     ├─ _continued_fraction.cpython-313.pyc
│  │     │  │     ├─ _correlation.cpython-313.pyc
│  │     │  │     ├─ _covariance.cpython-313.pyc
│  │     │  │     ├─ _crosstab.cpython-313.pyc
│  │     │  │     ├─ _entropy.cpython-313.pyc
│  │     │  │     ├─ _finite_differences.cpython-313.pyc
│  │     │  │     ├─ _fit.cpython-313.pyc
│  │     │  │     ├─ _hypotests.cpython-313.pyc
│  │     │  │     ├─ _kde.cpython-313.pyc
│  │     │  │     ├─ _ksstats.cpython-313.pyc
│  │     │  │     ├─ _mannwhitneyu.cpython-313.pyc
│  │     │  │     ├─ _mgc.cpython-313.pyc
│  │     │  │     ├─ _morestats.cpython-313.pyc
│  │     │  │     ├─ _mstats_basic.cpython-313.pyc
│  │     │  │     ├─ _mstats_extras.cpython-313.pyc
│  │     │  │     ├─ _multicomp.cpython-313.pyc
│  │     │  │     ├─ _multivariate.cpython-313.pyc
│  │     │  │     ├─ _odds_ratio.cpython-313.pyc
│  │     │  │     ├─ _page_trend_test.cpython-313.pyc
│  │     │  │     ├─ _qmc.cpython-313.pyc
│  │     │  │     ├─ _qmvnt.cpython-313.pyc
│  │     │  │     ├─ _quantile.cpython-313.pyc
│  │     │  │     ├─ _relative_risk.cpython-313.pyc
│  │     │  │     ├─ _resampling.cpython-313.pyc
│  │     │  │     ├─ _result_classes.cpython-313.pyc
│  │     │  │     ├─ _sampling.cpython-313.pyc
│  │     │  │     ├─ _sensitivity_analysis.cpython-313.pyc
│  │     │  │     ├─ _stats_mstats_common.cpython-313.pyc
│  │     │  │     ├─ _stats_py.cpython-313.pyc
│  │     │  │     ├─ _survival.cpython-313.pyc
│  │     │  │     ├─ _tukeylambda_stats.cpython-313.pyc
│  │     │  │     ├─ _variation.cpython-313.pyc
│  │     │  │     ├─ _warnings_errors.cpython-313.pyc
│  │     │  │     ├─ _wilcoxon.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ version.py
│  │     │  ├─ _cyutility.cp313-win_amd64.dll.a
│  │     │  ├─ _cyutility.cp313-win_amd64.pyd
│  │     │  ├─ _lib
│  │     │  │  ├─ array_api_compat
│  │     │  │  │  ├─ common
│  │     │  │  │  │  ├─ _aliases.py
│  │     │  │  │  │  ├─ _fft.py
│  │     │  │  │  │  ├─ _helpers.py
│  │     │  │  │  │  ├─ _linalg.py
│  │     │  │  │  │  ├─ _typing.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ _aliases.cpython-313.pyc
│  │     │  │  │  │     ├─ _fft.cpython-313.pyc
│  │     │  │  │  │     ├─ _helpers.cpython-313.pyc
│  │     │  │  │  │     ├─ _linalg.cpython-313.pyc
│  │     │  │  │  │     ├─ _typing.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ cupy
│  │     │  │  │  │  ├─ fft.py
│  │     │  │  │  │  ├─ linalg.py
│  │     │  │  │  │  ├─ _aliases.py
│  │     │  │  │  │  ├─ _info.py
│  │     │  │  │  │  ├─ _typing.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ fft.cpython-313.pyc
│  │     │  │  │  │     ├─ linalg.cpython-313.pyc
│  │     │  │  │  │     ├─ _aliases.cpython-313.pyc
│  │     │  │  │  │     ├─ _info.cpython-313.pyc
│  │     │  │  │  │     ├─ _typing.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ dask
│  │     │  │  │  │  ├─ array
│  │     │  │  │  │  │  ├─ fft.py
│  │     │  │  │  │  │  ├─ linalg.py
│  │     │  │  │  │  │  ├─ _aliases.py
│  │     │  │  │  │  │  ├─ _info.py
│  │     │  │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  │  └─ __pycache__
│  │     │  │  │  │  │     ├─ fft.cpython-313.pyc
│  │     │  │  │  │  │     ├─ linalg.cpython-313.pyc
│  │     │  │  │  │  │     ├─ _aliases.cpython-313.pyc
│  │     │  │  │  │  │     ├─ _info.cpython-313.pyc
│  │     │  │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ numpy
│  │     │  │  │  │  ├─ fft.py
│  │     │  │  │  │  ├─ linalg.py
│  │     │  │  │  │  ├─ _aliases.py
│  │     │  │  │  │  ├─ _info.py
│  │     │  │  │  │  ├─ _typing.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ fft.cpython-313.pyc
│  │     │  │  │  │     ├─ linalg.cpython-313.pyc
│  │     │  │  │  │     ├─ _aliases.cpython-313.pyc
│  │     │  │  │  │     ├─ _info.cpython-313.pyc
│  │     │  │  │  │     ├─ _typing.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ torch
│  │     │  │  │  │  ├─ fft.py
│  │     │  │  │  │  ├─ linalg.py
│  │     │  │  │  │  ├─ _aliases.py
│  │     │  │  │  │  ├─ _info.py
│  │     │  │  │  │  ├─ _typing.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ fft.cpython-313.pyc
│  │     │  │  │  │     ├─ linalg.cpython-313.pyc
│  │     │  │  │  │     ├─ _aliases.cpython-313.pyc
│  │     │  │  │  │     ├─ _info.cpython-313.pyc
│  │     │  │  │  │     ├─ _typing.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ _internal.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ _internal.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ array_api_extra
│  │     │  │  │  ├─ testing.py
│  │     │  │  │  ├─ _delegation.py
│  │     │  │  │  ├─ _lib
│  │     │  │  │  │  ├─ _at.py
│  │     │  │  │  │  ├─ _backends.py
│  │     │  │  │  │  ├─ _funcs.py
│  │     │  │  │  │  ├─ _lazy.py
│  │     │  │  │  │  ├─ _testing.py
│  │     │  │  │  │  ├─ _utils
│  │     │  │  │  │  │  ├─ _compat.py
│  │     │  │  │  │  │  ├─ _compat.pyi
│  │     │  │  │  │  │  ├─ _helpers.py
│  │     │  │  │  │  │  ├─ _typing.py
│  │     │  │  │  │  │  ├─ _typing.pyi
│  │     │  │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  │  └─ __pycache__
│  │     │  │  │  │  │     ├─ _compat.cpython-313.pyc
│  │     │  │  │  │  │     ├─ _helpers.cpython-313.pyc
│  │     │  │  │  │  │     ├─ _typing.cpython-313.pyc
│  │     │  │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ _at.cpython-313.pyc
│  │     │  │  │  │     ├─ _backends.cpython-313.pyc
│  │     │  │  │  │     ├─ _funcs.cpython-313.pyc
│  │     │  │  │  │     ├─ _lazy.cpython-313.pyc
│  │     │  │  │  │     ├─ _testing.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ testing.cpython-313.pyc
│  │     │  │  │     ├─ _delegation.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ cobyqa
│  │     │  │  │  ├─ framework.py
│  │     │  │  │  ├─ main.py
│  │     │  │  │  ├─ models.py
│  │     │  │  │  ├─ problem.py
│  │     │  │  │  ├─ settings.py
│  │     │  │  │  ├─ subsolvers
│  │     │  │  │  │  ├─ geometry.py
│  │     │  │  │  │  ├─ optim.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ geometry.cpython-313.pyc
│  │     │  │  │  │     ├─ optim.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ utils
│  │     │  │  │  │  ├─ exceptions.py
│  │     │  │  │  │  ├─ math.py
│  │     │  │  │  │  ├─ versions.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ exceptions.cpython-313.pyc
│  │     │  │  │  │     ├─ math.cpython-313.pyc
│  │     │  │  │  │     ├─ versions.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ framework.cpython-313.pyc
│  │     │  │  │     ├─ main.cpython-313.pyc
│  │     │  │  │     ├─ models.cpython-313.pyc
│  │     │  │  │     ├─ problem.cpython-313.pyc
│  │     │  │  │     ├─ settings.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ decorator.py
│  │     │  │  ├─ deprecation.py
│  │     │  │  ├─ doccer.py
│  │     │  │  ├─ messagestream.cp313-win_amd64.dll.a
│  │     │  │  ├─ messagestream.cp313-win_amd64.pyd
│  │     │  │  ├─ pyprima
│  │     │  │  │  ├─ cobyla
│  │     │  │  │  │  ├─ cobyla.py
│  │     │  │  │  │  ├─ cobylb.py
│  │     │  │  │  │  ├─ geometry.py
│  │     │  │  │  │  ├─ initialize.py
│  │     │  │  │  │  ├─ trustregion.py
│  │     │  │  │  │  ├─ update.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ cobyla.cpython-313.pyc
│  │     │  │  │  │     ├─ cobylb.cpython-313.pyc
│  │     │  │  │  │     ├─ geometry.cpython-313.pyc
│  │     │  │  │  │     ├─ initialize.cpython-313.pyc
│  │     │  │  │  │     ├─ trustregion.cpython-313.pyc
│  │     │  │  │  │     ├─ update.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ common
│  │     │  │  │  │  ├─ checkbreak.py
│  │     │  │  │  │  ├─ consts.py
│  │     │  │  │  │  ├─ evaluate.py
│  │     │  │  │  │  ├─ history.py
│  │     │  │  │  │  ├─ infos.py
│  │     │  │  │  │  ├─ linalg.py
│  │     │  │  │  │  ├─ message.py
│  │     │  │  │  │  ├─ powalg.py
│  │     │  │  │  │  ├─ preproc.py
│  │     │  │  │  │  ├─ present.py
│  │     │  │  │  │  ├─ ratio.py
│  │     │  │  │  │  ├─ redrho.py
│  │     │  │  │  │  ├─ selectx.py
│  │     │  │  │  │  ├─ _bounds.py
│  │     │  │  │  │  ├─ _linear_constraints.py
│  │     │  │  │  │  ├─ _nonlinear_constraints.py
│  │     │  │  │  │  ├─ _project.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ checkbreak.cpython-313.pyc
│  │     │  │  │  │     ├─ consts.cpython-313.pyc
│  │     │  │  │  │     ├─ evaluate.cpython-313.pyc
│  │     │  │  │  │     ├─ history.cpython-313.pyc
│  │     │  │  │  │     ├─ infos.cpython-313.pyc
│  │     │  │  │  │     ├─ linalg.cpython-313.pyc
│  │     │  │  │  │     ├─ message.cpython-313.pyc
│  │     │  │  │  │     ├─ powalg.cpython-313.pyc
│  │     │  │  │  │     ├─ preproc.cpython-313.pyc
│  │     │  │  │  │     ├─ present.cpython-313.pyc
│  │     │  │  │  │     ├─ ratio.cpython-313.pyc
│  │     │  │  │  │     ├─ redrho.cpython-313.pyc
│  │     │  │  │  │     ├─ selectx.cpython-313.pyc
│  │     │  │  │  │     ├─ _bounds.cpython-313.pyc
│  │     │  │  │  │     ├─ _linear_constraints.cpython-313.pyc
│  │     │  │  │  │     ├─ _nonlinear_constraints.cpython-313.pyc
│  │     │  │  │  │     ├─ _project.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ test_array_api.py
│  │     │  │  │  ├─ test_bunch.py
│  │     │  │  │  ├─ test_ccallback.py
│  │     │  │  │  ├─ test_config.py
│  │     │  │  │  ├─ test_deprecation.py
│  │     │  │  │  ├─ test_doccer.py
│  │     │  │  │  ├─ test_import_cycles.py
│  │     │  │  │  ├─ test_public_api.py
│  │     │  │  │  ├─ test_scipy_version.py
│  │     │  │  │  ├─ test_tmpdirs.py
│  │     │  │  │  ├─ test_warnings.py
│  │     │  │  │  ├─ test__gcutils.py
│  │     │  │  │  ├─ test__pep440.py
│  │     │  │  │  ├─ test__testutils.py
│  │     │  │  │  ├─ test__threadsafety.py
│  │     │  │  │  ├─ test__util.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ test_array_api.cpython-313.pyc
│  │     │  │  │     ├─ test_bunch.cpython-313.pyc
│  │     │  │  │     ├─ test_ccallback.cpython-313.pyc
│  │     │  │  │     ├─ test_config.cpython-313.pyc
│  │     │  │  │     ├─ test_deprecation.cpython-313.pyc
│  │     │  │  │     ├─ test_doccer.cpython-313.pyc
│  │     │  │  │     ├─ test_import_cycles.cpython-313.pyc
│  │     │  │  │     ├─ test_public_api.cpython-313.pyc
│  │     │  │  │     ├─ test_scipy_version.cpython-313.pyc
│  │     │  │  │     ├─ test_tmpdirs.cpython-313.pyc
│  │     │  │  │     ├─ test_warnings.cpython-313.pyc
│  │     │  │  │     ├─ test__gcutils.cpython-313.pyc
│  │     │  │  │     ├─ test__pep440.cpython-313.pyc
│  │     │  │  │     ├─ test__testutils.cpython-313.pyc
│  │     │  │  │     ├─ test__threadsafety.cpython-313.pyc
│  │     │  │  │     ├─ test__util.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ uarray.py
│  │     │  │  ├─ _array_api.py
│  │     │  │  ├─ _array_api_compat_vendor.py
│  │     │  │  ├─ _array_api_no_0d.py
│  │     │  │  ├─ _bunch.py
│  │     │  │  ├─ _ccallback.py
│  │     │  │  ├─ _ccallback_c.cp313-win_amd64.dll.a
│  │     │  │  ├─ _ccallback_c.cp313-win_amd64.pyd
│  │     │  │  ├─ _disjoint_set.py
│  │     │  │  ├─ _docscrape.py
│  │     │  │  ├─ _elementwise_iterative_method.py
│  │     │  │  ├─ _fpumode.cp313-win_amd64.dll.a
│  │     │  │  ├─ _fpumode.cp313-win_amd64.pyd
│  │     │  │  ├─ _gcutils.py
│  │     │  │  ├─ _pep440.py
│  │     │  │  ├─ _sparse.py
│  │     │  │  ├─ _testutils.py
│  │     │  │  ├─ _test_ccallback.cp313-win_amd64.dll.a
│  │     │  │  ├─ _test_ccallback.cp313-win_amd64.pyd
│  │     │  │  ├─ _test_deprecation_call.cp313-win_amd64.dll.a
│  │     │  │  ├─ _test_deprecation_call.cp313-win_amd64.pyd
│  │     │  │  ├─ _test_deprecation_def.cp313-win_amd64.dll.a
│  │     │  │  ├─ _test_deprecation_def.cp313-win_amd64.pyd
│  │     │  │  ├─ _threadsafety.py
│  │     │  │  ├─ _tmpdirs.py
│  │     │  │  ├─ _uarray
│  │     │  │  │  ├─ LICENSE
│  │     │  │  │  ├─ _backend.py
│  │     │  │  │  ├─ _uarray.cp313-win_amd64.dll.a
│  │     │  │  │  ├─ _uarray.cp313-win_amd64.pyd
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ _backend.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _util.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ decorator.cpython-313.pyc
│  │     │  │     ├─ deprecation.cpython-313.pyc
│  │     │  │     ├─ doccer.cpython-313.pyc
│  │     │  │     ├─ uarray.cpython-313.pyc
│  │     │  │     ├─ _array_api.cpython-313.pyc
│  │     │  │     ├─ _array_api_compat_vendor.cpython-313.pyc
│  │     │  │     ├─ _array_api_no_0d.cpython-313.pyc
│  │     │  │     ├─ _bunch.cpython-313.pyc
│  │     │  │     ├─ _ccallback.cpython-313.pyc
│  │     │  │     ├─ _disjoint_set.cpython-313.pyc
│  │     │  │     ├─ _docscrape.cpython-313.pyc
│  │     │  │     ├─ _elementwise_iterative_method.cpython-313.pyc
│  │     │  │     ├─ _gcutils.cpython-313.pyc
│  │     │  │     ├─ _pep440.cpython-313.pyc
│  │     │  │     ├─ _sparse.cpython-313.pyc
│  │     │  │     ├─ _testutils.cpython-313.pyc
│  │     │  │     ├─ _threadsafety.cpython-313.pyc
│  │     │  │     ├─ _tmpdirs.cpython-313.pyc
│  │     │  │     ├─ _util.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ __config__.py
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ conftest.cpython-313.pyc
│  │     │     ├─ version.cpython-313.pyc
│  │     │     ├─ __config__.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ scipy-1.16.3-cp313-cp313-win_amd64.whl
│  │     ├─ scipy.libs
│  │     │  └─ libscipy_openblas-48c358d105077551cc9cc3ba79387ed5.dll
│  │     ├─ six.py
│  │     ├─ sklearn
│  │     │  ├─ .libs
│  │     │  │  ├─ msvcp140.dll
│  │     │  │  └─ vcomp140.dll
│  │     │  ├─ base.py
│  │     │  ├─ calibration.py
│  │     │  ├─ cluster
│  │     │  │  ├─ meson.build
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ common.py
│  │     │  │  │  ├─ test_affinity_propagation.py
│  │     │  │  │  ├─ test_bicluster.py
│  │     │  │  │  ├─ test_birch.py
│  │     │  │  │  ├─ test_bisect_k_means.py
│  │     │  │  │  ├─ test_dbscan.py
│  │     │  │  │  ├─ test_feature_agglomeration.py
│  │     │  │  │  ├─ test_hdbscan.py
│  │     │  │  │  ├─ test_hierarchical.py
│  │     │  │  │  ├─ test_k_means.py
│  │     │  │  │  ├─ test_mean_shift.py
│  │     │  │  │  ├─ test_optics.py
│  │     │  │  │  ├─ test_spectral.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ common.cpython-313.pyc
│  │     │  │  │     ├─ test_affinity_propagation.cpython-313.pyc
│  │     │  │  │     ├─ test_bicluster.cpython-313.pyc
│  │     │  │  │     ├─ test_birch.cpython-313.pyc
│  │     │  │  │     ├─ test_bisect_k_means.cpython-313.pyc
│  │     │  │  │     ├─ test_dbscan.cpython-313.pyc
│  │     │  │  │     ├─ test_feature_agglomeration.cpython-313.pyc
│  │     │  │  │     ├─ test_hdbscan.cpython-313.pyc
│  │     │  │  │     ├─ test_hierarchical.cpython-313.pyc
│  │     │  │  │     ├─ test_k_means.cpython-313.pyc
│  │     │  │  │     ├─ test_mean_shift.cpython-313.pyc
│  │     │  │  │     ├─ test_optics.cpython-313.pyc
│  │     │  │  │     ├─ test_spectral.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _affinity_propagation.py
│  │     │  │  ├─ _agglomerative.py
│  │     │  │  ├─ _bicluster.py
│  │     │  │  ├─ _birch.py
│  │     │  │  ├─ _bisect_k_means.py
│  │     │  │  ├─ _dbscan.py
│  │     │  │  ├─ _dbscan_inner.cp313-win_amd64.lib
│  │     │  │  ├─ _dbscan_inner.cp313-win_amd64.pyd
│  │     │  │  ├─ _dbscan_inner.pyx
│  │     │  │  ├─ _feature_agglomeration.py
│  │     │  │  ├─ _hdbscan
│  │     │  │  │  ├─ hdbscan.py
│  │     │  │  │  ├─ meson.build
│  │     │  │  │  ├─ tests
│  │     │  │  │  │  ├─ test_reachibility.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ test_reachibility.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ _linkage.cp313-win_amd64.lib
│  │     │  │  │  ├─ _linkage.cp313-win_amd64.pyd
│  │     │  │  │  ├─ _linkage.pyx
│  │     │  │  │  ├─ _reachability.cp313-win_amd64.lib
│  │     │  │  │  ├─ _reachability.cp313-win_amd64.pyd
│  │     │  │  │  ├─ _reachability.pyx
│  │     │  │  │  ├─ _tree.cp313-win_amd64.lib
│  │     │  │  │  ├─ _tree.cp313-win_amd64.pyd
│  │     │  │  │  ├─ _tree.pxd
│  │     │  │  │  ├─ _tree.pyx
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ hdbscan.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _hierarchical_fast.cp313-win_amd64.lib
│  │     │  │  ├─ _hierarchical_fast.cp313-win_amd64.pyd
│  │     │  │  ├─ _hierarchical_fast.pxd
│  │     │  │  ├─ _hierarchical_fast.pyx
│  │     │  │  ├─ _kmeans.py
│  │     │  │  ├─ _k_means_common.cp313-win_amd64.lib
│  │     │  │  ├─ _k_means_common.cp313-win_amd64.pyd
│  │     │  │  ├─ _k_means_common.pxd
│  │     │  │  ├─ _k_means_common.pyx
│  │     │  │  ├─ _k_means_elkan.cp313-win_amd64.lib
│  │     │  │  ├─ _k_means_elkan.cp313-win_amd64.pyd
│  │     │  │  ├─ _k_means_elkan.pyx
│  │     │  │  ├─ _k_means_lloyd.cp313-win_amd64.lib
│  │     │  │  ├─ _k_means_lloyd.cp313-win_amd64.pyd
│  │     │  │  ├─ _k_means_lloyd.pyx
│  │     │  │  ├─ _k_means_minibatch.cp313-win_amd64.lib
│  │     │  │  ├─ _k_means_minibatch.cp313-win_amd64.pyd
│  │     │  │  ├─ _k_means_minibatch.pyx
│  │     │  │  ├─ _mean_shift.py
│  │     │  │  ├─ _optics.py
│  │     │  │  ├─ _spectral.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ _affinity_propagation.cpython-313.pyc
│  │     │  │     ├─ _agglomerative.cpython-313.pyc
│  │     │  │     ├─ _bicluster.cpython-313.pyc
│  │     │  │     ├─ _birch.cpython-313.pyc
│  │     │  │     ├─ _bisect_k_means.cpython-313.pyc
│  │     │  │     ├─ _dbscan.cpython-313.pyc
│  │     │  │     ├─ _feature_agglomeration.cpython-313.pyc
│  │     │  │     ├─ _kmeans.cpython-313.pyc
│  │     │  │     ├─ _mean_shift.cpython-313.pyc
│  │     │  │     ├─ _optics.cpython-313.pyc
│  │     │  │     ├─ _spectral.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ compose
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ test_column_transformer.py
│  │     │  │  │  ├─ test_target.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ test_column_transformer.cpython-313.pyc
│  │     │  │  │     ├─ test_target.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _column_transformer.py
│  │     │  │  ├─ _target.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ _column_transformer.cpython-313.pyc
│  │     │  │     ├─ _target.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ conftest.py
│  │     │  ├─ covariance
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ test_covariance.py
│  │     │  │  │  ├─ test_elliptic_envelope.py
│  │     │  │  │  ├─ test_graphical_lasso.py
│  │     │  │  │  ├─ test_robust_covariance.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ test_covariance.cpython-313.pyc
│  │     │  │  │     ├─ test_elliptic_envelope.cpython-313.pyc
│  │     │  │  │     ├─ test_graphical_lasso.cpython-313.pyc
│  │     │  │  │     ├─ test_robust_covariance.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _elliptic_envelope.py
│  │     │  │  ├─ _empirical_covariance.py
│  │     │  │  ├─ _graph_lasso.py
│  │     │  │  ├─ _robust_covariance.py
│  │     │  │  ├─ _shrunk_covariance.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ _elliptic_envelope.cpython-313.pyc
│  │     │  │     ├─ _empirical_covariance.cpython-313.pyc
│  │     │  │     ├─ _graph_lasso.cpython-313.pyc
│  │     │  │     ├─ _robust_covariance.cpython-313.pyc
│  │     │  │     ├─ _shrunk_covariance.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ cross_decomposition
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ test_pls.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ test_pls.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _pls.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ _pls.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ datasets
│  │     │  │  ├─ data
│  │     │  │  │  ├─ breast_cancer.csv
│  │     │  │  │  ├─ diabetes_data_raw.csv.gz
│  │     │  │  │  ├─ diabetes_target.csv.gz
│  │     │  │  │  ├─ digits.csv.gz
│  │     │  │  │  ├─ iris.csv
│  │     │  │  │  ├─ linnerud_exercise.csv
│  │     │  │  │  ├─ linnerud_physiological.csv
│  │     │  │  │  ├─ wine_data.csv
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ descr
│  │     │  │  │  ├─ breast_cancer.rst
│  │     │  │  │  ├─ california_housing.rst
│  │     │  │  │  ├─ covtype.rst
│  │     │  │  │  ├─ diabetes.rst
│  │     │  │  │  ├─ digits.rst
│  │     │  │  │  ├─ iris.rst
│  │     │  │  │  ├─ kddcup99.rst
│  │     │  │  │  ├─ lfw.rst
│  │     │  │  │  ├─ linnerud.rst
│  │     │  │  │  ├─ olivetti_faces.rst
│  │     │  │  │  ├─ rcv1.rst
│  │     │  │  │  ├─ twenty_newsgroups.rst
│  │     │  │  │  ├─ wine_data.rst
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ images
│  │     │  │  │  ├─ china.jpg
│  │     │  │  │  ├─ flower.jpg
│  │     │  │  │  ├─ README.txt
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ meson.build
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ data
│  │     │  │  │  │  ├─ openml
│  │     │  │  │  │  │  ├─ id_1
│  │     │  │  │  │  │  │  ├─ api-v1-jd-1.json.gz
│  │     │  │  │  │  │  │  ├─ api-v1-jdf-1.json.gz
│  │     │  │  │  │  │  │  ├─ api-v1-jdq-1.json.gz
│  │     │  │  │  │  │  │  ├─ data-v1-dl-1.arff.gz
│  │     │  │  │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  │  │  └─ __pycache__
│  │     │  │  │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  │  │  ├─ id_1119
│  │     │  │  │  │  │  │  ├─ api-v1-jd-1119.json.gz
│  │     │  │  │  │  │  │  ├─ api-v1-jdf-1119.json.gz
│  │     │  │  │  │  │  │  ├─ api-v1-jdl-dn-adult-census-l-2-dv-1.json.gz
│  │     │  │  │  │  │  │  ├─ api-v1-jdl-dn-adult-census-l-2-s-act-.json.gz
│  │     │  │  │  │  │  │  ├─ api-v1-jdq-1119.json.gz
│  │     │  │  │  │  │  │  ├─ data-v1-dl-54002.arff.gz
│  │     │  │  │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  │  │  └─ __pycache__
│  │     │  │  │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  │  │  ├─ id_1590
│  │     │  │  │  │  │  │  ├─ api-v1-jd-1590.json.gz
│  │     │  │  │  │  │  │  ├─ api-v1-jdf-1590.json.gz
│  │     │  │  │  │  │  │  ├─ api-v1-jdq-1590.json.gz
│  │     │  │  │  │  │  │  ├─ data-v1-dl-1595261.arff.gz
│  │     │  │  │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  │  │  └─ __pycache__
│  │     │  │  │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  │  │  ├─ id_2
│  │     │  │  │  │  │  │  ├─ api-v1-jd-2.json.gz
│  │     │  │  │  │  │  │  ├─ api-v1-jdf-2.json.gz
│  │     │  │  │  │  │  │  ├─ api-v1-jdl-dn-anneal-l-2-dv-1.json.gz
│  │     │  │  │  │  │  │  ├─ api-v1-jdl-dn-anneal-l-2-s-act-.json.gz
│  │     │  │  │  │  │  │  ├─ api-v1-jdq-2.json.gz
│  │     │  │  │  │  │  │  ├─ data-v1-dl-1666876.arff.gz
│  │     │  │  │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  │  │  └─ __pycache__
│  │     │  │  │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  │  │  ├─ id_292
│  │     │  │  │  │  │  │  ├─ api-v1-jd-292.json.gz
│  │     │  │  │  │  │  │  ├─ api-v1-jd-40981.json.gz
│  │     │  │  │  │  │  │  ├─ api-v1-jdf-292.json.gz
│  │     │  │  │  │  │  │  ├─ api-v1-jdf-40981.json.gz
│  │     │  │  │  │  │  │  ├─ api-v1-jdl-dn-australian-l-2-dv-1-s-dact.json.gz
│  │     │  │  │  │  │  │  ├─ api-v1-jdl-dn-australian-l-2-dv-1.json.gz
│  │     │  │  │  │  │  │  ├─ api-v1-jdl-dn-australian-l-2-s-act-.json.gz
│  │     │  │  │  │  │  │  ├─ data-v1-dl-49822.arff.gz
│  │     │  │  │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  │  │  └─ __pycache__
│  │     │  │  │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  │  │  ├─ id_3
│  │     │  │  │  │  │  │  ├─ api-v1-jd-3.json.gz
│  │     │  │  │  │  │  │  ├─ api-v1-jdf-3.json.gz
│  │     │  │  │  │  │  │  ├─ api-v1-jdq-3.json.gz
│  │     │  │  │  │  │  │  ├─ data-v1-dl-3.arff.gz
│  │     │  │  │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  │  │  └─ __pycache__
│  │     │  │  │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  │  │  ├─ id_40589
│  │     │  │  │  │  │  │  ├─ api-v1-jd-40589.json.gz
│  │     │  │  │  │  │  │  ├─ api-v1-jdf-40589.json.gz
│  │     │  │  │  │  │  │  ├─ api-v1-jdl-dn-emotions-l-2-dv-3.json.gz
│  │     │  │  │  │  │  │  ├─ api-v1-jdl-dn-emotions-l-2-s-act-.json.gz
│  │     │  │  │  │  │  │  ├─ api-v1-jdq-40589.json.gz
│  │     │  │  │  │  │  │  ├─ data-v1-dl-4644182.arff.gz
│  │     │  │  │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  │  │  └─ __pycache__
│  │     │  │  │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  │  │  ├─ id_40675
│  │     │  │  │  │  │  │  ├─ api-v1-jd-40675.json.gz
│  │     │  │  │  │  │  │  ├─ api-v1-jdf-40675.json.gz
│  │     │  │  │  │  │  │  ├─ api-v1-jdl-dn-glass2-l-2-dv-1-s-dact.json.gz
│  │     │  │  │  │  │  │  ├─ api-v1-jdl-dn-glass2-l-2-dv-1.json.gz
│  │     │  │  │  │  │  │  ├─ api-v1-jdl-dn-glass2-l-2-s-act-.json.gz
│  │     │  │  │  │  │  │  ├─ api-v1-jdq-40675.json.gz
│  │     │  │  │  │  │  │  ├─ data-v1-dl-4965250.arff.gz
│  │     │  │  │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  │  │  └─ __pycache__
│  │     │  │  │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  │  │  ├─ id_40945
│  │     │  │  │  │  │  │  ├─ api-v1-jd-40945.json.gz
│  │     │  │  │  │  │  │  ├─ api-v1-jdf-40945.json.gz
│  │     │  │  │  │  │  │  ├─ api-v1-jdq-40945.json.gz
│  │     │  │  │  │  │  │  ├─ data-v1-dl-16826755.arff.gz
│  │     │  │  │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  │  │  └─ __pycache__
│  │     │  │  │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  │  │  ├─ id_40966
│  │     │  │  │  │  │  │  ├─ api-v1-jd-40966.json.gz
│  │     │  │  │  │  │  │  ├─ api-v1-jdf-40966.json.gz
│  │     │  │  │  │  │  │  ├─ api-v1-jdl-dn-miceprotein-l-2-dv-4.json.gz
│  │     │  │  │  │  │  │  ├─ api-v1-jdl-dn-miceprotein-l-2-s-act-.json.gz
│  │     │  │  │  │  │  │  ├─ api-v1-jdq-40966.json.gz
│  │     │  │  │  │  │  │  ├─ data-v1-dl-17928620.arff.gz
│  │     │  │  │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  │  │  └─ __pycache__
│  │     │  │  │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  │  │  ├─ id_42074
│  │     │  │  │  │  │  │  ├─ api-v1-jd-42074.json.gz
│  │     │  │  │  │  │  │  ├─ api-v1-jdf-42074.json.gz
│  │     │  │  │  │  │  │  ├─ api-v1-jdq-42074.json.gz
│  │     │  │  │  │  │  │  ├─ data-v1-dl-21552912.arff.gz
│  │     │  │  │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  │  │  └─ __pycache__
│  │     │  │  │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  │  │  ├─ id_42585
│  │     │  │  │  │  │  │  ├─ api-v1-jd-42585.json.gz
│  │     │  │  │  │  │  │  ├─ api-v1-jdf-42585.json.gz
│  │     │  │  │  │  │  │  ├─ api-v1-jdq-42585.json.gz
│  │     │  │  │  │  │  │  ├─ data-v1-dl-21854866.arff.gz
│  │     │  │  │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  │  │  └─ __pycache__
│  │     │  │  │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  │  │  ├─ id_561
│  │     │  │  │  │  │  │  ├─ api-v1-jd-561.json.gz
│  │     │  │  │  │  │  │  ├─ api-v1-jdf-561.json.gz
│  │     │  │  │  │  │  │  ├─ api-v1-jdl-dn-cpu-l-2-dv-1.json.gz
│  │     │  │  │  │  │  │  ├─ api-v1-jdl-dn-cpu-l-2-s-act-.json.gz
│  │     │  │  │  │  │  │  ├─ api-v1-jdq-561.json.gz
│  │     │  │  │  │  │  │  ├─ data-v1-dl-52739.arff.gz
│  │     │  │  │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  │  │  └─ __pycache__
│  │     │  │  │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  │  │  ├─ id_61
│  │     │  │  │  │  │  │  ├─ api-v1-jd-61.json.gz
│  │     │  │  │  │  │  │  ├─ api-v1-jdf-61.json.gz
│  │     │  │  │  │  │  │  ├─ api-v1-jdl-dn-iris-l-2-dv-1.json.gz
│  │     │  │  │  │  │  │  ├─ api-v1-jdl-dn-iris-l-2-s-act-.json.gz
│  │     │  │  │  │  │  │  ├─ api-v1-jdq-61.json.gz
│  │     │  │  │  │  │  │  ├─ data-v1-dl-61.arff.gz
│  │     │  │  │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  │  │  └─ __pycache__
│  │     │  │  │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  │  │  ├─ id_62
│  │     │  │  │  │  │  │  ├─ api-v1-jd-62.json.gz
│  │     │  │  │  │  │  │  ├─ api-v1-jdf-62.json.gz
│  │     │  │  │  │  │  │  ├─ api-v1-jdq-62.json.gz
│  │     │  │  │  │  │  │  ├─ data-v1-dl-52352.arff.gz
│  │     │  │  │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  │  │  └─ __pycache__
│  │     │  │  │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  │  └─ __pycache__
│  │     │  │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  │  ├─ svmlight_classification.txt
│  │     │  │  │  │  ├─ svmlight_invalid.txt
│  │     │  │  │  │  ├─ svmlight_invalid_order.txt
│  │     │  │  │  │  ├─ svmlight_multilabel.txt
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ test_20news.py
│  │     │  │  │  ├─ test_arff_parser.py
│  │     │  │  │  ├─ test_base.py
│  │     │  │  │  ├─ test_california_housing.py
│  │     │  │  │  ├─ test_common.py
│  │     │  │  │  ├─ test_covtype.py
│  │     │  │  │  ├─ test_kddcup99.py
│  │     │  │  │  ├─ test_lfw.py
│  │     │  │  │  ├─ test_olivetti_faces.py
│  │     │  │  │  ├─ test_openml.py
│  │     │  │  │  ├─ test_rcv1.py
│  │     │  │  │  ├─ test_samples_generator.py
│  │     │  │  │  ├─ test_svmlight_format.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ test_20news.cpython-313.pyc
│  │     │  │  │     ├─ test_arff_parser.cpython-313.pyc
│  │     │  │  │     ├─ test_base.cpython-313.pyc
│  │     │  │  │     ├─ test_california_housing.cpython-313.pyc
│  │     │  │  │     ├─ test_common.cpython-313.pyc
│  │     │  │  │     ├─ test_covtype.cpython-313.pyc
│  │     │  │  │     ├─ test_kddcup99.cpython-313.pyc
│  │     │  │  │     ├─ test_lfw.cpython-313.pyc
│  │     │  │  │     ├─ test_olivetti_faces.cpython-313.pyc
│  │     │  │  │     ├─ test_openml.cpython-313.pyc
│  │     │  │  │     ├─ test_rcv1.cpython-313.pyc
│  │     │  │  │     ├─ test_samples_generator.cpython-313.pyc
│  │     │  │  │     ├─ test_svmlight_format.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _arff_parser.py
│  │     │  │  ├─ _base.py
│  │     │  │  ├─ _california_housing.py
│  │     │  │  ├─ _covtype.py
│  │     │  │  ├─ _kddcup99.py
│  │     │  │  ├─ _lfw.py
│  │     │  │  ├─ _olivetti_faces.py
│  │     │  │  ├─ _openml.py
│  │     │  │  ├─ _rcv1.py
│  │     │  │  ├─ _samples_generator.py
│  │     │  │  ├─ _svmlight_format_fast.cp313-win_amd64.lib
│  │     │  │  ├─ _svmlight_format_fast.cp313-win_amd64.pyd
│  │     │  │  ├─ _svmlight_format_fast.pyx
│  │     │  │  ├─ _svmlight_format_io.py
│  │     │  │  ├─ _twenty_newsgroups.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ _arff_parser.cpython-313.pyc
│  │     │  │     ├─ _base.cpython-313.pyc
│  │     │  │     ├─ _california_housing.cpython-313.pyc
│  │     │  │     ├─ _covtype.cpython-313.pyc
│  │     │  │     ├─ _kddcup99.cpython-313.pyc
│  │     │  │     ├─ _lfw.cpython-313.pyc
│  │     │  │     ├─ _olivetti_faces.cpython-313.pyc
│  │     │  │     ├─ _openml.cpython-313.pyc
│  │     │  │     ├─ _rcv1.cpython-313.pyc
│  │     │  │     ├─ _samples_generator.cpython-313.pyc
│  │     │  │     ├─ _svmlight_format_io.cpython-313.pyc
│  │     │  │     ├─ _twenty_newsgroups.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ decomposition
│  │     │  │  ├─ meson.build
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ test_dict_learning.py
│  │     │  │  │  ├─ test_factor_analysis.py
│  │     │  │  │  ├─ test_fastica.py
│  │     │  │  │  ├─ test_incremental_pca.py
│  │     │  │  │  ├─ test_kernel_pca.py
│  │     │  │  │  ├─ test_nmf.py
│  │     │  │  │  ├─ test_online_lda.py
│  │     │  │  │  ├─ test_pca.py
│  │     │  │  │  ├─ test_sparse_pca.py
│  │     │  │  │  ├─ test_truncated_svd.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ test_dict_learning.cpython-313.pyc
│  │     │  │  │     ├─ test_factor_analysis.cpython-313.pyc
│  │     │  │  │     ├─ test_fastica.cpython-313.pyc
│  │     │  │  │     ├─ test_incremental_pca.cpython-313.pyc
│  │     │  │  │     ├─ test_kernel_pca.cpython-313.pyc
│  │     │  │  │     ├─ test_nmf.cpython-313.pyc
│  │     │  │  │     ├─ test_online_lda.cpython-313.pyc
│  │     │  │  │     ├─ test_pca.cpython-313.pyc
│  │     │  │  │     ├─ test_sparse_pca.cpython-313.pyc
│  │     │  │  │     ├─ test_truncated_svd.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _base.py
│  │     │  │  ├─ _cdnmf_fast.cp313-win_amd64.lib
│  │     │  │  ├─ _cdnmf_fast.cp313-win_amd64.pyd
│  │     │  │  ├─ _cdnmf_fast.pyx
│  │     │  │  ├─ _dict_learning.py
│  │     │  │  ├─ _factor_analysis.py
│  │     │  │  ├─ _fastica.py
│  │     │  │  ├─ _incremental_pca.py
│  │     │  │  ├─ _kernel_pca.py
│  │     │  │  ├─ _lda.py
│  │     │  │  ├─ _nmf.py
│  │     │  │  ├─ _online_lda_fast.cp313-win_amd64.lib
│  │     │  │  ├─ _online_lda_fast.cp313-win_amd64.pyd
│  │     │  │  ├─ _online_lda_fast.pyx
│  │     │  │  ├─ _pca.py
│  │     │  │  ├─ _sparse_pca.py
│  │     │  │  ├─ _truncated_svd.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ _base.cpython-313.pyc
│  │     │  │     ├─ _dict_learning.cpython-313.pyc
│  │     │  │     ├─ _factor_analysis.cpython-313.pyc
│  │     │  │     ├─ _fastica.cpython-313.pyc
│  │     │  │     ├─ _incremental_pca.cpython-313.pyc
│  │     │  │     ├─ _kernel_pca.cpython-313.pyc
│  │     │  │     ├─ _lda.cpython-313.pyc
│  │     │  │     ├─ _nmf.cpython-313.pyc
│  │     │  │     ├─ _pca.cpython-313.pyc
│  │     │  │     ├─ _sparse_pca.cpython-313.pyc
│  │     │  │     ├─ _truncated_svd.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ discriminant_analysis.py
│  │     │  ├─ dummy.py
│  │     │  ├─ ensemble
│  │     │  │  ├─ meson.build
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ test_bagging.py
│  │     │  │  │  ├─ test_base.py
│  │     │  │  │  ├─ test_common.py
│  │     │  │  │  ├─ test_forest.py
│  │     │  │  │  ├─ test_gradient_boosting.py
│  │     │  │  │  ├─ test_iforest.py
│  │     │  │  │  ├─ test_stacking.py
│  │     │  │  │  ├─ test_voting.py
│  │     │  │  │  ├─ test_weight_boosting.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ test_bagging.cpython-313.pyc
│  │     │  │  │     ├─ test_base.cpython-313.pyc
│  │     │  │  │     ├─ test_common.cpython-313.pyc
│  │     │  │  │     ├─ test_forest.cpython-313.pyc
│  │     │  │  │     ├─ test_gradient_boosting.cpython-313.pyc
│  │     │  │  │     ├─ test_iforest.cpython-313.pyc
│  │     │  │  │     ├─ test_stacking.cpython-313.pyc
│  │     │  │  │     ├─ test_voting.cpython-313.pyc
│  │     │  │  │     ├─ test_weight_boosting.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _bagging.py
│  │     │  │  ├─ _base.py
│  │     │  │  ├─ _forest.py
│  │     │  │  ├─ _gb.py
│  │     │  │  ├─ _gradient_boosting.cp313-win_amd64.lib
│  │     │  │  ├─ _gradient_boosting.cp313-win_amd64.pyd
│  │     │  │  ├─ _gradient_boosting.pyx
│  │     │  │  ├─ _hist_gradient_boosting
│  │     │  │  │  ├─ binning.py
│  │     │  │  │  ├─ common.cp313-win_amd64.lib
│  │     │  │  │  ├─ common.cp313-win_amd64.pyd
│  │     │  │  │  ├─ common.pxd
│  │     │  │  │  ├─ common.pyx
│  │     │  │  │  ├─ gradient_boosting.py
│  │     │  │  │  ├─ grower.py
│  │     │  │  │  ├─ histogram.cp313-win_amd64.lib
│  │     │  │  │  ├─ histogram.cp313-win_amd64.pyd
│  │     │  │  │  ├─ histogram.pyx
│  │     │  │  │  ├─ meson.build
│  │     │  │  │  ├─ predictor.py
│  │     │  │  │  ├─ splitting.cp313-win_amd64.lib
│  │     │  │  │  ├─ splitting.cp313-win_amd64.pyd
│  │     │  │  │  ├─ splitting.pyx
│  │     │  │  │  ├─ tests
│  │     │  │  │  │  ├─ test_binning.py
│  │     │  │  │  │  ├─ test_bitset.py
│  │     │  │  │  │  ├─ test_compare_lightgbm.py
│  │     │  │  │  │  ├─ test_gradient_boosting.py
│  │     │  │  │  │  ├─ test_grower.py
│  │     │  │  │  │  ├─ test_histogram.py
│  │     │  │  │  │  ├─ test_monotonic_constraints.py
│  │     │  │  │  │  ├─ test_predictor.py
│  │     │  │  │  │  ├─ test_splitting.py
│  │     │  │  │  │  ├─ test_warm_start.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ test_binning.cpython-313.pyc
│  │     │  │  │  │     ├─ test_bitset.cpython-313.pyc
│  │     │  │  │  │     ├─ test_compare_lightgbm.cpython-313.pyc
│  │     │  │  │  │     ├─ test_gradient_boosting.cpython-313.pyc
│  │     │  │  │  │     ├─ test_grower.cpython-313.pyc
│  │     │  │  │  │     ├─ test_histogram.cpython-313.pyc
│  │     │  │  │  │     ├─ test_monotonic_constraints.cpython-313.pyc
│  │     │  │  │  │     ├─ test_predictor.cpython-313.pyc
│  │     │  │  │  │     ├─ test_splitting.cpython-313.pyc
│  │     │  │  │  │     ├─ test_warm_start.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ utils.py
│  │     │  │  │  ├─ _binning.cp313-win_amd64.lib
│  │     │  │  │  ├─ _binning.cp313-win_amd64.pyd
│  │     │  │  │  ├─ _binning.pyx
│  │     │  │  │  ├─ _bitset.cp313-win_amd64.lib
│  │     │  │  │  ├─ _bitset.cp313-win_amd64.pyd
│  │     │  │  │  ├─ _bitset.pxd
│  │     │  │  │  ├─ _bitset.pyx
│  │     │  │  │  ├─ _gradient_boosting.cp313-win_amd64.lib
│  │     │  │  │  ├─ _gradient_boosting.cp313-win_amd64.pyd
│  │     │  │  │  ├─ _gradient_boosting.pyx
│  │     │  │  │  ├─ _predictor.cp313-win_amd64.lib
│  │     │  │  │  ├─ _predictor.cp313-win_amd64.pyd
│  │     │  │  │  ├─ _predictor.pyx
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ binning.cpython-313.pyc
│  │     │  │  │     ├─ gradient_boosting.cpython-313.pyc
│  │     │  │  │     ├─ grower.cpython-313.pyc
│  │     │  │  │     ├─ predictor.cpython-313.pyc
│  │     │  │  │     ├─ utils.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _iforest.py
│  │     │  │  ├─ _stacking.py
│  │     │  │  ├─ _voting.py
│  │     │  │  ├─ _weight_boosting.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ _bagging.cpython-313.pyc
│  │     │  │     ├─ _base.cpython-313.pyc
│  │     │  │     ├─ _forest.cpython-313.pyc
│  │     │  │     ├─ _gb.cpython-313.pyc
│  │     │  │     ├─ _iforest.cpython-313.pyc
│  │     │  │     ├─ _stacking.cpython-313.pyc
│  │     │  │     ├─ _voting.cpython-313.pyc
│  │     │  │     ├─ _weight_boosting.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ exceptions.py
│  │     │  ├─ experimental
│  │     │  │  ├─ enable_halving_search_cv.py
│  │     │  │  ├─ enable_hist_gradient_boosting.py
│  │     │  │  ├─ enable_iterative_imputer.py
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ test_enable_hist_gradient_boosting.py
│  │     │  │  │  ├─ test_enable_iterative_imputer.py
│  │     │  │  │  ├─ test_enable_successive_halving.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ test_enable_hist_gradient_boosting.cpython-313.pyc
│  │     │  │  │     ├─ test_enable_iterative_imputer.cpython-313.pyc
│  │     │  │  │     ├─ test_enable_successive_halving.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ enable_halving_search_cv.cpython-313.pyc
│  │     │  │     ├─ enable_hist_gradient_boosting.cpython-313.pyc
│  │     │  │     ├─ enable_iterative_imputer.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ externals
│  │     │  │  ├─ array_api_compat
│  │     │  │  │  ├─ common
│  │     │  │  │  │  ├─ _aliases.py
│  │     │  │  │  │  ├─ _fft.py
│  │     │  │  │  │  ├─ _helpers.py
│  │     │  │  │  │  ├─ _linalg.py
│  │     │  │  │  │  ├─ _typing.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ _aliases.cpython-313.pyc
│  │     │  │  │  │     ├─ _fft.cpython-313.pyc
│  │     │  │  │  │     ├─ _helpers.cpython-313.pyc
│  │     │  │  │  │     ├─ _linalg.cpython-313.pyc
│  │     │  │  │  │     ├─ _typing.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ cupy
│  │     │  │  │  │  ├─ fft.py
│  │     │  │  │  │  ├─ linalg.py
│  │     │  │  │  │  ├─ _aliases.py
│  │     │  │  │  │  ├─ _info.py
│  │     │  │  │  │  ├─ _typing.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ fft.cpython-313.pyc
│  │     │  │  │  │     ├─ linalg.cpython-313.pyc
│  │     │  │  │  │     ├─ _aliases.cpython-313.pyc
│  │     │  │  │  │     ├─ _info.cpython-313.pyc
│  │     │  │  │  │     ├─ _typing.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ dask
│  │     │  │  │  │  ├─ array
│  │     │  │  │  │  │  ├─ fft.py
│  │     │  │  │  │  │  ├─ linalg.py
│  │     │  │  │  │  │  ├─ _aliases.py
│  │     │  │  │  │  │  ├─ _info.py
│  │     │  │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  │  └─ __pycache__
│  │     │  │  │  │  │     ├─ fft.cpython-313.pyc
│  │     │  │  │  │  │     ├─ linalg.cpython-313.pyc
│  │     │  │  │  │  │     ├─ _aliases.cpython-313.pyc
│  │     │  │  │  │  │     ├─ _info.cpython-313.pyc
│  │     │  │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ LICENSE
│  │     │  │  │  ├─ numpy
│  │     │  │  │  │  ├─ fft.py
│  │     │  │  │  │  ├─ linalg.py
│  │     │  │  │  │  ├─ _aliases.py
│  │     │  │  │  │  ├─ _info.py
│  │     │  │  │  │  ├─ _typing.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ fft.cpython-313.pyc
│  │     │  │  │  │     ├─ linalg.cpython-313.pyc
│  │     │  │  │  │     ├─ _aliases.cpython-313.pyc
│  │     │  │  │  │     ├─ _info.cpython-313.pyc
│  │     │  │  │  │     ├─ _typing.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ py.typed
│  │     │  │  │  ├─ README.md
│  │     │  │  │  ├─ torch
│  │     │  │  │  │  ├─ fft.py
│  │     │  │  │  │  ├─ linalg.py
│  │     │  │  │  │  ├─ _aliases.py
│  │     │  │  │  │  ├─ _info.py
│  │     │  │  │  │  ├─ _typing.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ fft.cpython-313.pyc
│  │     │  │  │  │     ├─ linalg.cpython-313.pyc
│  │     │  │  │  │     ├─ _aliases.cpython-313.pyc
│  │     │  │  │  │     ├─ _info.cpython-313.pyc
│  │     │  │  │  │     ├─ _typing.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ _internal.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ _internal.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ array_api_extra
│  │     │  │  │  ├─ LICENSE
│  │     │  │  │  ├─ py.typed
│  │     │  │  │  ├─ README.md
│  │     │  │  │  ├─ testing.py
│  │     │  │  │  ├─ _delegation.py
│  │     │  │  │  ├─ _lib
│  │     │  │  │  │  ├─ _at.py
│  │     │  │  │  │  ├─ _backends.py
│  │     │  │  │  │  ├─ _funcs.py
│  │     │  │  │  │  ├─ _lazy.py
│  │     │  │  │  │  ├─ _testing.py
│  │     │  │  │  │  ├─ _utils
│  │     │  │  │  │  │  ├─ _compat.py
│  │     │  │  │  │  │  ├─ _compat.pyi
│  │     │  │  │  │  │  ├─ _helpers.py
│  │     │  │  │  │  │  ├─ _typing.py
│  │     │  │  │  │  │  ├─ _typing.pyi
│  │     │  │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  │  └─ __pycache__
│  │     │  │  │  │  │     ├─ _compat.cpython-313.pyc
│  │     │  │  │  │  │     ├─ _helpers.cpython-313.pyc
│  │     │  │  │  │  │     ├─ _typing.cpython-313.pyc
│  │     │  │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ _at.cpython-313.pyc
│  │     │  │  │  │     ├─ _backends.cpython-313.pyc
│  │     │  │  │  │     ├─ _funcs.cpython-313.pyc
│  │     │  │  │  │     ├─ _lazy.cpython-313.pyc
│  │     │  │  │  │     ├─ _testing.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ testing.cpython-313.pyc
│  │     │  │  │     ├─ _delegation.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ conftest.py
│  │     │  │  ├─ README
│  │     │  │  ├─ _arff.py
│  │     │  │  ├─ _array_api_compat_vendor.py
│  │     │  │  ├─ _numpydoc
│  │     │  │  │  ├─ docscrape.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     └─ docscrape.cpython-313.pyc
│  │     │  │  ├─ _packaging
│  │     │  │  │  ├─ version.py
│  │     │  │  │  ├─ _structures.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ version.cpython-313.pyc
│  │     │  │  │     ├─ _structures.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _scipy
│  │     │  │  │  ├─ sparse
│  │     │  │  │  │  ├─ csgraph
│  │     │  │  │  │  │  ├─ _laplacian.py
│  │     │  │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  │  └─ __pycache__
│  │     │  │  │  │  │     ├─ _laplacian.cpython-313.pyc
│  │     │  │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ conftest.cpython-313.pyc
│  │     │  │     ├─ _arff.cpython-313.pyc
│  │     │  │     ├─ _array_api_compat_vendor.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ feature_extraction
│  │     │  │  ├─ image.py
│  │     │  │  ├─ meson.build
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ test_dict_vectorizer.py
│  │     │  │  │  ├─ test_feature_hasher.py
│  │     │  │  │  ├─ test_image.py
│  │     │  │  │  ├─ test_text.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ test_dict_vectorizer.cpython-313.pyc
│  │     │  │  │     ├─ test_feature_hasher.cpython-313.pyc
│  │     │  │  │     ├─ test_image.cpython-313.pyc
│  │     │  │  │     ├─ test_text.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ text.py
│  │     │  │  ├─ _dict_vectorizer.py
│  │     │  │  ├─ _hash.py
│  │     │  │  ├─ _hashing_fast.cp313-win_amd64.lib
│  │     │  │  ├─ _hashing_fast.cp313-win_amd64.pyd
│  │     │  │  ├─ _hashing_fast.pyx
│  │     │  │  ├─ _stop_words.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ image.cpython-313.pyc
│  │     │  │     ├─ text.cpython-313.pyc
│  │     │  │     ├─ _dict_vectorizer.cpython-313.pyc
│  │     │  │     ├─ _hash.cpython-313.pyc
│  │     │  │     ├─ _stop_words.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ feature_selection
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ test_base.py
│  │     │  │  │  ├─ test_chi2.py
│  │     │  │  │  ├─ test_feature_select.py
│  │     │  │  │  ├─ test_from_model.py
│  │     │  │  │  ├─ test_mutual_info.py
│  │     │  │  │  ├─ test_rfe.py
│  │     │  │  │  ├─ test_sequential.py
│  │     │  │  │  ├─ test_variance_threshold.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ test_base.cpython-313.pyc
│  │     │  │  │     ├─ test_chi2.cpython-313.pyc
│  │     │  │  │     ├─ test_feature_select.cpython-313.pyc
│  │     │  │  │     ├─ test_from_model.cpython-313.pyc
│  │     │  │  │     ├─ test_mutual_info.cpython-313.pyc
│  │     │  │  │     ├─ test_rfe.cpython-313.pyc
│  │     │  │  │     ├─ test_sequential.cpython-313.pyc
│  │     │  │  │     ├─ test_variance_threshold.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _base.py
│  │     │  │  ├─ _from_model.py
│  │     │  │  ├─ _mutual_info.py
│  │     │  │  ├─ _rfe.py
│  │     │  │  ├─ _sequential.py
│  │     │  │  ├─ _univariate_selection.py
│  │     │  │  ├─ _variance_threshold.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ _base.cpython-313.pyc
│  │     │  │     ├─ _from_model.cpython-313.pyc
│  │     │  │     ├─ _mutual_info.cpython-313.pyc
│  │     │  │     ├─ _rfe.cpython-313.pyc
│  │     │  │     ├─ _sequential.cpython-313.pyc
│  │     │  │     ├─ _univariate_selection.cpython-313.pyc
│  │     │  │     ├─ _variance_threshold.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ frozen
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ test_frozen.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ test_frozen.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _frozen.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ _frozen.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ gaussian_process
│  │     │  │  ├─ kernels.py
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ test_gpc.py
│  │     │  │  │  ├─ test_gpr.py
│  │     │  │  │  ├─ test_kernels.py
│  │     │  │  │  ├─ _mini_sequence_kernel.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ test_gpc.cpython-313.pyc
│  │     │  │  │     ├─ test_gpr.cpython-313.pyc
│  │     │  │  │     ├─ test_kernels.cpython-313.pyc
│  │     │  │  │     ├─ _mini_sequence_kernel.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _gpc.py
│  │     │  │  ├─ _gpr.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ kernels.cpython-313.pyc
│  │     │  │     ├─ _gpc.cpython-313.pyc
│  │     │  │     ├─ _gpr.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ impute
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ test_base.py
│  │     │  │  │  ├─ test_common.py
│  │     │  │  │  ├─ test_impute.py
│  │     │  │  │  ├─ test_knn.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ test_base.cpython-313.pyc
│  │     │  │  │     ├─ test_common.cpython-313.pyc
│  │     │  │  │     ├─ test_impute.cpython-313.pyc
│  │     │  │  │     ├─ test_knn.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _base.py
│  │     │  │  ├─ _iterative.py
│  │     │  │  ├─ _knn.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ _base.cpython-313.pyc
│  │     │  │     ├─ _iterative.cpython-313.pyc
│  │     │  │     ├─ _knn.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ inspection
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ test_partial_dependence.py
│  │     │  │  │  ├─ test_pd_utils.py
│  │     │  │  │  ├─ test_permutation_importance.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ test_partial_dependence.cpython-313.pyc
│  │     │  │  │     ├─ test_pd_utils.cpython-313.pyc
│  │     │  │  │     ├─ test_permutation_importance.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _partial_dependence.py
│  │     │  │  ├─ _pd_utils.py
│  │     │  │  ├─ _permutation_importance.py
│  │     │  │  ├─ _plot
│  │     │  │  │  ├─ decision_boundary.py
│  │     │  │  │  ├─ partial_dependence.py
│  │     │  │  │  ├─ tests
│  │     │  │  │  │  ├─ test_boundary_decision_display.py
│  │     │  │  │  │  ├─ test_plot_partial_dependence.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ test_boundary_decision_display.cpython-313.pyc
│  │     │  │  │  │     ├─ test_plot_partial_dependence.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ decision_boundary.cpython-313.pyc
│  │     │  │  │     ├─ partial_dependence.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ _partial_dependence.cpython-313.pyc
│  │     │  │     ├─ _pd_utils.cpython-313.pyc
│  │     │  │     ├─ _permutation_importance.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ isotonic.py
│  │     │  ├─ kernel_approximation.py
│  │     │  ├─ kernel_ridge.py
│  │     │  ├─ linear_model
│  │     │  │  ├─ meson.build
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ test_base.py
│  │     │  │  │  ├─ test_bayes.py
│  │     │  │  │  ├─ test_common.py
│  │     │  │  │  ├─ test_coordinate_descent.py
│  │     │  │  │  ├─ test_huber.py
│  │     │  │  │  ├─ test_least_angle.py
│  │     │  │  │  ├─ test_linear_loss.py
│  │     │  │  │  ├─ test_logistic.py
│  │     │  │  │  ├─ test_omp.py
│  │     │  │  │  ├─ test_passive_aggressive.py
│  │     │  │  │  ├─ test_perceptron.py
│  │     │  │  │  ├─ test_quantile.py
│  │     │  │  │  ├─ test_ransac.py
│  │     │  │  │  ├─ test_ridge.py
│  │     │  │  │  ├─ test_sag.py
│  │     │  │  │  ├─ test_sgd.py
│  │     │  │  │  ├─ test_sparse_coordinate_descent.py
│  │     │  │  │  ├─ test_theil_sen.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ test_base.cpython-313.pyc
│  │     │  │  │     ├─ test_bayes.cpython-313.pyc
│  │     │  │  │     ├─ test_common.cpython-313.pyc
│  │     │  │  │     ├─ test_coordinate_descent.cpython-313.pyc
│  │     │  │  │     ├─ test_huber.cpython-313.pyc
│  │     │  │  │     ├─ test_least_angle.cpython-313.pyc
│  │     │  │  │     ├─ test_linear_loss.cpython-313.pyc
│  │     │  │  │     ├─ test_logistic.cpython-313.pyc
│  │     │  │  │     ├─ test_omp.cpython-313.pyc
│  │     │  │  │     ├─ test_passive_aggressive.cpython-313.pyc
│  │     │  │  │     ├─ test_perceptron.cpython-313.pyc
│  │     │  │  │     ├─ test_quantile.cpython-313.pyc
│  │     │  │  │     ├─ test_ransac.cpython-313.pyc
│  │     │  │  │     ├─ test_ridge.cpython-313.pyc
│  │     │  │  │     ├─ test_sag.cpython-313.pyc
│  │     │  │  │     ├─ test_sgd.cpython-313.pyc
│  │     │  │  │     ├─ test_sparse_coordinate_descent.cpython-313.pyc
│  │     │  │  │     ├─ test_theil_sen.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _base.py
│  │     │  │  ├─ _bayes.py
│  │     │  │  ├─ _cd_fast.cp313-win_amd64.lib
│  │     │  │  ├─ _cd_fast.cp313-win_amd64.pyd
│  │     │  │  ├─ _cd_fast.pyx
│  │     │  │  ├─ _coordinate_descent.py
│  │     │  │  ├─ _glm
│  │     │  │  │  ├─ glm.py
│  │     │  │  │  ├─ tests
│  │     │  │  │  │  ├─ test_glm.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ test_glm.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ _newton_solver.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ glm.cpython-313.pyc
│  │     │  │  │     ├─ _newton_solver.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _huber.py
│  │     │  │  ├─ _least_angle.py
│  │     │  │  ├─ _linear_loss.py
│  │     │  │  ├─ _logistic.py
│  │     │  │  ├─ _omp.py
│  │     │  │  ├─ _passive_aggressive.py
│  │     │  │  ├─ _perceptron.py
│  │     │  │  ├─ _quantile.py
│  │     │  │  ├─ _ransac.py
│  │     │  │  ├─ _ridge.py
│  │     │  │  ├─ _sag.py
│  │     │  │  ├─ _sag_fast.cp313-win_amd64.lib
│  │     │  │  ├─ _sag_fast.cp313-win_amd64.pyd
│  │     │  │  ├─ _sag_fast.pyx.tp
│  │     │  │  ├─ _sgd_fast.cp313-win_amd64.lib
│  │     │  │  ├─ _sgd_fast.cp313-win_amd64.pyd
│  │     │  │  ├─ _sgd_fast.pyx.tp
│  │     │  │  ├─ _stochastic_gradient.py
│  │     │  │  ├─ _theil_sen.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ _base.cpython-313.pyc
│  │     │  │     ├─ _bayes.cpython-313.pyc
│  │     │  │     ├─ _coordinate_descent.cpython-313.pyc
│  │     │  │     ├─ _huber.cpython-313.pyc
│  │     │  │     ├─ _least_angle.cpython-313.pyc
│  │     │  │     ├─ _linear_loss.cpython-313.pyc
│  │     │  │     ├─ _logistic.cpython-313.pyc
│  │     │  │     ├─ _omp.cpython-313.pyc
│  │     │  │     ├─ _passive_aggressive.cpython-313.pyc
│  │     │  │     ├─ _perceptron.cpython-313.pyc
│  │     │  │     ├─ _quantile.cpython-313.pyc
│  │     │  │     ├─ _ransac.cpython-313.pyc
│  │     │  │     ├─ _ridge.cpython-313.pyc
│  │     │  │     ├─ _sag.cpython-313.pyc
│  │     │  │     ├─ _stochastic_gradient.cpython-313.pyc
│  │     │  │     ├─ _theil_sen.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ manifold
│  │     │  │  ├─ meson.build
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ test_classical_mds.py
│  │     │  │  │  ├─ test_isomap.py
│  │     │  │  │  ├─ test_locally_linear.py
│  │     │  │  │  ├─ test_mds.py
│  │     │  │  │  ├─ test_spectral_embedding.py
│  │     │  │  │  ├─ test_t_sne.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ test_classical_mds.cpython-313.pyc
│  │     │  │  │     ├─ test_isomap.cpython-313.pyc
│  │     │  │  │     ├─ test_locally_linear.cpython-313.pyc
│  │     │  │  │     ├─ test_mds.cpython-313.pyc
│  │     │  │  │     ├─ test_spectral_embedding.cpython-313.pyc
│  │     │  │  │     ├─ test_t_sne.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _barnes_hut_tsne.cp313-win_amd64.lib
│  │     │  │  ├─ _barnes_hut_tsne.cp313-win_amd64.pyd
│  │     │  │  ├─ _barnes_hut_tsne.pyx
│  │     │  │  ├─ _classical_mds.py
│  │     │  │  ├─ _isomap.py
│  │     │  │  ├─ _locally_linear.py
│  │     │  │  ├─ _mds.py
│  │     │  │  ├─ _spectral_embedding.py
│  │     │  │  ├─ _t_sne.py
│  │     │  │  ├─ _utils.cp313-win_amd64.lib
│  │     │  │  ├─ _utils.cp313-win_amd64.pyd
│  │     │  │  ├─ _utils.pyx
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ _classical_mds.cpython-313.pyc
│  │     │  │     ├─ _isomap.cpython-313.pyc
│  │     │  │     ├─ _locally_linear.cpython-313.pyc
│  │     │  │     ├─ _mds.cpython-313.pyc
│  │     │  │     ├─ _spectral_embedding.cpython-313.pyc
│  │     │  │     ├─ _t_sne.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ meson.build
│  │     │  ├─ metrics
│  │     │  │  ├─ cluster
│  │     │  │  │  ├─ meson.build
│  │     │  │  │  ├─ tests
│  │     │  │  │  │  ├─ test_bicluster.py
│  │     │  │  │  │  ├─ test_common.py
│  │     │  │  │  │  ├─ test_supervised.py
│  │     │  │  │  │  ├─ test_unsupervised.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ test_bicluster.cpython-313.pyc
│  │     │  │  │  │     ├─ test_common.cpython-313.pyc
│  │     │  │  │  │     ├─ test_supervised.cpython-313.pyc
│  │     │  │  │  │     ├─ test_unsupervised.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ _bicluster.py
│  │     │  │  │  ├─ _expected_mutual_info_fast.cp313-win_amd64.lib
│  │     │  │  │  ├─ _expected_mutual_info_fast.cp313-win_amd64.pyd
│  │     │  │  │  ├─ _expected_mutual_info_fast.pyx
│  │     │  │  │  ├─ _supervised.py
│  │     │  │  │  ├─ _unsupervised.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ _bicluster.cpython-313.pyc
│  │     │  │  │     ├─ _supervised.cpython-313.pyc
│  │     │  │  │     ├─ _unsupervised.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ meson.build
│  │     │  │  ├─ pairwise.py
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ test_classification.py
│  │     │  │  │  ├─ test_common.py
│  │     │  │  │  ├─ test_pairwise.py
│  │     │  │  │  ├─ test_ranking.py
│  │     │  │  │  ├─ test_regression.py
│  │     │  │  │  ├─ test_score_objects.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ test_classification.cpython-313.pyc
│  │     │  │  │     ├─ test_common.cpython-313.pyc
│  │     │  │  │     ├─ test_pairwise.cpython-313.pyc
│  │     │  │  │     ├─ test_ranking.cpython-313.pyc
│  │     │  │  │     ├─ test_regression.cpython-313.pyc
│  │     │  │  │     ├─ test_score_objects.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _base.py
│  │     │  │  ├─ _classification.py
│  │     │  │  ├─ _pairwise_fast.cp313-win_amd64.lib
│  │     │  │  ├─ _pairwise_fast.cp313-win_amd64.pyd
│  │     │  │  ├─ _pairwise_fast.pyx
│  │     │  │  ├─ _plot
│  │     │  │  │  ├─ confusion_matrix.py
│  │     │  │  │  ├─ det_curve.py
│  │     │  │  │  ├─ precision_recall_curve.py
│  │     │  │  │  ├─ regression.py
│  │     │  │  │  ├─ roc_curve.py
│  │     │  │  │  ├─ tests
│  │     │  │  │  │  ├─ test_common_curve_display.py
│  │     │  │  │  │  ├─ test_confusion_matrix_display.py
│  │     │  │  │  │  ├─ test_det_curve_display.py
│  │     │  │  │  │  ├─ test_precision_recall_display.py
│  │     │  │  │  │  ├─ test_predict_error_display.py
│  │     │  │  │  │  ├─ test_roc_curve_display.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ test_common_curve_display.cpython-313.pyc
│  │     │  │  │  │     ├─ test_confusion_matrix_display.cpython-313.pyc
│  │     │  │  │  │     ├─ test_det_curve_display.cpython-313.pyc
│  │     │  │  │  │     ├─ test_precision_recall_display.cpython-313.pyc
│  │     │  │  │  │     ├─ test_predict_error_display.cpython-313.pyc
│  │     │  │  │  │     ├─ test_roc_curve_display.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ confusion_matrix.cpython-313.pyc
│  │     │  │  │     ├─ det_curve.cpython-313.pyc
│  │     │  │  │     ├─ precision_recall_curve.cpython-313.pyc
│  │     │  │  │     ├─ regression.cpython-313.pyc
│  │     │  │  │     ├─ roc_curve.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _ranking.py
│  │     │  │  ├─ _regression.py
│  │     │  │  ├─ _scorer.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ pairwise.cpython-313.pyc
│  │     │  │     ├─ _base.cpython-313.pyc
│  │     │  │     ├─ _classification.cpython-313.pyc
│  │     │  │     ├─ _ranking.cpython-313.pyc
│  │     │  │     ├─ _regression.cpython-313.pyc
│  │     │  │     ├─ _scorer.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ mixture
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ test_bayesian_mixture.py
│  │     │  │  │  ├─ test_gaussian_mixture.py
│  │     │  │  │  ├─ test_mixture.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ test_bayesian_mixture.cpython-313.pyc
│  │     │  │  │     ├─ test_gaussian_mixture.cpython-313.pyc
│  │     │  │  │     ├─ test_mixture.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _base.py
│  │     │  │  ├─ _bayesian_mixture.py
│  │     │  │  ├─ _gaussian_mixture.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ _base.cpython-313.pyc
│  │     │  │     ├─ _bayesian_mixture.cpython-313.pyc
│  │     │  │     ├─ _gaussian_mixture.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ model_selection
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ common.py
│  │     │  │  │  ├─ test_classification_threshold.py
│  │     │  │  │  ├─ test_plot.py
│  │     │  │  │  ├─ test_search.py
│  │     │  │  │  ├─ test_split.py
│  │     │  │  │  ├─ test_successive_halving.py
│  │     │  │  │  ├─ test_validation.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ common.cpython-313.pyc
│  │     │  │  │     ├─ test_classification_threshold.cpython-313.pyc
│  │     │  │  │     ├─ test_plot.cpython-313.pyc
│  │     │  │  │     ├─ test_search.cpython-313.pyc
│  │     │  │  │     ├─ test_split.cpython-313.pyc
│  │     │  │  │     ├─ test_successive_halving.cpython-313.pyc
│  │     │  │  │     ├─ test_validation.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _classification_threshold.py
│  │     │  │  ├─ _plot.py
│  │     │  │  ├─ _search.py
│  │     │  │  ├─ _search_successive_halving.py
│  │     │  │  ├─ _split.py
│  │     │  │  ├─ _validation.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ _classification_threshold.cpython-313.pyc
│  │     │  │     ├─ _plot.cpython-313.pyc
│  │     │  │     ├─ _search.cpython-313.pyc
│  │     │  │     ├─ _search_successive_halving.cpython-313.pyc
│  │     │  │     ├─ _split.cpython-313.pyc
│  │     │  │     ├─ _validation.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ multiclass.py
│  │     │  ├─ multioutput.py
│  │     │  ├─ naive_bayes.py
│  │     │  ├─ neighbors
│  │     │  │  ├─ meson.build
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ test_ball_tree.py
│  │     │  │  │  ├─ test_graph.py
│  │     │  │  │  ├─ test_kde.py
│  │     │  │  │  ├─ test_kd_tree.py
│  │     │  │  │  ├─ test_lof.py
│  │     │  │  │  ├─ test_nca.py
│  │     │  │  │  ├─ test_nearest_centroid.py
│  │     │  │  │  ├─ test_neighbors.py
│  │     │  │  │  ├─ test_neighbors_pipeline.py
│  │     │  │  │  ├─ test_neighbors_tree.py
│  │     │  │  │  ├─ test_quad_tree.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ test_ball_tree.cpython-313.pyc
│  │     │  │  │     ├─ test_graph.cpython-313.pyc
│  │     │  │  │     ├─ test_kde.cpython-313.pyc
│  │     │  │  │     ├─ test_kd_tree.cpython-313.pyc
│  │     │  │  │     ├─ test_lof.cpython-313.pyc
│  │     │  │  │     ├─ test_nca.cpython-313.pyc
│  │     │  │  │     ├─ test_nearest_centroid.cpython-313.pyc
│  │     │  │  │     ├─ test_neighbors.cpython-313.pyc
│  │     │  │  │     ├─ test_neighbors_pipeline.cpython-313.pyc
│  │     │  │  │     ├─ test_neighbors_tree.cpython-313.pyc
│  │     │  │  │     ├─ test_quad_tree.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _ball_tree.cp313-win_amd64.lib
│  │     │  │  ├─ _ball_tree.cp313-win_amd64.pyd
│  │     │  │  ├─ _ball_tree.pyx.tp
│  │     │  │  ├─ _base.py
│  │     │  │  ├─ _binary_tree.pxi.tp
│  │     │  │  ├─ _classification.py
│  │     │  │  ├─ _graph.py
│  │     │  │  ├─ _kde.py
│  │     │  │  ├─ _kd_tree.cp313-win_amd64.lib
│  │     │  │  ├─ _kd_tree.cp313-win_amd64.pyd
│  │     │  │  ├─ _kd_tree.pyx.tp
│  │     │  │  ├─ _lof.py
│  │     │  │  ├─ _nca.py
│  │     │  │  ├─ _nearest_centroid.py
│  │     │  │  ├─ _partition_nodes.cp313-win_amd64.lib
│  │     │  │  ├─ _partition_nodes.cp313-win_amd64.pyd
│  │     │  │  ├─ _partition_nodes.pxd
│  │     │  │  ├─ _partition_nodes.pyx
│  │     │  │  ├─ _quad_tree.cp313-win_amd64.lib
│  │     │  │  ├─ _quad_tree.cp313-win_amd64.pyd
│  │     │  │  ├─ _quad_tree.pxd
│  │     │  │  ├─ _quad_tree.pyx
│  │     │  │  ├─ _regression.py
│  │     │  │  ├─ _unsupervised.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ _base.cpython-313.pyc
│  │     │  │     ├─ _classification.cpython-313.pyc
│  │     │  │     ├─ _graph.cpython-313.pyc
│  │     │  │     ├─ _kde.cpython-313.pyc
│  │     │  │     ├─ _lof.cpython-313.pyc
│  │     │  │     ├─ _nca.cpython-313.pyc
│  │     │  │     ├─ _nearest_centroid.cpython-313.pyc
│  │     │  │     ├─ _regression.cpython-313.pyc
│  │     │  │     ├─ _unsupervised.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ neural_network
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ test_base.py
│  │     │  │  │  ├─ test_mlp.py
│  │     │  │  │  ├─ test_rbm.py
│  │     │  │  │  ├─ test_stochastic_optimizers.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ test_base.cpython-313.pyc
│  │     │  │  │     ├─ test_mlp.cpython-313.pyc
│  │     │  │  │     ├─ test_rbm.cpython-313.pyc
│  │     │  │  │     ├─ test_stochastic_optimizers.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _base.py
│  │     │  │  ├─ _multilayer_perceptron.py
│  │     │  │  ├─ _rbm.py
│  │     │  │  ├─ _stochastic_optimizers.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ _base.cpython-313.pyc
│  │     │  │     ├─ _multilayer_perceptron.cpython-313.pyc
│  │     │  │     ├─ _rbm.cpython-313.pyc
│  │     │  │     ├─ _stochastic_optimizers.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ pipeline.py
│  │     │  ├─ preprocessing
│  │     │  │  ├─ meson.build
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ test_common.py
│  │     │  │  │  ├─ test_data.py
│  │     │  │  │  ├─ test_discretization.py
│  │     │  │  │  ├─ test_encoders.py
│  │     │  │  │  ├─ test_function_transformer.py
│  │     │  │  │  ├─ test_label.py
│  │     │  │  │  ├─ test_polynomial.py
│  │     │  │  │  ├─ test_target_encoder.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ test_common.cpython-313.pyc
│  │     │  │  │     ├─ test_data.cpython-313.pyc
│  │     │  │  │     ├─ test_discretization.cpython-313.pyc
│  │     │  │  │     ├─ test_encoders.cpython-313.pyc
│  │     │  │  │     ├─ test_function_transformer.cpython-313.pyc
│  │     │  │  │     ├─ test_label.cpython-313.pyc
│  │     │  │  │     ├─ test_polynomial.cpython-313.pyc
│  │     │  │  │     ├─ test_target_encoder.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _csr_polynomial_expansion.cp313-win_amd64.lib
│  │     │  │  ├─ _csr_polynomial_expansion.cp313-win_amd64.pyd
│  │     │  │  ├─ _csr_polynomial_expansion.pyx
│  │     │  │  ├─ _data.py
│  │     │  │  ├─ _discretization.py
│  │     │  │  ├─ _encoders.py
│  │     │  │  ├─ _function_transformer.py
│  │     │  │  ├─ _label.py
│  │     │  │  ├─ _polynomial.py
│  │     │  │  ├─ _target_encoder.py
│  │     │  │  ├─ _target_encoder_fast.cp313-win_amd64.lib
│  │     │  │  ├─ _target_encoder_fast.cp313-win_amd64.pyd
│  │     │  │  ├─ _target_encoder_fast.pyx
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ _data.cpython-313.pyc
│  │     │  │     ├─ _discretization.cpython-313.pyc
│  │     │  │     ├─ _encoders.cpython-313.pyc
│  │     │  │     ├─ _function_transformer.cpython-313.pyc
│  │     │  │     ├─ _label.cpython-313.pyc
│  │     │  │     ├─ _polynomial.cpython-313.pyc
│  │     │  │     ├─ _target_encoder.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ random_projection.py
│  │     │  ├─ semi_supervised
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ test_label_propagation.py
│  │     │  │  │  ├─ test_self_training.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ test_label_propagation.cpython-313.pyc
│  │     │  │  │     ├─ test_self_training.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _label_propagation.py
│  │     │  │  ├─ _self_training.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ _label_propagation.cpython-313.pyc
│  │     │  │     ├─ _self_training.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ svm
│  │     │  │  ├─ meson.build
│  │     │  │  ├─ src
│  │     │  │  │  ├─ liblinear
│  │     │  │  │  │  ├─ COPYRIGHT
│  │     │  │  │  │  ├─ liblinear_helper.c
│  │     │  │  │  │  ├─ linear.cpp
│  │     │  │  │  │  ├─ linear.h
│  │     │  │  │  │  ├─ tron.cpp
│  │     │  │  │  │  ├─ tron.h
│  │     │  │  │  │  └─ _cython_blas_helpers.h
│  │     │  │  │  ├─ libsvm
│  │     │  │  │  │  ├─ LIBSVM_CHANGES
│  │     │  │  │  │  ├─ libsvm_helper.c
│  │     │  │  │  │  ├─ libsvm_sparse_helper.c
│  │     │  │  │  │  ├─ libsvm_template.cpp
│  │     │  │  │  │  ├─ svm.cpp
│  │     │  │  │  │  ├─ svm.h
│  │     │  │  │  │  └─ _svm_cython_blas_helpers.h
│  │     │  │  │  └─ newrand
│  │     │  │  │     └─ newrand.h
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ test_bounds.py
│  │     │  │  │  ├─ test_sparse.py
│  │     │  │  │  ├─ test_svm.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ test_bounds.cpython-313.pyc
│  │     │  │  │     ├─ test_sparse.cpython-313.pyc
│  │     │  │  │     ├─ test_svm.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _base.py
│  │     │  │  ├─ _bounds.py
│  │     │  │  ├─ _classes.py
│  │     │  │  ├─ _liblinear.cp313-win_amd64.lib
│  │     │  │  ├─ _liblinear.cp313-win_amd64.pyd
│  │     │  │  ├─ _liblinear.pxi
│  │     │  │  ├─ _liblinear.pyx
│  │     │  │  ├─ _libsvm.cp313-win_amd64.lib
│  │     │  │  ├─ _libsvm.cp313-win_amd64.pyd
│  │     │  │  ├─ _libsvm.pxi
│  │     │  │  ├─ _libsvm.pyx
│  │     │  │  ├─ _libsvm_sparse.cp313-win_amd64.lib
│  │     │  │  ├─ _libsvm_sparse.cp313-win_amd64.pyd
│  │     │  │  ├─ _libsvm_sparse.pyx
│  │     │  │  ├─ _newrand.cp313-win_amd64.lib
│  │     │  │  ├─ _newrand.cp313-win_amd64.pyd
│  │     │  │  ├─ _newrand.pyx
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ _base.cpython-313.pyc
│  │     │  │     ├─ _bounds.cpython-313.pyc
│  │     │  │     ├─ _classes.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ tests
│  │     │  │  ├─ metadata_routing_common.py
│  │     │  │  ├─ test_base.py
│  │     │  │  ├─ test_build.py
│  │     │  │  ├─ test_calibration.py
│  │     │  │  ├─ test_check_build.py
│  │     │  │  ├─ test_common.py
│  │     │  │  ├─ test_config.py
│  │     │  │  ├─ test_discriminant_analysis.py
│  │     │  │  ├─ test_docstrings.py
│  │     │  │  ├─ test_docstring_parameters.py
│  │     │  │  ├─ test_docstring_parameters_consistency.py
│  │     │  │  ├─ test_dummy.py
│  │     │  │  ├─ test_init.py
│  │     │  │  ├─ test_isotonic.py
│  │     │  │  ├─ test_kernel_approximation.py
│  │     │  │  ├─ test_kernel_ridge.py
│  │     │  │  ├─ test_metadata_routing.py
│  │     │  │  ├─ test_metaestimators.py
│  │     │  │  ├─ test_metaestimators_metadata_routing.py
│  │     │  │  ├─ test_min_dependencies_readme.py
│  │     │  │  ├─ test_multiclass.py
│  │     │  │  ├─ test_multioutput.py
│  │     │  │  ├─ test_naive_bayes.py
│  │     │  │  ├─ test_pipeline.py
│  │     │  │  ├─ test_public_functions.py
│  │     │  │  ├─ test_random_projection.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ metadata_routing_common.cpython-313.pyc
│  │     │  │     ├─ test_base.cpython-313.pyc
│  │     │  │     ├─ test_build.cpython-313.pyc
│  │     │  │     ├─ test_calibration.cpython-313.pyc
│  │     │  │     ├─ test_check_build.cpython-313.pyc
│  │     │  │     ├─ test_common.cpython-313.pyc
│  │     │  │     ├─ test_config.cpython-313.pyc
│  │     │  │     ├─ test_discriminant_analysis.cpython-313.pyc
│  │     │  │     ├─ test_docstrings.cpython-313.pyc
│  │     │  │     ├─ test_docstring_parameters.cpython-313.pyc
│  │     │  │     ├─ test_docstring_parameters_consistency.cpython-313.pyc
│  │     │  │     ├─ test_dummy.cpython-313.pyc
│  │     │  │     ├─ test_init.cpython-313.pyc
│  │     │  │     ├─ test_isotonic.cpython-313.pyc
│  │     │  │     ├─ test_kernel_approximation.cpython-313.pyc
│  │     │  │     ├─ test_kernel_ridge.cpython-313.pyc
│  │     │  │     ├─ test_metadata_routing.cpython-313.pyc
│  │     │  │     ├─ test_metaestimators.cpython-313.pyc
│  │     │  │     ├─ test_metaestimators_metadata_routing.cpython-313.pyc
│  │     │  │     ├─ test_min_dependencies_readme.cpython-313.pyc
│  │     │  │     ├─ test_multiclass.cpython-313.pyc
│  │     │  │     ├─ test_multioutput.cpython-313.pyc
│  │     │  │     ├─ test_naive_bayes.cpython-313.pyc
│  │     │  │     ├─ test_pipeline.cpython-313.pyc
│  │     │  │     ├─ test_public_functions.cpython-313.pyc
│  │     │  │     ├─ test_random_projection.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ tree
│  │     │  │  ├─ meson.build
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ test_export.py
│  │     │  │  │  ├─ test_fenwick.py
│  │     │  │  │  ├─ test_monotonic_tree.py
│  │     │  │  │  ├─ test_reingold_tilford.py
│  │     │  │  │  ├─ test_tree.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ test_export.cpython-313.pyc
│  │     │  │  │     ├─ test_fenwick.cpython-313.pyc
│  │     │  │  │     ├─ test_monotonic_tree.cpython-313.pyc
│  │     │  │  │     ├─ test_reingold_tilford.cpython-313.pyc
│  │     │  │  │     ├─ test_tree.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _classes.py
│  │     │  │  ├─ _criterion.cp313-win_amd64.lib
│  │     │  │  ├─ _criterion.cp313-win_amd64.pyd
│  │     │  │  ├─ _criterion.pxd
│  │     │  │  ├─ _criterion.pyx
│  │     │  │  ├─ _export.py
│  │     │  │  ├─ _partitioner.cp313-win_amd64.lib
│  │     │  │  ├─ _partitioner.cp313-win_amd64.pyd
│  │     │  │  ├─ _partitioner.pxd
│  │     │  │  ├─ _partitioner.pyx
│  │     │  │  ├─ _reingold_tilford.py
│  │     │  │  ├─ _splitter.cp313-win_amd64.lib
│  │     │  │  ├─ _splitter.cp313-win_amd64.pyd
│  │     │  │  ├─ _splitter.pxd
│  │     │  │  ├─ _splitter.pyx
│  │     │  │  ├─ _tree.cp313-win_amd64.lib
│  │     │  │  ├─ _tree.cp313-win_amd64.pyd
│  │     │  │  ├─ _tree.pxd
│  │     │  │  ├─ _tree.pyx
│  │     │  │  ├─ _utils.cp313-win_amd64.lib
│  │     │  │  ├─ _utils.cp313-win_amd64.pyd
│  │     │  │  ├─ _utils.pxd
│  │     │  │  ├─ _utils.pyx
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ _classes.cpython-313.pyc
│  │     │  │     ├─ _export.cpython-313.pyc
│  │     │  │     ├─ _reingold_tilford.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ utils
│  │     │  │  ├─ arrayfuncs.cp313-win_amd64.lib
│  │     │  │  ├─ arrayfuncs.cp313-win_amd64.pyd
│  │     │  │  ├─ arrayfuncs.pyx
│  │     │  │  ├─ class_weight.py
│  │     │  │  ├─ deprecation.py
│  │     │  │  ├─ discovery.py
│  │     │  │  ├─ estimator_checks.py
│  │     │  │  ├─ extmath.py
│  │     │  │  ├─ fixes.py
│  │     │  │  ├─ graph.py
│  │     │  │  ├─ meson.build
│  │     │  │  ├─ metadata_routing.py
│  │     │  │  ├─ metaestimators.py
│  │     │  │  ├─ multiclass.py
│  │     │  │  ├─ murmurhash.cp313-win_amd64.lib
│  │     │  │  ├─ murmurhash.cp313-win_amd64.pyd
│  │     │  │  ├─ murmurhash.pxd
│  │     │  │  ├─ murmurhash.pyx
│  │     │  │  ├─ optimize.py
│  │     │  │  ├─ parallel.py
│  │     │  │  ├─ random.py
│  │     │  │  ├─ sparsefuncs.py
│  │     │  │  ├─ sparsefuncs_fast.cp313-win_amd64.lib
│  │     │  │  ├─ sparsefuncs_fast.cp313-win_amd64.pyd
│  │     │  │  ├─ sparsefuncs_fast.pyx
│  │     │  │  ├─ src
│  │     │  │  │  ├─ MurmurHash3.cpp
│  │     │  │  │  └─ MurmurHash3.h
│  │     │  │  ├─ stats.py
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ test_arpack.py
│  │     │  │  │  ├─ test_arrayfuncs.py
│  │     │  │  │  ├─ test_array_api.py
│  │     │  │  │  ├─ test_bunch.py
│  │     │  │  │  ├─ test_chunking.py
│  │     │  │  │  ├─ test_class_weight.py
│  │     │  │  │  ├─ test_cython_blas.py
│  │     │  │  │  ├─ test_dataframe.py
│  │     │  │  │  ├─ test_deprecation.py
│  │     │  │  │  ├─ test_encode.py
│  │     │  │  │  ├─ test_estimator_checks.py
│  │     │  │  │  ├─ test_extmath.py
│  │     │  │  │  ├─ test_fast_dict.py
│  │     │  │  │  ├─ test_fixes.py
│  │     │  │  │  ├─ test_graph.py
│  │     │  │  │  ├─ test_indexing.py
│  │     │  │  │  ├─ test_mask.py
│  │     │  │  │  ├─ test_metaestimators.py
│  │     │  │  │  ├─ test_missing.py
│  │     │  │  │  ├─ test_mocking.py
│  │     │  │  │  ├─ test_multiclass.py
│  │     │  │  │  ├─ test_murmurhash.py
│  │     │  │  │  ├─ test_optimize.py
│  │     │  │  │  ├─ test_parallel.py
│  │     │  │  │  ├─ test_param_validation.py
│  │     │  │  │  ├─ test_plotting.py
│  │     │  │  │  ├─ test_pprint.py
│  │     │  │  │  ├─ test_random.py
│  │     │  │  │  ├─ test_response.py
│  │     │  │  │  ├─ test_seq_dataset.py
│  │     │  │  │  ├─ test_set_output.py
│  │     │  │  │  ├─ test_shortest_path.py
│  │     │  │  │  ├─ test_show_versions.py
│  │     │  │  │  ├─ test_sparsefuncs.py
│  │     │  │  │  ├─ test_stats.py
│  │     │  │  │  ├─ test_tags.py
│  │     │  │  │  ├─ test_testing.py
│  │     │  │  │  ├─ test_typedefs.py
│  │     │  │  │  ├─ test_unique.py
│  │     │  │  │  ├─ test_user_interface.py
│  │     │  │  │  ├─ test_validation.py
│  │     │  │  │  ├─ test_weight_vector.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ test_arpack.cpython-313.pyc
│  │     │  │  │     ├─ test_arrayfuncs.cpython-313.pyc
│  │     │  │  │     ├─ test_array_api.cpython-313.pyc
│  │     │  │  │     ├─ test_bunch.cpython-313.pyc
│  │     │  │  │     ├─ test_chunking.cpython-313.pyc
│  │     │  │  │     ├─ test_class_weight.cpython-313.pyc
│  │     │  │  │     ├─ test_cython_blas.cpython-313.pyc
│  │     │  │  │     ├─ test_dataframe.cpython-313.pyc
│  │     │  │  │     ├─ test_deprecation.cpython-313.pyc
│  │     │  │  │     ├─ test_encode.cpython-313.pyc
│  │     │  │  │     ├─ test_estimator_checks.cpython-313.pyc
│  │     │  │  │     ├─ test_extmath.cpython-313.pyc
│  │     │  │  │     ├─ test_fast_dict.cpython-313.pyc
│  │     │  │  │     ├─ test_fixes.cpython-313.pyc
│  │     │  │  │     ├─ test_graph.cpython-313.pyc
│  │     │  │  │     ├─ test_indexing.cpython-313.pyc
│  │     │  │  │     ├─ test_mask.cpython-313.pyc
│  │     │  │  │     ├─ test_metaestimators.cpython-313.pyc
│  │     │  │  │     ├─ test_missing.cpython-313.pyc
│  │     │  │  │     ├─ test_mocking.cpython-313.pyc
│  │     │  │  │     ├─ test_multiclass.cpython-313.pyc
│  │     │  │  │     ├─ test_murmurhash.cpython-313.pyc
│  │     │  │  │     ├─ test_optimize.cpython-313.pyc
│  │     │  │  │     ├─ test_parallel.cpython-313.pyc
│  │     │  │  │     ├─ test_param_validation.cpython-313.pyc
│  │     │  │  │     ├─ test_plotting.cpython-313.pyc
│  │     │  │  │     ├─ test_pprint.cpython-313.pyc
│  │     │  │  │     ├─ test_random.cpython-313.pyc
│  │     │  │  │     ├─ test_response.cpython-313.pyc
│  │     │  │  │     ├─ test_seq_dataset.cpython-313.pyc
│  │     │  │  │     ├─ test_set_output.cpython-313.pyc
│  │     │  │  │     ├─ test_shortest_path.cpython-313.pyc
│  │     │  │  │     ├─ test_show_versions.cpython-313.pyc
│  │     │  │  │     ├─ test_sparsefuncs.cpython-313.pyc
│  │     │  │  │     ├─ test_stats.cpython-313.pyc
│  │     │  │  │     ├─ test_tags.cpython-313.pyc
│  │     │  │  │     ├─ test_testing.cpython-313.pyc
│  │     │  │  │     ├─ test_typedefs.cpython-313.pyc
│  │     │  │  │     ├─ test_unique.cpython-313.pyc
│  │     │  │  │     ├─ test_user_interface.cpython-313.pyc
│  │     │  │  │     ├─ test_validation.cpython-313.pyc
│  │     │  │  │     ├─ test_weight_vector.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ validation.py
│  │     │  │  ├─ _arpack.py
│  │     │  │  ├─ _array_api.py
│  │     │  │  ├─ _available_if.py
│  │     │  │  ├─ _bunch.py
│  │     │  │  ├─ _chunking.py
│  │     │  │  ├─ _cython_blas.cp313-win_amd64.lib
│  │     │  │  ├─ _cython_blas.cp313-win_amd64.pyd
│  │     │  │  ├─ _cython_blas.pxd
│  │     │  │  ├─ _cython_blas.pyx
│  │     │  │  ├─ _dataframe.py
│  │     │  │  ├─ _encode.py
│  │     │  │  ├─ _fast_dict.cp313-win_amd64.lib
│  │     │  │  ├─ _fast_dict.cp313-win_amd64.pyd
│  │     │  │  ├─ _fast_dict.pxd
│  │     │  │  ├─ _fast_dict.pyx
│  │     │  │  ├─ _heap.cp313-win_amd64.lib
│  │     │  │  ├─ _heap.cp313-win_amd64.pyd
│  │     │  │  ├─ _heap.pxd
│  │     │  │  ├─ _heap.pyx
│  │     │  │  ├─ _indexing.py
│  │     │  │  ├─ _isfinite.cp313-win_amd64.lib
│  │     │  │  ├─ _isfinite.cp313-win_amd64.pyd
│  │     │  │  ├─ _isfinite.pyx
│  │     │  │  ├─ _mask.py
│  │     │  │  ├─ _metadata_requests.py
│  │     │  │  ├─ _missing.py
│  │     │  │  ├─ _mocking.py
│  │     │  │  ├─ _openmp_helpers.cp313-win_amd64.lib
│  │     │  │  ├─ _openmp_helpers.cp313-win_amd64.pyd
│  │     │  │  ├─ _openmp_helpers.pxd
│  │     │  │  ├─ _openmp_helpers.pyx
│  │     │  │  ├─ _optional_dependencies.py
│  │     │  │  ├─ _param_validation.py
│  │     │  │  ├─ _plotting.py
│  │     │  │  ├─ _pprint.py
│  │     │  │  ├─ _random.cp313-win_amd64.lib
│  │     │  │  ├─ _random.cp313-win_amd64.pyd
│  │     │  │  ├─ _random.pxd
│  │     │  │  ├─ _random.pyx
│  │     │  │  ├─ _repr_html
│  │     │  │  │  ├─ base.py
│  │     │  │  │  ├─ estimator.css
│  │     │  │  │  ├─ estimator.js
│  │     │  │  │  ├─ estimator.py
│  │     │  │  │  ├─ params.css
│  │     │  │  │  ├─ params.py
│  │     │  │  │  ├─ tests
│  │     │  │  │  │  ├─ test_estimator.py
│  │     │  │  │  │  ├─ test_js.py
│  │     │  │  │  │  ├─ test_params.py
│  │     │  │  │  │  ├─ __init__.py
│  │     │  │  │  │  └─ __pycache__
│  │     │  │  │  │     ├─ test_estimator.cpython-313.pyc
│  │     │  │  │  │     ├─ test_js.cpython-313.pyc
│  │     │  │  │  │     ├─ test_params.cpython-313.pyc
│  │     │  │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ base.cpython-313.pyc
│  │     │  │  │     ├─ estimator.cpython-313.pyc
│  │     │  │  │     ├─ params.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _response.py
│  │     │  │  ├─ _seq_dataset.cp313-win_amd64.lib
│  │     │  │  ├─ _seq_dataset.cp313-win_amd64.pyd
│  │     │  │  ├─ _seq_dataset.pxd.tp
│  │     │  │  ├─ _seq_dataset.pyx.tp
│  │     │  │  ├─ _set_output.py
│  │     │  │  ├─ _show_versions.py
│  │     │  │  ├─ _sorting.cp313-win_amd64.lib
│  │     │  │  ├─ _sorting.cp313-win_amd64.pyd
│  │     │  │  ├─ _sorting.pxd
│  │     │  │  ├─ _sorting.pyx
│  │     │  │  ├─ _tags.py
│  │     │  │  ├─ _testing.py
│  │     │  │  ├─ _test_common
│  │     │  │  │  ├─ instance_generator.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ instance_generator.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _typedefs.cp313-win_amd64.lib
│  │     │  │  ├─ _typedefs.cp313-win_amd64.pyd
│  │     │  │  ├─ _typedefs.pxd
│  │     │  │  ├─ _typedefs.pyx
│  │     │  │  ├─ _unique.py
│  │     │  │  ├─ _user_interface.py
│  │     │  │  ├─ _vector_sentinel.cp313-win_amd64.lib
│  │     │  │  ├─ _vector_sentinel.cp313-win_amd64.pyd
│  │     │  │  ├─ _vector_sentinel.pxd
│  │     │  │  ├─ _vector_sentinel.pyx
│  │     │  │  ├─ _weight_vector.cp313-win_amd64.lib
│  │     │  │  ├─ _weight_vector.cp313-win_amd64.pyd
│  │     │  │  ├─ _weight_vector.pxd.tp
│  │     │  │  ├─ _weight_vector.pyx.tp
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ class_weight.cpython-313.pyc
│  │     │  │     ├─ deprecation.cpython-313.pyc
│  │     │  │     ├─ discovery.cpython-313.pyc
│  │     │  │     ├─ estimator_checks.cpython-313.pyc
│  │     │  │     ├─ extmath.cpython-313.pyc
│  │     │  │     ├─ fixes.cpython-313.pyc
│  │     │  │     ├─ graph.cpython-313.pyc
│  │     │  │     ├─ metadata_routing.cpython-313.pyc
│  │     │  │     ├─ metaestimators.cpython-313.pyc
│  │     │  │     ├─ multiclass.cpython-313.pyc
│  │     │  │     ├─ optimize.cpython-313.pyc
│  │     │  │     ├─ parallel.cpython-313.pyc
│  │     │  │     ├─ random.cpython-313.pyc
│  │     │  │     ├─ sparsefuncs.cpython-313.pyc
│  │     │  │     ├─ stats.cpython-313.pyc
│  │     │  │     ├─ validation.cpython-313.pyc
│  │     │  │     ├─ _arpack.cpython-313.pyc
│  │     │  │     ├─ _array_api.cpython-313.pyc
│  │     │  │     ├─ _available_if.cpython-313.pyc
│  │     │  │     ├─ _bunch.cpython-313.pyc
│  │     │  │     ├─ _chunking.cpython-313.pyc
│  │     │  │     ├─ _dataframe.cpython-313.pyc
│  │     │  │     ├─ _encode.cpython-313.pyc
│  │     │  │     ├─ _indexing.cpython-313.pyc
│  │     │  │     ├─ _mask.cpython-313.pyc
│  │     │  │     ├─ _metadata_requests.cpython-313.pyc
│  │     │  │     ├─ _missing.cpython-313.pyc
│  │     │  │     ├─ _mocking.cpython-313.pyc
│  │     │  │     ├─ _optional_dependencies.cpython-313.pyc
│  │     │  │     ├─ _param_validation.cpython-313.pyc
│  │     │  │     ├─ _plotting.cpython-313.pyc
│  │     │  │     ├─ _pprint.cpython-313.pyc
│  │     │  │     ├─ _response.cpython-313.pyc
│  │     │  │     ├─ _set_output.cpython-313.pyc
│  │     │  │     ├─ _show_versions.cpython-313.pyc
│  │     │  │     ├─ _tags.cpython-313.pyc
│  │     │  │     ├─ _testing.cpython-313.pyc
│  │     │  │     ├─ _unique.cpython-313.pyc
│  │     │  │     ├─ _user_interface.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ _build_utils
│  │     │  │  ├─ tempita.py
│  │     │  │  ├─ version.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ tempita.cpython-313.pyc
│  │     │  │     ├─ version.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ _config.py
│  │     │  ├─ _cyutility.cp313-win_amd64.lib
│  │     │  ├─ _cyutility.cp313-win_amd64.pyd
│  │     │  ├─ _isotonic.cp313-win_amd64.lib
│  │     │  ├─ _isotonic.cp313-win_amd64.pyd
│  │     │  ├─ _isotonic.pyx
│  │     │  ├─ _loss
│  │     │  │  ├─ link.py
│  │     │  │  ├─ loss.py
│  │     │  │  ├─ meson.build
│  │     │  │  ├─ tests
│  │     │  │  │  ├─ test_link.py
│  │     │  │  │  ├─ test_loss.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ test_link.cpython-313.pyc
│  │     │  │  │     ├─ test_loss.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ _loss.cp313-win_amd64.lib
│  │     │  │  ├─ _loss.cp313-win_amd64.pyd
│  │     │  │  ├─ _loss.pxd
│  │     │  │  ├─ _loss.pyx.tp
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ link.cpython-313.pyc
│  │     │  │     ├─ loss.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ _min_dependencies.py
│  │     │  ├─ __check_build
│  │     │  │  ├─ meson.build
│  │     │  │  ├─ _check_build.cp313-win_amd64.lib
│  │     │  │  ├─ _check_build.cp313-win_amd64.pyd
│  │     │  │  ├─ _check_build.pyx
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ base.cpython-313.pyc
│  │     │     ├─ calibration.cpython-313.pyc
│  │     │     ├─ conftest.cpython-313.pyc
│  │     │     ├─ discriminant_analysis.cpython-313.pyc
│  │     │     ├─ dummy.cpython-313.pyc
│  │     │     ├─ exceptions.cpython-313.pyc
│  │     │     ├─ isotonic.cpython-313.pyc
│  │     │     ├─ kernel_approximation.cpython-313.pyc
│  │     │     ├─ kernel_ridge.cpython-313.pyc
│  │     │     ├─ multiclass.cpython-313.pyc
│  │     │     ├─ multioutput.cpython-313.pyc
│  │     │     ├─ naive_bayes.cpython-313.pyc
│  │     │     ├─ pipeline.cpython-313.pyc
│  │     │     ├─ random_projection.cpython-313.pyc
│  │     │     ├─ _config.cpython-313.pyc
│  │     │     ├─ _min_dependencies.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ soundfile.py
│  │     ├─ soxr
│  │     │  ├─ soxr_ext.pyd
│  │     │  ├─ soxr_ext.pyi
│  │     │  ├─ _version.py
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ _version.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ starlette
│  │     │  ├─ applications.py
│  │     │  ├─ authentication.py
│  │     │  ├─ background.py
│  │     │  ├─ concurrency.py
│  │     │  ├─ config.py
│  │     │  ├─ convertors.py
│  │     │  ├─ datastructures.py
│  │     │  ├─ endpoints.py
│  │     │  ├─ exceptions.py
│  │     │  ├─ formparsers.py
│  │     │  ├─ middleware
│  │     │  │  ├─ authentication.py
│  │     │  │  ├─ base.py
│  │     │  │  ├─ cors.py
│  │     │  │  ├─ errors.py
│  │     │  │  ├─ exceptions.py
│  │     │  │  ├─ gzip.py
│  │     │  │  ├─ httpsredirect.py
│  │     │  │  ├─ sessions.py
│  │     │  │  ├─ trustedhost.py
│  │     │  │  ├─ wsgi.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ authentication.cpython-313.pyc
│  │     │  │     ├─ base.cpython-313.pyc
│  │     │  │     ├─ cors.cpython-313.pyc
│  │     │  │     ├─ errors.cpython-313.pyc
│  │     │  │     ├─ exceptions.cpython-313.pyc
│  │     │  │     ├─ gzip.cpython-313.pyc
│  │     │  │     ├─ httpsredirect.cpython-313.pyc
│  │     │  │     ├─ sessions.cpython-313.pyc
│  │     │  │     ├─ trustedhost.cpython-313.pyc
│  │     │  │     ├─ wsgi.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ py.typed
│  │     │  ├─ requests.py
│  │     │  ├─ responses.py
│  │     │  ├─ routing.py
│  │     │  ├─ schemas.py
│  │     │  ├─ staticfiles.py
│  │     │  ├─ status.py
│  │     │  ├─ templating.py
│  │     │  ├─ testclient.py
│  │     │  ├─ types.py
│  │     │  ├─ websockets.py
│  │     │  ├─ _exception_handler.py
│  │     │  ├─ _utils.py
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ applications.cpython-313.pyc
│  │     │     ├─ authentication.cpython-313.pyc
│  │     │     ├─ background.cpython-313.pyc
│  │     │     ├─ concurrency.cpython-313.pyc
│  │     │     ├─ config.cpython-313.pyc
│  │     │     ├─ convertors.cpython-313.pyc
│  │     │     ├─ datastructures.cpython-313.pyc
│  │     │     ├─ endpoints.cpython-313.pyc
│  │     │     ├─ exceptions.cpython-313.pyc
│  │     │     ├─ formparsers.cpython-313.pyc
│  │     │     ├─ requests.cpython-313.pyc
│  │     │     ├─ responses.cpython-313.pyc
│  │     │     ├─ routing.cpython-313.pyc
│  │     │     ├─ schemas.cpython-313.pyc
│  │     │     ├─ staticfiles.cpython-313.pyc
│  │     │     ├─ status.cpython-313.pyc
│  │     │     ├─ templating.cpython-313.pyc
│  │     │     ├─ testclient.cpython-313.pyc
│  │     │     ├─ types.cpython-313.pyc
│  │     │     ├─ websockets.cpython-313.pyc
│  │     │     ├─ _exception_handler.cpython-313.pyc
│  │     │     ├─ _utils.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ sunau
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ threadpoolctl.py
│  │     ├─ typing_extensions.py
│  │     ├─ typing_inspection
│  │     │  ├─ introspection.py
│  │     │  ├─ py.typed
│  │     │  ├─ typing_objects.py
│  │     │  ├─ typing_objects.pyi
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ introspection.cpython-313.pyc
│  │     │     ├─ typing_objects.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ urllib3
│  │     │  ├─ connection.py
│  │     │  ├─ connectionpool.py
│  │     │  ├─ contrib
│  │     │  │  ├─ emscripten
│  │     │  │  │  ├─ connection.py
│  │     │  │  │  ├─ emscripten_fetch_worker.js
│  │     │  │  │  ├─ fetch.py
│  │     │  │  │  ├─ request.py
│  │     │  │  │  ├─ response.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ connection.cpython-313.pyc
│  │     │  │  │     ├─ fetch.cpython-313.pyc
│  │     │  │  │     ├─ request.cpython-313.pyc
│  │     │  │  │     ├─ response.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ pyopenssl.py
│  │     │  │  ├─ socks.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ pyopenssl.cpython-313.pyc
│  │     │  │     ├─ socks.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ exceptions.py
│  │     │  ├─ fields.py
│  │     │  ├─ filepost.py
│  │     │  ├─ http2
│  │     │  │  ├─ connection.py
│  │     │  │  ├─ probe.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ connection.cpython-313.pyc
│  │     │  │     ├─ probe.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ poolmanager.py
│  │     │  ├─ py.typed
│  │     │  ├─ response.py
│  │     │  ├─ util
│  │     │  │  ├─ connection.py
│  │     │  │  ├─ proxy.py
│  │     │  │  ├─ request.py
│  │     │  │  ├─ response.py
│  │     │  │  ├─ retry.py
│  │     │  │  ├─ ssltransport.py
│  │     │  │  ├─ ssl_.py
│  │     │  │  ├─ ssl_match_hostname.py
│  │     │  │  ├─ timeout.py
│  │     │  │  ├─ url.py
│  │     │  │  ├─ util.py
│  │     │  │  ├─ wait.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ connection.cpython-313.pyc
│  │     │  │     ├─ proxy.cpython-313.pyc
│  │     │  │     ├─ request.cpython-313.pyc
│  │     │  │     ├─ response.cpython-313.pyc
│  │     │  │     ├─ retry.cpython-313.pyc
│  │     │  │     ├─ ssltransport.cpython-313.pyc
│  │     │  │     ├─ ssl_.cpython-313.pyc
│  │     │  │     ├─ ssl_match_hostname.cpython-313.pyc
│  │     │  │     ├─ timeout.cpython-313.pyc
│  │     │  │     ├─ url.cpython-313.pyc
│  │     │  │     ├─ util.cpython-313.pyc
│  │     │  │     ├─ wait.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ _base_connection.py
│  │     │  ├─ _collections.py
│  │     │  ├─ _request_methods.py
│  │     │  ├─ _version.py
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     ├─ connection.cpython-313.pyc
│  │     │     ├─ connectionpool.cpython-313.pyc
│  │     │     ├─ exceptions.cpython-313.pyc
│  │     │     ├─ fields.cpython-313.pyc
│  │     │     ├─ filepost.cpython-313.pyc
│  │     │     ├─ poolmanager.cpython-313.pyc
│  │     │     ├─ response.cpython-313.pyc
│  │     │     ├─ _base_connection.cpython-313.pyc
│  │     │     ├─ _collections.cpython-313.pyc
│  │     │     ├─ _request_methods.cpython-313.pyc
│  │     │     ├─ _version.cpython-313.pyc
│  │     │     └─ __init__.cpython-313.pyc
│  │     ├─ uvicorn
│  │     │  ├─ config.py
│  │     │  ├─ importer.py
│  │     │  ├─ lifespan
│  │     │  │  ├─ off.py
│  │     │  │  ├─ on.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ off.cpython-313.pyc
│  │     │  │     ├─ on.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ logging.py
│  │     │  ├─ loops
│  │     │  │  ├─ asyncio.py
│  │     │  │  ├─ auto.py
│  │     │  │  ├─ uvloop.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ asyncio.cpython-313.pyc
│  │     │  │     ├─ auto.cpython-313.pyc
│  │     │  │     ├─ uvloop.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ main.py
│  │     │  ├─ middleware
│  │     │  │  ├─ asgi2.py
│  │     │  │  ├─ message_logger.py
│  │     │  │  ├─ proxy_headers.py
│  │     │  │  ├─ wsgi.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ asgi2.cpython-313.pyc
│  │     │  │     ├─ message_logger.cpython-313.pyc
│  │     │  │     ├─ proxy_headers.cpython-313.pyc
│  │     │  │     ├─ wsgi.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ protocols
│  │     │  │  ├─ http
│  │     │  │  │  ├─ auto.py
│  │     │  │  │  ├─ flow_control.py
│  │     │  │  │  ├─ h11_impl.py
│  │     │  │  │  ├─ httptools_impl.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ auto.cpython-313.pyc
│  │     │  │  │     ├─ flow_control.cpython-313.pyc
│  │     │  │  │     ├─ h11_impl.cpython-313.pyc
│  │     │  │  │     ├─ httptools_impl.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ utils.py
│  │     │  │  ├─ websockets
│  │     │  │  │  ├─ auto.py
│  │     │  │  │  ├─ websockets_impl.py
│  │     │  │  │  ├─ websockets_sansio_impl.py
│  │     │  │  │  ├─ wsproto_impl.py
│  │     │  │  │  ├─ __init__.py
│  │     │  │  │  └─ __pycache__
│  │     │  │  │     ├─ auto.cpython-313.pyc
│  │     │  │  │     ├─ websockets_impl.cpython-313.pyc
│  │     │  │  │     ├─ websockets_sansio_impl.cpython-313.pyc
│  │     │  │  │     ├─ wsproto_impl.cpython-313.pyc
│  │     │  │  │     └─ __init__.cpython-313.pyc
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ utils.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ py.typed
│  │     │  ├─ server.py
│  │     │  ├─ supervisors
│  │     │  │  ├─ basereload.py
│  │     │  │  ├─ multiprocess.py
│  │     │  │  ├─ statreload.py
│  │     │  │  ├─ watchfilesreload.py
│  │     │  │  ├─ __init__.py
│  │     │  │  └─ __pycache__
│  │     │  │     ├─ basereload.cpython-313.pyc
│  │     │  │     ├─ multiprocess.cpython-313.pyc
│  │     │  │     ├─ statreload.cpython-313.pyc
│  │     │  │     ├─ watchfilesreload.cpython-313.pyc
│  │     │  │     └─ __init__.cpython-313.pyc
│  │     │  ├─ workers.py
│  │     │  ├─ _compat.py
│  │     │  ├─ _subprocess.py
│  │     │  ├─ _types.py
│  │     │  ├─ __init__.py
│  │     │  ├─ __main__.py
│  │     │  └─ __pycache__
│  │     │     ├─ config.cpython-313.pyc
│  │     │     ├─ importer.cpython-313.pyc
│  │     │     ├─ logging.cpython-313.pyc
│  │     │     ├─ main.cpython-313.pyc
│  │     │     ├─ server.cpython-313.pyc
│  │     │     ├─ workers.cpython-313.pyc
│  │     │     ├─ _compat.cpython-313.pyc
│  │     │     ├─ _subprocess.cpython-313.pyc
│  │     │     ├─ _types.cpython-313.pyc
│  │     │     ├─ __init__.cpython-313.pyc
│  │     │     └─ __main__.cpython-313.pyc
│  │     ├─ _cffi_backend.cp313-win_amd64.pyd
│  │     ├─ _soundfile.py
│  │     ├─ _soundfile_data
│  │     │  ├─ COPYING
│  │     │  ├─ libsndfile_x64.dll
│  │     │  ├─ __init__.py
│  │     │  └─ __pycache__
│  │     │     └─ __init__.cpython-313.pyc
│  │     └─ __pycache__
│  │        ├─ decorator.cpython-313.pyc
│  │        ├─ six.cpython-313.pyc
│  │        ├─ soundfile.cpython-313.pyc
│  │        ├─ threadpoolctl.cpython-313.pyc
│  │        ├─ typing_extensions.cpython-313.pyc
│  │        └─ _soundfile.cpython-313.pyc
│  ├─ pyvenv.cfg
│  └─ Scripts
│     ├─ activate
│     ├─ activate.bat
│     ├─ activate.fish
│     ├─ Activate.ps1
│     ├─ deactivate.bat
│     ├─ dotenv.exe
│     ├─ email_validator.exe
│     ├─ f2py.exe
│     ├─ fastapi.exe
│     ├─ normalizer.exe
│     ├─ numba
│     ├─ numpy-config.exe
│     ├─ pip.exe
│     ├─ pip3.13.exe
│     ├─ pip3.exe
│     ├─ pyrsa-decrypt.exe
│     ├─ pyrsa-encrypt.exe
│     ├─ pyrsa-keygen.exe
│     ├─ pyrsa-priv2pub.exe
│     ├─ pyrsa-sign.exe
│     ├─ pyrsa-verify.exe
│     ├─ python.exe
│     ├─ pythonw.exe
│     └─ uvicorn.exe
└─ vite.config.js

```